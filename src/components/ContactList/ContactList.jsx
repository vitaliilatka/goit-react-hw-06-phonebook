import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import { connect } from 'react-redux';
import connectsAcctions from '../../redux/contacts/contactsActions';
import styles from './ContactList.module.css';
import contactsActions from '../../redux/contacts/contactsActions';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={styles.ContactList}>
            {contacts.map(({ id, name, number }) => (
                <ContactListItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onDeleteContact={onDeleteContact}
                />
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

const getFilteredContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter),
    );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
    contacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);