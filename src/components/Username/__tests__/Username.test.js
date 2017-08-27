import React from 'react';
import { shallow } from 'enzyme';
import Username from '../Username';

describe('Username', () => {
  it('should render correctly', () => {
    const UsernameDOM = shallow(<Username />);
    expect(UsernameDOM).toBeDefined();
  });

  it('should render an h2 object', () => {
    const UsernameDOM = shallow(<Username />);
    expect(UsernameDOM.find('h2')).toHaveLength(1);
  });

  it('should render the h2 with the username passed prop', () => {
    const username = 'testUsername123';
    const UsernameDOM = shallow(<Username username={username} />);
    expect(UsernameDOM.find('h2').text()).toEqual(username);
  });
});
