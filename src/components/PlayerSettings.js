import React from 'react';
import AddPlayer from './AddPlayer';
const axios = require('axios');
const { API_BASE_URL } = require('../config');

class PlayerSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            leagueId: '',
            playersAdded: []
        }
    }
    handleInput = e => {
        this.setState({
            input: e.target.value
        }); 
    }
    handleAddPlayer = () => {
        if (this.state.input === "") {
            alert('You must enter some data first');
        } else if (this.state.playersAdded.includes(this.state.input)) {
            alert('This entry has already been added');
        } else {
            const newPlayer = {
                name: this.state.input.trim(),
                key: Date.now()
            }
            this.setState({
                playersAdded: [...this.state.playersAdded, newPlayer],
                input: ''
            });
        }
        this.input.focus()
    }
    removePlayer = key => {
        this.setState({
            playersAdded: this.state.playersAdded.filter(data => data.key !== key)
        });
    }


    handleClick = playersAdded => {
        if (playersAdded.length === 0) {
            alert('Please add at least one type to continue')
            return;
        } 
        this.setState({
            playersAdded,
            leagueId: this.props.leagueId
        });
        const promises = this.state.playersAdded.map(player => this.addPlayerToLeague(player));
        Promise.all(promises)
            .then(responses => {
                console.log('POST players res: ', responses);
            })
            .catch(err => {
                console.log(err);
            });
    }
    addPlayerToLeague = player => {
        return axios.post(`${API_BASE_URL}/leagues/${this.props.leagueId}/players`, player)
            
    }
    componentDidUpdate() {
        console.log('PlayerSettings state: ', this.state)
    }
    render() {
        const players = this.state.playersAdded.map((data, i) => (
            <li 
                key={i}
                onClick={() => this.removePlayer(data.key)}
                className="player-added-list"
            >
                {data.name}
            </li>
        ));
        const removePlayerVerbiage = 
        this.state.playersAdded.length === 0 
            ? '' 
            : <p>Select a player to remove them</p>;

        return (
            <div className="section-container">
                <h3>Players</h3>        
                <input
                    type="text"
                    value={this.state.input}
                    onChange={this.handleInput}
                    autoComplete="off"
                    ref={i => this.input = i}
                />
                <button 
                    onClick={this.handleAddPlayer}
                    className="add-button"
                >
                    Add player
                </button>
                {removePlayerVerbiage}
                <ul>
                    {players}
                </ul>
                <button 
                    onClick={() => this.handleClick(this.state.playersAdded)}
                >
                    Set Players
                </button>
            </div>
        );
    }
}

export default PlayerSettings;