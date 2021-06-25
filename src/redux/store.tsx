import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';

import userReducer from './userReducer';
import { User } from './userReducer';

export interface RootState {
    userReducer: User;
};

const reducer = combineReducers({
    userReducer: userReducer
});

export default createStore(reducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))
