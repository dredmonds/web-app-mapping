import React from 'react';
import { shallow } from 'enzyme';
import { Marker, Circle } from 'react-leaflet';
import { UserLocationIcon } from '../config/UserLocationIcon';
import { GeoConfig } from '../config/GeoConfig';

const data = {
  id: 135,
  first_name: "Mechelle",
  last_name: "Boam",
  email: "mboam3q@thetimes.co.uk",
  ip_address: "113.71.242.187",
  latitude: -6.5115909,
  longitude: 105.652983
};

describe('UserMarkers component', () => {
  it('renders marker', () => {
    shallow(<Marker key={data.index} position={[data.latitude, data.longitude]} icon={UserLocationIcon} />);
  });

  it('renders circle', () => {
    shallow(<Circle center={GeoConfig.coordinate} fillColor={GeoConfig.color} radius={GeoConfig.radius} />);
  });
});