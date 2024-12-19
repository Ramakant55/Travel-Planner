import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-md md:py-4 py-6">
        <div className="container mx-auto flex items-center justify-between px-4">

          <div className="text-orange-500 font-bold text-2xl transition-transform duration-300 ease-in-out hover:scale-150">Travel Planner</div>
          <div className="hidden md:flex items-center space-x-10 text-xl font-bold">
            <Link to="/" className="text-gray-700 hover:text-orange-500  transform transition ease duration-300 hover:translate-x-[-8px]">Home</Link>
            <Link to="/alltours" className="text-gray-700 hover:text-orange-500  transform transition duration-300 hover:translate-x-[-8px]">Travel Guides</Link>
            <Link to="/hotels" className="text-gray-700 hover:text-orange-500 transform transition duration-300 hover:translate-x-[-8px]">Hotels</Link>
          <div className="text-orange-500 font-bold text-2xl md:transition-transform md:duration-300 md:ease-in-out md:hover:scale-150">
            Travel Planner
          </div>
          <div className="hidden md:flex  items-center space-x-10 text-xl font-bold">
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-500 transform transition ease duration-300 hover:translate-x-[-8px]"
            >
              Home
            </Link>
            <Link
              to="/AllTours"
              className="text-gray-700 hover:text-orange-500 transform transition duration-300 hover:translate-x-[-8px]"
            >
              Travel Guides
            </Link>
            <Link
              to="/hotels"
              className="text-gray-700 hover:text-orange-500 transform transition duration-300 hover:translate-x-[-8px]"
            >
              Hotels
            </Link>

          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-orange-500">
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-orange-500 text-white py-1 px-4 rounded-full hover:bg-orange-600"
            >
              Sign Up
            </Link>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-700 text-3xl hover:text-orange-500 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg px-4 py-2 space-y-2">
            <Link
              to="/"
              className="block text-gray-700 hover:text-orange-500 font-bold"
            >
              Home
            </Link>
            <Link
              to="/AllTours"
              className="block text-gray-700 hover:text-orange-500 font-bold"
            >
              Travel Guides
            </Link>
            <Link
              to="/hotels"
              className="block text-gray-700 hover:text-orange-500 font-bold"
            >
              Hotels
            </Link>
            <Link
              to="/login"
              className="block text-gray-700 hover:text-orange-500"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600"
            >
              Sign Up
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px]"
        style={{ backgroundImage: "url('https://wanderlog.com/assets/LandingPageHero.jpg')" }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 py-16 bg-opacity-75">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              A travel planner for<p> everyone</p>
            </h1>
            <p className="text-gray-600 mb-6 text-lg md:text-2xl">
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
          <div className="hidden md:block md:w-1/2 mt-8 md:mt-0"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
