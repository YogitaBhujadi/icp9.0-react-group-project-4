import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import Background from "../../assets/images/bg1.jpg";

export default function Booking() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const trainName = queryParams.get("train") || "";
  const fromStation = queryParams.get("from") || "Not Specified";
  const toStation = queryParams.get("to") || "Not Specified";
  const rawPrice = queryParams.get("price") || "0";
  const initialPrice = parseFloat(rawPrice.replace(/[^\d.]/g, "")) || 0;

  const [formData, setFormData] = useState({
    passengername: "",
    from: fromStation,
    to: toStation,
    date: "",
    passengers: 1,
    price: initialPrice,
    class: "Economy",
  });

  const [totalPrice, setTotalPrice] = useState(initialPrice);

  useEffect(() => {
    setTotalPrice(formData.price * formData.passengers);
  }, [formData.passengers, formData.price]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    toast.success("Booking Confirm..");
=======
    toast.success("Booking Confirmed.");
>>>>>>> ef1828429b82daa0fa8617d5b7256aa4658b8bcb
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="w-120 mx-auto bg-slate-300 p-6 m-10 mt-25 rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-3xl font-bold mb-4 text-center text-green-700">
          BOOK TICKET
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Train</label>
            <input
              type="text"
              value={trainName}
              readOnly
              className="w-full p-2 border border-gray-500 outline-none bg-gray-200 rounded-md text-gray-700"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Passenger Name</label>
            <input
              type="text"
              name="passengername"
              value={formData.passengername}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-500 outline-none focus:border-green-500 rounded-md text-gray-700"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">From</label>
            <input
              type="text"
              name="from"
              value={formData.from}
              readOnly
              className="w-full p-2 border border-gray-500 outline-none bg-gray-200 rounded-md text-gray-700"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">To</label>
            <input
              type="text"
              name="to"
              value={formData.to}
              readOnly
              className="w-full p-2 border border-gray-500 outline-none bg-gray-200 rounded-md text-gray-700"
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
              className="w-full p-2 border border-gray-500 outline-none focus:border-green-500 rounded-md text-gray-700"
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
              className="w-full p-2 border border-gray-500 outline-none focus:border-green-500 rounded-md text-gray-700"
            />
          </div>

          <p className="text-lg font-bold text-green-800 text-center">
            Total Price: ₹{totalPrice.toFixed(2)}
          </p>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition font-bold"
          >
            Book Now
          </button>
          <Toaster />
        </form>
      </div>
    </div>
  );
}
