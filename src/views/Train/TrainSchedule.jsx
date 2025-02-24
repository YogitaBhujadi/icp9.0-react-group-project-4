import React, { useState } from 'react';
import Background from "../../assets/images/bg12.webp";

const trainSchedule = [
    { name: "Rajdhani Express", number: "12951", station: "Mumbai Central", Destination_Station: "New Delhi", route: "Mumbai -> New Delhi", time: "16:40" },
    { name: "Shatabdi Express", number: "12002", station: "New Delhi", Destination_Station: "Bhopal", route: "New Delhi -> Bhopal", time: "06:00" },
    { name: "Duronto Express", number: "12290", station: "Nagpur", Destination_Station: "Mumbai CST", route: "Nagpur -> Mumbai CST", time: "20:40" },
    { name: "Garib Rath Express", number: "12203", station: "Saharsa", Destination_Station: "Amritsar", route: "Saharsa -> Amritsar", time: "14:00" },
    { name: "Kolkata Mail", number: "12321", station: "Mumbai CST", Destination_Station: "Howrah", route: "Mumbai CST -> Howrah", time: "21:30" }
];

export default function TrainSchedule() {
    const [inputValue, setInputValue] = useState("");
    const [searchedValue, setSearchedValue] = useState("");
    const [trainInfo, setTrainInfo] = useState(null);
    const [suggestions, setSuggestions] = useState([]);

    const findTrain = (input) => {
        const filteredTrains = trainSchedule.filter(train => 
            train.Destination_Station.toLowerCase() === input.toLowerCase()
        );
        return filteredTrains.length > 0 ? filteredTrains : null;
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        if (value.length > 0) {
            const matchedSuggestions = trainSchedule
                .map(train => train.Destination_Station)
                .filter(destination => destination.toLowerCase().includes(value.toLowerCase()));
            setSuggestions([...new Set(matchedSuggestions)]);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
        setSuggestions([]);
    };

    const SearchTrain = () => {
        setSearchedValue(inputValue);
        const trains = findTrain(inputValue);
        setTrainInfo(trains);
        setInputValue("");
        setSuggestions([]);
    };

    function renderTrainInfo() {
        if (trainInfo !== null && trainInfo.length > 0) {
            return trainInfo.map((train, index) => (
                <div key={index} className="border border-gray-500 rounded-lg p-4 mt-4 w-220 bg-slate-300">
                    <div className="bg-green-700 space-x-15 text-white flex flex-col md:flex-row md:justify-between p-2 rounded">
                        <b className="m-2">Train Name</b>
                        <b className="m-2 ">Train Number</b>
                        <b className="m-2">From Station</b>
                        <b className="m-2">Destination Station</b>
                        <b className="m-2">Train Time</b>
                    </div>
                    <div className='flex flex-col md:flex-row md:justify-between p-2'>
                        <p className="m-2 text-start">{train.name}</p>
                        <p className="m-2 text-start">{train.number}</p>
                        <p className="m-2 text-start">{train.station}</p>
                        <p className="m-2 text-start">{train.Destination_Station}</p>
                        <p className="m-2 text-start">{train.time}</p>
                    </div>
                    <hr />
                </div>
            ));
        } else if (searchedValue) {
            return (
                <p className="text-red-500 mt-2">No train found for destination "{searchedValue}".</p>
            );
        }
    }

    return (
        <div
              className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${Background})` }}
        >
        <div className="md:w-120 w-80 mx-auto mt-8 p-6 rounded-lg shadow-lg bg-slate-300 ">
            <h1 className="md:text-3xl text-2xl text-green-700 font-bold text-center mb-4">Train Schedule</h1>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Enter destination station" 
                className="w-full p-2 border border-gray-500 rounded mb-2 outline-none focus:border-green-500"
            />
            {suggestions.length > 0 && (
                <ul className="border rounded p-2 bg-white shadow-md">
                    {suggestions.map((suggestion, index) => (
                        <li 
                            key={index} 
                            onClick={() => handleSuggestionClick(suggestion)} 
                            className="p-1 cursor-pointer hover:bg-gray-200"
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
            <button 
                onClick={SearchTrain} 
                className="w-full text-xl font-bold bg-green-700 text-white p-2 rounded hover:bg-green-800 mt-3"
            >
                Search Train
            </button>
        </div>
        {renderTrainInfo()}
        </div>
    );
}
