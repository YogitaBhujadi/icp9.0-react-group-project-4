import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Background from "../../assets/images/bg1.jpg";

const Payment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",    
    train: "",
    date: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Payment Successfull.");
  };

  return ( 
    <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Background})`,
        }}
    >
    <div className="w-120 mx-auto bg-slate-300 p-6 m-10 mt-25 rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-3xl text-green-700 text-center font-bold mb-4">TRAIN TICKET PAYMENT</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700">Full Name</label>
          <input 
            type="text"
            value={formData.name} 
            onChange={handleChange} 
            required
             className="w-full p-2 border rounded-md text-gray-700" />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border rounded text-gray-700" />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Select Train</label>
          <select 
             value={formData.train} 
             onChange={handleChange} 
             required 
             className="w-full p-2 border border-gray-500 outline-none focus:border-green-500 rounded text-gray-700"
          >
            <option value="">Select</option>
            <option value="Express Train">Express Train</option>
            <option value="Superfast Train">Superfast Train</option>
          </select>
        </div>
        <div>
          <label className="block font-medium text-gray-700">Travel Date</label>
          <input 
            type="date"
            value={formData.date} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-500 outline-none focus:border-green-500 rounded text-gray-700" 
          />
        </div>
        <h3 className="text-lg font-semibold mt-4 text-green-700">Payment Details</h3>
        <div>
          <label className="block font-medium text-gray-700">Card Number</label>
          <input 
            type="text" 
            name="cardNumber" 
            value={formData.cardNumber} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-500 outline-none focus:border-green-500 rounded text-gray-700" />
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block font-medium text-gray-700">Expiry Date</label>
            <input type="text" name="expiry" value={formData.expiry} onChange={handleChange} required className="w-full p-2 border rounded text-gray-700" placeholder="MM/YY" />
          </div>
          <div className="w-1/2">
            <label className="block font-medium text-gray-700">CVV</label>
            <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required className="w-full p-2 border border-gray-500 outline-none focus:border-green-500 rounded text-gray-700" />
          </div>
        </div>
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Pay Now</button>
        <Toaster/>
      </form>
    </div>
    </div>
  );
};

export default Payment;
