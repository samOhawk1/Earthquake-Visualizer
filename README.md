
</head>
<body>
  <h1>🌍 Earthquake Visualizer</h1>
  <p>
    A responsive web application that provides a real-time visualization of recent earthquake activity around the world. 
    This project was built to fulfill a take-home challenge, designed for a geography student persona who needs to understand 
    and analyze global seismic patterns.
  </p>

  <p>
    🔗 <a href="#">Live Demo Link Here</a> <!-- Replace with your CodeSandbox or deployed link -->
  </p>

  <h2>✨ Key Features</h2>
  <ul>
    <li><b>Interactive World Map:</b> Displays the location of all earthquakes recorded in the last 24 hours using Leaflet.js.</li>
    <li><b>Dynamic Data Markers:</b> Earthquake markers are color-coded and sized based on their magnitude for at-a-glance intensity assessment.</li>
    <li><b>Detailed Information Popups:</b> Clicking on any marker reveals detailed info including location, magnitude, depth, and exact event time.</li>
    <li><b>24-Hour Statistics:</b> Summary cards show key metrics like total quakes, largest magnitude, deepest quake, and most recent event.</li>
    <li><b>Hourly Frequency Chart:</b> A responsive bar chart visualizes earthquakes per hour, flipping horizontal on mobile for better readability.</li>
    <li><b>Scrollable Quake List:</b> A detailed, scrollable list of all recent earthquakes sorted by time.</li>
    <li><b>Fully Responsive Design:</b> Optimized for desktop and mobile with a mobile-first CSS approach.</li>
  </ul>

  <h2>🛠️ Technology Stack</h2>
  <ul>
    <li><b>Framework:</b> React.js</li>
    <li><b>Mapping:</b> Leaflet & React-Leaflet</li>
    <li><b>Charting:</b> Chart.js & react-chartjs-2</li>
    <li><b>Styling:</b> Plain CSS with a responsive design approach</li>
    <li><b>Data Source:</b> <a href="https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php">USGS Earthquake API (Past Day Summary)</a></li>
  </ul>

  <h2>⚡ How to Run Locally</h2>
  <h3>Prerequisites</h3>
  <p>Make sure you have Node.js and npm installed on your machine.</p>
  <pre><code>npm install npm@latest -g</code></pre>

  <h3>Installation & Setup</h3>
  <pre><code>
# Clone the repository
git clone https://github.com/your-username/earthquake-visualizer.git

# Navigate into the project directory
cd earthquake-visualizer

# Install dependencies
npm install

# Start the application
npm start
  </code></pre>

  <p>The app will open at <a href="http://localhost:3000">http://localhost:3000</a>.</p>

  <h2>📂 Project Structure</h2>
  <pre><code>
src/
├── components/
│   ├── Dashboard.js        # Main layout component
│   ├── EarthquakeMap.js    # The interactive map
│   ├── EarthquakeList.js   # The scrollable list of quakes
│   ├── FrequencyChart.js   # The hourly frequency bar chart
│   └── StatCard.js         # Summary statistic cards
├── App.js                  # Main app component (data fetching)
├── index.css               # Application styling
└── index.js                # Entry point
  </code></pre>

  <h2>👤 Author</h2>
  <p>
    Name: <b>Sumit Raturi</b><br />
    GitHub: <a href="https://github.com/samOhawk1">[GITHUB LINK]</a>
  </p>

  <h2>🙏 Acknowledgments</h2>
  <p>This project was created as a solution to a take-home challenge.</p>

  <div class="footer">
    <p>© 2025 Earthquake Visualizer | Built with React & Leaflet</p>
  </div>
</body>
</html>