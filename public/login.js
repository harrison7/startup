async function loadScores() {
    console.log("Loading scores");
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
    console.log("Rendering leaderboard");
    //scoresData will come from endpoint
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

function updateScoresLocal(newScore) { //function for updating scores
    const storedScores = localStorage.getItem('scores');
    
    const existingScores = storedScores ? JSON.parse(storedScores) : [];

    const updatedScores = [...existingScores, ...newScore];

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
    } catch {
        // If there was an error then just track scores locally
        updateScoresLocal(newScore);
    }
}

loadScores();

// function login() {
//     const nameEl = document.querySelector("#email");
//     localStorage.setItem("userName", nameEl.value);

//     saveScore(-7);
//     loadScores();

//     window.location.href = "play.html";
// }

async function login() {
    loginOrCreate(`/api/auth/login`);
}
  
async function register() {
    loginOrCreate(`/api/auth/create`);
}

(async () => {
    const userName = localStorage.getItem('userName');
    if (userName) {
        //document.querySelector('#playerName').textContent = userName;
        setDisplay('loginControls', 'none');
        setDisplay('playControls', 'block');
    } else {
        setDisplay('loginControls', 'block');
        setDisplay('playControls', 'none');
    }
})();

async function loginOrCreate(endpoint) {
    const userName = document.querySelector('#email')?.value;
    const password = document.querySelector('#pw')?.value;
    const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ email: userName, password: password }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
  
    if (response.ok) {
        localStorage.setItem('userName', userName);
        window.location.href = 'play.html';
    }
    else {
        const body = await response.json();
        const modalEl = document.querySelector('#msgModal');
        modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
        const msgModal = new bootstrap.Modal(modalEl, {});
        msgModal.show();
    }
}

function play() {
    window.location.href = 'play.html';
}
  
function logout() {
    localStorage.removeItem('userName');
    fetch(`/api/auth/logout`, {
        method: 'delete',
    }).then(() => (window.location.href = '/'));
}
  
async function getUser(email) {
    let scores = [];
    // See if we have a user with the given email.
    const response = await fetch(`/api/user/${email}`);
    if (response.status === 200) {
        return response.json();
    }
  
    return null;
}
  
function setDisplay(controlId, display) {
    const playControlEl = document.querySelector(`#${controlId}`);
    if (playControlEl) {
        playControlEl.style.display = display;
    }
}