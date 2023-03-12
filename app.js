const game = ["", "", "", "", "", "", "", "", ""];

const winGame = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let coup = 0;

gameFinish = false;

let currentplayer = "X";

let info = document.querySelector("h2");
info.textContent = "Au tour du joueur " + currentplayer + ".";

const places = document.querySelectorAll(".place");

function handleClick(e) {
  if (gameFinish === false) {
    const boxClic = e.target;
    const boxIndex = boxClic.getAttribute("data-index");
    if (game[boxIndex] === "") {
      game[boxIndex] = currentplayer;
      boxClic.textContent = currentplayer;
      coup++;
    } else {
      return;
    }
  } else {
    return;
  }

  verification();
}

function verification() {
  for (let i = 0; i < winGame.length; i++) {
    const check = winGame[i];
    let a = game[check[0]];
    let b = game[check[1]];
    let c = game[check[2]];

    if (a === "" || b === "" || c === "") {
      continue;
    } else if (a === b && b === c) {
      info.textContent = "Le joueur " + currentplayer + " à gagner ! ";
      gameFinish = true;
      return;
    }
  }

  if (coup === 9) {
    return (info.textContent = "Match nul !");
  }
  currentplayer = currentplayer === "X" ? "O" : "X";
  info.textContent = "Au tour du joueur " + currentplayer + ".";
}

places.forEach((place) => place.addEventListener("click", handleClick));
