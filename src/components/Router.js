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
import CreateNewRound from './CreateNewRound';
import CompletedRounds from './CompletedRounds';
import Standings from './Standings';
import Dashboard from './Dashboard';
import PointsTable from './PointsTable';
import ActiveLeague from './ActiveLeague';

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
                <Route exact path="/dashboard/create-league" component={CreateNewLeague} />
            </Switch>
            {/* <Route exact path="/dashboard/active-leagues/:id" component={Standings} /> */}
            <Route exact path="/dashboard/active-leagues/:id" component={ActiveLeague} />
            {/* <Route exact path="/dashboard/active-leagues/:id" component={PointsTable} /> */}
            <Route exact path="/dashboard/active-leagues/:id/create-round" component={CreateNewRound} />
        </div>
    );
}

export default Router;