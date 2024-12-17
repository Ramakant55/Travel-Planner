import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="text-orange-500 font-bold text-2xl">Travel Planner</div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>
            <Link to="/AllTours" className="text-gray-700 hover:text-orange-500">Travel Guides</Link>
            <Link to="/hotels" className="text-gray-700 hover:text-orange-500">Hotels</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Explore by destination"
              className="border border-gray-300 rounded-full px-4 py-1 focus:outline-none focus:ring focus:ring-orange-200"
            />
            <Link to="/login" className="text-gray-700 hover:text-orange-500">Login</Link>
            <Link to="/signup" className="bg-orange-500 text-white py-1 px-4 rounded-full hover:bg-orange-600">
              Sign Up
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-orange-500">Menu</button>
          </div>
        </div>
      </nav>

      {/* Additional Content */}
      <section className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('https://wanderlog.com/assets/LandingPageHero.jpg')" }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 py-16 bg-opacity-75">
        {/* Hero Content */}
        <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              A travel planner for<p> everyone</p>
            </h1>
            <p className="text-gray-600 mb-6 w-96 text-2xl">
              Organize flights & hotels and map your trips in a free travel app
              designed for vacation planning & road trips, powered by AI and Google Maps.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600">
                Start planning
              </button>
              <button className="bg-orange-100 text-orange-500 py-2 px-6 rounded-full hover:bg-orange-200">
                Get the app
              </button>
            </div>
            </div>
              {/* Decorative Dotted Path */}
          <div className="hidden md:block md:w-1/2 mt-8 md:mt-0">
            {/* Empty for now, could add more visuals later */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
