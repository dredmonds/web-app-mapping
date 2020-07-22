import React from 'react';
import { shallow } from 'enzyme';
import UserNavbarView from './UserNavbarView';

describe('UserNavbarView component', () => {
  it('renders navbar options', () => {
    const wrapper = shallow(<UserNavbarView />);
    const options = <option value="0">50miles</option>;
    expect(wrapper.contains(options)).toEqual(true);
  });
});