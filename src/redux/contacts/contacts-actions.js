import shortid from "shortid";
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/addContact', function prepare( { stateName, number }) {

    return {
        payload: 
            {id: shortid.generate(),
            name: stateName,
            number}
    }
});
const deleteContact = createAction('contacts/deleteContact');
const changeFilter = createAction('contacts/changeFilter');


export default { addContact, deleteContact, changeFilter };