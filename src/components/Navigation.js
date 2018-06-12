import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <header>
            <h1>Clash for the Cup</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    {/* <li><Link to="/dashboard">Dashboard</Link></li> */}
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;