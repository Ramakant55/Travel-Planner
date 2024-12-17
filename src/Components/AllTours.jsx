import React from "react";
import { Link } from "react-router-dom";
const AllTours = () => {
  return (
    <div className="font-poppins">
      <div className="relative w-full h-[400px] md:h-[500px]">
        <img
          src="https://img.freepik.com/free-photo/woman-hand-holding-camera-standing-top-rock-nature-travel-concept_335224-887.jpg?t=st=1734420383~exp=1734423983~hmac=977d9ba3f0b67cbf3b5d99ace66163ea03292b4a8c4457ead00928c1470d750f&w=1060" 
          alt="All Tours"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            <span className="text-orange-500"></span>
          </h1>
        </div>
      </div>

      <div className="relative -mt-12 z-10 flex justify-center px-4">
        <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center w-full md:w-3/4 lg:w-2/3 p-4">
          <div className="flex-1 text-center border-r border-gray-300 px-4">
            <p className="text-gray-500 text-sm font-medium">Location</p>
            <input
              type="text"
              placeholder="Where are you going?"
              className="w-full mt-2 focus:outline-none"
            />
          </div>

          <div className="flex-1 text-center border-r border-gray-300 px-4">
            <p className="text-gray-500 text-sm font-medium">Distance</p>
            <input
              type="text"
              placeholder="Distance k/m"
              className="w-full mt-2 focus:outline-none"
            />
          </div>

          <div className="flex-1 text-center px-4">
            <p className="text-gray-500 text-sm font-medium">Max People</p>
            <input
              type="number"
              placeholder="0"
              className="w-full mt-2 focus:outline-none"
            />
          </div>

          <div className="ml-4 mt-4 md:mt-0">
            <button className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg  transform hover:rotate-6">
              <span role="img" aria-label="search">
                🔍
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute mt-8 ml-20 hidden md:block">
        <span className="text-orange-500 text-3xl">✈</span>
        <div className="border-t-2 border-dotted border-orange-400 w-32 mt-1"></div>
      </div>
    </div>
  );
};

export default AllTours;