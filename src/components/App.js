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
                    <Navigation />  
                    <Router />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;