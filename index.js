const express = require('express');
const app = express();

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetScores
apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
  scores = updateScores(req.body, scores);
  res.send(scores);
  console.log("Hello, World!");
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

let scores = [
    { name: "Billy", score: -7 },
    { name: "Bob", score: -6 },
    { name: "Joe", score: -5 },
    { name: "Man", score: 3 }
];
//make updateScores function which returns scores
function updateScores(newScore, scores) {
    const index = scores.findIndex(score => score.name === newScore.name);

    if (index !== -1) {
        scores[index] = newScore;
    } else {
        scores.push(newScore);
    }

    return scores;
}