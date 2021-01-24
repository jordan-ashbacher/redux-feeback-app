import React from 'react';
import axios from 'axios';
import './App.css';
import Home from '../Home/Home'
import FeelingForm from '../FeelingForm/FeelingForm'
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm'
import SupportForm from '../SupportForm/SupportForm'
import CommentForm from '../CommentForm/CommentForm'
import ReviewPage from '../ReviewPage/ReviewPage'
import Confirmation from '../Confirmation/Confirmation'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className='App'>
        {/* <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header> */}
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/feeling" component={FeelingForm} />
        <Route path="/understanding" component={UnderstandingForm} />
        <Route path="/support" component={SupportForm} />
        <Route path="/comment" component={CommentForm} />
        <Route path="/review" component={ReviewPage} />
        <Route path="/confirmation" component={Confirmation} />
      </div>
    </Router>
  );
}

export default App;
