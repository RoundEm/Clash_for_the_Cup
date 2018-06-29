# Clash for the Cup 
This repo is for the front-end. [Click here](https://github.com/RoundEm/Clash_for_the_Cup_back-end) to go to the back-end repo.

## TODO: Insert link to live app on Netlify

## Summary of App
This app allows you to create points-based golfing leagues for you and your friends and social groups. You can establish points for custom criteria and accomplishments achieved during each round played. The goal is to earn the most points during a season (for fellow golfers, think Fed-Ex Cup points on the PGA Tour) and have more incentive to continuously improve your game.

## API Routes
- POST league: /league
- GET all leagues: /leagues
- GET league: /leagues/:leagueId
- DELETE league: /leagues/:id
- POST league players: /leagues/:leagueId/players
- GET league players: /leagues/:leagueId/players
- POST point definitions: /leagues/:leagueId/point-weighting
- GET point definitions: /leagues/:leagueId/point-weighting
- POST round: /leagues/:leagueId/round
- GET round: /leagues/:leagueId/round/:roundId
- POST point allocation for a player in a round: /leagues/:leagueId/:roundId/points-allocation/:playerId
- GET point allocations for all players in a round: /leagues/:leagueId/:roundId/points-allocation
- GET point allocations for all players in league: /leagues/:leagueId/points-allocation

## Images of App:
![alt text](/app_screenshots/Home.png "Home page")
![alt text](/app_screenshots/Create_League.png "Create a New League page")
![alt text](/app_screenshots/Dashboard.png "Dashboard page")
![alt text](/app_screenshots/League_Details_1.png "League Details (1st half of page)")
![alt text](/app_screenshots/League_Details_2.png "League Details (1st half of page)")
![alt text](/app_screenshots/Create_Round.png "Create a New Round page")
![alt text](/app_screenshots/View-Edit-Round.png "View/Edit Round page")

## Technologies Used
- Javascript
- React
- HTML
- CSS
- Node
- Express
- Mongo/Mongoose
- Mocha
- Chai/ChaiHttp
- Enzyme
- Jest
- React Router
- Styled Components
- axios
- Responsive design
- Accessibility

## Enchancements I'd like to make in the future
- Add user authentication
- Allow user to make updates to players and point settings
- Allow user to email invitation to other players
- Allow user to enter and track points earned under each point type
- Allow decimals to be entered into point weights

