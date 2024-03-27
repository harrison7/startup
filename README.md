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

## HTML deliverable
For this deliverable I built out the structure of my application using HTML.

- **HTML pages** - There are three HTML pages: login, the game, and a guide
- **Links** - The login page automatically links to the game page. All pages have links to all other pages in the header.
- **Text** - There is multiple text throughout the page, especially on the guide page.
- **Images** - There are images in the guide page and the game page
- **3rd party service** - A random quote API will be used.
- **DB/Login** - There is an input box and submit button for login. The save data and leaderboard position for the game is saved on an account through the database
- **WebSocket** - The leaderboards are updated in real time.

## CSS deliverable
For this deliverable I styled my website by creating CSS stylesheets.

- **Header, footer, and main content body** - Each element on every page has its own styling
- **Navigation elements** - custom hyperlinks and border on nav element
- **Window resizing** - works on all pages, most notably a grid on the guide page
- **Elements** - Each part is separated and stands out. Custom icons created through CSS
- **Text** - Consistent font family throughout website
- **Images** - Images are integrated with website

## JavaScript deliverable
For this deliverable I made my website interactable with JavaScript.

- **JavaScript support for future login.** - The username is saved and displayed on the leaderboard
- **JavaScript support for future database data** - User save data is saved in arrays and in an object
- **JavaScript support for future WebSocket** - The leaderboard has logic for updating once new scores are received from websocket.
- **JavaScript support for your application's interaction logic** - The full game is now interactable and implemented

## Service deliverable
For this deliverable I added backend endpoints that displays the scores of all users and saves the user's score to the leaderboard.

- **Create an HTTP service using Node.js and Express** - done
- **Frontend served up using Express static middleware** - done
- **Your frontend calls third party service endpoints** - Endpoints for quote generator, which generates a random profound quote
- **Your backend provides service endpoints** - Placeholder for login where user is saved on server, endpoints for saving leaderboard
- **Your frontend calls your service endpoints** - Done through fetch function

## Login deliverable
For this deliverable I added backend endpoints that displays the scores of all users and saves the user's score to the leaderboard.

- **Supports new user registration** - done
- **Supports existing user authentication** - When logged in, leaderboard position is saved.
- **Stores application data in MongoDB** - Stores username and leaderboard position. Still need to figure out how to store game save.
- **Stores and retrieves credentials in MongoDB** - done
- **Restricts functionality** - Cannot submit a new score to the leaderboard if not logged in, endpoint requires authentication