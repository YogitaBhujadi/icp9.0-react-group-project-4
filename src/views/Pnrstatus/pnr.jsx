import React, { useState, useEffect } from "react";
import Background from "../../assets/images/bg12.webp";

import TrainAnimation from "./../../components/PntrStatus/Trainanimation";
import { passengers, trains } from "./../../config/data";

const PNRStatus = () => {
  const [pnr, setPnr] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const lastPNR = localStorage.getItem("lastPNR");
    if (lastPNR) setPnr(lastPNR);
  }, []);

  const fetchPNRStatus = () => {
    if (!pnr || pnr.length !== 10) {
      setError("Please enter a valid 10-digit PNR number.");
      return;
    }
    setError("");
    setLoading(true);
    localStorage.setItem("lastPNR", pnr);

    setTimeout(() => {
      const randomPassenger = passengers[Math.floor(Math.random() * passengers.length)];
      const randomTrain = trains[Math.floor(Math.random() * trains.length)];

      setStatus({
        pnr,
        passenger: randomPassenger.name,
        train: randomTrain.name,
        type: randomTrain.type,
        status: randomPassenger.status,
        seat: randomPassenger.seat,
        price: randomTrain.price,
        platform: randomTrain.platform,
      });

      setLoading(false);
    }, 1500);
  };

  return (
    <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Background})`,
        }}
    >
      <div className=" flex-grow flex flex-col justify-center items-center px-4 md:px-8">
        <div className="  mt-30 mb-10 sm:mb-0 sm:mt-0 bg-slate-300 shadow-lg rounded-lg p-6 w-full max-w-md sm:max-w-lg lg:max-w-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">PNR Status</h2>
          <input
            type="text"
            value={pnr}
            onChange={(e) => setPnr(e.target.value)}
            placeholder="Enter 10-digit PNR Number"
            className="w-full p-3 border border-gray-500 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <button
            onClick={fetchPNRStatus}
            className="w-full bg-green-600 text-white py-3 rounded-lg mt-4 text-lg hover:bg-green-700 transition-all duration-300"
            disabled={loading}
          >
            {loading ? "Checking..." : "Check Status"}
          </button>
          {status && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg border border-gray-300">
              <p><strong>Passenger:</strong> {status.passenger}</p>
              <p><strong>Train:</strong> {status.train} ({status.type})</p>
              <p><strong>Status:</strong> {status.status}</p>
              <p><strong>Seat:</strong> {status.seat}</p>
              <p><strong>Platform:</strong> {status.platform}</p>
              <p><strong>Ticket Price:</strong> {status.price}</p>
            </div>
          )}
        </div>
      </div>

    
      <div className="relative mt-10 hidden md:block">
        <TrainAnimation />
        <div className="w-full h-1 bg-gray-700 mt-2 mb-2"></div> 
      </div>

     
    </div>
  );
};

export default PNRStatus;
