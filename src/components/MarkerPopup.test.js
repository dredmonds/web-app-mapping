import React from 'react';
import { shallow } from 'enzyme';
import MarkerPopup from './MarkerPopup';

const user = {
  id: 135,
  first_name: "Mechelle",
  last_name: "Boam",
  email: "mboam3q@thetimes.co.uk",
  ip_address: "113.71.242.187",
  latitude: -6.5115909,
  longitude: 105.652983
};

describe('MarkerPopup component', () => {
  it('renders correctly', () => {
    shallow(<MarkerPopup data={user}/>);
  });
});