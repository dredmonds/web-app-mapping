import React, { Fragment } from 'react';
import {Marker, Circle} from 'react-leaflet';
import {UserLocationIcon} from '../config/UserLocationIcon';
import {GeoConfig} from '../config/GeoConfig';
import MarkerPopup from './MarkerPopup';

const UserMarkers = (props) => {
  const { users } = props;
console.log(users);
  const markers = users.map((user, index) => (
    <Marker key={index} position={[user.latitude, user.longitude]} icon={UserLocationIcon}>
      <MarkerPopup data={user}/>
      <Circle center={GeoConfig.coordinate} fillColor={GeoConfig.color} radius={GeoConfig.radius}/>
    </Marker>
  ));

  return <Fragment>{markers}</Fragment>
}

export default UserMarkers;
