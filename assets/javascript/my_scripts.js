// some of the code for modals from w3school.com
let modal = document.getElementById("myModal");
let btnRules = document.getElementById("rules");
let span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btnRules.onclick = function () {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// getting the elements
let userScores = document.getElementById("player-score")
let computerScores = document.getElementById("ai-score")
let tieScores = document.getElementById("tie-score")
let roundScores = document.getElementById("round-count")
let rounds = document.getElementById("last-rounds")
let roundRes = document.getElementById("round-count")
let resultBox = document.querySelectorAll(".round")
let buttons = document.querySelectorAll(".selections")
let showUserChoice = document.querySelector(".user i")
let showComputerChoice = document.querySelector(".ai i")
let randomClassesClassic = ["far fa-hand-rock", "far fa-hand-paper", "far fa-hand-scissors"]
let randomClassesModern = ["far fa-hand-rock", "far fa-hand-paper", "far fa-hand-scissors", "far fa-hand-lizard", "far fa-hand-spock"]
let showUserLastchoice = document.querySelector(".user-result i")
let showCompLastchoice = document.querySelector(".comp-result i")
let resetBtn = document.getElementById("reset-btn")
let playClassic = document.getElementById("classic-body")
let playModern = document.getElementById("modern-body")
let uScores = 1
let cScores = 1
let tScores = 1
let tScoresRes = 1

// With guidance from slackoverflow.com
// For the modern game
let gameModern = () => {
    // setting forEach function to buttons
    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            // player choice and random choice for the computer
            let clickedBtn = e.target.className
            showUserChoice.className = clickedBtn
            let randomNum = Math.floor(Math.random() * randomClassesModern.length)
            showComputerChoice.className = randomClassesModern[randomNum]
            // display the rounds area and updates rounds nr
            rounds.style.display = "flex"
            showUserLastchoice.className = clickedBtn
            roundScores.innerHTML = tScoresRes++
            showCompLastchoice.className = randomClassesModern[randomNum]
            resetBtn.onclick = () => {
                location.reload()
            }
            // Game score
            // if it is a tie
            if (showUserChoice.className === showComputerChoice.className) {
                userScores.innerHTML = userScores.innerHTML;
                computerScores.innerHTML = computerScores.innerHTML;
                tieScores.innerHTML = tScores
                tScores++
            }
            // if it's not a Tie.
            else if (showUserChoice.className === randomClassesModern[0] && showComputerChoice.className === randomClassesModern[2]) {
                userScores.innerHTML = uScores
                uScores++
            } else if (showUserChoice.className === randomClassesModern[0] && showComputerChoice.className === randomClassesModern[1]) {
                computerScores.innerHTML = cScores
                cScores++
            } else if (showUserChoice.className === randomClassesModern[0] && showComputerChoice.className === randomClassesModern[3]) {
                userScores.innerHTML = uScores
                uScores++
            } else if (showUserChoice.className === randomClassesModern[0] && showComputerChoice.className === randomClassesModern[4]) {
                computerScores.innerHTML = cScores
                cScores++
            } else if (showUserChoice.className === randomClassesModern[1] && showComputerChoice.className === randomClassesModern[2]) {
                computerScores.innerHTML = cScores
                cScores++
            } else if (showUserChoice.className === randomClassesModern[1] && showComputerChoice.className === randomClassesModern[0]) {
                userScores.innerHTML = uScores
                uScores++
            } else if (showUserChoice.className === randomClassesModern[1] && showComputerChoice.className === randomClassesModern[3]) {
                computerScores.innerHTML = cScores
                cScores++
            } else if (showUserChoice.className === randomClassesModern[1] && showComputerChoice.className === randomClassesModern[4]) {
                userScores.innerHTML = uScores
                uScores++
            } else if (showUserChoice.className === randomClassesModern[2] && showComputerChoice.className === randomClassesModern[0]) {
                computerScores.innerHTML = cScores
                cScores++
            } else if (showUserChoice.className === randomClassesModern[2] && showComputerChoice.className === randomClassesModern[1]) {
                userScores.innerHTML = uScores
                uScores++
            } else if (showUserChoice.className === randomClassesModern[2] && showComputerChoice.className === randomClassesModern[3]) {
                userScores.innerHTML = uScores
                uScores++
            } else if (showUserChoice.className === randomClassesModern[2] && showComputerChoice.className === randomClassesModern[4]) {
                computerScores.innerHTML = cScores
                cScores++
            } else if (showUserChoice.className === randomClassesModern[3] && showComputerChoice.className === randomClassesModern[0]) {
                computerScores.innerHTML = cScores
                cScores++
            } else if (showUserChoice.className === randomClassesModern[3] && showComputerChoice.className === randomClassesModern[1]) {
                userScores.innerHTML = uScores
                uScores++
            } else if (showUserChoice.className === randomClassesModern[3] && showComputerChoice.className === randomClassesModern[2]) {
                computerScores.innerHTML = cScores
                cScores++
            } else if (showUserChoice.className === randomClassesModern[3] && showComputerChoice.className === randomClassesModern[4]) {
                userScores.innerHTML = uScores
                uScores++
            } else if (showUserChoice.className === randomClassesModern[4] && showComputerChoice.className === randomClassesModern[0]) {
                userScores.innerHTML = uScores
                uScores++
            } else if (showUserChoice.className === randomClassesModern[4] && showComputerChoice.className === randomClassesModern[1]) {
                computerScores.innerHTML = cScores
                cScores++
            } else if (showUserChoice.className === randomClassesModern[4] && showComputerChoice.className === randomClassesModern[2]) {
                userScores.innerHTML = uScores
                uScores++
            } else if (showUserChoice.className === randomClassesModern[4] && showComputerChoice.className === randomClassesModern[3]) {
                computerScores.innerHTML = cScores
                cScores++
            }
        })
    })
}

// For the Classic Game
let gameClassic = () => {
    // setting forEach function to buttons
    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            // player choice and random choice for the computer
            let clickedBtn = e.target.className
            showUserChoice.className = clickedBtn
            let randomNum = Math.floor(Math.random() * randomClassesClassic.length)
            showComputerChoice.className = randomClassesClassic[randomNum]
            // display the rounds area and updates rounds nr
            rounds.style.display = "flex"
            showUserLastchoice.className = clickedBtn
            roundScores.innerHTML = tScoresRes++
            showCompLastchoice.className = randomClassesClassic[randomNum]
            resetBtn.onclick = () => {
                location.reload()
            }
            // Game score
            // if it is a tie
            if (showUserChoice.className === showComputerChoice.className) {
                userScores.innerHTML = userScores.innerHTML;
                computerScores.innerHTML = computerScores.innerHTML;
                tieScores.innerHTML = tScores
                tScores++
            }
            // if it's not a Tie.
            else if (showUserChoice.className === randomClassesClassic[0] && showComputerChoice.className === randomClassesClassic[2]) {
                userScores.innerHTML = uScores
                uScores++
            } else if (showUserChoice.className === randomClassesClassic[0] && showComputerChoice.className === randomClassesClassic[1]) {
                computerScores.innerHTML = cScores
                cScores++
            } else if (showUserChoice.className === randomClassesClassic[1] && showComputerChoice.className === randomClassesClassic[0]) {
                userScores.innerHTML = uScores
                uScores++
            } else if (showUserChoice.className === randomClassesClassic[1] && showComputerChoice.className === randomClassesClassic[2]) {
                computerScores.innerHTML = cScores
                cScores++
            } else if (showUserChoice.className === randomClassesClassic[2] && showComputerChoice.className === randomClassesClassic[0]) {
                computerScores.innerHTML = cScores
                cScores++
            } else if (showUserChoice.className === randomClassesClassic[2] && showComputerChoice.className === randomClassesClassic[1]) {
                userScores.innerHTML = uScores
                uScores++
            }
        })
    })
}