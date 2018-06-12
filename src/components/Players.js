import React from 'react';

const playersInLeague = [
    { id: 1, name: 'Bob Ducca' },
    { id: 2, name: 'Melissa Wompler' },
    { id: 3, name: 'August Lindt' },
    { id: 4, name: 'Dom DiMello' },
    { id: 5, name: 'Dalton Wilcox' }
]

class Players extends React.Component {
    constructor() {
        super();
        this.state = {
            playersInLeague,
            playersAddedToRound: [],
        }
    }
    handleClick = player => {
        const id = player.id;
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
        <li 
            key={i}
            onClick={() => this.handleClick(player)}
            className={this.state.playersAddedToRound.includes(player.id) 
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