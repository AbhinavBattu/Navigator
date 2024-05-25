import React from "react";
import FlightSearchBar from "./pages/FlightSearchBar";
import Flightmap from "./pages/FlightMap";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="p-4">
        <div className="map-container">
          <Flightmap />
        </div>
        <FlightSearchBar />
      </main>
      <ToastContainer/>
    </div>
  );
}

export default App;
