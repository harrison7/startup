localStorage.setItem('scores', JSON.stringify(scoresData));

function getScoresFromLocalStorage() {
    const storedScores = localStorage.getItem('scores');
    return storedScores ? JSON.parse(storedScores) : [];
}

function saveScoresToLocalStorage(scores) {
    localStorage.setItem('scores', JSON.stringify(scores));
}

async function loadScores() {
    let scores = [
        { name: "Billy", score: -7 },
        { name: "Bob", score: -6 },
        { name: "Joe", score: -5 },
        { name: "Man", score: 3 }
    ];
    try {
      // Get the latest high scores from the service
      const response = await fetch('/api/scores');
      scores = await response.json();
  
      // Save the scores in case we go offline in the future
      localStorage.setItem('scores', JSON.stringify(scores));
    } catch {
      // If there was an error then just use the last saved scores
      const scoresText = localStorage.getItem('scores');
      if (scoresText) {
        scores = JSON.parse(scoresText);
      }
    }
  
    renderLeaderboard(scoresData);
}

function renderLeaderboard(scoresData) {
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

function updateScores(newScores) { //function for updating scores
    const existingScores = getScoresFromLocalStorage();

    const updatedScores = [...existingScores, ...newScores];

    saveScoresToLocalStorage(updatedScores);
    renderLeaderboard();
}

async function saveScore(score) {
    const newScores = getScoresFromLocalStorage();
    const mySave = newScores.find(obj => obj.name === localStorage.getItem("userName"));
    mySave.score = newScore;
    renderLeaderboard();
    const userName = this.getPlayerName();
    const date = new Date().toLocaleDateString();
    const newScore = {name: userName, score: score, date: date};

    try {
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newScore),
      });

      // Store what the service gave us as the high scores
      const scores = await response.json();
      localStorage.setItem('scores', JSON.stringify(scores));
    } catch {
      // If there was an error then just track scores locally
      updateScores(newScore);
    }
}

renderLeaderboard();

function login() {
    const nameEl = document.querySelector("#email");
    localStorage.setItem("userName", nameEl.value);

    updateScores([{ name: localStorage.getItem("userName"), score: -7}]);

    window.location.href = "play.html";
}