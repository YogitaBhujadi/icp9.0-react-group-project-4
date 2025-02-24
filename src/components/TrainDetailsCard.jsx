import React from "react";
import Button from "./Button";
import { Link } from "react-router"; 

const handleClick = () => {
  navigate("/booking"); 
};

const TrainDetailsCard = ({ train }) => {
  const { id, name, number, type, departure, arrival, duration, price, availability, image } = train;

  return (
    <Link to={`train-detail/${id}`}>
      <div className="bg-white shadow-md rounded-xl p-4 md:w-[400px] md:h-[480px] w-[300px] h-[390px] hover:scale-105 transition-transform border border-gray-300">
        <img 
            src={image} 
            alt={name} 
            className="w-full   md:h-[150px] h-[100px]  object-cover rounded-lg mb-3" />
        <h2 className="md:text-xl text-lg font-semibold text-center py-2">
            {name}
        </h2>
        <p className="text-gray-600 md:text-[17px] text-sm">Train No: {number}</p>
        <p className="md:text-[17px] text-sm">
            <strong>Type:</strong> {type}
        </p>
        <p className="md:text-[17px] text-sm">
            <strong>Departure:</strong> {departure}
        </p>
        <p className="md:text-[17px] text-sm">
            <strong>Arrival:</strong> {arrival}
        </p>
        <p className="md:text-[17px] text-sm">
            <strong>Duration:</strong> {duration}
        </p>
        <p className="md:text-[17px] text-sm">
            <strong>Price:</strong> {price}
        </p>
        <p className={`font-semibold ${availability === "Available" ? "text-green-600" : availability === "Limited" ? "text-orange-600" : "text-red-600"}`}>
          {availability}
        </p>

        <div className="flex justify-center pt-5">
          <Button text="Book Now" onClick={handleClick} />
        </div>
      </div>
    </Link>
  );
};

export default TrainDetailsCard;