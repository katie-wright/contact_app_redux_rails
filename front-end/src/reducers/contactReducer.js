import initialState from './initialState';
import {FETCH_CONTACTS, RECEIVE_CONTACTS} from '../actions/actionTypes';

export default function contacts(state=initialState, action){
    let newState;
    switch (action.type) {
        case FETCH_CONTACTS:
            return action;
        case RECEIVE_CONTACTS:
            let contacts = action.contacts.map(contact=>{
                contact.tags = contact.tags.split(",");
                return contact
            });
            newState = contacts;
            return newState;
        default:
            return state;
    }
}