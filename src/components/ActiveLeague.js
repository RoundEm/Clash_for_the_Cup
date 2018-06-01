import React from 'react';
import PointsTable from './PointsTable';
import Standings from './Standings';
import { Link } from 'react-router-dom';

const ActiveLeague = () => {
    return (
        <div>
            <h2>{'League Name'}</h2>
            <button><Link to="/dashboard/active-leagues/:id/create-round">Create New Round</Link></button>
            <h3>Completed Rounds:</h3>
            <h3>Players:</h3>
            <h3>League Settings:</h3>
            <PointsTable />
            <h3>Standings:</h3>
            <Standings />
        </div>
        
    );
}

export default ActiveLeague;