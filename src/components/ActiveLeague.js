import React from 'react';
import Players from './Players';
import CompletedRounds from './CompletedRounds';
import PointsTable from './PointsTable';
import Standings from './Standings';
import { Link } from 'react-router-dom';

// TODO: AJAX request to get data for: league name, points table; completed rounds; players; standings
const ActiveLeague = () => {
    return (
        <div>
            <h2>{'League Name'}</h2>
            <button><Link to="/dashboard/active-leagues/:id/create-round">Create New Round</Link></button>
            <h3>Completed Rounds:</h3>
            <CompletedRounds />
            <h3>Players:</h3>
            <Players />
            <h3>Standings:</h3>
            <Standings />
            <h3>League Settings:</h3>
            <PointsTable />
        </div>
        
    );
}

export default ActiveLeague;