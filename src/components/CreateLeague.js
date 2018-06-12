import React from 'react';
import BasicSettings from './BasicSettings';
import PointSettings from './PointSettings';
import PlayerSettings from './PlayerSettings';
import styled from 'styled-components';

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
    }
    handleSave = () => {
        // TODO: Check if any of the fields on child components are empty?
        console.log('handleSave ran')
    }
    render() {
        return (
            <Style>
                <div>
                    <h2>Create League</h2>
                    <BasicSettings />
                    <PlayerSettings />
                    <PointSettings />
                    <button 
                        className="save-settings"
                        onClick={this.handleSave}
                    >
                        Create League
                    </button>
                    
                </div>
            </Style>
        );
    }
}

export default CreateLeague;