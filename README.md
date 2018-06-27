# Clash for the Cup 
This repo is for the front-end. [Click here](https://github.com/RoundEm/Clash_for_the_Cup_back-end) to go to the back-end repo.

## <Link to live app on Netlify>
 
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

## Technologies Used
- Javascript
- React
- HTML
- CSS
- Node
- Mongo/Mongoose
- Mocha
- Chai
- Enzyme
- Jest
- Styled Components
- Responsive design
- Accessibility

## Enchancements for the Future
- Add user authentication
- Allow user to make updates to players and point settings
- Allow user to email invitation to other players
- Allow user to enter and track points earned under each point type
- Allow decimals to be entered into point weights
- Add some images

