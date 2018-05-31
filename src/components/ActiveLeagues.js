import React from 'react';
import { Link } from 'react-router-dom';

const ActiveLeagues = () => {
    return (
        <div>
            <h2>Active Leagues</h2>
            <button><Link to="/dashboard/record-round">Record New Round</Link></button>
        </div>
        
    );
}

export default ActiveLeagues;