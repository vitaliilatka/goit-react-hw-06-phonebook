import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
        <div className={styles.Filter}>
            <p>Find contacts by name</p>
            <input type="text" value={value} onChange={onChange} />
        </div>
    );
};

Filter.defaultProps = {
    value: '',
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(contactsActions, changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);