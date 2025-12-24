Traffic Lights Control System (TLCS) for Nairobi CBD
====================================================

This project is a first–year traffic lights control system that visualises and simulates
traffic in **Nairobi CBD**. It now includes:

- a Nairobi–themed **web front‑end** (HTML/CSS/JavaScript + Leaflet and Google Maps),
- a small **Node.js/Express backend** that serves simulated traffic data,
- an example **Kotlin controller** that shows how an Android app can talk to the backend.

### Frontend pages

- `index.html` – animated landing page with dropdown navigation.
- `controlpanel.html` – Leaflet map of real Nairobi CBD roads. Admin can add/remove cars,
  stop/continue movement and toggle the simulated traffic lights.
- `numericdata.html` – dashboard view of numeric indicators plus CBD map.
- `trafficstatus.html` – admin status console with charts, Google hybrid map (3D tilt)
  and simulated intersection control.

### Backend (Node.js / Express)

Located in the `backend` folder.

- `server.js` – exposes two example endpoints:
  - `GET /api/traffic/status` – simulated vehicle volume per major road.
  - `GET /api/traffic/lights` – simulated traffic‑light phases per CBD intersection.

To run locally:

```bash
cd backend
npm install express cors
node server.js
```

You can then point your JavaScript (or Android client) to `http://localhost:4000`.

### Android / Kotlin example

In the `android` folder, `TrafficController.kt` demonstrates:

- how to call `GET /api/traffic/status` from a Kotlin/Android app using coroutines,
- simple data classes for roads and traffic status,
- a clean separation between UI (map / charts) and backend access logic.

You can extend this to parse JSON with `kotlinx.serialization` or Retrofit and bind it
to Google Maps markers, polylines, or Jetpack Compose UI components.

### Java / Spring example

In the `java` folder, `TrafficStatusController.java` shows how the same TLCS
endpoints could be implemented using **Java + Spring Boot**. This mirrors the
Node.js JSON structure so your web pages or Android app can switch between
backends without major changes.
