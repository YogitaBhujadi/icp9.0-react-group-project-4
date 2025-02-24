import React, { useState } from 'react';

const trainSchedule = [
    {
        name: "Rajdhani Express",
        number: "R1234",
        station: "New Delhi",
        Destination_Station: "Mumbai",
        route: "Delhi to Mumbai",
        time: "5:00 PM",
        Station_Code: "NDLS",
        Station_Name: "New Delhi",
        Route_Number: "12345",
        Arrival_Time: "08:00 AM",
        Departure_Time: "08:30 AM",
        Distance: "200 km",
        Day: "Saturday"
    },
    {
        name: "Shatabdi Express",
        number: "S5678",
        station: "Chennai",
        Destination_Station: "Bangalore",
        route: "Chennai to Bangalore",
        time: "6:00 AM",
        Station_Code: "SBC",
        Station_Name: "Bangalore",
        Route_Number: "12346",
        Arrival_Time: "08:30 AM",
        Departure_Time: "09:00 AM",
        Distance: "350 km",
        Day: "Saturday"
    },
    {
        name: "Duronto Express",
        number: "D9101",
        station: "Kolkata",
        Destination_Station: "Delhi",
        route: "Kolkata to Delhi",
        time: "8:00 PM",
        Station_Code: "HWH",
        Station_Name: "Howrah",
        Route_Number: "12347",
        Arrival_Time: "05:00 AM",
        Departure_Time: "05:30 AM",
        Distance: "1500 km",
        Day: "Saturday"
    },
    {
        name: "Jan Shatabdi",
        number: "J2345",
        station: "Pune",
        Destination_Station: "Aurangabad",
        route: "Pune to Aurangabad",
        time: "7:30 AM",
        Station_Code: "PUNE",
        Station_Name: "Pune",
        Route_Number: "12348",
        Arrival_Time: "09:00 AM",
        Departure_Time: "09:30 AM",
        Distance: "250 km",
        Day: "Saturday"
    },
    {
        name: "Maharashtra Express",
        number: "M6789",
        station: "Nagpur",
        Destination_Station: "Mumbai",
        route: "Nagpur to Mumbai",
        time: "9:00 PM",
        Station_Code: "NGP",
        Station_Name: "Nagpur",
        Route_Number: "12349",
        Arrival_Time: "11:30 PM",
        Departure_Time: "12:00 AM",
        Distance: "800 km",
        Day: "Saturday"
    },
    {
        name: "Konkan Kanya Express",
        number: "K1234",
        station: "Ratnagiri",
        Destination_Station: "Mumbai",
        route: "Ratnagiri to Mumbai",
        time: "4:00 PM",
        Station_Code: "RAT",
        Station_Name: "Ratnagiri",
        Route_Number: "12350",
        Arrival_Time: "06:30 PM",
        Departure_Time: "07:00 PM",
        Distance: "300 km",
        Day: "Saturday"
    },
    {
        name: "Nizamuddin Express",
        number: "N5678",
        station: "Hyderabad",
        Destination_Station: "Delhi",
        route: "Hyderabad to Delhi",
        time: "10:30 PM",
        Station_Code: "HYD",
        Station_Name: "Hyderabad",
        Route_Number: "12351",
        Arrival_Time: "08:00 AM",
        Departure_Time: "08:30 AM",
        Distance: "1700 km",
        Day: "Saturday"
    },
    {
        name: "Gujarat Mail",
        number: "G9101",
        station: "Ahmedabad",
        Destination_Station: "Mumbai",
        route: "Ahmedabad to Mumbai",
        time: "11:15 PM",
        Station_Code: "ADI",
        Station_Name: "Ahmedabad",
        Route_Number: "12352",
        Arrival_Time: "03:00 AM",
        Departure_Time: "03:30 AM",
        Distance: "500 km",
        Day: "Saturday"
    },
    {
        name: "Goa Express",
        number: "GE1234",
        station: "Madgaon",
        Destination_Station: "Mumbai",
        route: "Madgaon to Mumbai",
        time: "6:45 AM",
        Station_Code: "MDGN",
        Station_Name: "Madgaon",
        Route_Number: "12353",
        Arrival_Time: "09:00 AM",
        Departure_Time: "09:30 AM",
        Distance: "450 km",
        Day: "Saturday"
    }
    
];


function Application() {
    const [inputValue, setInputValue] = useState('');
    const [trainInfo, setTrainInfo] = useState(null);
    const [message, setMessage] = useState('');

    const SearchTrain = () => {
        const train = findTrain(inputValue);
        setTrainInfo(train ? train : null);
        setMessage(train ? "Train found!" : "Train not found.");
        setInputValue(""); 
    };

    const findTrain = (input) => {
       
        const filteredTrains = trainSchedule.filter(train => {
            if (train.route == input ) {   
                return true; 
            } else {
                return false; 
            }
        });
        
        return filteredTrains.length > 0 ? filteredTrains[0] : null;
    };

    function renderTrainInfo() {
        if (trainInfo !== null) 
            
            {
            return (
                <div className="border border-gray-300 rounded-lg p-4 mt-4">
                    <div className="bg-green-700 text-white flex flex-col md:flex-row md:justify-between p-2 rounded">
                        <b className="m-2">Train Name</b>
                        <b className="m-2">Train Number</b>
                        
                        <b className="m-2">From Station</b>
                        <b className="m-2">Destination Station</b>
                        <b className="m-2">Train Route</b>
                        <b className="m-2">Train Time</b>
                    </div>
                    
                    <div className='flex flex-col md:flex-row md:justify-between p-2'>
                        <p className="m-2">{trainInfo.name}</p>
                        <p className="m-2">{trainInfo.number}</p>
                        
                        <p className="m-2">{trainInfo.station}</p>
                        <p className="m-2">{trainInfo.Destination_Station}</p>
                        <p className="m-2">{trainInfo.route}</p>
                        <p className="m-2">{trainInfo.time}</p>
                    </div>
                    <hr />
                    
                    <div className="bg-green-700 text-white flex flex-col md:flex-row md:justify-between p-2 rounded mt-4">
                        <b className="m-2">Station Code</b>
                        <b className="m-2">Station Name</b>
                        <b className="m-2">Route Number</b>
                        <b className="m-2">Arrival Time</b>
                        <b className="m-2">Departure Time</b>
                        <b className="m-2">Distance</b>
                        <b className="m-2">Day</b>
                    </div>
                    <div className='flex flex-col md:flex-row md:justify-between p-2'>
                        <p className="m-2">{trainInfo.Station_Code}</p>
                        <p className="m-2">{trainInfo.Station_Name}</p>
                        <p className="m-2">{trainInfo.Route_Number}</p>
                        <p className="m-2">{trainInfo.Arrival_Time}</p>
                        <p className="m-2">{trainInfo.Departure_Time}</p>
                        <p className="m-2">{trainInfo.Distance}</p>
                        <p className="m-2">{trainInfo.Day}</p>
                    </div>
                    <hr />
                </div>
            );
        }  
        
           return null;
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
            <div className="mb-4 w-full max-w-md">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter your route"
                    className="p-2 border border-gray-300 rounded w-full"
                    required
                />
                <button 
                    onClick={SearchTrain} 
                    className="ml-2  p-3 bg-green-500 text-white rounded hover:bg-green-600 w-full md:w-full ml-auto mr-auto mt-5 mb-auto"
                >
                    Search Train
                </button>
            </div>
            {
              <p className="text-green-700">{message}</p>
            }
            {renderTrainInfo()}
        </div>
    );
}

export default Application;


 