import React from 'react';

class AddPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
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
            const newPlayers = {
                name: this.state.input.trim(),
                key: Date.now()
            }
            this.setState({
                playersAdded: [...this.state.playersAdded, newPlayers],
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
    componentDidUpdate() {
        console.log('this.state.playersAdded: ', this.state.playersAdded)
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
            <div>
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
                    onClick={() => this.props.handleClick(this.state.playersAdded)}
                >
                    Set Players
                </button>
            </div>
        );
    }
}

export default AddPlayer;