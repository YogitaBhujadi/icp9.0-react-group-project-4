import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Background from "../../assets/images/bg1.jpg";

export default function PassengerForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    idProof: "",
    seatPreference: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    toast.success("DONE!");
  };

  return (
    <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Background})`,
        }}
    >
    <div className="w-120 mx-auto bg-slate-300 p-6 m-10 mt-25 rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-3xl text-green-700 font-bold text-center mb-4">PASSENGER DETAILS</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <label className="block font-medium text-gray-700">ID Proof</label>
          <input type="text" name="idProof" value={formData.idProof} onChange={handleChange} required
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

        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition">Submit</button>
        <Toaster/>
      </form>
    </div>
    </div>
  );
}
