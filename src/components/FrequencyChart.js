import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FrequencyChart = ({ data }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- Data Processing (No changes here) ---
  const hourlyCounts = new Array(24).fill(0);
  data.forEach(earthquake => {
    const hour = new Date(earthquake.properties.time).getHours();
    hourlyCounts[hour]++;
  });

  const labels = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Earthquakes per Hour',
        data: hourlyCounts,
        backgroundColor: '#de7f3bff',
        borderColor: '#004244',
        borderWidth: 1,
        // --- STYLE TWEAK: Add rounded corners and a hover effect ---
        borderRadius: 4,
        hoverBackgroundColor: '#c26c2cff',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: isMobile ? 'y' : 'x',
    plugins: {
      legend: {
        position: 'top',
        labels: { font: { size: isMobile ? 10 : 12 } }, // Adjusted size
      },
      title: {
        display: true,
        text: 'Hourly Earthquake Frequency',
        font: { size: isMobile ? 14 : 16 }, // Adjusted size
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { font: { size: isMobile ? 9 : 12 } }, // Adjusted size
        // --- STYLE TWEAK: Make grid lines lighter ---
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        title: {
          display: true,
          text: isMobile ? 'Time of Day (24-Hour)' : 'Number of Earthquakes',
          font: { size: isMobile ? 10 : 12 }, // Adjusted size
        },
      },
      x: {
        ticks: { font: { size: isMobile ? 9 : 12 } }, // Adjusted size
        grid: {
          display: false, // Hide vertical grid lines for a cleaner look
        },
        title: {
          display: true,
          text: isMobile ? 'Number of Earthquakes' : 'Time of Day (24-Hour)',
          font: { size: isMobile ? 10 : 12 }, // Adjusted size
        },
      },
    },
  };

  return (
    // Note: The parent component should create the container div.
    // This component is now only responsible for the chart itself.
    <Bar options={options} data={chartData} />
  );
};

export default FrequencyChart;