// some of the code for modals from w3school.com
let modal = document.getElementById("myModal");
let modalTwo = document.getElementById("myModalTwo")
let btnRules = document.getElementById("rules");
let btnHighscores = document.getElementById("highscores");
let span = document.getElementsByClassName("close")[0];
let span2 = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
btnRules.onclick = function () {
    modal.style.display = "block";
}
btnHighscores.onclick = function () {
    modalTwo.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
span2.onclick = function () {
    modalTwo.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modalTwo) {
        modalTwo.style.display = "none";
    }
}

// with some help from stackoverflow.com
// getting the elements
let userScores = document.getElementById("player-score")
let computerScores = document.getElementById("ai-score")
let tieScores = document.getElementById("tie-score")
let roundScores = document.getElementById("round-count")
let rounds = document.getElementById("last-rounds")
let roundRes = document.getElementById("round-count")
let resultBox = document.getElementById("result")
let buttons = document.querySelectorAll(".selections")
let showUserChoice = document.querySelector(".user i")
let showComputerChoice = document.querySelector(".ai i")
let randomClasses = ["far fa-hand-rock", "far fa-hand-paper", "far fa-hand-scissors"]
let showUserLastchoice = document.querySelector(".user-result i")
let showCompLastchoice = document.querySelector(".comp-result i")
let uScores = 0
let cScores = 0
let tScores = 0
let tScoresRes = 1

// setting forEach function to buttons
let game = () => {
    buttons.forEach(btn => {
        btn.addEventListener("click", (play) => {
            // display the rounds area and updates rounds nr
            rounds.style.display = "flex"
            roundRes.innerHTML = tScoresRes++
            // player choice and random choice for the computer
            let clickedBtn = play.target.className
            showUserChoice.className = clickedBtn
            showUserLastchoice.className = clickedBtn
            let randomNum = Math.floor(Math.random() * randomClasses.length)
            showComputerChoice.className = randomClasses[randomNum]
            showCompLastchoice.className = randomClasses[randomNum]
            // Game score
            // if it is a tie
            
        })
    })
}

game()