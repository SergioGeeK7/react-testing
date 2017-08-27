import React from 'react';
import { shallow } from 'enzyme';
import ConversationPreview from '../ConversationPreview';
import Username from '../../Username/Username';
import MessagePreview from '../../MessagePreview/MessagePreview';

describe('ConversationPreview', () => {
  it('should render correctly', () => {
    const ConversationPreviewDOM = shallow(<ConversationPreview />);
    expect(ConversationPreviewDOM).toBeDefined();
  });

  it('should render an article object', () => {
    const ConversationPreviewDOM = shallow(<ConversationPreview />);
    expect(ConversationPreviewDOM.find('article')).toHaveLength(1);
  });

  it('should have a Username component', () => {
    const ConversationPreviewDOM = shallow(<ConversationPreview />);
    expect(ConversationPreviewDOM.find(Username)).toHaveLength(1);
  });

  it('should pass the withUser prop to the Username component', () => {
    const username = 'Test username';
    const ConversationPreviewDOM = shallow(<ConversationPreview withUser={username} />);
    expect(ConversationPreviewDOM.find(Username).props().username).toEqual(username);
  });

  it('should have a MessagePreview component', () => {
    const ConversationPreviewDOM = shallow(<ConversationPreview />);
    expect(ConversationPreviewDOM.find(MessagePreview)).toHaveLength(1);
  });

  it('should pass the lastMessage prop to the MesssagePreview component', () => {
    const lastMessage = 'Last message example';
    const ConversationPreviewDOM = shallow(<ConversationPreview lastMessage={lastMessage} />);
    expect(ConversationPreviewDOM.find(MessagePreview).props().message).toEqual(lastMessage);
  });
});
