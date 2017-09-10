import React from 'react';
import PropTypes from 'prop-types';
import Username from '../Username/Username';
import MessagePreview from '../MessagePreview/MessagePreview';
import './ConversationPreview.css';

const ConversationPreview = ({ withUser, lastMessage }) => (
  <article className="ConversationPreview">
    <Username username={ withUser } />
    <MessagePreview message={ lastMessage } />
  </article>
);

export default ConversationPreview;
