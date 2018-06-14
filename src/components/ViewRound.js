import React from 'react';
import EditableField from './EditableField';
const axios = require('axios');
const { API_BASE_URL } = require('../config');

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
                    pointNames.push(point.name)
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
        console.log('this.state.pointDefinitions: ', this.state.pointDefinitions)
    }
    render() {
        const playerNamesHeader = (
            <div>{this.state.players.map((player, i) => (
                    <th key={player + i}>{player}</th>
            ))}</div>
        )
        const points = (
            <div>{this.state.pointDefinitions.map((point, i) => (
                <tr>
                    <td>{point}</td>
                </tr>
            ))}</div>
        )

        return (
            <div>
                <h2>View Round Details</h2>
                <p>Course: {this.state.course}</p>
                <p>Event Name: {this.state.name}</p>
                <p>Date: {this.state.date}</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Point Types</th>
                            {playerNamesHeader}
                        </tr>
                            {points}
                            <EditableField />
                            <EditableField />
                            <EditableField />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ViewRound;