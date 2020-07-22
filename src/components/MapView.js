import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { GeoConfig } from '../config/GeoConfig';
import { ApiConfig } from '../config/ApiConfig';
import Markers from './UserMarkers';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      error: null,
    };
  }

  fetchData() {
    const apiUrl = ApiConfig.apiUrl;
    fetch(`https://cors-anywhere.herokuapp.com/${apiUrl}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data,
          isLoading: false,
        })
      })
      .catch((error) => this.setState({error, isLoading: false}));
  }

  componentDidMount() {
    this.fetchData();
  }
  
  render() {
    const { data, isLoading, error } = this.state;
    return (
      <div>
        { error ? <p>{error.message}</p> : null }
        { !isLoading ? 
          <Map center={GeoConfig.coordinate} zoom={GeoConfig.zoom}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Markers users={data} />
          </Map> :
          <h3>Fetching Data...</h3>
        }
      </div>
    )
  }
}

export default MapView;
