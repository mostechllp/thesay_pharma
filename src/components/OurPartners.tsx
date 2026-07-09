import React from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";

// Import all partner logos (1-29)
import partner1 from "../assets/images/partners/1.webp";
import partner2 from "../assets/images/partners/2.webp";
import partner3 from "../assets/images/partners/3.webp";
import partner4 from "../assets/images/partners/4.webp";
import partner5 from "../assets/images/partners/5.webp";
import partner6 from "../assets/images/partners/6.webp";
import partner7 from "../assets/images/partners/7.webp";
import partner8 from "../assets/images/partners/8.webp";
import partner9 from "../assets/images/partners/9.webp";
import partner10 from "../assets/images/partners/10.webp";
import partner11 from "../assets/images/partners/11.webp";
import partner12 from "../assets/images/partners/12.webp";
import partner13 from "../assets/images/partners/13.webp";
import partner14 from "../assets/images/partners/14.webp";
import partner15 from "../assets/images/partners/15.webp";
import partner16 from "../assets/images/partners/16.webp";
import partner17 from "../assets/images/partners/17.webp";
import partner18 from "../assets/images/partners/18.webp";
import partner19 from "../assets/images/partners/19.webp";
import partner20 from "../assets/images/partners/20.webp";
import partner21 from "../assets/images/partners/21.webp";
import partner22 from "../assets/images/partners/22.webp";
import partner23 from "../assets/images/partners/23.webp";
import partner24 from "../assets/images/partners/24.webp";
import partner25 from "../assets/images/partners/25.webp";
import partner26 from "../assets/images/partners/26.webp";
import partner27 from "../assets/images/partners/27.webp";
import partner28 from "../assets/images/partners/28.webp";
import partner29 from "../assets/images/partners/29.webp";

const partners = [
  { id: 1, name: "Partner 1", image: partner1 },
  { id: 2, name: "Partner 2", image: partner2 },
  { id: 3, name: "Partner 3", image: partner3 },
  { id: 4, name: "Partner 4", image: partner4 },
  { id: 5, name: "Partner 5", image: partner5 },
  { id: 6, name: "Partner 6", image: partner6 },
  { id: 7, name: "Partner 7", image: partner7 },
  { id: 8, name: "Partner 8", image: partner8 },
  { id: 9, name: "Partner 9", image: partner9 },
  { id: 10, name: "Partner 10", image: partner10 },
  { id: 11, name: "Partner 11", image: partner11 },
  { id: 12, name: "Partner 12", image: partner12 },
  { id: 13, name: "Partner 13", image: partner13 },
  { id: 14, name: "Partner 14", image: partner14 },
  { id: 15, name: "Partner 15", image: partner15 },
  { id: 16, name: "Partner 16", image: partner16 },
  { id: 17, name: "Partner 17", image: partner17 },
  { id: 18, name: "Partner 18", image: partner18 },
  { id: 19, name: "Partner 19", image: partner19 },
  { id: 20, name: "Partner 20", image: partner20 },
  { id: 21, name: "Partner 21", image: partner21 },
  { id: 22, name: "Partner 22", image: partner22 },
  { id: 23, name: "Partner 23", image: partner23 },
  { id: 24, name: "Partner 24", image: partner24 },
  { id: 25, name: "Partner 25", image: partner25 },
  { id: 26, name: "Partner 26", image: partner26 },
  { id: 27, name: "Partner 27", image: partner27 },
  { id: 28, name: "Partner 28", image: partner28 },
  { id: 29, name: "Partner 29", image: partner29 },
];

export function OurPartners() {
  return (
    <section className="brand-section-two pt-[30px] bg-white px-[30px] overflow-hidden">
      <div className="container-fluid mb-[50px]">
        <div className="container mx-auto px-4 md:px-8">
          {/* Section Title */}
          <div className="sec-title mb-[50px]">
            <h2 className="title text-3xl md:text-4xl font-bold text-[#0f3d2e] text-center tracking-wide">
              <AnimatedText
                inline
                lines={[
                  {
                    text: "Our Partners",
                  },
                ]}
              />
            </h2>
          </div>

          {/* Scrolling Partners - Single Row with Pause on Hover */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8 md:gap-12 lg:gap-16 items-center"
              animate={{
                x: [0, -3840],
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{
                animationPlayState: "paused",
              }}
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-[120px] md:w-[150px] lg:w-[180px]"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    loading="lazy"
                    className="w-full h-auto max-h-[80px] md:max-h-[100px] lg:max-h-[120px] object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Fade Effects */}
          <div className="relative mt-4">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}