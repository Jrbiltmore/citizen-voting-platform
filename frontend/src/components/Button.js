// Button component for the Citizen Voting Platform

import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label, onClick, type, disabled }) => {
    return (
        <button className={`btn btn-${type}`} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    type: 'primary',
    disabled: false,
};

export default Button;
