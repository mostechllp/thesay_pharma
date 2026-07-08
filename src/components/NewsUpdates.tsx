import React, { useState } from "react";
import { motion } from "framer-motion";

// Import all blog images with proper names
import CPHI_Milan_2026 from "../assets/images/blog/CPHI Milan 2026.png";
import ADIHEX_2025 from "../assets/images/blog/ADIHEX 2025.png";
import ADIHEX_2026 from "../assets/images/blog/ADIHEX 2026.png";
import AICP_Conference_2025 from "../assets/images/blog/AICP conference 2025.png";
import Arab_Health_2025 from "../assets/images/blog/Arab Health 2025.png";
import Contura_Denmark_Visit from "../assets/images/blog/Contura Denmark Visit.png";
import CPHI_China_2025 from "../assets/images/blog/CPHI China 2025.png";
import CPHI_Frankfurt_2025 from "../assets/images/blog/CPHI Frankfruit 2025.png";
import Expopharm_2025 from "../assets/images/blog/Expopharm 2025.png";
import Medica_2025 from "../assets/images/blog/Medica 2025.png";
import Medlab_2025 from "../assets/images/blog/Medlab 2025.png";
import WFH_Labs_2026 from "../assets/images/blog/WFH Labs 2026.png";
import WHX_Dubai_2026 from "../assets/images/blog/WHX Dubai 2026.png";

const newsItems = [
  {
    title: "CPHI Milan 2026",
    date: "06 October, 2026",
    image: CPHI_Milan_2026,
    id: 1,
  },
  {
    title: "WHX Dubai 2026",
    date: "09 February, 2026",
    image: WHX_Dubai_2026,
    id: 2,
  },
  {
    title: "CPHI Frankfurt 2025",
    date: "28 October, 2025",
    image: CPHI_Frankfurt_2025,
    id: 3,
  },
  {
    title: "ADIHEX 2026",
    date: "15 September, 2026",
    image: ADIHEX_2026,
    id: 4,
  },
  {
    title: "Arab Health 2025",
    date: "27 January, 2025",
    image: Arab_Health_2025,
    id: 5,
  },
  {
    title: "CPHI China 2025",
    date: "18 June, 2025",
    image: CPHI_China_2025,
    id: 6,
  },
  {
    title: "Medica 2025",
    date: "18 November, 2025",
    image: Medica_2025,
    id: 7,
  },
  {
    title: "Medlab 2025",
    date: "03 February, 2025",
    image: Medlab_2025,
    id: 8,
  },
  {
    title: "Expopharm 2025",
    date: "24 September, 2025",
    image: Expopharm_2025,
    id: 9,
  },
  {
    title: "ADIHEX 2025",
    date: "01 September, 2025",
    image: ADIHEX_2025,
    id: 10,
  },
  {
    title: "WFH Labs 2026",
    date: "12 April, 2026",
    image: WFH_Labs_2026,
    id: 11,
  },
  {
    title: "Contura Denmark Visit",
    date: "20 August, 2025",
    image: Contura_Denmark_Visit,
    id: 12,
  },
  {
    title: "AICP Conference 2025",
    date: "05 October, 2025",
    image: AICP_Conference_2025,
    id: 13,
  },
];

export function NewsUpdates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerView = 3;

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  // Calculate total dots (one per card until the last visible set)
  const totalDots = newsItems.length - itemsPerView + 1;

  return (
    <section className="blog-section overflow-hidden py-[90px] bg-white px-[25px]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title with Explore More Button */}
        <div className="sec-title mb-[50px]">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h2 className="title text-3xl md:text-4xl font-bold text-[#0f3d2e] tracking-wide">
              News Updates
            </h2>
            <a
              href="#"
              className="btn-two inline-block bg-[#0f3d2e] hover:bg-[#1a5c47] text-white px-6 py-2.5 rounded font-medium transition-colors text-sm uppercase tracking-wider"
            >
              Explore More
            </a>
          </div>
        </div>

        {/* Blog Slider */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: `-${activeIndex * 33.333}%`,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {newsItems.map((item) => (
              <div key={item.id} className="w-1/3 flex-shrink-0 px-3">
                <div className="inner-box rounded-lg overflow-hidden shadow-[0px_4.4px_20px_-1px_rgba(19,16,34,0.05)] bg-white h-full">
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover transition-all duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <ul className="flex items-center gap-3 mb-2">
                      <li className="text-xs text-[#737588]">{item.date}</li>
                    </ul>

                    <h5 className="text-base font-bold text-[#0f3d2e] leading-tight">
                      {item.title}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-10 flex justify-center items-center gap-3">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                index === activeIndex ? "border border-[#0f3d2e]" : ""
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? "bg-[#0f3d2e]" : "bg-gray-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
