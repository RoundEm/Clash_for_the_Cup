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
                let players = res.data.players;
                this.setState({
                    players
                });
                this.sortPlayers();
            })
            .catch(err => {
                console.log(err);
            });
    }
    sortPlayers = () => {
        const sorted = this.state.players.sort((a, b) => {
			let _a = a.name.toLowerCase();
			let _b = b.name.toLowerCase();
			if (_a < _b) return -1;
			if (_a > _b) return 1;
            return 0;
        }
    )};
    render() {
        return (
            <div>
                <ul>
                    {this.state.players.map((player, i) => (
                        <li key={player.name + i}>
                            {player.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default RenderPlayers;