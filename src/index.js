import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

// redux container to collect form data
const feedbackReducer = (state = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comment: ''
}, action) => {
    switch (action.type) {
        case 'SET_FEELING':
            return {...state, feeling: action.payload}
        case 'SET_UNDERSTANDING':
            return {...state, understanding: action.payload}
        case 'SET_SUPPORT':
            return {...state, support: action.payload}
        case 'SET_COMMENT':
            return {...state, comment: action.payload}
        case 'RESET':
            return state = { feeling: '', understanding: '', support: '', comments: '' }
        default:
            return state;
    }
}

const adminReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_FEEDBACK':
            return action.payload
        default:
            return state
    }
}

const reduxStore = createStore(
    combineReducers({
        feedbackReducer,
        adminReducer
    }), applyMiddleware(logger)
)

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    document.getElementById('root'));

