import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';

// Function to determine marker color based on magnitude
const getMarkerStyle = (magnitude) => {
  let color = 'green';
  if (magnitude >= 3 && magnitude < 5) color = '#f57c00'; // Orange
  if (magnitude >= 5) color = '#d32f2f'; // Red

  return {
    color: color,
    fillColor: color,
    fillOpacity: 0.7,
  };
};

const EarthquakeMap = ({ earthquakes }) => {
  const position = [20, 0]; // Default center of the map

  return (
    <div className="map-wrapper">
      <MapContainer center={position} zoom={2} className="map-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {earthquakes.map((earthquake) => {
          const { geometry, properties } = earthquake;
          const [lon, lat, depth] = geometry.coordinates;

          return (
            <CircleMarker
              key={earthquake.id}
              center={[lat, lon]}
              radius={properties.mag * 1.5} // Radius based on magnitude
              pathOptions={getMarkerStyle(properties.mag)}
            >
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
