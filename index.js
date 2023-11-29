// StartMove Function

function startMove(playerMove) {
  const actionSelect = ["scissor", "rock", "paper"];
  const computerMove = actionSelect[Math.floor(Math.random() * 3)];
  let humanMove = localStorage.setItem("humanMove", playerMove);
  let pcMove = localStorage.setItem("pcMove", computerMove);

  if (playerMove === computerMove) {
    localStorage.setItem("message", "it,s a tie");
  } else if (
    (playerMove === "rock" && computerMove === "scissor") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissor" && computerMove === "paper")
  ) {
    localStorage.setItem("message", "You Win!");
    let humanScore = parseInt(localStorage.getItem("humanScore")) || 0;
    humanScore++;
    localStorage.setItem("humanScore", humanScore);
    animateWinner("humanImg");
  } else {
    localStorage.setItem("message", "Computer Wins!");
    let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;
    computerScore++;
    localStorage.setItem("computerScore", computerScore);
    animateWinner("pcImg");
  }
}

//-------------------------------------------------------------------
//Animation Function

function animateWinner(playerMove, computerMove) {
  let humanImg = document.getElementById("humanImg");
  let pcImg = document.getElementById("pcImg");
  console.log(humanImg);
  console.log(pcImg);
  console.log(playerMove);
  console.log(computerMove);
  if (
    (playerMove === "rock" && computerMove === "scissor") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissor" && computerMove === "paper")
  ) {
    humanImg.classList.add("Winner-animation");
  } else if (playerMove !== computerMove) {
    pcImg.classList.add("Winner-animation");
  } 
  
}

//-------------------------------------------------------------------

// NextPage function
function NextPage() {
  let humanMove = localStorage.getItem("humanMove");
  let pcMove = localStorage.getItem("pcMove");

  if (humanMove === "rock") {
    document.getElementById("humanImg").src = "./bluestone.png";
  } else if (humanMove === "scissor") {
    document.getElementById("humanImg").src = "./purplefingers.png";
  } else {
    document.getElementById("humanImg").src = "./orangeHand.png";
  }

  if (pcMove === "rock") {
    document.getElementById("pcImg").src = "./bluestone.png";
  } else if (pcMove === "scissor") {
    document.getElementById("pcImg").src = "./purplefingers.png";
  } else {
    document.getElementById("pcImg").src = "./orangeHand.png";
  }
}

//-------------------------------------------------------------------

//DisplayMessage function
function DisplayMessage(message) {
  let Message = document.getElementById("message");
  Message.innerText = localStorage.getItem("message");
}

//-------------------------------------------------------------------

// WinnerMessage Function
function WinnerMessage(Score) {
  let humanScore = parseInt(localStorage.getItem("humanScore")) || 0;
  let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;
  let Winner = document.getElementById("WinnerMessage");
  if (humanScore > computerScore) {
    localStorage.setItem("Score", "Hurray! You Win!");
  } else if (humanScore === computerScore) {
    localStorage.setItem("Score", "Oops... it's a tie");
  } else {
    localStorage.setItem("Score", "Computer Wins!");
  }
  Winner.innerText = localStorage.getItem("Score");
}

//-------------------------------------------------------------------

// MainPageScore
function MainPageScore() {
  let humanScore = parseInt(localStorage.getItem("humanScore")) || 0;
  let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;
  document.getElementById("humScore").innerHTML = humanScore;
  document.getElementById("comScore").innerHTML = computerScore;
}

//-------------------------------------------------------------------

// function ResetGame
function StartOver() {
  let StartOver = document.getElementById("startOver");
  StartOver.addEventListener("click", () => {
    localStorage.clear();
  });
}
//-------------------------------------------------------------------

// Main DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("page is fully loaded");
  let humanScore = localStorage.getItem("humanScore") || 0;
  let computerScore = localStorage.getItem("computerScore") || 0;
  document.getElementById("ScoreHum").innerHTML = humanScore;
  document.getElementById("ScoreCom").innerHTML = computerScore;
  NextPage();
  DisplayMessage();
  // animateWinner();
});
document.addEventListener("DOMContentLoaded", WinnerMessage);
document.addEventListener("DOMContentLoaded", MainPageScore);
document.addEventListener("DOMContentLoaded", StartOver);
document.addEventListener("DOMContentLoaded", () => {
  let playerMove = localStorage.getItem("humanMove");
  let computerMove = localStorage.getItem("pcMove");
  animateWinner(playerMove, computerMove);
});

//-------------------------------------------------------------------
// Rule Button
const btnRules = document.querySelectorAll("#rules");
const ruleContent = document.querySelector(".rules-content");

function HandlerClick() {
  if (ruleContent.style.display === "block") {
    ruleContent.style.display = "none";
    btnRules.forEach((btn) => {
      btn.innerHTML = "Rules";
      btn.style.backgroundColor = "transparent";
    });
  } else {
    ruleContent.style.display = "block";
    btnRules.forEach((btn) => {
      btn.innerHTML = "Close";
      btn.style.backgroundColor = "red";
    });
  }
}

btnRules.forEach((btn) => {
  btn.addEventListener("click", HandlerClick);
});

btn.addEventListener("click", () => {
  btn.removeEventListener("click", HandlerClick);
});
