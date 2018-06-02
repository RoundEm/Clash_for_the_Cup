import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';
import Router from './Router';
import Footer from './Footer';
import '../index.css';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <div id="content">
                    <h1>Clash for the Cup</h1>
                    <Navigation />
                    <Router />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;