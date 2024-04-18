import React from 'react';

export function Guide() {
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
    <div class="container">
        <aside>
            <h3>Leaderboard</h3>
            <ol id="leaderboard-list">{scoreRows}</ol>
        </aside>
        <main>
            <h2>More info:</h2>
            <div className="grid">
                <div className="gridunit">
                    <p><b>Hydrogen:</b> the smallest element</p>
                    <img src="../../dist/assets/images/pexels-jeremy-müller-10980177.jpg" alt="Galaxy" width="200" />
                </div>
                <div className="gridunit">
                    <p><b>Helium:</b> inflate your balloons</p>
                    <img src="../../dist/assets/images/pexels-padli-pradana-772478.jpg" alt="Balloons" width="200" />
                </div>
                <div className="gridunit">
                    <p><b>Lithium:</b> the lightest metal</p>
                    <img src="../../dist/assets/images/istockphoto-480228230-612x612.jpg" alt="Flask" width="200" />
                </div>
                <div className="gridunit">
                    <p><b>Beryllium:</b> curiously rare</p>
                    <img src="../../dist/assets/images/istockphoto-1638256792-612x612.jpg" alt="Flask" width="200" />
                </div>
                <div className="gridunit">
                    <p><b>Boron:</b> not as boring as its name suggests</p>
                    <img src="../../dist/assets/images/istockphoto-1485233006-612x612.jpg" alt="Flask" width="200" />
                </div>
                <div className="gridunit">
                    <p><b>Carbon:</b> the origin of life</p>
                    <img src="../../dist/assets/images/pexels-pixabay-48884.jpg" alt="Flask" width="100" />
                </div>
                <div className="gridunit">
                    <p><b>Nitrogen:</b> the majority of our air</p>
                    <img src="../../dist/assets/images/pexels-алексей-вечерин-9544253.jpg" alt="Flask" width="100" />
                </div>
                <div className="gridunit">
                    <p><b>Oxygen:</b> breathe!</p>
                    <img src="../../dist/assets/images/pexels-pixabay-158827.jpg" alt="Flask" width="200" />
                </div>                
            </div>
            <div id="quote" className="quote-box bg-light text-dark"></div>
        </main>
    </div>
  );
}