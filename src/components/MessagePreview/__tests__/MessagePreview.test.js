import React from 'react';
import { shallow } from 'enzyme';
import MessagePreview from '../MessagePreview';

describe('MessagePreview', () => {
  it('should render correctly', () => {
    const MessagePreviewDOM = shallow(<MessagePreview />);
    expect(MessagePreviewDOM).toBeDefined();
  });

  it('should render a p object', () => {
    const MessagePreviewDOM = shallow(<MessagePreview />);
    expect(MessagePreviewDOM.find('p')).toHaveLength(1);
  });

  it('should render the p object with the status passed prop', () => {
    const message = 'Message preview...';
    const MessagePreviewDOM = shallow(<MessagePreview message={message} />);
    expect(MessagePreviewDOM.find('p').text()).toEqual(message);
  });
});
