import React from 'react';

const RecordNewRound = () => {
  return (
    <div>
        <h2>Record Completed Round</h2>
        <form>
            <fieldset>
                <label>Date</label>
                <input type="date"></input>
                <label>Course Name</label>
                <input type="text"></input>
            </fieldset>
        </form>
    </div>
  );
}

export default RecordNewRound;