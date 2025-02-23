import React, { useState } from 'react';
import Background from "../../assets/images/bg12.webp";

const TrainRunningStatusPage = () => {
  const [trainDetails, setTrainDetails] = useState({
    trainNumber: '',
    date: '',
    status: '',
    predictedStatus: '',
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrainDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const simulateTrainMovement = () => {
    setLoading(true);
    setStatusMessage('Fetching status...');

    setTimeout(() => {
      const positions = ['On Time', 'Delayed', 'Cancelled'];
      const randomStatus = positions[Math.floor(Math.random() * positions.length)];
      setStatusMessage(`Train is ${randomStatus}`);

      setTrainDetails((prevState) => ({
        ...prevState,
        status: randomStatus
      }));

      setLoading(false);
    }, 2000);
  };

  return (
    <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Background})`,
        }}
    >
    <div className="w-120 mx-auto p-6 bg-slate-300 rounded-lg shadow-md mt-30 mb-10">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Train Running Status</h1>
      
      <form className="space-y-4 mb-6">
        <div>
          <label className="block text-lg text-gray-600">Train Number</label>
          <input
            id="trainNumber"
            type="text"
            placeholder="Enter Train Number"
            value={trainDetails.trainNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md"
          />
        </div>

        <div>
          <label className="block text-lg text-gray-600">Date</label>
          <input
            id="date"
            type="date"
            value={trainDetails.date}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md"
          />
        </div>

        <button
          type="button"
          onClick={simulateTrainMovement}
          className="w-full py-2 text-lg font-bold bg-green-600 text-white rounded-lg mt-4"
        >
          Check Status
        </button>
      </form>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <>
          <h2 className="text-center text-lg font-semibold">Train Status:</h2>
          <p className={`text-center font-bold text-lg 
              ${trainDetails.status === 'Delayed' ? 'text-red-600' : 
               trainDetails.status === 'Cancelled' ? 'text-red-600' : 
               'text-green-600'}`}
          >
            {statusMessage}
          </p>
        </>
      )}
    </div>
    </div>
  );
};

export default TrainRunningStatusPage;