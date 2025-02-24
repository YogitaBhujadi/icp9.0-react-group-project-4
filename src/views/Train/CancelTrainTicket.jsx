import React, { useState } from 'react';
import toast, {Toaster} from 'react-hot-toast';
import Background from "../../assets/images/bg12.webp";

const CancelTrainTicketPage = () => {
  const [ticketDetails, setTicketDetails] = useState({
    bookingId: '',
    cancelReason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    if (ticketDetails.bookingId && ticketDetails.cancelReason) {
      console.log("Canceling ticket for Booking ID:", ticketDetails.bookingId);
      toast.success("Ticket Cancelled Successfully");
    } else {
      toast.error("Please provide all the details.");
    }
  };

  return (
    <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Background})`,
        }}
    >
    <div className="md:w-120 w-80 mx-auto p-6 bg-slate-300 rounded-lg shadow-lg mt-30 mb-10">
      <h1 className="md:text-3xl text-2xl font-bold text-center text-green-700 mb-6">Cancel Train Ticket</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-lg font-medium text-gray-600">Booking ID</label>
          <input
            id="bookingId"
            type="text"
            name="bookingId"
            placeholder="Enter Booking ID"
            value={ticketDetails.bookingId}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-600">Reason for Cancellation</label>
          <textarea
            id="cancelReason"
            name="cancelReason"
            placeholder="Enter cancellation reason"
            value={ticketDetails.cancelReason}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>
        <button
          type="button"
          onClick={handleCancel}
          className="w-full py-2 bg-green-600 text-white text-lg font-bold rounded-lg hover:bg-green-700 transition duration-200"
        >
          Cancel Ticket
        </button>
      </form>
      <Toaster/>
    </div>
    </div>
  );
};

export default CancelTrainTicketPage;