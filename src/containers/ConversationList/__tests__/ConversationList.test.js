import React from 'react';;
import { shallow, mount } from 'enzyme';
import ConversationList from '../ConversationList';

describe('ConversationList', () => {
  it('should render correctly', () => {
    const ConversationListDOM = shallow(<ConversationList />);
    expect(ConversationListDOM).toBeDefined();
  });

  it('should render a section object', () => {
    const ConversationListDOM = shallow(<ConversationList />);
    expect(ConversationListDOM.find('section')).toHaveLength(1);
  });
});
