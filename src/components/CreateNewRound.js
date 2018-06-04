import React from 'react';
import Players from './Players';

// TODO: AJAX request to get a list of players in league
class CreateNewRound extends React.Component {
    render() {
        return (
            <div>
                <h2>Create New Round</h2>
                <form>
                    <fieldset>
                        <label htmlFor="round-date">Date</label>
                        <input type="date" id="round-date" />
                        <label htmlFor="round-course">Course Name</label>
                        <input type="text" id="round-course" />
                        <label htmlFor="round-name">Event Name</label>
                        <input type="text" id="round-name" />
                        <Players />
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default CreateNewRound;