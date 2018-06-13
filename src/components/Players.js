import React from 'react';
const axios = require('axios');
const { API_BASE_URL } = require('../config');

class Players extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leagueId: window.location.pathname.split('/')[3],
            playersInLeague: this.props.players || [],
            playersAddedToRound: [],
        }
    }
    componentDidMount() {
        // GET league players
        axios.get(`${API_BASE_URL}/leagues/${this.state.leagueId}`)
            .then(res => {
                const playersInLeague = res.data.players;
                console.log('players: ', playersInLeague);
                this.setState({
                    playersInLeague
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    handleClick = player => {
        const id = player._id;
        this.state.playersAddedToRound.includes(id) 
            ? this.removePlayerFromRound(id)
            : this.addPlayerToRound(id)
    }
    addPlayerToRound = id => {
        // console.log('add player', id)
        this.setState({
            playersAddedToRound: [...this.state.playersAddedToRound, id]
        });
    }
    removePlayerFromRound = id => {
        // console.log('delete player', id)
        const playerIndex = this.state.playersAddedToRound.indexOf(id);
        this.setState({
            playersAddedToRound: [...this.state.playersAddedToRound.filter((_, i) => i !== playerIndex)]
        });
    }
    renderPlayers = () => this.state.playersInLeague.map((player, i) => (
        console.log('renderPlayers: ', player),
        <li 
            key={player.name + i}
            onClick={() => this.handleClick(player)}
            className={this.state.playersAddedToRound.includes(player._id) 
                ? "player-list activePlayer" 
                : "player-list"
            }
        >
            {player.name}
        </li>
    ));
    componentDidUpdate() {
        console.log('playersAddedToRound: ', this.state.playersAddedToRound)
    }
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

export default Players;