var playerName = window.location.search;
var userName = document.querySelectorAll(".user-name");
var fa = playerName.split('=').pop();


// function openGamePage() {
//     playerName = document.getElementById("player-name").value;
//     location.href = "./game.html";
//     // userName.innerHTML = playerName;
// }

function startGame() {
    userName[0].innerHTML = fa;
    userName[1].innerHTML = fa;
}

function openInfo() {
    location.href = "./info.html";
}

function back() {
    location.href = "./index.html";
}

function openGameScreen() {
    location.href = "./game.html";
}