import React from 'react';
import EditableField from './EditableField';
import styled from 'styled-components';
const axios = require('axios');
const { API_BASE_URL } = require('../config');

const PlayerList = styled.div`
    ul {
        margin: 25px 0 0 5px;
    }
    li {
        margin: 20px 0;
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
            pointDefinitions: []
        }       
    }
    componentDidMount() {
        
        //GET round details
        axios.get(`${API_BASE_URL}/leagues/${this.state.leagueId}/round/${this.state.roundId}`)
            .then(res => {
                // console.log('round: ', res.data);
                const data = res.data;
                const name = data.name;
                const course = data.course;
                const players = data.players;
                const date = data.date;
                TODO: // How to get league name? The data being returned only has ID for league
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
                console.log('point weight res data: ', res.data)
                let pointNames = []; 
                res.data.map(point => (
                    pointNames.push(point.type)
                ));
                this.setState({
                    pointDefinitions: pointNames
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    componentDidUpdate() {
        console.log('pointDefinitions: ', this.state.pointDefinitions)
    }
    render() {
        // const pointRows = (
        //     <td>{this.state.players.forEach(player => (
        //         null
        //     ))}</td>
        // )
        // const playerNamesHeader = (
        //     <div>{this.state.players.map((player, i) => (
        //             <th key={player + i}>{player}</th>
        //     ))}</div>
        // )

        return (
            <PlayerList>
                <h2>View Round</h2>
                <p>Course: {this.state.course}</p>
                <p>Event Name: {this.state.name}</p>
                <p>Date: {this.state.date}</p>
                <ul>
                    {this.state.players.map((player, i) => (
                        <div>
                            <li>{player}</li>
                            {this.state.pointDefinitions.map((point, i) => (
                                <div>
                                    <label htmlFor={point}>{point}</label>
                                    <input 
                                        type="number" 
                                        name={point}
                                    />
                                </div>
                            ))}
                            
                        </div>
                    ))}
                </ul>
                {/* <table>
                    <tbody>
                        <tr>
                            <th>Point Types</th>
                            {this.state.players.map((player, i) => (
                                    <th key={player + i}>{player}</th>
                            ))}
                        </tr>
                        {this.state.pointDefinitions.map((point, i) => (
                            <tr key={point + i}>
                                <td>{point}</td>
                                <td>{this.state.players.forEach(player => (
                                    null
                                ))}</td>
                            </tr>
                            
                        ))}
                    </tbody>
                </table> */}
            </PlayerList>
        );
    }
}

export default ViewRound;