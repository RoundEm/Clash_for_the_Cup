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
                <div className="header-nav">
                    <Navigation />  
                </div>
                <div className="main-content" role="main">
                    <div>
                        <Router />
                    </div>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;