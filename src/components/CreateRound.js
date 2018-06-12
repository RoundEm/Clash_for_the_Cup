import React from 'react';
import Players from './Players';
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
        margin: 5px 0 5px;
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
`

// TODO: AJAX request to get a list of players in league
class CreateRound extends React.Component {
    render() {
        return (
            <Style>
                <h2>Create New Round</h2>
                <div>
                    
                    <form>
                        <fieldset>
                            <label htmlFor="round-date">Date</label>
                            <input type="date" id="round-date" />
                            <label htmlFor="round-course">Course Name</label>
                            <input type="text" id="round-course" />
                            <label htmlFor="round-name">Event Name</label>
                            <input type="text" id="round-name" />
                            <p>Select players to activate them for this round</p>
                            <Players />
                        </fieldset>
                    </form>
                    <button type="submit">Create Round</button>
                </div>
            </Style>

        );
    }
}

export default CreateRound;