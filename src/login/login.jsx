import React from 'react';

import './main.css';

const [scores, setScores] = React.useState([]);

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

const scoreRows = [];
const sortedScores = scoresData.scores.sort((a, b) => b.score - a.score);
sortedScores.forEach((score, index) => {
    scoreRows.push(
        <li>{score.name} <b class="element hydrogen">H</b></li>
    );
});
  

    // const leaderboardList = document.getElementById("leaderboard-list");

    // leaderboardList.innerHTML = "";

    // sortedScores.forEach((score, index) => {
    //     const listItem = document.createElement("li");
    //     if (score.score === -7) {
    //         listItem.innerHTML = `${score.name} <b class="element hydrogen">H</b>`;
    //     } else if (score.score === -6) {
    //         listItem.innerHTML = `${score.name} <b class="element helium">He</b>`;
    //     } else if (score.score === -5) {
    //         listItem.innerHTML = `${score.name} <b class="element lithium">Li</b>`;
    //     } else if (score.score === -4) {
    //         listItem.innerHTML = `${score.name} <b class="element beryllium">Be</b>`;
    //     } else if (score.score === -3) {
    //         listItem.innerHTML = `${score.name} <b class="element boron">B</b>`;
    //     } else if (score.score === -2) {
    //         listItem.innerHTML = `${score.name} <b class="element carbon">C</b>`;
    //     } else if (score.score === -1) {
    //         listItem.innerHTML = `${score.name} <b class="element nitrogen">N</b>`;
    //     } else {
    //         listItem.innerHTML = `${score.name} <b class="element oxygen">O</b> (${score.score})`;
    //     }
        
    //     leaderboardList.appendChild(listItem);
    // });

export function Login() {
  return (
    <div class="container">
        <aside>
            <h3>Leaderboard</h3>
            <ol id="leaderboard-list">{scoreRows}</ol>
        </aside>
        <main>
            <h2 id="msg">Login</h2>
            <div id="loginControls" style="display: none">
                <div class="login">
                    <label for="email">Enter your email: </label>
                    <input type="text" name="email" id="email" required />
                </div>
                <div class="login">
                    <label for="pw">Enter your password: </label>
                    <input type="password" name="pw" id="pw" required />
                </div>
                <div class="login">
                    <input type="submit" value="Log in" onclick="login()"/>
                    <input type="submit" value="Register" onclick="register()"/>
                </div>
            </div>
            <div id="playControls" style="display: none">
                <div id="playerName"></div>
                <button type="button" onclick="play()">Play</button>
                <button type="button" onclick="logout()">Logout</button>
            </div>
        </main>
    </div>
  );
}