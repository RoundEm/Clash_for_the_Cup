import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import CreateNewLeague from './CreateNewLeague';
import ActiveLeagues from './ActiveLeagues';
import RecordNewRound from './RecordNewRound';
import CompletedRounds from './CompletedRounds';
import Standings from './Standings';
import Dashboard from './Dashboard';

// these are for initial scoreboard idea:
// import Dashboard from './Dashboard';
// import Scoreboard from './Scoreboard';
// import ScorecardSummary from './ScorecardSummary';
// import ScorecardDetail from './ScorecardDetail';
// import Leaderboard from './Leaderboard';

const Router = () => {
    return (
        <div>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route exact path="/home" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
            
            <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/dashboard/active-leagues" component={ActiveLeagues} />
                <Route exact path="/dashboard/create-league" component={CreateNewLeague} />
                <Route exact path="/dashboard/active-leagues/:id" component={Standings} />
                <Route exact path="/dashboard/active-leagues/:id/record-round" component={RecordNewRound} />  
            </Switch>
        </div>
    );
}

export default Router;