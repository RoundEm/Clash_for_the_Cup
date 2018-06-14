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
        console.log('league res: ', res.data);
        const leagues = res.data
        // TODO: Why was this not working correctly when I had setState setup like this?:
        // this.setState({
        //   leagues: [...this.state.leagues, leagues]
        // });
        this.setState({
          leagues
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  renderLeagues = () => this.state.leagues.map((league, i) => (
    <Link to={`/dashboard/leagues/${league.id}`}>
      <LeagueCard
      key={league + i}
      className="info-card"
      >
        <p>{league.name}</p>
        <p>{league.endDate}</p>
        {/* TODO: make sure this is working once players are being assinged to leagues correctly */}
        {/* {league.players.map((player, i) => (
          <p key={player + i}>{player.name}</p>
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
          <h2>Active Leagues:</h2>
          {this.renderLeagues()}
          <button><Link to="/dashboard/create-league">Create New League</Link></button>
          
        </div>
    );
  }
}

export default Dashboard;
