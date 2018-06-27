import React from 'react';
import { Link } from 'react-router-dom';
import golfballIcon from '../assets/006-golf-1.png'

const Navigation = () => {
    return (
        <nav>
            <Link to="/"><h1>Clash for the Cup</h1></Link>
            <Link to="/"><img src={golfballIcon} alt="Golf ball and hole" height="65px" width="65px" /></Link>
            {/* <ul>
                <li><Link to="/">Home</Link></li>
                TODO: implement user auth
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul> */}
        </nav>
    );
}

export default Navigation;