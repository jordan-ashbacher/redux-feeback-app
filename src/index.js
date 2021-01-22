import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'

// redux container to collect form data
const feedbackReducer = (state = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}, action) => {
    switch (action.type) {
        case 'SET_FEELING':
            return state.feeling = action.payload.feeling
        case 'SET_UNDERSTANDING':
            return action.payload;
        case 'SET_SUPPORT':
            return action.payload;
        case 'SET_COMMENTS':
            return action.payload;
        case 'RESET':
            return state = {feeling: '', understanding: '', support: '', comments: ''}
        default:
            return state;
    }
}

const reduxStore = createStore(
    combineReducers({
        feedbackReducer
    })
)

ReactDOM.render(<App />, document.getElementById('root'));

