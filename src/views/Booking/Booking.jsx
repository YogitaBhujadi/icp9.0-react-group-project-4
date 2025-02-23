import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Background from "../../assets/images/bg7.jpg";

export default function Booking() {
  const [formData, setFormData] = useState({
    passengername: "",
    from: "",
    to: "",
    date: "",
    passengers: 1,
    class: "Economy",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking Confirm..");
  };

  return (
    <div
          className="min-h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${Background})`,
          }}
    >
    <div className="w-120 mx-auto bg-slate-300 p-6 m-10 mt-25 rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-3xl font-bold mb-4 text-center text-green-700">BOOK TICKET</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
      <div>
          <label className="block font-medium text-gray-700">Passenger Name</label>
          <input
            type="text"
            name="passengername"
            value={formData.passengername}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-500 outline-none focus:border-green-500  rounded-md text-gray-700"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">From</label>
          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-500 outline-none focus:border-green-500  rounded-md text-gray-700"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">To</label>
          <input
            type="text"
            name="to"
            value={formData.to}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-500 outline-none focus:border-green-500  rounded-md text-gray-700"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-500 outline-none focus:border-green-500  rounded-md text-gray-700"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Passengers</label>
          <input
            type="number"
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            min="1"
            required
            className="w-full p-2 border border-gray-500 outline-none focus:border-green-500  rounded-md text-gray-700"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Class</label>
          <select
            name="class"
            value={formData.class}
            onChange={handleChange}
            className="w-full p-2 border border-gray-500 outline-none focus:border-green-500  rounded-md text-gray-700"
          >
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First Class">First Class</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Book Now
        </button>
        <Toaster/>
      </form>
    </div>
    </div>
  );
}
