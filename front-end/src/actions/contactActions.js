import * as types from './actionTypes';
import axios from 'axios';
import {getTags} from './tagActions';

export function receiveContacts(contacts) {
    return {
        type: types.RECEIVE_CONTACTS,
        contacts
    }
}

export function fetchContacts(){
    return dispatch => {
        return axios.get('/contacts')
            .then(res=>{
                dispatch(receiveContacts(res.data));
                dispatch(getTags(res.data));
            })
            .catch(err=>{
                console.log(err);
            })
    }
}

export function addContact(contact){
    contact.tags = contact.tags.join(",");
    return dispatch => {
        return axios.post('/contacts', contact)
            .then(res=>{
                dispatch(receiveContacts(res.data));
                dispatch(getTags(res.data));
            })
            .catch(err=>{
            console.log(err);
            })
    }
}

export function deleteContact(id){
    return dispatch => {
        return  axios.delete('/contacts/'+id)
            .then(res=>{
                dispatch(receiveContacts(res.data));
                dispatch(getTags(res.data));
            })
            .catch(err=>{
            console.log(err);
            })
    }

}

export function editContact(updateData, id){
    if (updateData.tags) {
        updateData.tags=updateData.tags.join(",");
    };
    return dispatch => {
        return axios.put('/contacts/'+id, updateData)
            .then(res=>{
                dispatch(receiveContacts(res.data));
                dispatch(getTags(res.data));
            })
            .catch(err=>{
            console.log(err);
            })
    }
}