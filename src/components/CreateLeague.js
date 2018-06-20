import React from 'react';
import BasicSettings from './BasicSettings';
import PointSettings from './PointSettings';
import PlayerSettings from './PlayerSettings';
import styled from 'styled-components';

const Style = styled.div`
    width: 650px;
    margin: 7px auto;
    padding: 10px;
    border: 2px solid #b8eac8;
    border-radius: 5px;
    background-color: #D3D3D3;
    overflow: hidden;
    h2 {
        margin: 5px 0 15px;
        color: #24b68e;
    }
    li, p, label {
        color: grey;
    }
    h3 {
        color: grey;
    }
    label {
        display: block;
    }
    input {
        border: 1px solid #D3D3D3;
    }
    button.save-settings {
        margin: 15px 0 5px;
        float: right;
    }
    div.section-container {
        background-color: white;
        border: 1px solid #D3D3D3;
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
                    <button onClick={() => window.history.back()}>Done</button>
                </div>
            </Style>
        );
    }
}

export default CreateLeague;