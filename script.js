const emojiList = [
  "😈", "🥰", "😷", "💩", "👺", "🤯", "🤑", "🐷", "🐵", "🦇"
];

function shuffle(array) {
  const arrayShuffle = array;
  arrayShuffle.sort(() => Math.random() - 0.5);
  return arrayShuffle;
}

function getPairArray(array) {
  return array.concat(array);
}

function tileClicked(evt) {
  if (toReset) {
    firstPair.classList.add("hidden");
    SecondPair.classList.add("hidden");
    toReset = false;
    firstTry = true;
  }
  selectedTile = evt.target.querySelector("span");
  evt.target.querySelector("span").classList.remove("hidden");
  if (firstTry) {
    firstPair = selectedTile;
    firstTry = false;
  } else {
    document.querySelector("#hits").innerHTML = ++hits;;
    if (firstPair.innerHTML == selectedTile.innerHTML) {
      firstTry = true;
    } else {
      SecondPair = selectedTile;
      toReset = true;
    }
  }
}

let toReset = false;
let hits = 0;
let firstTry = true;
let firstPair;
let SecondPair;
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