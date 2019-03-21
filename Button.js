import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => <button {...props} />;

Button.propTypes = {
    /** Test prop */
    test: PropTypes.string
};

export default Button;