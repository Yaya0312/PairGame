const emojiList = [
  "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇"
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
  selectedTile = evt.target.querySelector("span").innerText;
  evt.target.querySelector("span").classList.remove("hidden");
  if (firstTry) {
    firstPair = evt.target.querySelector("span");
    v = selectedTile;
    firstTry = false;
    return;
  }
  document.querySelector("#hits").innerHTML = ++hits;;
  if (firstPair == selectedTile) {
    firstTry = true;
    console.log("same tile");
  } else {
    console.log("not same tile");
    firstPair.classList.add("hidden");
    evt.target.querySelector("span").classList.add("hidden");
  }
}

let hits = 0;
let firstTry = true;
let firstPair;
let a = getPairArray(emojiList);
shuffle(a);

window.onload = () => {
  document.querySelector("#turnTile").addEventListener("click", () => {
    document.querySelectorAll(".tile>span").forEach( (e) => e.classList.toggle("hidden"));
  });
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