import initialState from './initialState';
import {FETCH_CONTACTS, RECEIVE_CONTACTS} from '../actions/actionTypes';

export default function contacts(state=initialState, action){
    let newState;
    switch (action.type) {
        case FETCH_CONTACTS:
            return action;
        case RECEIVE_CONTACTS:
            newState = action.contacts;
            return newState;
        default:
            return state;
    }
}