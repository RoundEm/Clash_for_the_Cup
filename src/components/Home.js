import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import trophyIcon from '../assets/004-cup.png'
import golfClubIcon from '../assets/005-golf.png'
import dartBoardIcon from '../assets/001-dart-board.png'

const Style = styled.div`
    p {
        font-size: 1.5em;
    }
    button {
        margin: 25px auto;
        color: black;
        
    }
    a {
        color: black;
    }
`

const Home = () => {
    return (
        <Style>
            <p>Create custom, competitive, points-based golfing leagues for you and your friends and social-groups.</p> 
            {/* <img src={golfClubIcon} alt="Image of golf ball and hole" height="75px" width="75px" /> */}

            <p>Accumulate and track points for custom criteria and accomplishments achieved during a 'season'.</p> 
            {/* <img src={dartBoardIcon} alt="Image of golf ball and hole" height="75px" width="75px" /> */}

            <p>Set prizes and rewards for top point-getters at the end of the season.</p>
            {/* <img src={trophyIcon} alt="Image of golf ball and hole" height="75px" width="75px" /> */}

            <button className="home-button"><Link to="/dashboard/create-league">Create a League</Link></button>
        </Style>
    );
}

export default Home;