import types from './contactsTypes';
import shortId from 'shortid';

const addContact = (name, number) => ({
    type: types.ADD,
    payload: {
        id: shortId.generate(),
        name,
        number,
    },
});

const deleteContact = contactId => ({
    type: types.DELETE,
    payload: contactId,
});

const changeFilter = value => ({
    type: types.CHANGE_FILTER,
    payload: value,
});

export default { addContact, deleteContact, changeFilter };