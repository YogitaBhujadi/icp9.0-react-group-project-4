import React from "react";
import Background from "../../assets/images/bg7.jpg";

const About = () => {
  return (
    <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Background})`,
        }}  
    >
    <div className="w-[80%] flex items-center justify-center mt-20">
      <div className="w-[90%] bg-white shadow-lg rounded-lg p-8 border border-gray-300">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-6">About TrackGo</h1>
        <p className="text-gray-700 text-lg mb-4">
          Welcome to <span className="font-bold">TrackGo</span>, your one-stop solution for seamless and convenient train ticket booking.
          We are committed to making travel easy, efficient, and hassle-free for our users.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Our platform allows users to search for trains, check availability, compare fares, and book tickets all in one place.
          With a user-friendly interface and secure payment options, TrackGo ensures a smooth travel planning experience.
        </p>
        <h2 className="text-2xl font-semibold text-green-600 mt-6">Why Choose TrackGo?</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg mt-2">
          <li>Easy and quick train ticket booking</li>
          <li>Real-time train availability and fare comparison</li>
          <li>Secure and seamless payment options</li>
          <li>User-friendly and responsive interface</li>
          <li>24/7 customer support</li>
        </ul>
        <p className="text-gray-700 text-lg mt-6">
          Whether you're planning a business trip or a family vacation, TrackGo makes your journey stress-free and enjoyable.
        </p>
        <p className="text-center text-green-700 text-lg font-semibold mt-6">
          Travel smart. Travel easy. Travel with TrackGo!
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;