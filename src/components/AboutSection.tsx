import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/images/ddd3.webp";
export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative"
          >
            {/* Placeholder for the 20 Years Anniversary Image */}
            <div className="">
              <img
                src={img1}
                alt="20 Years Anniversary Team"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <span className="text-[#27ae3f] font-bold text-sm tracking-wider uppercase mb-4 block">
              About THESAY Pharma
            </span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 leading-[52px]">
              YOUR TRUSTED PARTNER IN{" "}
              <span className="text-black font-bold">
                HEALTHCARE AND PHARMACEUTICAL SOLUTIONS
              </span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center md:text-center">
                <h4 className="text-4xl font-extrabold mb-2 bg-gradient-to-b from-[#79d69b] to-[#2f9b57] bg-clip-text text-transparent">
                  25+
                </h4>
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">
                  YEARS IN BUSINESS
                </p>
              </div>
              <div className="text-center md:text-center">
                <h4 className="text-4xl font-extrabold mb-2 bg-gradient-to-b from-[#79d69b] to-[#2f9b57] bg-clip-text text-transparent">
                  26+
                </h4>
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">
                  COUNTRIES PRESENCE
                </p>
              </div>
              <div className="text-center md:text-center">
                <h4 className="text-4xl font-extrabold mb-2 bg-gradient-to-b from-[#79d69b] to-[#2f9b57] bg-clip-text text-transparent">
                  240+
                </h4>
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">
                  EMPLOYEES GLOBALLY
                </p>
              </div>
              <div className="text-center md:text-center">
                <h4 className="text-4xl font-extrabold mb-2 bg-gradient-to-b from-[#79d69b] to-[#2f9b57] bg-clip-text text-transparent">
                  600+
                </h4>
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">
                  PRODUCT PORTFOLIO
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
