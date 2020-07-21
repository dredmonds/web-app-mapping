import L from 'leaflet';

export const UserLocationIcon = L.icon({
  iconUrl: require('../assets/user_location_icon.svg'),
  iconRetinaUrl: require('../assets/user_location_icon.svg'),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: 'leaflet-venue-icon'
});
