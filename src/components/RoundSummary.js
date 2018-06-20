import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

const RoundCard = styled.div`
  border: 2px solid #b8eac8;
  border-radius: 5px;
  text-align: center;
  display: inline-block;
  padding: 10px;
  margin: 10px;
  vertical-align: top;
`
const RoundSummary = (props) => {
  // console.log('RoundSummary props: ', props)
  const leagueId = props.league;
  const completedRounds = props.rounds.map((round, i) => (
    <Link 
      to={`/dashboard/leagues/${leagueId}/round/${round._id}`}
      key={round + i}
    >
      <RoundCard 
        className="info-card"
      >
        <p><b>{round.name}</b></p>
        <p><b>{round.course}</b></p>
        <p><b>{round.date}</b></p>
        {round.players.map((player, i) => (
            <p key={player + i}>{player}</p>
        ))}
      </RoundCard>
    </Link>
  ));
  return (
    <div>
      {completedRounds}
    </div>
  );
}

export default RoundSummary;