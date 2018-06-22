import React from 'react';
const axios = require('axios');
const { API_BASE_URL } = require('../config');

const Standings = props => {
  console.log('Standings props: ', props)
  // const playersWithPoints = props.players;
  return (
      <table>
        <tbody>
          <tr>
            <th>Player</th>
            <th>Points</th>
          </tr>
          {/* TODO: Refactor these loops (along with CreateRound & ActiveLeague)  so that you don't have to do so much looping to get name?? */}
          {props.points.map((player, i) => (
              <tr key={player + i}>
                <td>{props.players.map((_player) => (
                  _player._id === player.id ? _player.name : ''))}</td>
                <td>{player.total}</td>
              </tr>
          ))}
        </tbody>
      </table>
  )
}

export default Standings;