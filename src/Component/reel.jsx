import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const reels = [
  {
    id: 1,
    embedUrl: "https://www.instagram.com/reel/DFaL-djS51T/?utm_source=ig_embed&amp;utm_campaign=loading",
  },
  {
    id: 2,
    embedUrl: "https://www.instagram.com/p/DEXpPugStub/",
  },
  {
    id: 3,
    embedUrl: "https://www.instagram.com/p/DESeVSIyOry/",
  },
  // Add more reel URLs here
];

const ReelCarousel = () => {
  // Run Instagram's embed.js script after component mounts
  useEffect(() => {
    // This will ensure the embedded Instagram content is rendered correctly.
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Reels Section
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="reels-swiper"
        onSlideChange={() => {
          // Stop the autoplay or pause Instagram media when sliding to another reel
          const iframeElements = document.querySelectorAll("iframe");
          iframeElements.forEach((iframe) => {
            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          });
        }}
      >
        {reels.map((reel) => (
          <SwiperSlide key={reel.id}>
            <div className="flex justify-center">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={reel.embedUrl}
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                  width: "-webkit-calc(100% - 2px)",
                  width: "calc(100% - 2px)",
                }}
              >
                <div style={{ padding: "16px" }}>
                  <a
                    href={reel.embedUrl}
                    style={{
                      background: "#FFFFFF",
                      lineHeight: "0",
                      padding: "0 0",
                      textAlign: "center",
                      textDecoration: "none",
                      width: "100%",
                    }}
                    target="_blank"
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#F4F4F4",
                          borderRadius: "50%",
                          flexGrow: "0",
                          height: "40px",
                          marginRight: "14px",
                          width: "40px",
                        }}
                      ></div>
                    </div>
                    <div style={{ padding: "19% 0" }}></div>
                  </a>
                </div>
              </blockquote>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReelCarousel;
