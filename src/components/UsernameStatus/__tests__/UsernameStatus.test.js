import React from 'react';
import { shallow } from 'enzyme';
import UsernameStatus from '../UsernameStatus';

describe('UsernameStatus', () => {
  it('should render correctly', () => {
    const UsernameStatusDOM = shallow(<UsernameStatus />);
    expect(UsernameStatusDOM).toBeDefined();
  });

  it('should render a p object', () => {
    const UsernameStatusDOM = shallow(<UsernameStatus />);
    expect(UsernameStatusDOM.find('p')).toHaveLength(1);
  });

  it('should render the p object with the status passed prop', () => {
    const status = 'Test status being passed as prop';
    const UsernameStatusDOM = shallow(<UsernameStatus status={status} />);
    expect(UsernameStatusDOM.find('p').text()).toEqual(status);
  });
});
