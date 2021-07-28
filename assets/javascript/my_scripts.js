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

