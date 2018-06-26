import React from 'react';
const axios = require('axios');
const { API_BASE_URL } = require('../config');

class PrizeSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            leagueId: '',
            prizesAdded: [],
            activeComponent: 0
        }
    }
    handleInput = e => {
        this.setState({
            input: e.target.value
        }); 
    }
    handleAddPrize = () => {
        if (this.state.prizesAdded.includes(this.state.input)) {
            alert('This player has already been added');
        } else {
            const newPrize = {
                name: this.state.input.trim(),
                key: Date.now()
            }
            this.setState({
                prizesAdded: [...this.state.prizesAdded, newPrize],
                input: ''
            });
        }
        this.input.focus()
    }
    removePlayer = key => {
        this.setState({
            prizesAdded: this.state.prizesAdded.filter(data => data.key !== key)
        });
    }
    handleSavePrizes = prizesAdded => {
        this.setState({
            prizesAdded,
            leagueId: this.props.leagueId
        });
        const promises = this.state.prizesAdded.map(prize => this.addPrizesToLeague(prize));
        Promise.all(promises)
            .then(res => {
                console.log('POST players res: ', res);
                this.setState({
                    activeComponent: 0
                });
                this.props.onSave();
            })
            .catch(err => {
                console.log(err);
            });
    }
    addPlayerToLeague = prize => {
        return axios.post(`${API_BASE_URL}/leagues/${this.props.leagueId}/prizes`, prize)
            
    }
    render() {
        return (
            <div className="section-container">
                <h3>Prize Settings</h3>
                <input
                    type="text"
                    value={this.state.input}
                    onChange={this.handleInput}
                />
                <button
                    onClick={this.handleAddPrize}
                    class="add-button"
                >
                    Add Prize
                </button>
            </div>
        )
    }
} 

export default PrizeSettings;