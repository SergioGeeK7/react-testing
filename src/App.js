import React, { Component } from 'react';
import Header from './containers/Header/Header';
import ConversationList from './containers/ConversationList/ConversationList';

class App extends Component {
  render() {
    return (
      <div>
        {/* User Information */}
        <Header />

        {/* Conversations List */}
        <ConversationList />
      </div>
    );
  }
}

export default App;
