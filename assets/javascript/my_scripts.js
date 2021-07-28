// Get the modal, some of the code from w3school.com
let modal = document.getElementById("myModal");
let modalTwo = document.getElementById("myModalTwo")
let btnRules = document.getElementById("rules"); // Get the button that opens the modal
let btnHighscores = document.getElementById("highscores"); // Get the button that opens the modal
let span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
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

// Setting the scores and selecting our HTML elements.
let computerScore = 0
let playerScore = 0
let ties = 0
const pScore = document.getElementById("player-score")
const aiScore = document.getElementById("ai-score")
const tScore = document.getElementById("tie-score")
const playButtons = document.querySelectorAll(".selections")
let playText = document.getElementById("play-txt")
const round = document.getElementById("last-rounds")
const showIcon = document.querySelector(".user")
const computerShowIcon = document.querySelector(".ai")
const randomClasses = ["far fa-hand-rock", "far fa-hand-paper","far fa-hand-scissors"]

// Game func: setting forEach function for the buttons.
const game = () => {
    playButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
        // Random rock paper scissor for the computer and the player
            let btnClicked = e.target.className
            showIcon.className = btnClicked
            let randomNum = Math.floor(Math.random() * randomClasses.length)
            computerShowIcon.className = randomClasses[randomNum]
            // game score
            // if it is a tie
            if(showIcon.className === computerShowIcon.className){
                pScore.innerHTML = pScore.innerHTML
                aiScore.innerHTML = aiScore.innerHTML
                tScore.innerHTML = ties
                ties++
            }
            // if it is not a tie
            else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]){
                pScore.innerHTML = playerScore;
                playerScore++
                aiScore.innerHTML = aiScore.innerHTML
                tScore.innerHTML = tScore.innerHTML
            }
            else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]){
                aiScore.innerHTML = computerScore;
                computerScore++;
                pScore.innerHTML = pScore.innerHTML
                tScore.innerHTML = tScore.innerHTML
            }
        })
    })
}

game()