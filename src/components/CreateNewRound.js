import React from 'react';
import Players from './Players';

// TODO: AJAX request to get a list of players in league
const CreateNewRound = () => {
  return (
    <div>
        <h2>Create New Round</h2>
        <form>
            <fieldset>
                <label>Date</label>
                <input type="date"></input>
                <label>Course Name</label>
                <input type="text"></input>
                <label>Event Name</label>
                <input type="text"></input>
                <label>Players</label>
                <Players />
            </fieldset>
        </form>
    </div>
  );
}

export default CreateNewRound;