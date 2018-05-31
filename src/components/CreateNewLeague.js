import React from 'react';
import '../index.css';

class CreateNewLeague extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: []
        }
    }
    addPlayer(e) {
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
        };
        
    }
    componentDidUpdate() {
        console.log('this.state.players: ', this.state.players)
    }

    render() {
        return (
            <div id="create-new-league" className="form-container">
                <h2>Create New League</h2>
                <form onSubmit={(e) => {this.addPlayer(e)}}>
                    <fieldset>
                        <div>
                            <label>League Name</label>
                            <input type="text" />
                            <label>Players</label>
                            <input 
                                type="text" 
                                ref={i => this.player = i}
                                placeholder={'Add Player'}
                             />
                            <button type="submit">Add Player</button>
                            <ul className="player-list">

                            </ul>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default CreateNewLeague;