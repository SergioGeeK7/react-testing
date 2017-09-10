import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../Header';
import Username from '../../../components/Username/Username';
import UsernameStatus from '../../../components/UsernameStatus/UsernameStatus';
import UserAvatar from '../../../components/UserAvatar/UserAvatar';

describe('Header', () => {
  it('should render correctly', () => {
    const HeaderDOM = shallow(<Header />);
    expect(HeaderDOM).toBeDefined();
  });

  it('should render a section object', () => {
    const HeaderDOM = shallow(<Header />);
    expect(HeaderDOM.find('section')).toHaveLength(1);
  });

  it('should have an Username component', () => {
    const HeaderDOM = shallow(<Header />);
    expect(HeaderDOM.find(Username)).toHaveLength(1);
  });

  it('should have an Username component with username props', () => {
    const username = 'Username';
    const HeaderDOM = mount(<Header />);

    // As we need to actually mount the Header component use Enzyme's mount method.
    expect(HeaderDOM.find(Username).props().username).toEqual(username);
  });

  it('should have an UsernameStatus component', () => {
    const HeaderDOM = shallow(<Header />);
    expect(HeaderDOM.find(UsernameStatus)).toHaveLength(1);
  });

  it('should have an UsernameStatus component with status props', () => {
    const userStatus = 'User status';
    const HeaderDOM = mount(<Header />);

    // As we need to actually mount the Header component use Enzyme's mount method.
    expect(HeaderDOM.find(UsernameStatus).props().status).toEqual(userStatus);
  });

  it('should have an UserAvatar component', () => {
    const HeaderDOM = shallow(<Header />);
    expect(HeaderDOM.find(UserAvatar)).toHaveLength(1);
  });

  it('should have an UserAvatar component with src props', () => {
    const userAvatar = 'https://docs.microsoft.com/en-us/mobile-center/media/logo_react.svg';
    const HeaderDOM = mount(<Header />);

    // As we need to actually mount the Header component use Enzyme's mount method.
    expect(HeaderDOM.find(UserAvatar).props().src).toEqual(userAvatar);
  });
});
