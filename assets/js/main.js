const winsEl = document.querySelector(".wins");
const tiesEl = document.querySelector(".ties");
const lossesEl = document.querySelector(".losses");
const playersChoiceEl = document.querySelector(".players-choice");
const computersChoiceEl = document.querySelector(".computers-choice");
const startBtn = document.querySelector(".start");
const choicesEl = document.querySelector(".choice-wrapper");

//STATE
const scores = {
  wins: 0,
  ties: 0,
  losses: 0,
};

const currentChoices = {
  player: "",
  computer: "",
};

const rps = [
  { name: "rock", win: "scissors" },
  { name: "paper", win: "rock" },
  { name: "scissors", win: "paper" },
];

//LISTENERS
startBtn.addEventListener("click", function () {
  start();
});

//We will get the choice from event.target
choicesEl.addEventListener("click", function (e) {
  if (e.target.nodeName === "BUTTON") {
    setChoice(e.target.innerText.toLowerCase());
  }
});

function setChoice(choice) {
  if (choice) {
    currentChoices.player = choice.toLowerCase();
  } else {
    currentChoices.computer = rps[Math.floor(Math.random() * 3)].name;
  }
}

function start() {
  //set choice for computer
  setChoice();
  playersChoiceEl.textContent = currentChoices.player;
  computersChoiceEl.textContent = currentChoices.computer;
  isWinner();
  render();
}

function isWinner() {
  if (currentChoices.player === currentChoices.computer) {
    //this is a tie
    scores.ties++;
  } else {
    let match = rps.filter((choice) => currentChoices.player === choice.name);
    if (match[0].win === currentChoices.computer) {
      //we have a winner
      scores.wins++;
    } else {
      //we have a loser
      scores.losses++;
    }
  }
}

//render
function render() {
  winsEl.textContent = `Wins: ${scores.wins}`;
  tiesEl.textContent = `Ties: ${scores.ties}`;
  lossesEl.textContent = `Losses: ${scores.losses}`;
}
