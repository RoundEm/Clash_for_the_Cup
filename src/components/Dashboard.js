import React from 'react';
import { Link } from 'react-router-dom';
import CreateLeague from './CreateLeague';
import CompletedRounds from './CompletedRounds';
import RecordNewRound from './RecordNewRound';


class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <CompletedRounds />
        <CreateLeague />
        <CreateNewRound />
      </div>
    )
  }
}

export default Dashboard;
