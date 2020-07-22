import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import UserNavbarView from './components/UserNavbarView';
import MapView from './components/MapView';

describe('The App container', () => {
  it('renders App', () => {
   shallow(<App />);
  });
});

describe('<UserNavbarView />', () => {
  it('renders UserNavbarView', () => {
    shallow(<UserNavbarView />);
  });
});

describe('<MapView />', () => {
  it('renders MapView', () => {
    shallow(<MapView />);
  });
});