import React from 'react';
import PropTypes from 'prop-types';
import "./UserAvatar.css";

const UserAvatar = ({ src }) => (
  <img src={src} className="UserAvatar" />
);

UserAvatar.propTypes = {
  src: PropTypes.string
};

UserAvatar.defaultProps = {
  src: ''
};

export default UserAvatar;