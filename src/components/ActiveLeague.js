import React from 'react';
import PlayersRender from './PlayersRender';
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
                leagueName: '',
                players: [],
                rounds: []
            }
    }
    componentDidMount() {
        // GET league players
        axios.get(`${API_BASE_URL}/leagues/${this.state.leagueId}`)
            .then(res => {
                console.log('res.data: ', res.data)
                const players = res.data.players;
                const leagueName = res.data.name;
                const rounds = res.data.rounds;
                this.setState({
                    players,
                    leagueName,
                    rounds
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    componentDidUpdate() {
        console.log()
    }
    render() {
        
        return (
            <div className="active-league">
                <h2>{this.state.leagueName}</h2>
                <h3>Active Rounds:</h3>
                <button><Link to={`/dashboard/leagues/${this.state.leagueId}/create-round`}>Create New Round</Link></button>
                <h3>Players:</h3>
                <PlayersRender 
                    players={this.state.players}
                />
                <h3>Completed Rounds:</h3>
                <CompletedRounds 
                    rounds={this.state.rounds}
                    league={this.state.leagueId}
                />
                <h3>Standings:</h3>
                <Standings />
                <h3>Points Settings:</h3>
                
            </div>
            
        );
    }
}

export default ActiveLeague;