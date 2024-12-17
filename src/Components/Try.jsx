import React from "react";

const Try = () => {
 
  const destinationsData = [
    { title: "Paris", description: "The City of Light", image: "https://media.gettyimages.com/id/2159827892/photo/paris-france-a-general-view-of-the-eiffel-tower-at-night-as-the-olympic-rings-are-displayed.jpg?s=612x612&w=0&k=20&c=KdKoLOYqHAjMGZGJ4joPoT4J29K_EIHL7wNDp1Z6_2Y=" },
    { title: "New York", description: "The Big Apple", image: "https://th.bing.com/th/id/OIP.is4XIcvPx2bJp_H4PiBevgHaE8?rs=1&pid=ImgDetMain" },
    { title: "Tokyo", description: "Land of the Rising Sun", image: "https://extraordinary-flan-3a886a.netlify.app/static/media/Tokyo.007e6059470eacded64c.png" },
    { title: "Sydney", description: "Harbor City", image: "https://wallpapercave.com/wp/76YMeDJ.jpg" },
  ];

  return (
    <div className="-mt-44">
      {/* Top Destination Section */}
      <section className="tours_section py-10 bg-gray-100 ">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Top Destination For Your Next Vacation
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinationsData.map((destination, inx) => (
              <div key={inx} className="p-4 bg-white shadow rounded">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="text-lg font-bold mt-4">{destination.title}</h3>
                <p className="text-sm text-gray-600">{destination.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="gallery py-10 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Photo Gallery</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Add gallery items here */}
         <img src="https://th.bing.com/th/id/OIP.qDvAlhidTBzXiGyDfq_O0gHaE7?rs=1&pid=ImgDetMain"/>
         <img src="https://th.bing.com/th/id/OIP.aVtfigX2nC5O2Q5b63VfTQHaEo?rs=1&pid=ImgDetMain"/>
         <img src="https://th.bing.com/th/id/OIP.D77CGBp3xQG_UV9uzOC_2AHaE8?w=1000&h=667&rs=1&pid=ImgDetMain"/>
         <img src="https://images.musement.com/cover/0002/45/dubai-skyline-at-dusk-jpg_header-144981.jpeg?&q=60&fit=crop"/>

   

          </div>
        </div>
      </section>
    </div>
  );
};

export default Try;
