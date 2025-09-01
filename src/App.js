import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import 'leaflet/dist/leaflet.css'; // <-- Required stylesheet for Leaflet maps
import './index.css'; // <-- Global styles for the app

function App() {
  // 🔹 Local state management
  const [earthquakes, setEarthquakes] = useState([]); // Stores fetched earthquake data
  const [loading, setLoading] = useState(true);       // Tracks loading state
  const [error, setError] = useState(null);           // Stores any error messages

  // 🔹 useEffect: Runs once when the component mounts (empty dependency array [])
  useEffect(() => {
    // Async function to fetch earthquake data
    const fetchData = async () => {
      try {
        // Fetch real-time earthquake GeoJSON data from USGS
        const response = await fetch(
          'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson'
        );

        // If response is not OK (like 404/500), throw an error
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse JSON response
        const data = await response.json();

        // Store the earthquake features in state
        setEarthquakes(data.features);
      } catch (e) {
        // Catch and store any error that happens during fetch/parse
        setError(e.message);
      } finally {
        // ✅ Runs after try/catch (success or error)
        // Turn off loading spinner
        setLoading(false);
      }
    };

    fetchData(); // Call the async function
  }, []); // [] → ensures this only runs once on component mount

  // 🔹 Conditional Rendering
  if (loading) return <div style={{ padding: '2rem' }}>Loading seismic data...</div>;
  if (error) return <div style={{ padding: '2rem', color: 'red' }}>Error fetching data: {error}</div>;

  // 🔹 Main UI rendering
  return (
    <>
      <div className="app-container">
        {/* Pass earthquake data down to Dashboard component */}
        <Dashboard data={earthquakes} />
      </div>

      {/* Footer at the bottom */}
      <footer
        style={{
          textAlign: 'center',
          fontFamily: 'arial',
          fontStyle: 'italic',
          color: 'black',
          padding: '1rem',
        }}
      >
        All rights reserved Sumit Raturi @2025
      </footer>
    </>
  );
}

export default App;
