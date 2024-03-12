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
    
    const existingScores = storedScores ? JSON.parse(storedScores) : [];;

    const updatedScores = [...existingScores, ...newScore];

    localStorage.setItem('scores', JSON.stringify(updatedScores));
    renderLeaderboard(updatedScores);
}

async function saveScore(score) {
    const newScores = storedScores ? JSON.parse(storedScores) : [];;
    const mySave = newScores.find(obj => obj.name === localStorage.getItem("userName"));
    const userName = localStorage.getItem('userName') ?? 'Mystery player';
    const newScore = {name: userName, score: score};
    mySave.score = newScore;
    renderLeaderboard(newScores);

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

let clicks = 0;
let elements = [0, 0, 0, 0, 0, 0, 0, 0];
let upgrades = [0, 0, 0, 0, 0, 0, 0];
let progress = [true, false, false, false, false, false, false, false];
let upgradeCosts = [10, 10, 10, 10, 10, 10, 10];
let alertIDs = ["Htxt", "Hetxt", "Litxt", "Betxt", "Btxt", "Ctxt", "Ntxt"];

function combine(nums) {
    let sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
}

function create() {
    clicks += 1;
    updateElements()
}

function updateElements() {
    elements[0] += (2 ** upgrades[0]);
    if (clicks % (8 / (2 ** combine(upgrades))) == 0) {
        elements[1] += (2 ** upgrades[1]);
        progress[1] = true;
    }
    if (clicks % (64 / (2 ** combine(upgrades.slice(1, 7)))) == 0) {
        elements[2] += (2 ** upgrades[2]);
        progress[2] = true;
    }
    if (clicks % (512 / (2 ** combine(upgrades.slice(2, 7)))) == 0) {
        elements[3] += (2 ** upgrades[3]);
        progress[3] = true;
    }
    if (clicks % (4096 / (2 ** combine(upgrades.slice(3, 7)))) == 0) {
        elements[4] += (2 ** upgrades[4]);
        progress[4] = true;
    }
    if (clicks % (32768 / (2 ** combine(upgrades.slice(4, 7)))) == 0) {
        elements[5] += (2 ** upgrades[5]);
        progress[5] = true;
    }
    if (clicks % (262144 / (2 ** combine(upgrades.slice(5, 7)))) == 0) {
        elements[6] += (2 ** upgrades[6]);
        progress[6] = true;
    }
    if (clicks % (2097152 / (2 ** upgrades[6])) == 0) {
        elements[7]++;
        progress[7] = true;
    }

    let newScore = -7;

    for (let i = 0; i < 8; i++) {
        if (progress[i]) {
            newScore = i - 7;
        }
    }
    if (progress[7]) {
        newScore = elements[7];
    }

    saveScore();

    document.getElementById('hydrogen').textContent = elements[0];
    document.getElementById('helium').textContent = elements[1];
    document.getElementById('lithium').textContent = elements[2];
    document.getElementById('beryllium').textContent = elements[3];
    document.getElementById('boron').textContent = elements[4];
    document.getElementById('carbon').textContent = elements[5];
    document.getElementById('nitrogen').textContent = elements[6];
    document.getElementById('oxygen').textContent = elements[7];
}

async function upgrade(index) {
    if (elements[index + 1] >= upgradeCosts[index]) {
        upgrades[index]++;
        elements[index + 1] -= upgradeCosts[index];
        upgradeCosts[index] *= 10;

        document.getElementById('HUp').textContent = upgradeCosts[0];
        document.getElementById('HeUp').textContent = upgradeCosts[1];
        document.getElementById('LiUp').textContent = upgradeCosts[2];
        document.getElementById('BeUp').textContent = upgradeCosts[3];
        document.getElementById('BUp').textContent = upgradeCosts[4];
        document.getElementById('CUp').textContent = upgradeCosts[5];
        document.getElementById('NUp').textContent = upgradeCosts[6];
    } else {
        const text = document.getElementById(alertIDs[index]).textContent;
        document.getElementById(alertIDs[index]).style.color = 'red';
        document.getElementById(alertIDs[index]).textContent = "Too expensive";

        await new Promise(resolve => setTimeout(resolve, 1000));

        document.getElementById(alertIDs[index]).style.color = 'black';
        document.getElementById(alertIDs[index]).textContent = text;
    }
}