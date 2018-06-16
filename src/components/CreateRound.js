import React from 'react';
// import PlayersRound from './PlayersRound';
import styled from 'styled-components';
const axios = require('axios');
const { API_BASE_URL } = require('../config');

const Style = styled.div`
    width: 650px;
    margin: 7px auto;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #E6E6FA;
    overflow: hidden;
    h2 {
        margin: 5px 0 15px;
    }
    fieldset {
        border: none;
        border-radius: 5px;
        background: white;
        padding: 10px;
    }
    label {
        display: block;
    }
    input {
        border: 1px solid #E6E6FA;
    }
    button {
        margin: 15px 0 5px;
        float: right;
    }
    div {
        background-color: #E6E6FA;
        border: 1px solid #E6E6FA;
        border-radius: 5px;
        margin: 5px;
        padding: 5px;
    }
    li {
        padding: 3px;
        margin: 2px;
        border-radius: 3px;
    }
    li:hover {
        cursor: pointer;
    } 
    button.save-settings {
        margin: 15px 0 5px;
        float: right;
    }
    div.section-container {
        background-color: white;
        border: 1px solid #E6E6FA;
        border-radius: 5px;
        margin: 5px;
        padding: 10px;
    }
`

class CreateRound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leagueId: window.location.pathname.split('/')[3],
            playersInLeague: [],
            playersAddedToRound: [],
            roundDate: '',
            roundCourse: '',
            roundName: ''
        }
    }
    componentDidMount() {
        // GET league players
        axios.get(`${API_BASE_URL}/leagues/${this.state.leagueId}`)
            .then(res => {
                const playersInLeague = res.data.players;
                // console.log('players: ', playersInLeague);
                this.setState({
                    playersInLeague
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    renderPlayers = () => this.state.playersInLeague.map((player, i) => (
        <li 
            key={player.name + i}
            onClick={() => this.handlePlayerClick(player)}
            className={this.state.playersAddedToRound.includes(player._id) 
                ? "player-list activePlayer" 
                : "player-list"
            }
        >
            {player.name}
        </li>
    ));
    handlePlayerClick = player => {
        const id = player._id;
        console.log('id', id)
        this.state.playersAddedToRound.includes(id) 
            ? this.removePlayerFromRound(id)
            : this.addPlayerToRound(id)
    }
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
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
    // handlePostData = () => {
    //     // TODO: Best way to check if any fields in state are incomplete???
    //     const data = {
    //         date: this.state.roundDate,
    //         course: this.state.roundCourse,
    //         name: this.state.roundName,
    //         league: this.state.leagueId
    //     }
    //     // POST new round
    //     axios.post(`${API_BASE_URL}/leagues/${this.state.leagueId}/round`, data)
    //         .then(res => {
    //             console.log('posted round:', res)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }
    componentDidUpdate() {
        console.log('this.state.playersAddedToRound: ', this.state.playersAddedToRound)
    }
    render() {
        return (
            <Style>
                <div>
                    <h2>Create New Round</h2>
                    <div className="section-container">     
                        <h3>Date</h3>
                        <input 
                            type="date" 
                            id="round-date"
                            name="roundDate" 
                            onChange={e => this.handleInput(e)}
                        />
                        <h3>Course</h3>
                        <input 
                            type="text" 
                            id="round-course"
                            name="roundCourse" 
                            onChange={e => this.handleInput(e)}
                        />
                        <h3>Round Name</h3>
                        <input 
                            type="text" 
                            id="round-name" 
                            name="roundName"
                            onChange={e => this.handleInput(e)}
                        />
                        <p>Select players to activate them for this round</p>
                        <div className="players-in-round">
                            <ul>
                                {this.renderPlayers()}
                            </ul>
                        </div>
                    </div>
                    <button 
                            onClick={this.handlePostData}
                        >
                            Create Round
                        </button>
                </div>
            </Style>

        );
    }
}

export default CreateRound;