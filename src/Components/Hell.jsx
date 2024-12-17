import React from "react";

const Hell = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('your-image-path/tour2.png')",
          filter: "brightness(0.5)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full px-4">
        <h1 className="text-5xl font-bold mb-4">JOURNEY TO</h1>
        <h2 className="text-4xl font-bold mb-4">EXPLORE WORLD</h2>
        <p className="mb-8 max-w-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>

        {/* Search Box */}
        <div className="bg-white text-gray-700 p-4 rounded-lg shadow-md w-full max-w-4xl flex justify-between items-center">
          <div className="flex flex-1 flex-col px-2">
            <label className="text-sm font-medium">Location</label>
            <input
              type="text"
              placeholder="Location"
              className="border border-gray-300 rounded-md p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-1 flex-col px-2">
            <label className="text-sm font-medium">Check In</label>
            <input
              type="date"
              className="border border-gray-300 rounded-md p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-1 flex-col px-2">
            <label className="text-sm font-medium">Check Out</label>
            <input
              type="date"
              className="border border-gray-300 rounded-md p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-1 flex-col px-2">
            <label className="text-sm font-medium">Guest</label>
            <select className="border border-gray-300 rounded-md p-2 focus:outline-none">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
            </select>
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium">
            Search
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 bg-white py-12 px-4 md:px-16 flex justify-between">
        {/* Feature 1 */}
        <div className="text-center flex-1">
          <div className="text-red-500 text-5xl mb-4">🌴</div>
          <h3 className="font-semibold text-lg mb-2">Discover the possibilities</h3>
          <p className="text-gray-500 text-sm">
            Nearly half a million attractions, hotels & more. Find joy!
          </p>
        </div>

        {/* Feature 2 */}
        <div className="text-center flex-1">
          <div className="text-green-500 text-5xl mb-4">💰</div>
          <h3 className="font-semibold text-lg mb-2">Enjoy deals & delights</h3>
          <p className="text-gray-500 text-sm">
            Quality activities. Great prices. Save more, travel free.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="text-center flex-1">
          <div className="text-blue-500 text-5xl mb-4">🌍</div>
          <h3 className="font-semibold text-lg mb-2">Exploring made easy</h3>
          <p className="text-gray-500 text-sm">
            Book last minute, skip lines, and cancel free.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="text-center flex-1">
          <div className="text-orange-500 text-5xl mb-4">⭐</div>
          <h3 className="font-semibold text-lg mb-2">Travel you can trust</h3>
          <p className="text-gray-500 text-sm">
            Reliable reviews & support at every step.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hell;
