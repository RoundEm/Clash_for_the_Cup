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
        margin: 0 5px 0 0;
    }
    input {
        width: 60px;
        margin: 10px
    }
    button {
        display: inline-block;
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
            sucessMsg: '',
            playerPoints: []
        }       
    }
    componentDidMount() {
        //GET round details
        axios.get(`${API_BASE_URL}/leagues/${this.state.leagueId}/round/${this.state.roundId}`)
            .then(res => {
                console.log('get round info: ',res.data)
                const data = res.data;
                const name = data.name;
                const course = data.course;
                const players = data.players;
                const date = data.date;
                // TODO: Get and set league name. The data being returned only has ID for league
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
                // console.log('point weight res data: ', res.data)
                this.setState({
                    pointDefinitions: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
        
        // GET all player points this round
        axios.get(`${API_BASE_URL}/leagues/${this.state.leagueId}/${this.state.roundId}/points-allocation`)
            .then(res => {
                console.log('GET player points for round: ', res)
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
                console.log('post points res: ', res)
                this.setState({
                    pointsInput: ''
                })
                this.getPointTotals()
            })
            .catch(err => {
                console.log(err)
            });
    }
    // renderSuccessMsg = () => {
    //     this.setState({
    //         sucessMsg: 'This entry has been saved'
    //     })
    // }
    componentDidUpdate() {
        console.log('state: ', this.state.playerPoints)
        // console.log('typeof pointsTotal', typeof this.state.pointsTotal)
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
                
                <p className="inline-p">Enter and save the total points earned in this round for each player</p>
                    {this.state.players.map((player, i) => (
                        <div className="player-list" key={player + i}>
                            <label htmlFor={`${player}-input`}>{player}</label>
                            <input 
                                id={`${player}-input`}
                                type="number" 
                                value={this.state.playerPoints.map(playerPoint => (
                                    player === playerPoint.player ? playerPoint.total : 0
                                    // ? console.log('PLAYERPOINT',playerPoint.total)
                                ))}
                                onChange={e => this.setState({
                                    pointsInput: +e.target.value
                                })}
                                // TODO: why didn't this with onChange method work?
                                // onChange={e => this.onChange(e.target.value)}
                            />
                            {/* <p className="inline-p">{this.state.sucessMsg === '' 
                                    ? ''
                                    : this.state.sucessMsg
                            }</p> */}
                            <button 
                                onClick={() => this.handlePostData(player, this.state.pointsInput)}
                            >
                                Save
                            </button>
                        </div>
                    ))}
                <button onClick={() => window.history.back()}>Done</button>
            </PlayerList>
        );
    }
}

export default ViewRound;

// onChange = (id, input) => {
//     console.log('player Id: ', id)
//     console.log('point input: ', input)
    // const state = {
        // playerPoints: {
            // 1: {
                // birdie: 10
                //}
        // }
    // }
    // const playerPoints = {
    //     ...playerPoints,
    //     [id]: {
            
    //         this.state.playerPoints[id]
    //     }
    // }
    // this.setState({
    //     playerPoints
    // })
// }