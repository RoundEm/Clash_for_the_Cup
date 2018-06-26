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
        border: 2px solid #b8eac8;
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
        margin: 5px auto 17px;
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
                <p>Create custom, competitive golfing leagues for you and your friends and social groups.</p> 
            </div>
            
            <div>        
                <img src={archeryTargetIcon} alt="Archery target with arrow in center" height="75px" width="75px" /> <p>Track points earned for custom criteria and accomplishments achieved during each round.</p> 
            </div>
            
            <div>
                <img src={trophyIcon} alt="Golf ball and hole" height="75px" width="75px" />
                <p>Improve your game as you battle your opponents over the course of a season while trying to earn the most points!</p>
            </div>   
            <div className="buttons">  
                <button className="home-button"><Link to="/dashboard/create-league">Create League</Link></button>
                <button className="home-button"><Link to="/dashboard">Manage Existing League</Link></button>
            </div>
        </Style>
    );
}

export default Home;