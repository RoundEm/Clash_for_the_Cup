import React from 'react';
const axios = require('axios');
const { API_BASE_URL } = require('../config');

const Standings = props => {
  console.log('Standings props: ', props)
  return (
      <table>
        <tbody>
          <tr>
            {/* <th>Place</th> */}
            <th>Player</th>
            <th>Points</th>
          </tr>
          {props.points.map(player => (
            <tr>
              <td>{player.id}</td>
              <td>{player.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default Standings;