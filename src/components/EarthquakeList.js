import React from 'react';
import './EarthquakeList.css'; // <-- Styling file for the list layout & responsiveness

const EarthquakeList = ({ earthquakes }) => {
  return (
    <div className="list-container">
      {/* 🔹 Section Title */}
      <h3 className="list-title">Recent Earthquakes</h3>

      {/* 🔹 List wrapper */}
      <div className="list-content">
        {/* 🔹 Loop through earthquake data and render each as a list item */}
        {earthquakes.map(eq => (
          <div key={eq.id} className="list-item">
            {/* Earthquake magnitude */}
            <div className="list-item-mag">
              M {eq.properties.mag.toFixed(1)}
            </div>

            {/* Details: place + time */}
            <div className="list-item-details">
              {/* Location description */}
              <p className="list-item-place">{eq.properties.place}</p>

              {/* Human-readable time (converted from timestamp) */}
              <small className="list-item-time">
                {new Date(eq.properties.time).toLocaleString()}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarthquakeList;
