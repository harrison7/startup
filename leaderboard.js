function renderLeaderboard() {
    const sortedScores = scoresData.sort((a, b) => b.score - a.score);

    const leaderboardList = document.getElementById("leaderboard-list");

    leaderboardList.innerHTML = "";

    sortedScores.forEach((score, index) => {
        const listItem = document.createElement("li");
        if (score.score === -7) {
            listItem.innerHTML = `${score.name} <b class="element hydrogen">H</b> (3)`;
        } else if (score.score === -6) {
            listItem.innerHTML = `${score.name} <b class="element helium">He</b> (3)`;
        } else if (score.score === -5) {
            listItem.innerHTML = `${score.name} <b class="element lithium">Li</b> (3)`;
        } else if (score.score === -4) {
            listItem.innerHTML = `${score.name} <b class="element beryllium">Be</b> (3)`;
        } else if (score.score === -3) {
            listItem.innerHTML = `${score.name} <b class="element boron">B</b> (3)`;
        } else if (score.score === -2) {
            listItem.innerHTML = `${score.name} <b class="element carbon">C</b> (3)`;
        } else if (score.score === -1) {
            listItem.innerHTML = `${score.name} <b class="element nitrogen">N</b> (3)`;
        } else {

        }
        
        leaderboardList.appendChild(listItem);
    });
}

renderLeaderboard();

function updateScores(newScores) {
    scoresData.push(...newScores);

    renderLeaderboard();
}

const newScores = [
    { name: "Player6", score: 1000 },
    { name: "Player7", score: 850 },
];

updateScores(newScores);
