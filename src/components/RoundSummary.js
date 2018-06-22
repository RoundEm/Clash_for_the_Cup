import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
const moment = require('moment');

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
  const playersInRound = props.players;
  console.log('PLAYERS PROPS: ',playersInRound)
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
        <p><b>{moment.utc(round.date).format("MM-DD-YYYY")}</b></p>
        {round.players.map((player, i) => (
          playersInRound.map((_player) => (
            <p key={player + i}>{_player._id === player ? _player.name : ''}</p>
          ))
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