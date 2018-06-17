import React from 'react';
import BasicSettings from './BasicSettings';
import PointSettings from './PointSettings';
import PlayerSettings from './PlayerSettings';
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
    label {
        display: block;
    }
    input {
        border: 1px solid #E6E6FA;
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

class CreateLeague extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leagueId: ''
        }
    }
    handleBasicSave = leagueId => {
        this.setState({
            leagueId
        });
        this.refs.childBasic.updateActiveComponent(1);
    }
    handlePlayerSave = () => {
        this.refs.childPlayer.updateActiveComponent(1);
    }
    handleDone = () => {
        window.history.back();
    }
    componentDidUpdate() {
        console.log('CreateLeague activeComponent: ', this.state.activeComponent)
    }
    render() {
        return (
            <Style>
                <div>
                    <h2>Create League</h2>
                    <BasicSettings 
                        onSave={this.handleBasicSave} 
                        // active={this.state.activeComponent === 1}
                    />
                    <PlayerSettings 
                        leagueId={this.state.leagueId} 
                        onSave={this.handlePlayerSave}
                        ref="childBasic"

                    />
                    <PointSettings 
                        leagueId={this.state.leagueId} 
                        ref="childPlayer"
                    />
                </div>
            </Style>
        );
    }
}

export default CreateLeague;