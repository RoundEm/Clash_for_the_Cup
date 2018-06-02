import React from 'react';
import PointsTable from './PointsTable';
import '../index.css';

class CreateNewLeague extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            removePlayer: ''
        }
    }
    addPlayer = (e) => {
        e.preventDefault();
        if (this.player.value === "") {
            alert('Please enter a name');
        } else {
            const newPlayer = { 
                name: this.player.value.trim(),
                key: Date.now()
            }
            this.setState({
                players: [...this.state.players, newPlayer]            
            });
            this.player.value = '';
            this.player.focus();
        }
    }
    removePlayer = (key) => {  
        this.setState({
            players: this.state.players.filter(player => player.key != key)
        });
    }
    render() {
        const players = this.state.players.map(player => (
            <li key={player.key} onClick={() => this.removePlayer(player.key)}>{player.name}</li>
        ));
        const removePlayerVerbiage = 
            this.state.players.length === 0 
            ? '' 
            : <p>Select player name to remove them</p>;

        return (
            <div id="create-new-league" className="form-container">
                <h2>Create New League</h2>
                <form onSubmit={(e) => {this.addPlayer(e)}}>
                    <fieldset>
                        <div>
                            <label>League Name</label>
                            <input type="text" required />
                            <label>Season End Date</label>
                            <input type="date" required />
                            <label>Players</label>
                            <input 
                                type="text" 
                                id="add-players"
                                ref={i => this.player = i}
                             />
                            <button>Add Player</button>
                            {removePlayerVerbiage}
                            <ul className="player-list">
                                {players}
                            </ul>
                            <p>Points Settings</p>
                            <PointsTable />
                        </div>
                    </fieldset>
                </form>
                <button type="submit">Submit</button>
            </div>
        );
    }
}

export default CreateNewLeague;