import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import toast, {Toaster} from "react-hot-toast";
import Background from "../../assets/images/bg1.jpg";

export default function Register() {
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullname || !password || !confirmPassword || !email || !mobile) {
      toast.error('Please fill all fields.');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (storedUsers.some(user => user.email === email)) {
      toast.error('Email is already registered.');
      return;
    }

    const newUser = { fullname, password, email, mobile };

    localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]));

    localStorage.setItem('loggedInUser', JSON.stringify(newUser));

    toast.success('Account created successfully!');
    navigate('/login');
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }} 
    >
      <div className="bg-slate-300 p-8 rounded-xl shadow-lg w-96 mt-20">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-4">CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}
          
          <div className="mb-4">
            <label className="block text-[#333333] text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-500 rounded-md outline-none focus:border-green-600"
              placeholder="Enter full name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#333333] text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-500 rounded-md outline-none focus:border-green-600"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#333333] text-sm font-medium">Mobile Number</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-500 rounded-md outline-none focus:border-green-600"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#333333] text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-500 rounded-md outline-none focus:border-green-600"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#333333] text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-500 rounded-md outline-none focus:border-green-600"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-[#008000] text-white py-3 mt-5 rounded-lg hover:bg-green-700"
            >
              REGISTER
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p>Already have an account? <a href="/login" className="text-[#008000] font-medium">Login</a></p>
        </div>
      </div>
      <Toaster/>
    </div>
  );
}