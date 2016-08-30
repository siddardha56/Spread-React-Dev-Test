import {createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';

const appReducer = combineReducers(Object.assign({}, {

}));

const rootReducer = (state, action) => {
    if (action.type === 'LOG_OUT') {
        state = undefined
    }
    return state
}
const enhancer = compose(
    applyMiddleware(thunkMiddleware)
);

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, enhancer);
}
