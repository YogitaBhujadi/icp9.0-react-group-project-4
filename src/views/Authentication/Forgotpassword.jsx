import React, { useState } from "react";
import { useNavigate } from "react-router";
import Background from "../../assets/images/bg1.jpg";

export default function Forgotpassword() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (user) => user.username === usernameOrEmail || user.email === usernameOrEmail
    );

    if (user) {
      setMessage("Account details sent to your email.");
    } else {
      setMessage("No account found with that username or email.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="bg-slate-300 p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-4">
          Forgot Password 
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium">
              Email
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-500 rounded-md outline-none focus:border-green-500 mt-2"
              placeholder="Enter Registered Email"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            SUBMIT
          </button>
        </form>
        {message && (
          <div className="text-center text-sm text-gray-700 mt-4">
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}