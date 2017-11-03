import {combineReducers} from 'redux';
import contacts from './contactReducer';
import tags from './tagReducer';

const rootReducer = combineReducers({
    contacts,
    tags
});

export default rootReducer;