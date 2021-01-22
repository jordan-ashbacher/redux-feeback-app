import React from 'react';
import axios from 'axios';
import './App.css';
import Home from '../Home/Home'
import FeelingForm from '../FeelingForm/FeelingForm'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/feeling" component={FeelingForm} />
      </div>
    </Router>
  );
}

export default App;
