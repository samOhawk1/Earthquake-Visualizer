import React from 'react';
import './EarthquakeList.css'; // We'll create this for styling

const EarthquakeList = ({ earthquakes }) => {
  return (
    <div className="list-container">
      <h3 className="list-title">Recent Earthquakes</h3>
      <div className="list-content">
        {earthquakes.map(eq => (
          <div key={eq.id} className="list-item">
            <div className="list-item-mag">M {eq.properties.mag.toFixed(1)}</div>
            <div className="list-item-details">
              <p className="list-item-place">{eq.properties.place}</p>
              <small className="list-item-time">{new Date(eq.properties.time).toLocaleString()}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarthquakeList;