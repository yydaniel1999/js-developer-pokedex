const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const modal = document.querySelector(".modal");
const maxRecords = 151;
const limit = 8;
let offset = 0;

function convertPokemonToLi(pokemon) {
  return `
        <li class="pokemon ${pokemon.type}">
          <div class="title">
            <span class="name">${pokemon.name}</span>
            <span class="number">#${pokemon.number}</span>
          </div>
          <div class="detail">
            <img src="${pokemon.photo}"alt="${pokemon.name}">
            <ol class="types">
              ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
            </ol>
          </div>
        </li>
      `;
}

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const pokeItens = pokemons.map(convertPokemonToLi).join("");
    const appendData = document.createElement("template");
    appendData.innerHTML = pokeItens;
    pokemonList.appendChild(appendData.content);

    const pokemonElements = pokemonList.querySelectorAll(".pokemon");

    for (let i = offset; i < pokemonElements.length; i++) {
      pokemonElements[i].addEventListener("click", () => {
        loadModalData(pokemons[i - offset], modal);
        modal.classList.add("active");
      });
    }
    loadMoreButton.disabled = false;
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  loadMoreButton.disabled = true;
  offset += limit;
  const qtdRecordsWithNexPage = offset + limit;

  if (qtdRecordsWithNexPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});
