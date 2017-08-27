import React, { Component } from 'react';
import './ConversationList.css';
import ConversationPreview from '../../components/ConversationPreview/ConversationPreview';

class ChatList extends Component {
  render() {
    return (
      <section className="ConversationList">
        <ConversationPreview withUser="Another username" lastMessage="Preview message" />
        <ConversationPreview withUser="Another username" lastMessage="Preview message" />
        <ConversationPreview withUser="Another username" lastMessage="Preview message" />
        <ConversationPreview withUser="Another username" lastMessage="Preview message" />
      </section>
    );
  }
}

export default ChatList;
