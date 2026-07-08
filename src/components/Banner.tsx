import React from "react";
import { motion } from "framer-motion";
import thesay from "../assets/images/gallery/thesay.jpeg";
import shape from "../assets/images/shapes/consult-shape.webp";

export function Banner() {
  return (
    <section
      className="relative pt-[70px] md:pt-[150px] pb-[70px] md:pb-[150px] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${thesay})`,
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, #0f3d2e 0%, #0f3d2e 45%, rgba(15,61,46,0.85) 60%, rgba(15,61,46,0.35) 80%, rgba(15,61,46,0.15) 100%)",
        }}
      ></div>

      {/* Shape Decoration */}
      <div className="absolute -top-[50px] -left-[180px] z-10 pointer-events-none">
        <img
          className=" animate-spin-slow w-[500px] opacity-80"
          src={shape}
          alt="Decorative shape"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-20 relative z-20">
        <div className="max-w-4xl">
          <motion.h2
            className="text-white font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-2xl md:text-4xl text-gray-300 font-light mb-2">
              Redefining Global Healthcare
            </span>
            <span className="text-4xl md:text-4xl lg:text-5xl">
              Excellence Through Efficiency
              <br /> And Partnerships
            </span>
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
