import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import CreateLeague from './CreateLeague';
import CompletedRounds from './CompletedRounds';
import Standings from './Standings';

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
            <Route exact path="/dashboard" component={CreateLeague} />
            <Route exact path="/dashboard" component={CompletedRounds} />
            <Route exact path="/dashboard" component={Standings} />   
        </div>
    )
}

export default Router;