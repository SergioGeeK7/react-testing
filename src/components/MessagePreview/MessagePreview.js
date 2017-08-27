import React from 'react';
import PropTypes from 'prop-types';
import './MessagePreview.css';

const MessagePreview = ({ message }) => (
  <p className="MessagePreview">{ message }</p>
);

MessagePreview.propTypes = {
  message: PropTypes.string
};

MessagePreview.defaultProps = {
  message: ''
};

export default MessagePreview;
