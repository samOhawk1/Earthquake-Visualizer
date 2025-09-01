import React from 'react';
import StatCard from './StatCard';
import EarthquakeMap from './EarthquakeMap';
import EarthquakeList from './EarthquakeList';
import FrequencyChart from './FrequencyChart'; // <-- 1. Import the new component

const Dashboard = ({ data }) => {
  // ... (statistical calculations remain the same)
  const totalQuakes = data.length;
  const largestMagnitude = data.length > 0 ? Math.max(...data.map(eq => eq.properties.mag)) : 0;
  const deepestQuake = data.length > 0 ? Math.max(...data.map(eq => eq.geometry.coordinates[2])) : 0;
  const mostRecentTime = data.length > 0 ? Math.max(...data.map(eq => eq.properties.time)) : 0;
  const timeSinceLastQuake = mostRecentTime > 0 ? ((Date.now() - mostRecentTime) / (1000 * 60)).toFixed(0) : 0;

  return (
    <>
      <header className="header">
        <h1 >Earthquake Visualizer</h1>
        <h6>Explore real-time earthquake data from around the world with interactive maps and visuals. 
      Stay informed about recent seismic activity and understand earthquake patterns better.</h6>
      </header>

      <div className="stats-container">
        <StatCard title="Total Quakes (24h)" value={totalQuakes} />
        <StatCard title="Largest Magnitude" value={largestMagnitude.toFixed(2)} />
        <StatCard title="Deepest Quake (km)" value={deepestQuake.toFixed(2)} />
        <StatCard title="Minutes Since Last" value={timeSinceLastQuake} />
      </div>

      <main className="main-content">
        <EarthquakeMap earthquakes={data} />
        <EarthquakeList earthquakes={data} />
      </main>
      
      <div className="chart-container">
        <FrequencyChart data={data} />
      </div>
    </>
  );
};

export default Dashboard;