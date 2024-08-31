// Main App component for the Citizen Voting Platform

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Vote from './pages/Vote';
import Profile from './pages/Profile';
import Header from './components/Header';
import './App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/vote" component={Vote} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </Router>
    );
};

export default App;
