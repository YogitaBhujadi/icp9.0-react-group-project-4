import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import Background from "../../assets/images/bg1.jpg";

export default function Booking() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const trainData = {
    "Express Train": {
      stations: ["Mumbai", "Pune", "Nagpur", "Bangalore"],
      prices: {
        "Mumbai-Pune": 500,
        "Pune-Nagpur": 800,
        "Nagpur-Bangalore": 1200,
      },
    },
    "Superfast Express": {
      stations: ["Delhi", "Agra", "Jaipur", "Udaipur"],
      prices: {
        "Delhi-Agra": 400,
        "Agra-Jaipur": 700,
        "Jaipur-Udaipur": 1100,
      },
    },
  };

  const [selectedTrain, setSelectedTrain] = useState("");
  const [availableStations, setAvailableStations] = useState([]);
  const [priceList, setPriceList] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const [formData, setFormData] = useState({
    trainName: "",
    passengername: "",
    age: "",
    gender: "",
    aadharno: "",
    seatPreference: "",
    from: fromStation,
    to: toStation,
    idProof: "",
    from: "",
    to: "",
    date: "",
    passengers: 1,
    seatPreference: "",
  });

  useEffect(() => {
    const train = searchParams.get("train") || "";
    const from = searchParams.get("from") || "";
    const to = searchParams.get("to") || "";
    const rawPrice = searchParams.get("price");
    const price = rawPrice ? parseFloat(rawPrice.replace(/[^0-9.]/g, "")) : 0;

    if (train && trainData[train]) {
      setSelectedTrain(train);
      setAvailableStations(trainData[train].stations);
      setPriceList(trainData[train].prices);
    }

    setFormData((prev) => ({
      ...prev,
      from: from || prev.from,
      to: to || prev.to,
    }));

    setTotalPrice(price);
  }, [searchParams]);

  useEffect(() => {
    const routeKey = `${formData.from}-${formData.to}`;
    const routePrice = priceList[routeKey] || 0;
    setTotalPrice(routePrice * formData.passengers);
  }, [formData.from, formData.to, formData.passengers]);

  const handleTrainChange = (e) => {
    const train = e.target.value;
    setSelectedTrain(train);
    setAvailableStations(trainData[train]?.stations || []);
    setPriceList(trainData[train]?.prices || {});
    setFormData((prev) => ({ ...prev, from: "", to: "" }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "from" ? { to: "" } : {}),
    }));
  };

  const generateBookingID = () => {
    return `BOOK-${Math.floor(Math.random() * 1000000)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
toast.success("Booking Confirmed.");
    if (!selectedTrain) {
      toast.error("Please select a train.");
      return;
    }
    if (!formData.from || !formData.to) {
      toast.error("Please select both From and To stations.");
      return;
    }

    const bookingID = generateBookingID();
    const bookingDetails = { ...formData, bookingID, totalPrice };

    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    toast.success("Booking Successfull");

    navigate("/payment", { state: { price: totalPrice, bookingID } });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >

      <div className="w-120 mx-auto bg-slate-300 p-6 m-10 mt-25 Overflow-y-auto rounded-lg shadow-lg border border-gray-300 ">
        <h2 className="text-3xl font-bold mb-4 text-center text-green-700">
          BOOK TICKET
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label className="block font-medium text-gray-700">Train</label>
            <input
              type="text"
               name="trainname"
              value={formData.train}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-500 outline-none  focus:border-green-500 rounded-md text-gray-700"
            />
            </div>
      <div className="md:w-120 lg:w-120 w-80 mx-auto bg-slate-300 p-6 md:m-10 md:mt-25 md:mb-10 mt-20 mb-10 rounded-lg shadow-lg border border-gray-300 overflow-y-auto max-h-150 faqs-container">
        <h2 className="md:text-3xl text-2xl font-bold mb-4 text-center text-green-700">
          BOOK TICKET
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-xl text-green-800 font-semibold">Personal Details:</h3>
        <div>
          <label className="block font-medium text-gray-700">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required
            className="w-full p-2 border border-gray-500 outline-none focus:border-green-500 rounded-md text-gray-700" />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required
            className="w-full p-2 border border-gray-500 outline-none focus:border-green-500 rounded-md text-gray-700" />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required
            className="w-full p-2 border border-gray-500 outline-none focus:border-green-500 rounded-md text-gray-700">
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700">ID Proof(Aadhar Number)</label>
          <input type="text" name="idProof" value={formData.idProof} onChange={handleChange} required
            className="w-full p-2 border border-gray-500 outline-none focus:border-green-500 rounded-md text-gray-700" />
        </div>

        <h3 className="text-xl text-green-800 font-semibold">Train Booking Deatils:</h3>
        <div>
          <label className="block font-medium text-gray-700">Seat Preference</label>
          <select name="seatPreference" value={formData.seatPreference} onChange={handleChange} required
            className="w-full p-2 border rounded-md text-gray-700">
            <option value="">Select</option>
            <option value="Window">Window</option>
            <option value="Aisle">Aisle</option>
            <option value="No Preference">No Preference</option>
          </select>
        </div>

          <div>
            <label className="block font-medium text-gray-700">Select Train</label>
            <select
              value={selectedTrain}
              onChange={handleTrainChange}
              required
              className="w-full p-2 border border-gray-500 outline-none focus:border-green-500 rounded-md text-gray-700"
            >
              <option value="">Select Train</option>
              {Object.keys(trainData).map((train) => (
                <option key={train} value={train}>
                  {train}
                </option>
              ))}
            </select>

          </div>

          <div>
            <label className="block font-medium text-gray-700">From</label>
            <select
              name="from"
              value={formData.from}
              onChange={handleChange}
              required

              className="w-full p-2 border border-gray-500 outline-none  focus:border-green-500  rounded-md text-gray-700"
            />
          </div>
          <div>
          <label className="block font-medium text-gray-700">Age</label>
          <input type="number"
           name="age"
            value={formData.age}
             onChange={handleChange}
              required
            className="w-full p-2 border border-gray-500 outline-none focus:border-green-500 rounded-md text-gray-700" />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required
            className="w-full p-2 border border-gray-500 outline-none focus:border-green-500 rounded-md text-gray-700">
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block font-medium text-gray-700">Aadhar No.</label>
          <input type="text"  name="aadharno" value={formData.idProof} onChange={handleChange} required
            className="w-full p-2 border border-gray-500 outline-none focus:border-green-500 rounded-md text-gray-700" />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Seat Preference</label>
          <select name="seatPreference" value={formData.seatPreference} onChange={handleChange} required
            className="w-full p-2 border rounded-md text-gray-700">
            <option value="">Select</option>
            <option value="Window">Window</option>
            <option value="Aisle">Aisle</option>
            <option value="No Preference">No Preference</option>
          </select>
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
=======
              className="w-full p-2 border border-gray-500 outline-none focus:border-green-500 rounded-md text-gray-700"
              disabled={!selectedTrain}
            >
              <option value="">Select Station</option>
              {availableStations.map((station) => (
                <option key={station} value={station}>
                  {station}
                </option>
              ))}
            </select>

          </div>

          <div>
            <label className="block font-medium text-gray-700">To</label>
            <select
              name="to"
              value={formData.to}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-500 outline-none focus:border-green-500 rounded-md text-gray-700"
              disabled={!formData.from}
            >
              <option value="">Select Station</option>
              {formData.from &&
                availableStations
                  .filter((station) => station !== formData.from)
                  .map((station) => (
                    <option key={station} value={station}>
                      {station}
                    </option>
                  ))}
            </select>
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
