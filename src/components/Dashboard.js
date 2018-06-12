import React from 'react';
import { Link } from 'react-router-dom';

// TODO: AJAX request for different leagues and map over to render cards with player names and league name
class Dashboard extends React.Component {
  render() {
    return (
        <div>
            <h2><Link to="/dashboard/create-league">Create New League</Link></h2>
            <h2>Active Leagues:</h2>
            {/* TODO: remove this temp styling and dummy data */}
            <Link to="/dashboard/active-leagues/:id"><div style={{border: '1px solid black', float: 'left', padding: 10}}>
              <p>League #1</p>
              <p>Players</p>
              <ul>
                <li>Eric</li> 
                <li>Luke</li>
                <li>Johnny</li>
                <li>Jason</li>
              </ul>
            </div></Link>
        </div>
    );
  }
}

export default Dashboard;
