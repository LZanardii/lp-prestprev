import { Circle, CircleMarker, MapContainer, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './style.css';

function Mapa() {
  const position = [-29.89692650729965, -51.13735610389864];

  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={true}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle center={position} pathOptions={{ fillColor: 'blue' }} radius={45} />
      <CircleMarker
        center={position}
        pathOptions={{ color: 'red' }}
        radius={2}
      >
        <Popup>Estamos aqui!</Popup>
      </CircleMarker>
      
    </MapContainer>
  );
}

export default Mapa;
