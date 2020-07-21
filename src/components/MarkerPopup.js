import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = (props) => {
  const { first_name, last_name, email, ip_address } = props.data;

  return (
    <Popup>
      <div>
        <h3><span><i className="fa fa-user"/></span> {first_name} {last_name}</h3>
        <p><span><i className="fa fa-envelope"/></span> {email}</p>
        <p><span><i className="fa fa-globe"/></span> {ip_address}</p>
      </div>
    </Popup>
    );
}

export default MarkerPopup;
