import React from 'react';
import { shallow, mount } from 'enzyme';
import MapView from './MapView';

describe('The MapView container', () => {
  it('renders MapView without crashing', () => {
    shallow(<MapView />);
  });

  it('renders error state', () => {
    const wrapper = mount(<MapView />);
    expect(wrapper.state('error')).toEqual(null);
  });

  it('renders isLoading state', () => {
    const wrapper = mount(<MapView />);
    expect(wrapper.state('isLoading')).toEqual(true);
  });

  it('renders data state', () => {
    const wrapper = mount(<MapView />);
    expect(wrapper.state('data')).toEqual([]);
  });

  it('renders fetching header', () => {
    const wrapper = mount(<MapView />);
    const header = <h3>Fetching Data...</h3>;
    expect(wrapper.contains(header)).toEqual(true);
  });
});