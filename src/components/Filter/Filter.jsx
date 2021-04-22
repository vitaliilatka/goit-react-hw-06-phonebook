import React from 'react';
import PropTypes from 'prop-types';
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

export default Filter;