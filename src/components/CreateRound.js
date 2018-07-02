import React from 'react';
import styled from 'styled-components';
const axios = require('axios');
const { API_BASE_URL } = require('../config');

const Style = styled.div`
    width: 60%;
    margin: 7px auto;
    padding: 10px;
    border: 2px solid #b8eac8;      
    border-radius: 5px;
    background-color: #b8eac8;
    overflow: hidden;
    h2 {
        margin: 5px 0 15px;
        color: #075e15;
    }
    label {
        display: block;
        color: black;
    }
    input {
        border: 1px solid #D3D3D3;
    }
    input[type="date"] {
        width: 220px;
    }
    button {
        margin: 15px 0 5px;
    }
    div {
        background-color: #b8eac8;
        border-radius: 5px;
        margin: 5px;
        padding: 5px;
    }
    p {
        color: black;
    }
    li {
        padding: 3px;
        margin: 2px;
        border-radius: 3px;
        color: #075e15;
    }
    li:hover {
        cursor: pointer;
    } 
    div.section-container {
        background-color: white;
        border: 1px solid #E6E6FA;
        border-radius: 5px;
        margin: 5px;
        padding: 10px;
    }
    @media (max-width: 768px) {
        input[type="text"] {
            width: 85%;
        }
        input[type="date"] {
            width: 50%;
        }
        width: 85%;
    }
    @media (max-width: 668px) {
        input[type="text"] {
            width: 90%;
        }
        input[type="date"] {
            width: 70%
        }
        width: 90%;
        font-size: .85em;
    }
    @media (max-width: 468px) {
        input[type="text"] {
            width: 95%;
        }
        input[type="date"] {
            width: 70%
        }
        width: 100%;
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
            key={player._id + i}
            onClick={() => this.handlePlayerClick(player)}
            className={this.state.playersAddedToRound.includes(player._id) 
                ? "activePlayer" 
                : ""
            }
        >
            {player.name}
        </li>
    ));
    handlePlayerClick = player => {
        const name = player.name;
        const id = player._id;
        this.state.playersAddedToRound.includes(id, name) 
            ? this.removePlayerFromRound(id, name)
            : this.addPlayerToRound(id, name)
    }
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    addPlayerToRound = id => {
        this.setState({
            playersAddedToRound: [...this.state.playersAddedToRound, id]
        });
    }
    removePlayerFromRound = id => {
        const playerIndex = this.state.playersAddedToRound.indexOf(id);
        this.setState({
            playersAddedToRound: [...this.state.playersAddedToRound.filter((_, i) => i !== playerIndex)]
        });
    }
    handlePostData = () => {
        const data = {
            league: this.state.leagueId,
            date: this.state.roundDate,
            course: this.state.roundCourse,
            name: this.state.roundName,
            players: this.state.playersAddedToRound
        }
        for (const objValue in data) {
            if (data[objValue] === '' || data[objValue].length === 0) {
                // TODO: make this a modal or just text on the page
                alert('Please complete all fields and add at least 1 player');
                return;
            } 
        }
        axios.post(`${API_BASE_URL}/leagues/${this.state.leagueId}/round`, data)
            .then(res => {
                window.history.back()
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <Style>
                <div>
                    <h2>Create New Round</h2>
                    <div className="section-container">     
                        <label htmlFor="round-date">Date</label>
                        <input 
                            type="date" 
                            id="round-date"
                            name="roundDate" 
                            onChange={e => this.handleInput(e)}
                        />
                        <label htmlFor="round-course">Course</label>
                        <input 
                            type="text" 
                            id="round-course"
                            name="roundCourse" 
                            onChange={e => this.handleInput(e)}
                        />
                        <label htmlFor="round-name">Round Name</label>
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
                    <button onClick={this.handlePostData}>Create Round</button>
                </div>
            </Style>

        );
    }
}

export default CreateRound;