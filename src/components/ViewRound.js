import React from 'react';
import styled from 'styled-components';
const axios = require('axios');
const { API_BASE_URL } = require('../config');
const moment = require('moment');

const PlayerList = styled.div`
    div.player-list {
        padding: 5px;
    }
    div.point-list, p {
        padding: 0 3px 0 5px;
    }
    ul {
        margin: 0 0 0 5px;
    }
    li, p.inline-p {
        display: inline-block;
    }
    span {
        color: #075e15;
        margin-right: 5px;
    }
    input {
        width: 60px;
        margin: 10px;
        border-color: #b8eac8;
    }
    button {
        display: inline-block;
        margin-right: 5px;
    }
    table {
        margin: 5px 0 20px 5px;
    }
    h3 {
        font-family: 'Contrail One', cursive;
    }

`

class ViewRound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leagueId: window.location.pathname.split('/')[3],
            roundId: window.location.pathname.split('/')[5],
            name: '',
            course: '',
            date: '',
            players: [], 
            pointDefinitions: [],
            pointsInput: '',
            playerPoints: [],
            leaguePlayers: []
        }       
    }
    componentDidMount() {
        // GET league players for name lookup
        axios.get(`${API_BASE_URL}/leagues/${this.state.leagueId}`)
            .then(res => {
                this.setState({
                    leaguePlayers: res.data.players
                });
            })
            .catch(err => {
                console.log(err);
            });
        //GET round details
        axios.get(`${API_BASE_URL}/leagues/${this.state.leagueId}/round/${this.state.roundId}`)
            .then(res => {
                const data = res.data;
                const name = data.name;
                const course = data.course;
                const players = data.players;
                const date = data.date;
                // TODO: Get and set league name? fyi - The data being returned only has ID for league
                this.setState({
                    players,
                    course,
                    date,
                    name
                });
            })
            .catch(err => {
                console.log(err);
            });

        // GET league points & weighting
        axios.get(`${API_BASE_URL}/leagues/${this.state.leagueId}/point-weighting`)
            .then(res => {
                this.setState({
                    pointDefinitions: res.data
                });
                this.getPlayerPoints();
                this.sortPointWeights();
            })
            .catch(err => {
                console.log(err);
            });
    }
    getPlayerPoints = () => {
        // GET existing player points for this round
        axios.get(`${API_BASE_URL}/leagues/${this.state.leagueId}/${this.state.roundId}/points-allocation`)
            .then(res => {
                this.setState({
                    playerPoints: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    handlePostData = playerId => {
        const points = {
            total: this.state.pointsInput
        }

        // POST player points for round
        axios.post(`${API_BASE_URL}/leagues/${this.state.leagueId}/${this.state.roundId}/points-allocation/${playerId}`, points)
            .then(res => {
                this.setState({
                    pointsInput: this.state.pointsInput || ''
                });
                this.getPlayerPoints();
            })
            .catch(err => {
                console.log(err)
            });
    }
    sortPointWeights = () => {
        let sortedPointWeights = this.state.pointDefinitions.sort((a, b) => (
            b.weight - a.weight
        ));
        this.setState({
            points: sortedPointWeights
        })
    }
    render() {
        return (
            <PlayerList>
                <h2>View Round/Edit Points</h2>
                <p><span>Course: </span>  {this.state.course}</p>
                <p><span>Event Name: </span>  {this.state.name}</p>
                <p><span>Date: </span>  {moment.utc(this.state.date).format("MM-DD-YYYY")}</p>
                <h3>Points Settings:</h3>
                <table>
                    <tbody>
                        {this.state.pointDefinitions.map((point, i) => (
                            <tr key={point + i}>
                                <td>{point.type}</td>
                                <td>{point.weight}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className="inline-p">Save the total points earned in this round for each player</p><br />
                <p style={{fontStyle: 'italic'}}><span>NOTE:</span> Save each player's total one-at-a-time. Saving a new total for a player that has a current total will cause the current total to be overwritten</p>
                    {this.state.players.map((player, i) => (
                        <div className="player-list" key={player + i}>
                            {this.state.leaguePlayers.map((_player) => (
                                <label htmlFor={`${player}-input`}>
                                    {_player._id === player ?
                                         _player.name 
                                         : ''
                                    }
                                </label>
                            ))}
                            <input 
                                id={`${player}-input`}
                                type="number" 
                                onChange={e => this.setState({
                                    pointsInput: +e.target.value
                                })}
                                
                            />
                            <button onClick={() => this.handlePostData(player)}>Save</button>
                            <p className='inline-p'>Current Total: 
                                <span style={{marginLeft: 7}}>
                                    {this.state.playerPoints.reduce((acc, playerPoint) => {
                                        return player === playerPoint.player 
                                            ? playerPoint.total 
                                            : acc
                                        }, '')
                                    }
                                </span>
                            </p>
                        </div>
                    ))}
                <button onClick={() => window.history.back()}>Done</button>
            </PlayerList>
        );
    }
}

export default ViewRound;