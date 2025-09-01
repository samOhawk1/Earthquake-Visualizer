import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';

// 🔹 Function to determine marker style (color, opacity) based on earthquake magnitude
const getMarkerStyle = (magnitude) => {
  let color = 'green'; // Default: small magnitude
  if (magnitude >= 3 && magnitude < 5) color = '#f57c00'; // Medium: orange
  if (magnitude >= 5) color = '#d32f2f'; // Strong: red

  return {
    color: color,
    fillColor: color,
    fillOpacity: 0.7,
  };
};

const EarthquakeMap = ({ earthquakes }) => {
  // 🔹 Default map center (roughly around Africa to show the world)
  const position = [20, 0];

  return (
    <div className="map-wrapper">
      {/* 🔹 Map container with OpenStreetMap tiles */}
      <MapContainer center={position} zoom={2} className="map-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* 🔹 Loop through earthquakes and plot markers */}
        {earthquakes.map((earthquake) => {
          const { geometry, properties } = earthquake;
          const [lon, lat, depth] = geometry.coordinates; // GeoJSON uses [lon, lat, depth]

          return (
            <CircleMarker
              key={earthquake.id}
              center={[lat, lon]} // Leaflet expects [lat, lon]
              radius={properties.mag * 1.5} // Marker size scaled by magnitude
              pathOptions={getMarkerStyle(properties.mag)} // Marker color based on magnitude
            >
              {/* 🔹 Popup with detailed quake info */}
              <Popup>
                <b>Location:</b> {properties.place}
                <br />
                <b>Magnitude:</b> {properties.mag}
                <br />
                <b>Depth:</b> {depth.toFixed(2)} km
                <br />
                <b>Time:</b> {new Date(properties.time).toLocaleString()}
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default EarthquakeMap;
