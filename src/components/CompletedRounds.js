import React from 'react';
import styled from 'styled-components';

const leagueRounds = [
  {
      roundId: 1,
      golfCourse: 'Augusta',
      eventName: 'The Masters',
      date: '06/10/2018',
      players: [
          {id: 1},
          {id: 2},
          {id: 3},
          {id: 4}
      ]
  },
  {
      roundId: 2,
      golfCourse: 'Sahalee',
      eventName: 'PGA Championship',
      date: '06/25/2018',
      players: [
          {id: 1},
          {id: 2},
          {id: 3},
          {id: 5}
      ]
  },
  {
    roundId: 3,
    golfCourse: 'TPC Sawgrass',
    eventName: 'Players Championship',
    date: '7/10/2018',
    players: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4}
    ]
  }
]

const RoundCard = styled.div`
  border: 1px solid black;
  display: inline-block;
  margin: 3px;
  padding: 5px;
  border-radius: 3px;
`
class CompletedRounds extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          leagueRounds
      }
  }
  renderRoundData = () => this.state.leagueRounds.map((round, i) => (
    <RoundCard key={i}>
      <p>{round.eventName}</p>  
      <p>{round.golfCourse}</p>
      <p>{round.date}</p>
      {round.players.map((player, i) => (
          <p key={i}>{player.id}</p>
      ))}
    </RoundCard>
  ));
  render() {
    return (
      <div>
        {this.renderRoundData()}
      </div>
    );
  }
}

export default CompletedRounds;