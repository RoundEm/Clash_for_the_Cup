import React from 'react';
const axios = require('axios');
const { API_BASE_URL } = require('../config');

class BasicSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leagueName: '',
            leagueEndDate: '',
            leagueId: '',
            activeComponent: 0
        }
    }
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handlePostData = () => {
        const data = {
            name: this.state.leagueName,
            endDate: this.state.leagueEndDate
        }
        if (this.state.leagueEndDate === '' || this.state.leagueName === '') {
            alert("Please complete both fields above before continuing")
        } else {
            // POST basic league data
            axios.post(`${API_BASE_URL}/league`, data)
                .then(res => {
                    console.log('POST ran')
                    this.setState({
                        leagueId: res.data.id,
                        activeComponent: 1
                    });  
                    this.passDataToParent(res.data.id)
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
    passDataToParent = leagueId => {
        this.props.onSave(leagueId);
    }
    render() {
        return (
            <div 
                className="section-container" 
                style={{backgroundColor: this.state.activeComponent === 1 ? '#e8ebef' : '', color: this.state.activeComponent === 1 ? 'grey' : ''}}
            >
                <h3>Basic Info</h3>
                <label htmlFor="league-name">League Name</label>
                <input 
                    type="text"
                    value={this.state.leagueName}
                    id="league-name"
                    name="leagueName"
                    onChange={e => this.handleInput(e)}
                    disabled={this.state.activeComponent === 1 ? true : false}
                />
                <label htmlFor="league-end">Season End Date</label>
                <input 
                    type="date"
                    value={this.state.leagueEndDate}
                    id="league-end"
                    name="leagueEndDate"
                    onChange={e => this.handleInput(e)}
                    disabled={this.state.activeComponent === 1 ? true : false}
                />    
                <button 
                    onClick={this.handlePostData}
                    disabled={this.state.activeComponent === 1 ? true : false}
                >
                    Set Basic Info
                </button>
            </div>
        );
    }
} 
    
export default BasicSettings;