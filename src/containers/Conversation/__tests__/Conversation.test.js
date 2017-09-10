import React from 'react';
import { render, shallow } from 'enzyme';

import Conversation from '../Conversation';

describe('Conversation', () => {
  it('should render correctly', () => {
    const ConversationDOM = render(<Conversation />);
    expect(ConversationDOM).toBeDefined();
  });

  it('should have a header', () => {
    const ConversationDOM = shallow(<Conversation />);
    expect(ConversationDOM.find('header')).toHaveLength(1);
  });

  it('should have a messages section', () => {
    const ConversationDOM = shallow(<Conversation />);
    expect(ConversationDOM.find('.Messages')).toHaveLength(1);
  });
});
