import React from 'react';
import PlayersRender from './PlayersRender';
import RoundSummary from './RoundSummary';
import Standings from './Standings';
import { Link } from 'react-router-dom';
const axios = require('axios');
const { API_BASE_URL } = require('../config');

class ActiveLeague extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
                leagueId: window.location.pathname.split('/')[3],
                leagueName: '',
                players: [],    
                rounds: [],
                points: []
            }
    }
    componentDidMount() {
        // GET league players
        axios.get(`${API_BASE_URL}/leagues/${this.state.leagueId}`)
            .then(res => {
                console.log('league players res.data: ', res.data)
                const players = res.data.players;
                const leagueName = res.data.name;
                const rounds = res.data.rounds;
                const points = res.data.points;
                this.setState({
                    players,
                    leagueName,
                    rounds,
                    points
                });
            })
            .catch(err => {
                console.log(err);
            });
             // GET all players total points
                axios.get(`${API_BASE_URL}/leagues/${this.state.leagueId}/points-allocation`)
                    .then(res => {
                        console.log('all player points res: ', res.data)
                        this.handlePointTotals(res.data)
                    })
                    .catch(err => {
                        console.log(err);
            });
    }
    handlePointTotals = data => {
        let id = data.player;
        let totalPoints = []
        data.reduce((accumulator, player) => {
            console.log(accumulator)
            if(!accumulator[player.id]) {
                accumulator[player.id] = {
                    id: player.id,
                    total: 0
                }
                totalPoints.push(accumulator[player.id])
            }
            accumulator[player.id].total += player.total
            return accumulator
        }, {});
        console.log('totalPoints: ', totalPoints)
    }
    render() {
        return (
            <div className="active-league">
                <h2>League Name: <span style={{color: 'white', margin: '0 0 0 5px'}}>{this.state.leagueName}</span></h2>
                <h3>Players:</h3>
                <PlayersRender 
                    players={this.state.players}
                />
                <h3>Rounds:</h3>
                <Link to={`/dashboard/leagues/${this.state.leagueId}/create-round`}><button>Create New Round</button></Link>
                <RoundSummary 
                    rounds={this.state.rounds}
                    league={this.state.leagueId}
                />
                <h3>Standings:</h3>
                <Standings 
                    players={this.state.players}
                    points={this.state.pointTotals}
                />
                <h3>Points Settings:</h3>
                {/* TODO: Make this a component and also use it on ViewRound component */}
                <table>
                    <tbody>
                        {this.state.points.map((point, i) => (
                            <tr key={point + i}>
                                <td>{point.type}</td>
                                <td>{point.weight}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button>Done</button>
            </div>
            
        );
    }
}

export default ActiveLeague;