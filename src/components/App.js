import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';
import Router from './Router';
import '../index.css';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Navigation />
                <Router />
            </div>
        </BrowserRouter>
    );
}

export default App;