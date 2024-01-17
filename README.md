[Link to class notes](notes.md)
# Elementary
## Specification Deliverable
### Elevator Pitch
Elementary is an extremely simple strategy game of obtaining and fusing elements. You can fill out the periodic table and discover heavier and heavier elements. This website has a practical and educational use as well, containing a guidebook with information on each element in the periodic table. There is a leaderboard showing which user has discovered the heaviest element and how much of it.

### Design

![Drawing showing the design of the startup.](/assets/images/design.png)

Here is a sequence diagram showing how the game would automatically interact with the backend to vote.

![Drawing showing the design of how the backend works.](/assets/images/backend_design.png)

### Key features
- Secure login over HTTPS
- Click buttons to create elements
- Save game progress through login
- Leaderboard of high scores updated in real time
- Educational guide with general information about each element
- Eight elements implemented at minimum, with more to come as time permits

### Technologies
I will use the required technologies in the following ways:
- **HTML** - I will use correct HTML structure for the game. There will be 3 HTML pages:  login, game, and guide
- **CSS** - The application will be styled to be easy to read and understand with pleasing colors and graphics
- **JavaScript** - Will provide login, game mechanics and number calculations, display leaderboard, backend endpoint calls.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving high scores
  - submitting high score at key points
- **DB/Login** - Store users and high scores in database. Register and login users. Credentials securely stored in database. Can't play unless authenticated.
- **WebSocket** - Each time a new heaviest element is reached, the leaderboard is updated for all players
- **React** - Application ported to use the React web framework.