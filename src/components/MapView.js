import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { GeoConfig } from '../config/GeoConfig';
import { ApiConfig } from '../config/ApiConfig';
import Markers from './UserMarkers';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []}
  }

  componentDidMount() {
    const apiUrl = ApiConfig.apiUrl;
    fetch(`https://cors-anywhere.herokuapp.com/${apiUrl}`)
      .then((response) => response.json())
      .then((data) => this.setState({data: data}));
  }
  
  render() {
    return (
      <Map center={GeoConfig.coordinate} zoom={GeoConfig.zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Markers users={this.state.data}/>
      </Map>
    );
  }
}

export default MapView;
