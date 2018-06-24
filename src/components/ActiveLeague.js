import React from 'react';
import PlayersRender from './PlayersRender';
import RoundSummary from './RoundSummary';
import Standings from './Standings';
import { Link } from 'react-router-dom';
const axios = require('axios');
const { API_BASE_URL } = require('../config');
const moment = require('moment');

class ActiveLeague extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
                leagueId: window.location.pathname.split('/')[3],
                leagueName: '',
                players: [],    
                rounds: [],
                points: [],
                pointTotals: [],
                endDate: ''
            }
    }
    componentDidMount() {
        // GET league info
        axios.get(`${API_BASE_URL}/leagues/${this.state.leagueId}`)
            .then(res => {
                console.log('league players res.data: ', res.data)
                const players = res.data.players;
                const leagueName = res.data.name;
                const rounds = res.data.rounds;
                const points = res.data.points;
                const endDate = res.data.endDate;
                this.setState({
                    players,
                    leagueName,
                    rounds,
                    points,
                    endDate
                });
                this.sortRoundsByDate();
                this.sortPointWeights();
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
    sortRoundsByDate = () => {
        let sortedRounds = this.state.rounds.sort((a, b) => (
            new Date(b.date) - new Date(a.date)
        ));
        this.setState({
            rounds: sortedRounds
        });
    }
    calculatePointTotals = data => {
        // TODO: update so that NaN isn't returned if no total is set???
        // Create array with total points for each player
        let totalPoints = []
        data.reduce((accumulator, player) => {
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
        this.sortPointTotals();
        
    }
    sortPointTotals = () => {
        let sortedPoints = this.state.pointTotals.sort((a, b) => (
            b.total - a.total
        ));
        this.setState({
            pointTotals: sortedPoints
        });
    }
    sortPointWeights = () => {
        let sortedPointWeights = this.state.points.sort((a, b) => (
            b.weight - a.weight
        ));
        this.setState({
            points: sortedPointWeights
        })
    }
    render() {
        return (
            <div className="active-league">
                <h2>League Name: <span style={{color: 'white', margin: '0 0 0 5px'}}>{this.state.leagueName}</span></h2>
                <h3>End Date: <span style={{color: 'white', margin: '0 0 0 5px'}}>{moment.utc(this.state.endDate).format("MM-DD-YYYY")}</span></h3>
                <h3>Players:</h3>
                <PlayersRender 
                    players={this.state.players}
                />
                <h3>Standings:</h3>
                <Standings 
                    points={this.state.pointTotals}
                    players={this.state.players}
                />
                <h3>Rounds:</h3>
                <button><Link to={`/dashboard/leagues/${this.state.leagueId}/create-round`}>Create New Round</Link></button>
                <RoundSummary 
                    rounds={this.state.rounds}
                    league={this.state.leagueId}
                    players={this.state.players}
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