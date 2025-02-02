import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Bevera from '../assets/images/bevera.jpeg'

const menuCategories = [
  { name: "Beverage", image: Bevera },
  { name: "Tiffin", image: "/images/tiffin.jpg" },
  { name: "Lunch", image: "/images/lunch.jpg" },
  { name: "Evening Special", image: "/images/evening.jpg" },
  { name: "Dinner", image: "/images/dinner.jpg" }
];

const MenuCarousel = () => {
  return (
    <section className="py-16" style={{ backgroundColor: "rgb(255, 228, 196)" }}>
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12 text-brown-800">✨ Our Special Menu ✨</h2>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="pb-12"
        >
          {menuCategories.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="relative group w-2/3 h-96 bg-white shadow-xl rounded-3xl overflow-hidden transition duration-500 transform hover:scale-110 hover:rotate-2">
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-500"
                />

                {/* Glowing Border */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-orange-400 transition-all duration-500 rounded-3xl"></div>

                {/* Glass Effect */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Text with Neon Glow */}
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-3xl font-extrabold text-white drop-shadow-lg group-hover:text-orange-600 transition duration-500">
                    {item.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MenuCarousel;
