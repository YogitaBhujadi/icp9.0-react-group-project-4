import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router"; 
import trainJsonData from "./../../config/trainData";
import Background from "../../assets/images/bg12.webp";

export default function TrainDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [trainData, setTrainData] = useState(null);

    useEffect(() => {
        const train = trainJsonData.find((train) => train.id === Number(id));
        if (train) {
            setTrainData(train);
        }
    }, [id]);

    if (!trainData) {
        return <p className="text-center text-xl text-red-500">Train not found!</p>; 
    }

    const handleBooking = () => {
        navigate(
          `/booking?train=${encodeURIComponent(trainData.name)}&price=${encodeURIComponent(trainData.price)}&from=${encodeURIComponent(trainData.departure)}&to=${encodeURIComponent(trainData.arrival)}`
        );
    };    
    

    return (
        <div
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <div className="w-[50%] block mx-auto border border-gray-300 shadow-lg rounded-lg p-5 mt-30 mb-10 bg-slate-100">
                <h1 className="text-3xl text-center font-bold mb-4 text-green-700">
                    {trainData.name} ({trainData.number})
                </h1>
                <img 
                    src={trainData.image || "https://via.placeholder.com/300"} 
                    alt={trainData.name} 
                    className="h-[300px] block mx-auto object-cover w-full rounded-md"
                />
                <div className="flex justify-between px-4 py-3 text-lg font-medium">
                    <p>Departure: {trainData.departure}</p>
                    <p>Arrival: {trainData.arrival}</p>
                </div>
                <p className="text-gray-600 px-4 mb-3 mt-1">Duration: {trainData.duration}</p>
                <p className="text-gray-800 px-4 mb-3 mt-1 text-lg bg-green-200 py-2">
                    Price: {trainData.price} <span className="text-sm">(Per person)</span>
                </p>
                <p className="px-4 text-justify pb-4 text-lg text-slate-800">{trainData.description}</p>
                <div className="flex justify-center my-1">
                    <button 
                        className="py-2 px-5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg"
                        onClick={handleBooking}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}
