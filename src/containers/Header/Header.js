import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserAvatar from '../../components/UserAvatar/UserAvatar';
import Username from '../../components/Username/Username';
import UsernameStatus from '../../components/UsernameStatus/UsernameStatus';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      userStatus: '',
      userAvatar: ''
    };
  }

  componentDidMount() {
    const username = 'Username';
    const userStatus = 'User status';
    const userAvatar = 'https://docs.microsoft.com/en-us/mobile-center/media/logo_react.svg'

    this.setState({
      username,
      userStatus,
      userAvatar
    });
  }

  render() {
    return (
      <section className="Header">
        <Username username={this.state.username} />
        <UsernameStatus status={this.state.userStatus} />
        <UserAvatar src={this.state.userAvatar} />
      </section>
    );
  }
};

export default Header;
