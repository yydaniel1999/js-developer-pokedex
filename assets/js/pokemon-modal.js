const loadModalData = (pokemon, modal) => {
  const modalData = `
    <div class="modal__body ${pokemon.type}">
      <button class="modal__closeButton">&times;</button>
      <section class="modal__pokemon">
        <div class="modal__title">
          <h2 class="modal__name">${pokemon.name}</h2>
          <span class="modal__number">#${pokemon.number}</span>
        </div>
        <img class="modal__image" src=${pokemon.photo} alt=${pokemon.name} />
        <dl>
          <div class="modal__listItem">
            <dt>Tipo</dt>
            <dd class="modal__types">
              ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
            </dd>
          </div>
          <div class="modal__listItem">
            <dt>Altura</dt>
            <dd>${(pokemon.height / 10).toFixed(1)} m</dd>
          </div>
          <div class="modal__listItem">
            <dt>Peso</dt>
            <dd>${(pokemon.weight / 10).toFixed(1)} kg</dd>
          </div>
        </dl>
      </section>
      <section class="modal__status">
        <dl>
          <div class="modal__listItem">
            <dt>HP</dt>
            <dd>${pokemon.stats.hp}</dd>
            <div class="status-bar">
              <div class="hp" style="width:${pokemon.stats.hp * 0.8}%"></div>
            </div>
          </div>
          <div class="modal__listItem">
            <dt>Ataque</dt>
            <dd>${pokemon.stats.attack}</dd>
            <div class="status-bar">
              <div class="attack" style="width:${pokemon.stats.attack * 0.8}%"></div>
            </div>
          </div>
          <div class="modal__listItem">
            <dt>Defesa</dt>
            <dd>${pokemon.stats.defense}</dd>
            <div class="status-bar">
              <div class="defense" style="width:${pokemon.stats.defense * 0.8}%"></div>
            </div>
          </div>
          <div class="modal__listItem">
            <dt>Ataque Especial</dt>
            <dd>${pokemon.stats["special-attack"]}</dd>
            <div class="status-bar">
              <div class="special-attack" style="width:${pokemon.stats["special-attack"] * 0.8}%"></div>
            </div>
          </div>
          <div class="modal__listItem">
            <dt>Defesa Especial</dt>
            <dd>${pokemon.stats["special-defense"]}</dd>
            <div class="status-bar">
              <div class="special-defense" style="width:${pokemon.stats["special-defense"] * 0.8}%"></div>
            </div>
          </div>
          <div class="modal__listItem">
            <dt>Velocidade</dt>
            <dd>${pokemon.stats.speed}</dd>
            <div class="status-bar">
              <div class="speed" style="width:${pokemon.stats.speed * 0.8}%"></div>
            </div>
          </div>
        </dl>
      </section>
    </div>`;

  modal.innerHTML = modalData;

  const closeButton = modal.querySelector(".modal__closeButton");

  const handleCloseClick = (e) => {
    if (e.target === modal || e.target === closeButton) {
      modal.classList.remove("active");

      modal.removeEventListener("click", handleCloseClick);
      closeButton.removeEventListener("click", handleCloseClick);
    }
  };

  modal.addEventListener("click", handleCloseClick);
  closeButton.addEventListener("click", handleCloseClick);
};
