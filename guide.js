const ScoreEvent = 'score';

async function loadScores() {
    let scores = [];
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
  
    renderLeaderboard(scores);
}

function renderLeaderboard(scoresData) {
    //scoresData will come from endpoint
    const sortedScores = scoresData.scores.sort((a, b) => b.score - a.score);

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

function updateScoresLocal(newScore) { //function for updating scores
    const storedScores = localStorage.getItem('scores');
    
    const existingScores = storedScores ? JSON.parse(storedScores) : [];

    const updatedScores = [...existingScores, newScore];

    localStorage.setItem('scores', JSON.stringify(updatedScores));
    renderLeaderboard(updatedScores);
}

async function saveScore(scoreInput) {
    const storedScores = localStorage.getItem('scores');
    const newScores = storedScores ? JSON.parse(storedScores) : [];
    const userName = localStorage.getItem("userName");
    const newScore = {name: userName, score: scoreInput};
    const mySave = newScores.find(obj => obj.name === userName);
    //mySave.score = scoreInput;

    try {
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newScore),
      });

      // Store what the service gave us as the high scores
      const scores = await response.json();
      localStorage.setItem('scores', JSON.stringify(scores));
      broadcastEvent(userName, ScoreEvent, socket);
    } catch {
      // If there was an error then just track scores locally
      updateScoresLocal(newScore);
    }
}

loadScores();

const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
let socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
socket.onmessage = async (event) => {
    const msg = JSON.parse(await event.data.text());
    if (msg.type === ScoreEvent) {
        loadScores();
    }
};

function broadcastEvent(from, type, socket) {
    const event = {
        from: from,
        type: type
    };
    socket.send(JSON.stringify(event));
}

function displayQuote(data) {
    fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
            const containerEl = document.querySelector('#quote');
    
            const quoteEl = document.createElement('p');
            quoteEl.classList.add('quote');
    
            quoteEl.textContent = data.content;
    
            containerEl.appendChild(quoteEl);
    });
}
  
displayQuote();