import React from 'react';

import './main.css';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

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

export function Login({ userName, authState, onAuthChange }) {
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

  return (
    <div className="container">
        <aside>
            <h3>Leaderboard</h3>
            <ol id="leaderboard-list">{scoreRows}</ol>
        </aside>
        <main>
            <div>
                {authState !== AuthState.Unknown && <h1>Welcome to Simon</h1>}
                {authState === AuthState.Authenticated && (
                <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
                )}
                {authState === AuthState.Unauthenticated && (
                <Unauthenticated
                    userName={userName}
                    onLogin={(loginUserName) => {
                    onAuthChange(loginUserName, AuthState.Authenticated);
                    }}
                />
                )}
            </div>
            <div id="playControls">
                <div id="playerName"></div>
                <button type="button" onClick={() => navigate('/play')}>Play</button>
                <button type="button" onClick={() => logout()}>Logout</button>
            </div>
        </main>
    </div>
  );
}