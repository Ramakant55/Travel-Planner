import React from "react";

// Replace placeholder URLs with the provided image URLs
const imageUrls = [
  "https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1580112/pexels-photo-1580112.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/26665333/pexels-photo-26665333/free-photo-of-a-tall-building-with-a-large-sign-on-it.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/12909710/pexels-photo-12909710.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1082326/pexels-photo-1082326.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1441058/pexels-photo-1441058.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const hotelNames = [
  "Grand Plaza Hotel", "Skyline Retreat", "Ocean Breeze Resort", "Mountain View Inn",
  "Royal Orchid Suites", "Sunset Boulevard Hotel", "Emerald Bay Resort", "Golden Sands Hotel",
  "Urban Oasis Lodge", "Blue Horizon Hotel", "Paradise Cove Resort", "Lakeside Haven",
  "Aurora Heights Hotel", "Serenity Shores Inn", "Starlight Lodge", "Palm Grove Resort",
  "Crystal Palace Hotel", "Sunnyvale Inn", "Wildflower Retreat", "Cascade Resort",
  "Silver Creek Lodge", "Moonlit Inn", "Evergreen Hotel", "Willow Creek Resort",
  "Maplewood Suites", "Whispering Pines Lodge", "Tranquil Waters Resort", "Eagle Nest Inn",
  "Summit Ridge Hotel", "Cedarwood Hotel", "The Velvet Rose Inn", "Amber Light Resort",
  "Dusk View Retreat", "Golden Horizon Lodge", "The Crimson Orchid", "Tropical Breeze Inn",
  "Coastal Serenity Hotel", "The Azure Wave Resort", "Sunrise Hill Lodge", "Orchid Haven Inn",
  "Silver Leaf Suites", "Harbor View Hotel", "The Golden Palm", "Ivory Cliff Inn",
  "Highland Escape Lodge", "Rustic Meadow Inn", "Grand Coral Resort", "Ocean Pearl Hotel",
  "The Sunset Pearl", "The Emerald Haven"
];

const hotels = Array.from({ length: 50 }, (_, index) => ({
  image: imageUrls[index % imageUrls.length], // Cycle through the provided images
  price: (50 + index * 5).toFixed(2), // Prices starting from $50
  rating: (Math.random() * (5 - 3) + 3).toFixed(1), // Random rating between 3.0 and 5.0
  seatsAvailable: Math.floor(Math.random() * 50) + 1, // Random seats between 1 and 50
  name: hotelNames[index % hotelNames.length], // Assign names from the hotelNames array
  id: index + 1, // Unique ID for each hotel
}));

const Hotels = () => {
  return (
    <div className=" py-10 md:-mt-44">
      <h1 className="text-3xl font-bold underline text-center text-gray-800 mb-8">
        Available Hotels
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white shadow-md shadow-black rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {hotel.name}
              </h2>
              <p className="text-gray-600">
                Price: <span className="font-bold text-green-600">${hotel.price}</span>
              </p>
              <p className="text-gray-600">
                Rating: <span className="font-bold text-yellow-500">{hotel.rating} ⭐</span>
              </p>
              <p className="text-gray-600">
                Seats Available:{" "}
                <span
                  className={`font-bold ${
                    hotel.seatsAvailable > 10
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {hotel.seatsAvailable}
                </span>
              </p>
              <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
