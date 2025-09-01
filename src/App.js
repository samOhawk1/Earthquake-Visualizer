import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import 'leaflet/dist/leaflet.css'; // <-- Leaflet CSS is required!
import './index.css';

function App() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEarthquakes(data.features);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div style={{ padding: '2rem' }}>Loading seismic data...</div>;
  if (error) return <div style={{ padding: '2rem', color: 'red' }}>Error fetching data: {error}</div>;

  return (
    <>
      <div className="app-container">
        <Dashboard data={earthquakes} />
      </div>
      <footer style={{ textAlign: 'center' , fontFamily : 'arial' , fontStyle :'italic' , fontWeight : '600'
        , color : 'black' , padding: '1rem' }}> 
        All rights reserved Sumit Raturi @2025
      </footer>
    </>
  );
}

export default App;