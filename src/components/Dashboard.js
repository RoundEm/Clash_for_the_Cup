import React from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios');
const { API_BASE_URL } = require('../config');

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leagues: []
    }
  }
  componentDidMount() {
    axios.get(`${API_BASE_URL}/leagues`)
      .then(res => {
        // console.log('league res: ', res.data);
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
      <div 
        key={league + i}
        style={{border: '1px solid black', float: 'left', padding: 10, color: 'black'}}
      >
        <p>{league.name}</p>
        <p>{league.endDate}</p>
      </div>
    </Link>
  ));

  componentDidUpdate() {
    console.log('this.state.leagues: ', this.state.leagues)
  }
  render() {
    return (
        <div>
            {this.renderLeagues()}
        </div>
    );
  }
}

export default Dashboard;
