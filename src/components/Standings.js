import React from 'react';

const Standings = props => {
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
                  _player._id === player.id 
                    ? _player.name 
                    : ''))}
                </td>
                <td>{player.total}</td>
              </tr>
          ))}
        </tbody>
      </table>
  )
}

export default Standings;