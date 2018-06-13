import React from 'react';
import Players from './Players';
import CompletedRounds from './CompletedRounds';
import PointsSettingsTable from './PointsSettingsTable';
import Standings from './Standings';
import { Link } from 'react-router-dom';
const axios = require('axios');
const { API_BASE_URL } = require('../config');

// TODO: AJAX request to get data for: league name, points table; completed rounds; players; standings
class ActiveLeague extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
                leagueId: window.location.pathname.split('/')[3],
                players: []
            }
    }
    componentDidMount() {
        // GET league players
        axios.get(`${API_BASE_URL}/leagues/${this.state.leagueId}`)
            .then(res => {
                const players = res.data.players;
                console.log('players: ', players);
                this.setState({
                    players
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <div>
                <h2>{'League Name'}</h2>
                <button><Link to={`/dashboard/leagues/${this.state.leagueId}/create-round`}>Create New Round</Link></button>
                <h3>Players:</h3>
                <Players 
                    players={this.state.players}
                />
                <h3>Completed Rounds:</h3>
                <CompletedRounds />
                <h3>Standings:</h3>
                <Standings />
                <h3>Points Settings:</h3>
                
            </div>
            
        );
    }
}

export default ActiveLeague;