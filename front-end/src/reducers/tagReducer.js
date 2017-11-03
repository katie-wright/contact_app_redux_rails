import initialState from './initialState';
import {GET_TAGS} from '../actions/actionTypes';

export default function tags(state=initialState, action){
    let newState;
    switch (action.type) {
        case GET_TAGS:
            newState = action.tags;
            return newState;
        default:
            return state;
    }
}