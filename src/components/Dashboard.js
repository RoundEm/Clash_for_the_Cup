import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const axios = require('axios');
const { API_BASE_URL } = require('../config');

const LeagueCard = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  display: inline-block;
  padding: 10px;
  margin: 10px;
  vertical-align: top;
`

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leagues: []
    }
  }
  componentDidMount() {
    // GET leagues
    axios.get(`${API_BASE_URL}/leagues`)
      .then(res => {
        const leagues = res.data
        console.log('league res: ', res.data)
        this.setState({
          leagues
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  renderLeagues = () => this.state.leagues.map((league, i) => (
    <Link 
      to={`/dashboard/leagues/${league.id}`}
      key={league + i}
    >
      <LeagueCard
        className="info-card"
      >
        <p>{league.name}</p>
        {/* TODO: This causes error when active */}
        {/* {league.players.map((player, i) => (
          <p key={player + i}>{player}</p>
        ))} */}
      </LeagueCard>
    </Link>
  ));

  componentDidUpdate() {
    console.log('this.state.leagues: ', this.state.leagues)
  }
  render() {
    return (
        <div>
          <Link to="/dashboard/create-league"><button>Create New League</button></Link>
          <h2>Active Leagues:</h2>
          {this.renderLeagues()}
        </div>
    );
  }
}

export default Dashboard;
