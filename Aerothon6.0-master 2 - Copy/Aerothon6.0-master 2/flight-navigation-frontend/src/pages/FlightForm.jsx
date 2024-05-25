import React from "react";
import './inline.css';
function FlightForm({
  fromAirport,
  setFromAirport,
  toAirport,
  setToAirport,
  flightType,
  setFlightType,
  handleSubmit,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white w-full flex shadow-md rounded px-8 pt-6 pb-8 mb-4 space-between"
    >
      <div className="mb-4 inline-use2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          From Airport:
        </label>
        <input
          type="text"
          value={fromAirport}
          onChange={(e) => setFromAirport(e.target.value)}
          placeholder="Enter departure airport IATA code"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4 inline-use2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          To Airport:
        </label>
        <input
          type="text"
          value={toAirport}
          onChange={(e) => setToAirport(e.target.value)}
          placeholder="Enter destination airport IATA code"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4 inline-use2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Operation:
        </label>
        <select
          value={flightType}
          onChange={(e) => setFlightType(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="takeoff">Takeoff</option>
          <option value="landing">Landing</option>
        </select>
      </div>
      <div className="flex items-center justify-between inline-use2">
        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Check Navigation Status
        </button>
      </div>
    </form>
  );
}

export default FlightForm;
