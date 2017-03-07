export default function () {
  const el = document.createElement('div');
  el.classList.add('game-item');
  el.innerHTML = `
  <div class="frame">
    <h3 class="game-item__name"></h3>
  </div>`;


  return el;
}
