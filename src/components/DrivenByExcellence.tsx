import React from "react";
import { motion } from "framer-motion";

// Import icon images
import MissionIcon from "../assets/images/about/5.webp";
import VisionIcon from "../assets/images/about/6.webp";
import ValuesIcon from "../assets/images/about/7.webp";
import GoalsIcon from "../assets/images/about/8.webp";
import ShapeBg from "../assets/images/shapes/service-five-shape.webp";
import servicebg from "../assets/images/service/service-bg.jpg";

const items = [
  {
    title: "OUR MISSION",
    icon: MissionIcon,
    description:
      "To support the global distribution of pharmaceutical and healthcare products by ensuring reliable supply chains, region-specific regulatory compliance, and consistent quality standards across international markets.",
  },
  {
    title: "OUR VISION",
    icon: VisionIcon,
    description:
      "To be a trusted global pharmaceutical distribution partner, recognized for regulatory strength, supply chain efficiency, and the ability to ensure smooth international distribution of healthcare products.",
  },
  {
    title: "OUR VALUES",
    icon: ValuesIcon,
    description:
      "Integrity, reliability, quality, and collaboration define our approach, with a strong commitment to ethical distribution practices, operational discipline, and continuous improvement to meet global healthcare supply needs.",
  },
  {
    title: "OUR GOALS",
    icon: GoalsIcon,
    description:
      "To expand our international distribution network, strengthen long-term partnerships, and ensure sustainable access to essential healthcare products that support patient care across global markets.",
  },
];

export function DrivenByExcellence() {
  return (
    <section
      className="relative overflow-hidden py-[120px] mx-[30px] rounded-[30px]"
      style={{
        backgroundImage: `url(${servicebg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Green Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,68,67,0.92) 0%, rgba(20,68,67,0.88) 100%)",
        }}
      />

      {/* Shape */}
      <div className="absolute bottom-0 left-0 z-20  pointer-events-none">
        <img src={ShapeBg} alt="" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Section Title */}
        <div className="sec-title center text-center mb-[50px]">
          <motion.h2
            className="title text-3xl md:text-4xl font-bold text-white uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            DRIVEN BY EXCELLENCE
          </motion.h2>
        </div>
      </div>

      {/* Service Wrapper */}
      <div className="service-wrapper container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="service-card-items mt-[30px] rounded-[30px] border border-white/20 p-[25px] md:p-[35px] lg:p-[50px]"
            >
              {/* Icon */}
              <div className="icon w-[68px] h-[68px] rounded-full flex items-center justify-center bg-gradient-to-br from-[#C8F169] to-[#039397]">
                <img
                  src={item.icon}
                  alt={`${item.title} Icon`}
                  loading="lazy"
                  className="w-20 h-20 object-contain"
                />
              </div>

              {/* Content */}
              <div className="content mt-[35px]">
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  <a
                    href="#"
                    className="
    text-white
    relative
    inline-block
    after:absolute
    after:left-0
    after:bottom-[-4px]
    after:h-[2px]
    after:w-full
    after:bg-white
    after:origin-left
    after:scale-x-0
    after:transition-transform
    after:duration-300
    hover:after:scale-x-100
  "
                  >
                    {item.title}
                  </a>
                </h3>
                <p className="text-[#C4C4C4] text-lg   leading-relaxed text-justify">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
