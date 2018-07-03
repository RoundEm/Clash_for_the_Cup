# Clash for the Cup 
This repo is for the front-end. [Click here](https://github.com/RoundEm/Clash_for_the_Cup_back-end) to go to the back-end repo.

### Live app: https://clash-for-the-cup.herokuapp.com

## Summary of App
Create your own golfing leagues and compete against your friends and social groups. Establish points for custom criteria and accomplishments achieved during each round played. Battle your opponents to try and earn the most points during a season (for fellow golfers, think Fed-Ex Cup<sup>&#174;</sup> points on the PGA Tour<sup>&#174;</sup>) while incentivizing yourself to continuously improve your game!

## Technologies and methodologies used:
- Javascript
- React
- HTML
- CSS
- Express/Node
- RESTful API
- MongoDB/Mongoose
- Mocha
- Chai/Chai-http
- Enzyme
- Jest
- React Router
- Styled Components
- axios
- Responsive design
- Accessibility

## Images of App:
![alt text](/app_screenshots/Home.png "Home page")
![alt text](/app_screenshots/Create_League.png "Create a New League page")
![alt text](/app_screenshots/Dashboard.png "Dashboard page")
![alt text](/app_screenshots/League_Details_1.png "League Details (1st half of page)")
![alt text](/app_screenshots/League_Details_2.png "League Details (1st half of page)")
![alt text](/app_screenshots/Create_Round.png "Create a New Round page")
![alt text](/app_screenshots/View-Edit-Round.png "View/Edit Round page")

## API Routes
**POST league: -** /league

**GET all leagues: -** /leagues

**GET league: -** /leagues/:leagueId

**DELETE league: -** /leagues/:id

**POST league players: -** /leagues/:leagueId/players

**GET league players: -** /leagues/:leagueId/players

**POST point definitions: -** /leagues/:leagueId/point-weighting

**GET point definitions: -** /leagues/:leagueId/point-weighting

**POST round: -** /leagues/:leagueId/round

**GET round: -** /leagues/:leagueId/round/:roundId

**POST point allocation for a player in a round: -** /leagues/:leagueId/:roundId/points-allocation/:playerId

**GET point allocations for all players in a round: -** /leagues/:leagueId/:roundId/points-allocation

**GET point allocations for all players in league: -** /leagues/:leagueId/points-allocation

## Enchancements/updates/fixes I'd like to make in the future
- Add user authentication
- Allow user to make updates to players and point settings
- Allow user to email invitation to other players
- Allow user to enter and track points earned under each point type
- Allow decimals to be entered into point weights
- Refactor the app to use redux or at the very list create more simplified components and lift a lot of the state up
- Move some functions (e.g. sorting, ajax calls, etc.) into a stand-alone utilities file instead of polluting the components
- Fix round points input so that saving a player's total only saves the input corresponding to that player instead of the last input edited
- Add more client-side tests


