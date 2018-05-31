import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  render() {
    return (
        <div>
            <h2><Link to="/dashboard/create-league">Create New League</Link></h2>
            <h2><Link to="/dashboard/active-leagues">Active Leagues</Link></h2>
        </div>
    );
  }
}

export default Dashboard;
