import React from 'react';
import BasicSettings from './BasicSettings';
import PointSettings from './PointSettings';
import PlayerSettings from './PlayerSettings';
import PrizeSettings from './PrizeSettings';
import styled from 'styled-components';

const Style = styled.div`
    width: 67%;
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
    li, p, label {
        color: black;
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
    input[type="date"] {
        width: 220px;
    }
    button.done {
        margin: 15px 0 5px;
    }
    div.section-container {
        background-color: white;
        border: 1px solid #D3D3D3;
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
    render() {
        return (
            <Style>
                <div>
                    <h2>Create League</h2>
                    <i><p>Ensure that each section is correct before continuing</p></i>
                    <BasicSettings 
                        onSave={this.handleBasicSave} 
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
                    {/* TODO: Fully implement component and back-end 
                    <PrizeSettings
                        leagueId={this.state.leagueId} 
                        ref="childPrize"
                    /> */}
                    <button className="done" onClick={() => window.history.back()}>Done</button>
                </div>
            </Style>
        );
    }
}

export default CreateLeague;