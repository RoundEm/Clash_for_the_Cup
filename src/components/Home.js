import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import golfClubIcon from '../assets/005-golf.png'
import archeryTargetIcon from '../assets/001-dart-board.png'
import trophyIcon from '../assets/002-trophy.png'

const Style = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 90%;
    div {
        width: 30%;
        border: 2px solid white;
        border-radius: 5px;
        text-align: center;
        padding: 8px;
        margin: 5px auto;
    }
    p {
        font-size: 1.5em;
    }
    div.buttons {
        display: inline-block;
        border: none;
    }
    button {
        margin: 7px auto;
        color: black;
        font-size: 1.15em;
        justify-content: center;
    }
    a {
        color: black;
    }
    @media (max-width: 860px) {
        flex-direction: column;
        div {
            width: 90%;
            font-size: .80em;
        }
        button {
            font-size: .95em;
        }
    }
`

const Home = () => {
    return (
        <Style>
            <div>
                <img src={golfClubIcon} alt="Golf clubs crossing eachother" height="75px" width="75px" />
                <p>Create custom, competitive, points-based golfing leagues for you and your friends and social-groups.</p> 
            </div>
            
            <div>        
                <img src={archeryTargetIcon} alt="Archery target with arrow in center" height="75px" width="75px" />    
                <p>Accumulate and track points for custom criteria and accomplishments achieved.</p> 
            </div>
            
            <div>
                <img src={trophyIcon} alt="Golf ball and hole" height="75px" width="75px" />
                <p>Set prizes and rewards for top point-getters.</p>
            </div>   
            <div className="buttons">  
                <button className="home-button"><Link to="/dashboard/create-league">Create League</Link></button>
                <button className="home-button"><Link to="/dashboard">Manage Existing League</Link></button>
            </div>
        </Style>
    );
}

export default Home;