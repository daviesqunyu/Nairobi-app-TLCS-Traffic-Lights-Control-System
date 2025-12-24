function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  if (!dropdownContent) return;
  dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

function navigateTo(page) {
  // Simple helper for future navigation hooks
  console.log("Navigating to " + page);
  // Example: window.location.href = page + ".html";
}

// Wait for the document to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', () => {
  // Caching DOM elements (may be missing on some pages)
  const roadStatus = document.getElementById('roadStatus');
  const pedestrianStatus = document.getElementById('pedestrianStatus');
  const carStatus = document.getElementById('carStatus');

  const hasStatusWidgets = roadStatus && pedestrianStatus && carStatus;

  // API endpoints (placeholder)
  const endpoints = {
      roadStatus: 'https://api.example.com/roadStatus',
      pedestrianStatus: 'https://api.example.com/pedestrianStatus',
      carStatus: 'https://api.example.com/carStatus'
  };
  
  const apiKey = 'your_api_key';

  // Function to fetch and update status data
  async function fetchStatus(endpoint, statusElement) {
      if (!statusElement) return;
      try {
          const response = await fetch(`${endpoint}?api_key=${apiKey}`);
          const data = await response.json();
          statusElement.textContent = `${statusElement.id.replace('Status', ' Status')}: ${data.status}`;
      } catch (error) {
          statusElement.textContent = `${statusElement.id.replace('Status', ' Status')}: Error fetching data`;
          console.error(`Error fetching ${statusElement ? statusElement.id : 'unknown element'}:`, error);
      }
  }

  // Function to update all statuses (only if the widgets exist)
  function updateStatus() {
      if (!hasStatusWidgets) return;
      fetchStatus(endpoints.roadStatus, roadStatus);
      fetchStatus(endpoints.pedestrianStatus, pedestrianStatus);
      fetchStatus(endpoints.carStatus, carStatus);
  }

  // Initially load the traffic data if widgets are present
  updateStatus();

  // Refresh traffic data every 60 seconds (only if relevant)
  if (hasStatusWidgets) {
      setInterval(updateStatus, 60000);
  }

  // Simulated data (used mainly on numeric data / dashboard pages)
  const simulatedData = {
      vehicleCount: 150,
      pedestrianCount: 50,
      heavyTrafficRoads: ['Mombasa Road', 'Uhuru Highway'],
      preferredRoute: 'Waiyaki Way',
      weatherCondition: 'Sunny',
      roadCondition: 'Good',
      speedLimit: '50 km/h'
  };

  // Update numeric data in the DOM when those elements exist
  for (const [key, value] of Object.entries(simulatedData)) {
      const el = document.getElementById(key);
      if (!el) continue;
      el.innerText = Array.isArray(value) ? value.join(', ') : value;
  }

  // Generate visual representation (for demonstration purposes)
  const visualRepresentation = document.getElementById('visualRepresentation');
  if (visualRepresentation) {
      visualRepresentation.innerHTML = `<img src="map.png" alt="Nairobi CBD Map">`;
  }
});
