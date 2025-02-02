import React from "react";
import VideoCarousel from "./lib/VideoCarousel";
import MenuCarousel from "./Menu";
import ReelCarousel from "./reel";


const Home = () => {
  return (
    <div className="Home" id="Home">
      <VideoCarousel />

      <div className="text-center text-[#8B4513] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 py-8">
        <p className="text-md font-medium">Who we are</p>
        <h1 className="text-3xl sm:text-4xl font-semibold text-brown-700">Our Journey</h1>

        <h3 className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-black">
          Established in 1967, Srimurugan Cafe has been a cherished destination for
          authentic flavors and warm hospitality. What began as a small eatery has grown
          into a renowned restaurant and cafe, blending tradition with modern tastes to
          serve generations of food lovers with passion and dedication.
        </h3>

        <button className="mt-4 px-6 py-3 bg-[#8B4513] text-white font-bold rounded-lg hover:bg-[#A0522D] transition duration-300">
          Read More
        </button>
      </div>  
         <MenuCarousel/>
         <ReelCarousel/>
        
    </div>
  );
};

export default Home;
