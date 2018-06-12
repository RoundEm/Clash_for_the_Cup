import React from 'react';

class BasicSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leagueName: '',
            leagueEndDate: ''
        }
    }
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSetData = () => {
        // TODO: AJAX call
    }
    componentDidUpdate() {
        console.log('name: ', this.state.leagueName)
        console.log('end date: ', this.state.leagueEndDate)

    }
    render() {
        return (
            <div className="section-container">
                <h3>Basic Info</h3>
                <label htmlFor="league-name">League Name</label>
                <input 
                    type="text"
                    value={this.state.leagueName}
                    id="league-name"
                    name="leagueName"
                    onChange={e => this.handleInput(e)}
                />
                <label htmlFor="league-end">Season End Date</label>
                <input 
                    type="date"
                    value={this.state.leagueEndDate}
                    id="league-end"
                    name="leagueEndDate"
                    onChange={e => this.handleInput(e)}
                />    
                <button onClick={this.handleSetData}>
                    Set Basic Info
                </button>
            </div>
        );
    }
} 
    
export default BasicSettings;