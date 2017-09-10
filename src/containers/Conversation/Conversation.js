import React, { Component } from 'react';

import './Conversation.css';

class Conversation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Conversation">
        <header className="ConversationHeader">
          <p>Test</p>
        </header>

        <section className="Messages">
          <article className="Message From">
            <p>Hola</p>
          </article>

          <article className="Message To">
            <p>Hola</p>
          </article>

          <article className="Message From">
            <p>Chao</p>
          </article>

          <article className="Message To">
            <p>Chao</p>
          </article>
        </section>
      </div>
    );
  }
}

export default Conversation;
