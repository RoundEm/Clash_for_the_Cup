import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

const RoundCard = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  display: inline-block;
  padding: 10px;
  margin: 10px;
  vertical-align: top;
`
const CompletedRounds = (props) => {
  console.log('CompletedRounds props: ', props)
  const leagueId = props.league;
  const completedRounds = props.rounds.map((round, i) => (
    <Link to={`/dashboard/leagues/${leagueId}/round/${round._id}`}>
      <RoundCard 
        key={round + i}
        className="info-card"
      >
        <p>{round.name}</p>
        <p>{round.course}</p>
        <p>{round.date}</p>
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

export default CompletedRounds;