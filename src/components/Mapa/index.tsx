import { Circle, CircleMarker, MapContainer, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './style.css';

function Mapa() {
  const position = [-29.899695892708916, -51.13831777574388];

  return (
    <MapContainer
      center={position}
      zoom={17}
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
