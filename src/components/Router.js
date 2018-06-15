import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import ActiveLeague from './ActiveLeague';
import CreateLeague from './CreateLeague';
import CreateRound from './CreateRound';
import CompletedRounds from './CompletedRounds';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Standings from './Standings';
import ViewRound from './ViewRound';
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
            <Route exact path="/dashboard/leagues/:id" component={ActiveLeague} />
            <Route exact path="/dashboard/leagues/:id/create-round" component={CreateRound} />
            <Route exact path="/dashboard/leagues/:id/round/:roundId" component={ViewRound} />
        </HtmlBody>
    );
}

export default Router;