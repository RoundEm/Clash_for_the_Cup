import React from 'react';
import styled from 'styled-components';

const RoundCard = styled.div`
  border: 1px solid black;
  display: inline-block;
  margin: 3px;
  padding: 5px;
  border-radius: 3px;
`
const CompletedRounds = (props) => {
  console.log('CompletedRounds props: ', props)
  const completedRounds = props.rounds.map((round, i) => (
    <RoundCard key={round + i}>
      <p>{round.course}</p>
      <p>{round.date}</p>
      {round.players.map((player, i) => (
        <p key={player + i}>{player}</p>
      ))}
    </RoundCard>
  ));
  return (
    <div>
      {completedRounds}
    </div>
  );
}

export default CompletedRounds;