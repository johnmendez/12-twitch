export default function createGameElement(data) {
  const el = document.createElement('li');
  el.classList.add('game-item');
  // el.classList.add('grid__item');

  el.innerHTML = `
  <img src="" alt="" class="game-item__pic">
  <div class="frame">
    <h3 class="game-item__name"></h3>
    <h4 class="game-item__popularity"></h4>
  </div>`;

  const title = el.querySelector('.game-item__name');
  title.innerText = data.name;

  const popularity = el.querySelector('.game-item__popularity');
  popularity.innerText = `${data.popularity} Viewers`;

  const pic = el.querySelector('.game-item__pic');
  pic.src = data.box.large;
  pic.alt = data.name;

  return el;
}
