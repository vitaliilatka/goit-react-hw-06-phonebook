import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contacts from '../redux/contacts/contacts-reducer';

const rootReducer = combineReducers({
    contacts,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;