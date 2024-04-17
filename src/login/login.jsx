import React from 'react';

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
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.score}</td>
          <td>{score.date}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to score</td>
      </tr>
    );
  }

export function Login() {
  return (
    <div class="container">
        <aside>
            <h3>Leaderboard</h3>
            <ol id="leaderboard-list"></ol>
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