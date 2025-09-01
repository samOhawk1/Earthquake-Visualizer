import React from 'react';
import StatCard from './StatCard';
import EarthquakeMap from './EarthquakeMap';
import EarthquakeList from './EarthquakeList';
import FrequencyChart from './FrequencyChart'; // <-- Component to visualize earthquake frequency

const Dashboard = ({ data }) => {
  // 🔹 Basic statistical calculations using the earthquake data
  
  // Total number of earthquakes in the dataset
  const totalQuakes = data.length;

  // Largest magnitude among all earthquakes
  const largestMagnitude = data.length > 0
    ? Math.max(...data.map(eq => eq.properties.mag))
    : 0;

  // Deepest quake depth (in km) from geometry coordinates
  const deepestQuake = data.length > 0
    ? Math.max(...data.map(eq => eq.geometry.coordinates[2]))
    : 0;

  // Timestamp of the most recent earthquake
  const mostRecentTime = data.length > 0
    ? Math.max(...data.map(eq => eq.properties.time))
    : 0;

  // Calculate how many minutes have passed since the last earthquake
  const timeSinceLastQuake = mostRecentTime > 0
    ? ((Date.now() - mostRecentTime) / (1000 * 60)).toFixed(0)
    : 0;

  return (
    <>
      {/* 🔹 App Header */}
      <header className="header">
        <h1>Earthquake Visualizer</h1>
        <h6>
          Explore real-time earthquake data from around the world with interactive maps and visuals. 
          Stay informed about recent seismic activity and understand earthquake patterns better.
        </h6>
      </header>

      {/* 🔹 Statistics Section (Summary Cards) */}
      <div className="stats-container">
        <StatCard title="Total Quakes (24h)" value={totalQuakes} />
        <StatCard title="Largest Magnitude" value={largestMagnitude.toFixed(2)} />
        <StatCard title="Deepest Quake (km)" value={deepestQuake.toFixed(2)} />
        <StatCard title="Minutes Since Last" value={timeSinceLastQuake} />
      </div>

      {/* 🔹 Main Content: Map + List of earthquakes */}
      <main className="main-content">
        {/* Interactive Leaflet map with markers for each quake */}
        <EarthquakeMap earthquakes={data} />

        {/* Scrollable list of recent earthquakes */}
        <EarthquakeList earthquakes={data} />
      </main>
      
      {/* 🔹 Chart Section: Frequency analysis */}
      <div className="chart-container">
        {/* Line/Bar chart showing earthquake frequency over time */}
        <FrequencyChart data={data} />
      </div>
    </>
  );
};

export default Dashboard;
