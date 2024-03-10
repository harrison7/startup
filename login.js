let scoresData = [
    { name: "Billy", score: -7 },
    { name: "Bob", score: -6 },
    { name: "Joe", score: -5 },
    { name: "Man", score: 3 }
];

localStorage.setItem('scores', JSON.stringify(scoresData));

function getScoresFromLocalStorage() {
    const storedScores = localStorage.getItem('scores');
    return storedScores ? JSON.parse(storedScores) : [];
}

function saveScoresToLocalStorage(scores) {
    localStorage.setItem('scores', JSON.stringify(scores));
}

function renderLeaderboard() {
    scoresData = getScoresFromLocalStorage();

    const sortedScores = scoresData.sort((a, b) => b.score - a.score);

    const leaderboardList = document.getElementById("leaderboard-list");

    leaderboardList.innerHTML = "";

    sortedScores.forEach((score, index) => {
        const listItem = document.createElement("li");
        if (score.score === -7) {
            listItem.innerHTML = `${score.name} <b class="element hydrogen">H</b>`;
        } else if (score.score === -6) {
            listItem.innerHTML = `${score.name} <b class="element helium">He</b>`;
        } else if (score.score === -5) {
            listItem.innerHTML = `${score.name} <b class="element lithium">Li</b>`;
        } else if (score.score === -4) {
            listItem.innerHTML = `${score.name} <b class="element beryllium">Be</b>`;
        } else if (score.score === -3) {
            listItem.innerHTML = `${score.name} <b class="element boron">B</b>`;
        } else if (score.score === -2) {
            listItem.innerHTML = `${score.name} <b class="element carbon">C</b>`;
        } else if (score.score === -1) {
            listItem.innerHTML = `${score.name} <b class="element nitrogen">N</b>`;
        } else {
            listItem.innerHTML = `${score.name} <b class="element oxygen">O</b> (${score.score})`;
        }
        
        leaderboardList.appendChild(listItem);
    });
}

// add service

function updateScores(newScores) {
    const existingScores = getScoresFromLocalStorage();

    const updatedScores = [...existingScores, ...newScores];

    saveScoresToLocalStorage(updatedScores);
    renderLeaderboard();
}

renderLeaderboard();

function login() {
    const nameEl = document.querySelector("#email");
    localStorage.setItem("userName", nameEl.value);

    updateScores([{ name: localStorage.getItem("userName"), score: -7}]);

    window.location.href = "play.html";
}