import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import tea from '../../assets/video/tea.mp4'
import Rice from '../../assets/video/mushroomRice.mp4'
import Ice from '../../assets/video/Icecream.webm'

const VideoCarousel = () => {
  return (
    <div className="video-carousel">
      <Swiper
        spaceBetween={50} // Set the space between slides
        slidesPerView={1} // Display one slide at a time
        loop={true} // Enable looping
        autoplay={{ delay: 3000 }} // Autoplay after 3 seconds
      >
        <SwiperSlide>
          <div className="carousel-slide relative">
            <video
              autoPlay
              loop
              muted
              className="w-full h-[500px] object-cover"
            >
              <source src={tea} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h1 className="text-5xl font-bold">TEA</h1>
              <h3 className="text-lg font-medium">A refreshing cup to start your day with a smile.</h3>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="carousel-slide relative">
            <video
              autoPlay
              loop
              muted
              className="w-full h-[500px] object-cover"
            >
              <source src={Rice} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h1 className="text-5xl font-bold">Mushroom Rice</h1>
              <h3 className="text-lg font-medium">Delicious mushroom rice, the perfect blend of flavors.</h3>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="carousel-slide relative">
            <video
              autoPlay
              loop
              muted
              className="w-full h-[500px] object-cover"
            >
              <source src={Ice} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h1 className="text-5xl font-bold">Ice Cream</h1>
              <h3 className="text-lg font-medium">Cool down with our creamy and refreshing ice cream.</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default VideoCarousel;
