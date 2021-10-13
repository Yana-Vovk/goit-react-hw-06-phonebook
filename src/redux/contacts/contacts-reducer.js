import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';


const initialState = {
    contacts: {
        items: 
         [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
        filter: '',
    
    }
};

const items = createReducer(initialState.contacts.items, {
    [actions.addContact]: (state, { payload }) =>  state.find((contact) => contact.name.includes(payload.name)) ? state : [...state, payload], 
    
    [actions.deleteContact]: (state, { payload }) => state.filter(({ name }) => name !== payload)   
});

 const filter = createReducer(initialState.contacts.filter, {
     [actions.changeFilter]: (_, { payload }) => payload
 });


export default combineReducers({
    items,
    filter
})