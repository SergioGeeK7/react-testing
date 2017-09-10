import React from 'react';
import PropTypes from 'prop-types';
import Username from '../Username/Username';
import MessagePreview from '../MessagePreview/MessagePreview';
import './ConversationPreview.css';

import { Link } from 'react-router-dom';

const ConversationPreview = ({ id, withUser, lastMessage }) => (
  <article className="ConversationPreview">
    <Link to={`/conversation/${id}`}>
      <Username username={ withUser } />
      <MessagePreview message={ lastMessage } />
    </Link>
  </article>
);

export default ConversationPreview;
