import React from 'react';

export function Play() {
  const [scores, setScores] = React.useState();

  React.useEffect(() => {
  fetch('/api/scores')
      .then((response) => response.json())
      .then((scores) => {
      setScores(scores);
      localStorage.setItem('scores', JSON.stringify(scores));
      })
      .catch(() => {
      const scoresText = localStorage.getItem('scores');
      if (scoresText) {
          setScores(JSON.parse(scoresText));
      }
      });
  }, []);

  const placeholderScores = [
      { name: "Billy", score: -7 },
      { name: "Bob", score: -6 },
      { name: "Joe", score: -5 },
      { name: "Man", score: 3 }
  ];
  const scoreRows = [];
  let sortedScores;
  if (typeof scores !== 'undefined' && typeof scores.scores !== 'undefined') {
      sortedScores = scores.scores.sort((a, b) => b.score - a.score);
  }
  else {
      sortedScores = [];
  }
  sortedScores.forEach((score, index) => {
      
      if (score.score === -7) {
          scoreRows.push(<li>{score.name} <b className="element hydrogen">H</b></li>);
      } else if (score.score === -6) {
          scoreRows.push(<li>{score.name} <b className="element helium">He</b></li>);
      } else if (score.score === -5) {
          scoreRows.push(<li>{score.name} <b className="element lithium">Li</b></li>);
      } else if (score.score === -4) {
          scoreRows.push(<li>{score.name} <b className="element beryllium">Be</b></li>);
      } else if (score.score === -3) {
          scoreRows.push(<li>{score.name} <b className="element boron">B</b></li>);
      } else if (score.score === -2) {
          scoreRows.push(<li>{score.name} <b className="element carbon">C</b></li>);
      } else if (score.score === -1) {
          scoreRows.push(<li>{score.name} <b className="element nitrogen">N</b></li>);
      } else {
          scoreRows.push(<li>{score.name} <b className="element oxygen">O</b> {score.score}</li>);
      }
  });

  const ScoreEvent = 'score';
let userName = localStorage.getItem("userName");

function initializeLocalStorage() {
    const defaultScores = [
        { name: "Billy", score: -7 },
        { name: "Bob", score: -6 },
        { name: "Joe", score: -5 },
        { name: "Man", score: 3 }
    ];
  
    const defaultClicks = 0;
    const defaultElements = [0, 0, 0, 0, 0, 0, 0, 0];
    const defaultUpgrades = [0, 0, 0, 0, 0, 0, 0];
    const defaultProgress = [true, false, false, false, false, false, false, false];
    const defaultUpgradeCosts = [10, 10, 10, 10, 10, 10, 10];
  
    if (!localStorage.getItem('clicks')) {
      localStorage.setItem('clicks', JSON.stringify(defaultClicks));
    }
    if (!localStorage.getItem('elements')) {
        localStorage.setItem('elements', JSON.stringify(defaultElements));
    }
    if (!localStorage.getItem('upgrades')) {
        localStorage.setItem('upgrades', JSON.stringify(defaultUpgrades));
    }
    if (!localStorage.getItem('progress')) {
        localStorage.setItem('progress', JSON.stringify(defaultProgress));
    }
    if (!localStorage.getItem('upgradeCosts')) {
        localStorage.setItem('upgradeCosts', JSON.stringify(defaultUpgradeCosts));
    }
  }
  
  // Call the initialization function when the application starts
  initializeLocalStorage();

async function loadScores() {
    let scores = [];
    try {
      // Get the latest high scores from the service
      const response = await fetch('/api/scores');
      scores = await response.json();
  
      // Save the scores in case we go offline in the future
      localStorage.setItem('scores', JSON.stringify(scores));
      localStorage.setItem('clicks', JSON.stringify(clicks));
        localStorage.setItem('elements', JSON.stringify(elements));
        localStorage.setItem('upgrades', JSON.stringify(upgrades));
        localStorage.setItem('progress', JSON.stringify(progress));
        localStorage.setItem('upgradeCosts', JSON.stringify(upgradeCosts));
    } catch {
      // If there was an error then just use the last saved scores
      const scoresText = localStorage.getItem('scores');
      if (scoresText) {
        scores = JSON.parse(scoresText);
      }
    }
  
    return renderLeaderboard(scores);
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

    let mySave = sortedScores.find(obj => obj.name === userName)
    if (mySave) {
        clicks = mySave.clicks;
        elements = mySave.elements;
        upgrades = mySave.upgrades;
        progress = mySave.progress;
        upgradeCosts = mySave.upgradeCosts;
        document.getElementById('hydrogen').textContent = elements[0];
        document.getElementById('helium').textContent = elements[1];
        document.getElementById('lithium').textContent = elements[2];
        document.getElementById('beryllium').textContent = elements[3];
        document.getElementById('boron').textContent = elements[4];
        document.getElementById('carbon').textContent = elements[5];
        document.getElementById('nitrogen').textContent = elements[6];
        document.getElementById('oxygen').textContent = elements[7];
    
        document.getElementById('HUp').textContent = upgradeCosts[0];
        document.getElementById('HeUp').textContent = upgradeCosts[1];
        document.getElementById('LiUp').textContent = upgradeCosts[2];
        document.getElementById('BeUp').textContent = upgradeCosts[3];
        document.getElementById('BUp').textContent = upgradeCosts[4];
        document.getElementById('CUp').textContent = upgradeCosts[5];
        document.getElementById('NUp').textContent = upgradeCosts[6];
    
        document.getElementById('hydrogen').textContent = elements[0];
        document.getElementById('helium').textContent = elements[1];
        document.getElementById('lithium').textContent = elements[2];
        document.getElementById('beryllium').textContent = elements[3];
        document.getElementById('boron').textContent = elements[4];
        document.getElementById('carbon').textContent = elements[5];
        document.getElementById('nitrogen').textContent = elements[6];
        document.getElementById('oxygen').textContent = elements[7];
        return mySave;
    } else {
        let newSave = {
            clicks: 0,
            elements: [0, 0, 0, 0, 0, 0, 0, 0],
            upgrades: [0, 0, 0, 0, 0, 0, 0],
            progress: [true, false, false, false, false, false, false, false],
            upgradeCosts: [10, 10, 10, 10, 10, 10, 10]
        }
        return newSave;
    }
}

// add service

function updateScoresLocal(newScore) { //function for updating scores
    const storedScores = localStorage.getItem('scores');
    
    const existingScores = storedScores ? JSON.parse(storedScores) : [];

    const updatedScores = [...existingScores, newScore];

    localStorage.setItem('scores', JSON.stringify(updatedScores));
    renderLeaderboard(updatedScores);
}

  let clicks = 0;
  let elements = [0, 0, 0, 0, 0, 0, 0, 0];
  let upgrades = [0, 0, 0, 0, 0, 0, 0];
  let progress = [true, false, false, false, false, false, false, false];
  let upgradeCosts = [10, 10, 10, 10, 10, 10, 10];
  let alertIDs = ["Htxt", "Hetxt", "Litxt", "Betxt", "Btxt", "Ctxt", "Ntxt"];
  
  async function saveScore(scoreInput, socket) {
      const storedScores = localStorage.getItem('scores');
      const newScores = storedScores ? JSON.parse(storedScores) : [];
      userName = localStorage.getItem("userName");
  
      localStorage.setItem('clicks', JSON.stringify(clicks));
      localStorage.setItem('elements', JSON.stringify(elements));
      localStorage.setItem('upgrades', JSON.stringify(upgrades));
      localStorage.setItem('progress', JSON.stringify(progress));
      localStorage.setItem('upgradeCosts', JSON.stringify(upgradeCosts));
  
      const _clicks = JSON.parse(localStorage.getItem("clicks")) || 0;
      const _elements = JSON.parse(localStorage.getItem("elements")) || [0, 0, 0, 0, 0, 0, 0, 0];
      const _upgrades = JSON.parse(localStorage.getItem("upgrades")) || [0, 0, 0, 0, 0, 0, 0];
      const _progress = JSON.parse(localStorage.getItem("progress")) || [true, false, false, false, false, false, false, false];
      const _upgradeCosts = JSON.parse(localStorage.getItem("upgradeCosts")) || [10, 10, 10, 10, 10, 10, 10];
  
      const newScore = {
          name: userName,
          score: scoreInput,
          clicks: _clicks,
          elements: _elements,
          upgrades: _upgrades,
          progress: _progress,
          upgradeCosts: _upgradeCosts
      };
  
      
      //const mySave = newScores.find(obj => obj.name === userName);
      //mySave.score = scoreInput;
  
      try {
        const response = await fetch('/api/score', {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(newScore),
        });
  
        // Store what the service gave us as the high scores
        const scores = await response.json();
        localStorage.setItem('scores', JSON.stringify(scores.scores));
        broadcastEvent(userName, ScoreEvent, socket);
      } catch {
        // If there was an error then just track scores locally 
        updateScoresLocal(newScore);
      }
  
      return newScore;
  }
  
  
  const mySave = loadScores();
  
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
  
      if (clicks % 1 === 0) {
          saveScore(newScore, socket);
          loadScores();
      }
      
      // document.getElementById('hydrogen').textContent = elements[0];
      // document.getElementById('helium').textContent = elements[1];
      // document.getElementById('lithium').textContent = elements[2];
      // document.getElementById('beryllium').textContent = elements[3];
      // document.getElementById('boron').textContent = elements[4];
      // document.getElementById('carbon').textContent = elements[5];
      // document.getElementById('nitrogen').textContent = elements[6];
      // document.getElementById('oxygen').textContent = elements[7];
  }
  
  async function upgrade(index) {
      if (elements[index + 1] >= upgradeCosts[index]) {
          upgrades[index]++;
          elements[index + 1] -= upgradeCosts[index];
          upgradeCosts[index] *= 10;
  
          // document.getElementById('HUp').textContent = upgradeCosts[0];
          // document.getElementById('HeUp').textContent = upgradeCosts[1];
          // document.getElementById('LiUp').textContent = upgradeCosts[2];
          // document.getElementById('BeUp').textContent = upgradeCosts[3];
          // document.getElementById('BUp').textContent = upgradeCosts[4];
          // document.getElementById('CUp').textContent = upgradeCosts[5];
          // document.getElementById('NUp').textContent = upgradeCosts[6];
  
          // document.getElementById('hydrogen').textContent = elements[0];
          // document.getElementById('helium').textContent = elements[1];
          // document.getElementById('lithium').textContent = elements[2];
          // document.getElementById('beryllium').textContent = elements[3];
          // document.getElementById('boron').textContent = elements[4];
          // document.getElementById('carbon').textContent = elements[5];
          // document.getElementById('nitrogen').textContent = elements[6];
          // document.getElementById('oxygen').textContent = elements[7];
      } else {
          const text = document.getElementById(alertIDs[index]).textContent;
          document.getElementById(alertIDs[index]).style.color = 'red';
          document.getElementById(alertIDs[index]).textContent = "Too expensive";
  
          await new Promise(resolve => setTimeout(resolve, 1000));
  
          document.getElementById(alertIDs[index]).style.color = 'black';
          document.getElementById(alertIDs[index]).textContent = text;
      }
  }

  return (
    <div class="container">
        <aside>
            <h3>Leaderboard</h3>
            <ol id="leaderboard-list">{scoreRows}</ol>
        </aside>
        <main>
            <h2>Click to get matter</h2>
            <img src="../../dist/assets/images/pexels-ivan-samkov-9629708.jpg" alt="flask" width="200" id="flask" />
            <p><button onClick={() => create()}>Create</button></p>
            <p><button onClick={() => upgrade(0)}><span id="Htxt">Increase Hydrogen</span></button><span id="HUp">{upgradeCosts[0]}</span> <b className="element helium">He</b></p>
            <p><button onClick={() => upgrade(1)}><span id="Hetxt">Increase Helium</span></button><span id="HeUp">{upgradeCosts[1]}</span> <b className="element lithium">Li</b></p>
            <p><button onClick={() => upgrade(2)}><span id="Litxt">Increase Lithium</span></button><span id="LiUp">{upgradeCosts[2]}</span> <b className="element beryllium">Be</b></p>
            <p><button onClick={() => upgrade(3)}><span id="Betxt">Increase Beryllium</span></button><span id="BeUp">{upgradeCosts[3]}</span> <b className="element boron">B</b></p>
            <p><button onClick={() => upgrade(4)}><span id="Btxt">Increase Boron</span></button><span id="BUp">{upgradeCosts[4]}</span> <b className="element carbon">C</b></p>
            <p><button onClick={() => upgrade(5)}><span id="Ctxt">Increase Carbon</span></button><span id="CUp">{upgradeCosts[5]}</span> <b className="element nitrogen">N</b></p>
            <p><button onClick={() => upgrade(6)}><span id="Ntxt">Increase Nitrogen</span></button><span id="NUp">{upgradeCosts[6]}</span> <b className="element oxygen">O</b></p>
        </main>
        <div class="resources">
            <p><b className="element hydrogen big">H</b><b> Hydrogen:</b> <span id="hydrogen">{elements[0]}</span></p>
            <p><b className="element helium big">He</b><b> Helium:</b> <span id="helium">{elements[1]}</span></p>
            <p><b className="element lithium big">Li</b><b> Lithium:</b> <span id="lithium">{elements[2]}</span></p>
            <p><b className="element beryllium big">Be</b><b> Beryllium:</b> <span id="beryllium">{elements[3]}</span></p>
            <p><b className="element boron big">B</b><b> Boron:</b> <span id="boron">{elements[4]}</span></p>
            <p><b className="element carbon big">C</b><b> Carbon:</b> <span id="carbon">{elements[5]}</span></p>
            <p><b className="element nitrogen big">N</b><b> Nitrogen:</b> <span id="nitrogen">{elements[6]}</span></p>
            <p><b className="element oxygen big">O</b><b> Oxygen:</b> <span id="oxygen">{elements[7]}</span></p>
        </div>
    </div>
  );
}