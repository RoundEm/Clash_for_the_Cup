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
                points: [],
                pointTotals: []
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
                        this.calculatePointTotals(res.data)
                    })
                    .catch(err => {
                        console.log(err);
            });
    }
    calculatePointTotals = data => {
        // TODO: update so that NaN isn't returned if no total is set???
        // let id = data.player;
        let totalPoints = []
        data.reduce((accumulator, player) => {
            console.log(accumulator)
            if(!accumulator[player.player]) {
                accumulator[player.player] = {
                    id: player.player,
                    total: 0
                }
                totalPoints.push(accumulator[player.player])
            }
            accumulator[player.player].total += player.total
            return accumulator
        }, {});
        this.setState({
            pointTotals: totalPoints
        })
        this.sortPointTotals()
    }
    sortPointTotals = () => {
        let sortedPoints = this.state.pointTotals.sort((a, b) => {
            return b.total - a.total
        });
        this.setState({
            pointTotals: sortedPoints
        })
    }
    componentDidUpdate() {
        console.log('totalPoints: ', this.state.pointTotals)
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
                    // players={this.state.players}
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