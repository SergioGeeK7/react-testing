import React from 'react';
import { shallow } from 'enzyme';
import UserAvatar from '../UserAvatar';

describe('UserAvatar', () => {
  it('renders without crashing', () => {
    const Avatar = shallow(<UserAvatar />);
    expect(Avatar).toBeDefined();
  });

  it('should render an img object', () => {
    const Avatar = shallow(<UserAvatar />);
    expect(Avatar.find('img')).toHaveLength(1);
  });

  it('should receive a prop called src', () => {
    const avatarSrc = 'test_path.jpg';
    const Avatar = shallow(<UserAvatar src={avatarSrc} />);
    expect(Avatar.props().src).toEqual(avatarSrc)
  });

  it('should render an img with the src from the props', () => {
    const avatarSrc = 'test_path.jpg';
    const Avatar = shallow(<UserAvatar src={avatarSrc} />);
    expect(Avatar.find('img').props().src).toEqual(avatarSrc);
  });
});