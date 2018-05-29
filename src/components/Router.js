import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';

// TODO: Do I use these here?:
// import Dashboard from './Dashboard';
// import Scoreboard from './Scoreboard';
// import ScorecardSummary from './ScorecardSummary';
// import ScorecardDetail from './ScorecardDetail';
// import Leaderboard from './Leaderboard';

const Router = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            {/* // TODO: Do I use these here?: */}
            {/* <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/event/:id" component={Scoreboard} />
            <Route exact path="/event/:id" component={ScorecardSummary} />
            <Route exact path="/event/:id/scorecard-detail" component={ScorecardDetail} />
            <Route exact path="/event/:id/leaderboard" component={Leaderboard} /> */}
        </Switch>
    )
}

export default Router;