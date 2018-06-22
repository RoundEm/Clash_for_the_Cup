import React from 'react';
const axios = require('axios');
const { API_BASE_URL } = require('../config');

class RenderPlayers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leagueId: window.location.pathname.split('/')[3],
            players: this.props.players || []
        }
    }
    componentDidMount() {
        // GET league players
        axios.get(`${API_BASE_URL}/leagues/${this.state.leagueId}`)
            .then(res => {
                const players = res.data.players;
                this.setState({
                    players
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    renderPlayers = () => this.state.players.map((player, i) => (
        <li 
            key={player.name + i}
        >
            {player.name}
        </li>
    ));
    render() {
        return (
            <div>
                <ul>
                    {this.renderPlayers()}
                </ul>
            </div>
        );
    }
}

export default RenderPlayers;