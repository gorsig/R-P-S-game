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
let randomClasses = ["far fa-hand-rock", "far fa-hand-paper", "far fa-hand-scissors", "far fa-hand-lizard", "far fa-hand-spock"]
let showUserLastchoice = document.querySelector(".user-result i")
let showCompLastchoice = document.querySelector(".comp-result i")
let uScores = 1
let cScores = 1
let tScores = 1
let tScoresRes = 1

// With guidance from slackoverflow.com
let game = () => {
    // setting forEach function to buttons
    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            // player choice and random choice for the computer
            let clickedBtn = e.target.className
            showUserChoice.className = clickedBtn
            showUserLastchoice.className = clickedBtn
            let randomNum = Math.floor(Math.random() * randomClasses.length)
            showComputerChoice.className = randomClasses[randomNum]
            showCompLastchoice.className = randomClasses[randomNum]
            // display the rounds area and updates rounds nr
            rounds.style.display = "flex"
            roundRes.innerHTML = tScoresRes++
            // Game score
            // if it is a tie
            if(showUserChoice.className === showComputerChoice.className){
                userScores.innerHTML = userScores.innerHTML;
                computerScores.innerHTML = computerScores.innerHTML;
                tieScores.innerHTML = tScores
                tScores++
            } 
           // if it's not a Tie.
            else if(showUserChoice.className === randomClasses[0] && showComputerChoice.className === randomClasses[2]){
                userScores.innerHTML = uScores
                uScores++
            }else if(showUserChoice.className === randomClasses[0] && showComputerChoice.className === randomClasses[1]){
                computerScores.innerHTML = cScores
                cScores++
            }else if(showUserChoice.className === randomClasses[0] && showComputerChoice.className === randomClasses[3]){
                userScores.innerHTML = uScores
                uScores++
            }else if(showUserChoice.className === randomClasses[0] && showComputerChoice.className === randomClasses[4]){
                computerScores.innerHTML = cScores
                cScores++
            }else if(showUserChoice.className === randomClasses[1] && showComputerChoice.className === randomClasses[2]){
                computerScores.innerHTML = cScores
                cScores++
            }else if(showUserChoice.className === randomClasses[1] && showComputerChoice.className === randomClasses[0]){
                userScores.innerHTML = uScores
                uScores++
            }else if(showUserChoice.className === randomClasses[1] && showComputerChoice.className === randomClasses[3]){
                computerScores.innerHTML = cScores
                cScores++
            }else if(showUserChoice.className === randomClasses[1] && showComputerChoice.className === randomClasses[4]){
                userScores.innerHTML = uScores
                uScores++
            }else if(showUserChoice.className === randomClasses[2] && showComputerChoice.className === randomClasses[0]){
                computerScores.innerHTML = cScores
                cScores++
            }else if(showUserChoice.className === randomClasses[2] && showComputerChoice.className === randomClasses[1]){
                userScores.innerHTML = uScores
                uScores++
            }else if(showUserChoice.className === randomClasses[2] && showComputerChoice.className === randomClasses[3]){
                userScores.innerHTML = uScores
                uScores++
            }else if(showUserChoice.className === randomClasses[2] && showComputerChoice.className === randomClasses[4]){
                computerScores.innerHTML = cScores
                cScores++
            }else if(showUserChoice.className === randomClasses[3] && showComputerChoice.className === randomClasses[0]){
                computerScores.innerHTML = cScores
                cScores++
            }else if(showUserChoice.className === randomClasses[3] && showComputerChoice.className === randomClasses[1]){
                userScores.innerHTML = uScores
                uScores++
            }else if(showUserChoice.className === randomClasses[3] && showComputerChoice.className === randomClasses[2]){
                computerScores.innerHTML = cScores
                cScores++
            }else if(showUserChoice.className === randomClasses[3] && showComputerChoice.className === randomClasses[4]){
                userScores.innerHTML = uScores
                uScores++
            }else if(showUserChoice.className === randomClasses[4] && showComputerChoice.className === randomClasses[0]){
                userScores.innerHTML = uScores
                uScores++
            }else if(showUserChoice.className === randomClasses[4] && showComputerChoice.className === randomClasses[1]){
                computerScores.innerHTML = cScores
                cScores++
            }else if(showUserChoice.className === randomClasses[4] && showComputerChoice.className === randomClasses[2]){
                userScores.innerHTML = uScores
                uScores++
            }else if(showUserChoice.className === randomClasses[4] && showComputerChoice.className === randomClasses[3]){
                computerScores.innerHTML = cScores
                cScores++
            }
        })
    })
}


// Calling the game function
game()