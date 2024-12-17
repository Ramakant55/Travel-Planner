import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TravelPlanner = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch weather data dynamically based on location
  const fetchWeather = async (city) => {
    if (!city) return;
    const apiKey = '467849189330e06844884977e1633447';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    setLoading(true);
    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // Activity suggestion logic
  const getActivitySuggestion = () => {
    if (!weather) return '';
    const condition = weather.weather[0].main.toLowerCase();
    const temp = weather.main.temp;

    if (condition.includes('clear') || condition.includes('clouds') && temp > 15 && temp < 30) {
      return 'Outdoor activities are recommended!';
    }
    if (condition.includes('rain') || condition.includes('snow') || temp <= 15 || temp > 35) {
      return 'Indoor activities are better in this weather.';
    }
    return 'Weather conditions are variable; plan accordingly!';
  };

  // Fetch weather when location changes
  useEffect(() => {
    if (location) {
      fetchWeather(location);
    }
  }, [location]);

  return (
    <div>
    <div
      className="min-h-screen bg-cover bg-center text-white"
        style={{ background:"url('')",}}
      >
    
      {/* Hero Section */}
      <div className="h-96 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold mb-4">
          Journey to Explore {location || 'World'}
        </h1>
        <p className="text-lg">
          Discover the beauty of {location || 'your favorite destination'} with us.
        </p>
      </div>

      {/* Input & Weather Section */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg -mt-16 relative text-gray-800">
        {/* Location Input */}
        <div className="text-center mb-6">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="p-3 border border-gray-300 rounded-md w-full max-w-md mx-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Weather Data */}
        {loading ? (
          <p className="text-center text-lg font-semibold">Fetching weather data...</p>
        ) : weather ? (
          <div className="p-6 bg-blue-100 rounded-md">
            <h2 className="text-2xl font-bold mb-3">Weather in {location}</h2>
            <p className="text-lg">Temperature: <strong>{weather.main.temp} °C</strong></p>
            <p className="text-lg">Condition: <strong>{weather.weather[0].description}</strong></p>
            <p className="text-lg mt-4 font-medium">{getActivitySuggestion()}</p>
          </div>
        ) : (
          <p className="text-center text-gray-600">Enter a location to check the weather.</p>
        )}
      </div>
    </div>

    <div className="relative w-full h-96 -mt-32">
    {/* Background Image */}
    <div
      className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: "url('')",
        filter: "brightness(0.5)",
      }}
    ></div>

    {/* Content */}
    <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full px-4">
      <h1 className="text-5xl font-bold mb-4 ">JOURNEY TO</h1>
      <h2 className="text-4xl font-bold mb-4 ">EXPLORE WORLD</h2>
      <p className="mb-8 max-w-2xl ">
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
            value={location}
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
    </div>
  );
};

export default TravelPlanner;
