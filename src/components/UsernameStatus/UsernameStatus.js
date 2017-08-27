import React from 'react';
import PropTypes from 'prop-types';
import './UsernameStatus.css';

const UsernameStatus = ({ status }) => (
  <p className="UsernameStatus">{ status }</p>
);

UsernameStatus.propTypes = {
  status: PropTypes.string
};

UsernameStatus.defaultProps = {
  status: ''
};

export default UsernameStatus;
