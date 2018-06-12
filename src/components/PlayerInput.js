import React from 'react';

class PlayerInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            playersAdded: []
        }
    }
    handleInput = (e) => {
        this.setState({
            input: e.target.value
        }); 
    }
    handleAddPlayer = () => {
        if (this.state.playersAdded.includes(this.state.input)) {
            alert('This player has already been added');
        } else {
            this.setState({
                playersAdded: [...this.state.playersAdded, this.state.input],
                input: ''
            });
        }
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.input}
                    onChange={this.handleInput}
                />
                <button onClick={this.handleAddPlayer}>Add Player</button>
                <p>Players</p>
                <ul>
                    {this.state.playersAdded.map((player, i) => {
                        <li key={i}>{player}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default PlayerInput;