import * as types from './actionTypes';

export function getTags(contacts){
    let allTags=[];
    contacts.forEach(contact=>{
      allTags=allTags.concat(contact.tags);
    });
    let tags=allTags.filter((item, pos, self)=>{
      return self.indexOf(item) === pos
    });
    return {
        type: types.GET_TAGS,
        tags
    }
}