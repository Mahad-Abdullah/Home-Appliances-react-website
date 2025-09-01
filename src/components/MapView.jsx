import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useState, useEffect } from 'react';

// Fix Leaflet icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Custom control to toggle scroll + touch zoom
const ToggleZoomButton = ({ isEnabled, toggleZoom }) => {
  const map = useMap();

  useEffect(() => {
    if (isEnabled) {
      map.scrollWheelZoom.enable();
      map.touchZoom.enable();
      map.dragging.enable();
    } else {
      map.scrollWheelZoom.disable();
      map.touchZoom.disable();
      map.dragging.disable();
    }
  }, [isEnabled, map]);

  return (
    <button
      onClick={toggleZoom}
      className="absolute z-[1000] top-4 right-4 rounded-full bg-gradient-to-r from-[#010f7c] to-[#E20502] text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 px-3 py-1 text-sm"
    >
      {isEnabled ? 'Disable Zoom' : 'Enable Zoom'}
    </button>
  );
};

const MapView = () => {
  const [zoomEnabled, setZoomEnabled] = useState(false);

  const toggleZoom = () => {
    setZoomEnabled((prev) => !prev);
  };

  return (
    <div className="relative w-full h-[433px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[26.139139, 50.481972]}
        zoom={14}
        scrollWheelZoom={false} // Disable by default
        dragging={false}
        touchZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />

        <Marker position={[26.139139, 50.481972]}>
          <Popup>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-600" />
              <span>Bahrain Home Appliances Repair</span>
            </div>
          </Popup>
        </Marker>

        <ToggleZoomButton isEnabled={zoomEnabled} toggleZoom={toggleZoom} />
      </MapContainer>
    </div>
  );
};

export default MapView;
