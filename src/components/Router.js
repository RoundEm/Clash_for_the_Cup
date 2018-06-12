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
import CreateRound from './CreateRound';
import CompletedRounds from './CompletedRounds';
import Standings from './Standings';
import Dashboard from './Dashboard';
import PointsTable from './PointsSettingsTable';
import ActiveLeague from './ActiveLeague';
import styled from 'styled-components';


const HtmlBody = styled.div`
    padding: 7px;
`

const Router = () => {
    return (
        <HtmlBody>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route exact path="/home" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
            <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/dashboard/create-league" component={CreateLeague} />
            </Switch>
            <Route exact path="/dashboard/active-leagues/:id" component={ActiveLeague} />
            <Route exact path="/dashboard/active-leagues/:id/create-round" component={CreateRound} />
        </HtmlBody>
    );
}

export default Router;