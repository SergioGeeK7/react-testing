import React from 'react';
import PropTypes from 'prop-types';
import './Username.css';

const Username = ({ username }) => (
  <h2 className="Username">{ username }</h2>
);

Username.propTypes = {
  username: PropTypes.string
};

Username.defaultProps = {
  username: ''
};

export default Username;
