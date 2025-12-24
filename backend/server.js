// Simple Node.js/Express backend that can serve simulated Nairobi CBD traffic data
// This is optional, but shows how your HTML pages could call a real API instead of hard-coded JS.

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Simulated traffic volume per main CBD road
app.get('/api/traffic/status', (_req, res) => {
  res.json({
    timestamp: new Date().toISOString(),
    roads: [
      { name: 'Kenyatta Avenue', inBound: 120, outBound: 95, avgSpeedKph: 28 },
      { name: 'Moi Avenue', inBound: 150, outBound: 110, avgSpeedKph: 20 },
      { name: 'Haile Selassie', inBound: 90, outBound: 130, avgSpeedKph: 32 },
      { name: 'University Way', inBound: 60, outBound: 55, avgSpeedKph: 35 }
    ]
  });
});

// Simulated traffic-light state per intersection
app.get('/api/traffic/lights', (_req, res) => {
  res.json({
    intersections: [
      { id: 'kenyatta_moi', name: 'Kenyatta Ave & Moi Ave', phase: 'NS_GREEN', mode: 'AUTO' },
      { id: 'kenyatta_uhuru', name: 'Kenyatta Ave & Uhuru Hwy', phase: 'EW_GREEN', mode: 'AUTO' },
      { id: 'haile_moi', name: 'Haile Selassie & Moi Ave', phase: 'ALL_RED', mode: 'MANUAL' }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Nairobi TLCS backend running on http://localhost:${PORT}`);
});


