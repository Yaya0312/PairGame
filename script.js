"use strict";
const emojiList = [ 
  "😈", "🥰", "😷", "💩", "👺", "🤯", "🤑", "🐷", "🐵", "🦇"
];

function shuffle(arrayShuffle) {
  arrayShuffle.sort(() => Math.random() - 0.5);
  return arrayShuffle;
}

function getPairArray(array) {
  return array.concat(array);
}

function tileClicked(evt) {
  if (lock) {
    return;
  }
  const selectedTile = evt.target.querySelector("span");
  selectedTile.classList.remove("hidden");
  if (firstpair === undefined) {
    firstpair = selectedTile;
    return;
  }
  document.querySelector("#hits").innerHTML = ++hits;
  if (firstpair.innerHTML != selectedTile.innerHTML) {
    const fp = firstpair;
    lock = true;
    setTimeout(() => { 
      fp.classList.add("hidden");
      selectedTile.classList.add("hidden");
      lock = false;
    }, 800);
  }
  firstpair = undefined;
}

let lock = false;
let hits = 0;
let firstpair;
let a = getPairArray(emojiList);
shuffle(a);

window.onload = () => {
  for (let i = 0; i < a.length; ++i) {
    const tile = `
      <div class="tile">
        <span class="hidden">
          ${a[i]}
        </span>
      </div>`;
    document.querySelector('main').insertAdjacentHTML('beforeend', tile);
  }
  document.querySelectorAll(".tile").forEach( (e) => {
    e.addEventListener("click", tileClicked);
  })
}