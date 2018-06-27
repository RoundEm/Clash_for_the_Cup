# Clash for the Cup 
This repo is for the front-end. [Click here](https://github.com/RoundEm/Clash_for_the_Cup_back-end) to go to the back-end repo.

## TODO: Insert link to live app on Netlify
 
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
![alt text](/app-screenshots/Home.png "Home page")
![alt text](/app-screenshots/Log_Entries.png "View Log Entries page")
![alt text](/app-screenshots/Add_Log_Entry.png "Add Log page")
![alt text](/app-screenshots/View_Log_Entry.png "View Log page")
![alt text](/app-screenshots/Edit_Log_editing.png "Edit Log page")

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

## Enchancements for the Future
- Add user authentication
- Allow user to make updates to players and point settings
- Allow user to email invitation to other players
- Allow user to enter and track points earned under each point type
- Allow decimals to be entered into point weights

