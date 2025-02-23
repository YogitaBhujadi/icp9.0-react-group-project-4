import React, { useState } from "react";
import trainData from "../../config/trainData";
import TrainDetailsCard from "../../components/TrainDetailsCard";
import Background from "../../assets/images/bg12.webp";

const TrainExplorer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("name"); 
  const [trainType, setTrainType] = useState(""); 


  const filteredTrains = trainData.filter((train) => {
    const matchesSearch =
      searchTerm === "" ||
      (searchBy === "name" && train.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (searchBy === "number" && train.number.includes(searchTerm));

    const matchesType = trainType === "" || train.type === trainType;

    return matchesSearch && matchesType;
  });

  return (
    <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Background})`,
        }}
    >
    <div className="min-h-screen flex flex-col items-center bg-slate-200 p-6 mt-30 mb-10">
      <h1 className="md:text-3xl text-xl font-bold md:mb-8 mb-3 text-green-800">Train Explorer</h1>

      <div className="flex w-full gap-6 flex-wrap justify-center">
        <input
          type="text"
          placeholder={`Search by train ${searchBy}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 rounded-md md:w-2/3 w-full border border-gray-400 focus:border-green-700 outline-none md:text-lg text-sm"
        />

        <select
          className="p-2 rounded-md border border-gray-400 text-sm"
          value={searchBy}
          onChange={(e) => setSearchBy(e.target.value)}
        >
          <option value="name">Train Name</option>
          <option value="number">Train Number</option>
        </select>

        <select
          className="p-2 rounded-md border border-gray-400 text-sm"
          value={trainType}
          onChange={(e) => setTrainType(e.target.value)}
        >
          <option value="">All Train Types</option>
          <option value="Express">Express</option>
          <option value="Local">Local</option>
          <option value="Superfast">Superfast</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filteredTrains.length > 0 ? (
          filteredTrains.map((train) => <TrainDetailsCard key={train.id} train={train} />)
        ) : (
          <p className="text-gray-600 col-span-full">No trains found.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default TrainExplorer;