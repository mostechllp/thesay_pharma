import React from "react";
import { motion } from "framer-motion";

import { Header } from "../components/Header";
import { PageHero } from "../components/PageHero";
import { SegmentGrid } from "../components/SegmentGrid";
import { Footer } from "../components/Footer";
import { BusinessSegments } from "../components/BusinessSegments";
import segment from "../assets/images/segment-image.jpeg";
export function Segments() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-[#27ae3f] selection:text-white">
      <Header />
      <main>
        <PageHero title="Segments" breadcrumb="Segments" />

        <BusinessSegments />

        {/* Global Healthcare Solutions two-column */}
        <section className="bg-white ps-[30px]">
          <div className="grid lg:grid-cols-2">
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
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
              }}
              className="py-20 px-4 md:px-8 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] lg:pr-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#051B05] mb-8 leading-snug">
                Global Healthcare Solutions: Medicines, Equipment, Diagnostics,
                Veterinary Care
              </h2>
              <div className="space-y-6 border-l-2 border-[#27ae3f] pl-6 text-gray-500 text-lg leading-relaxed">
                <p>
                  THESAY Pharma excels in delivering high-quality medicines,
                  medical equipment, diagnostic tools, and veterinary solutions
                  across global markets. We ensure consistent access to
                  essential medicines that cater to both chronic and urgent
                  medical needs, enhancing patient outcomes worldwide. With our
                  reliable distribution network, we serve diverse regions,
                  providing healthcare professionals with the products they need
                  to address various medical conditions. Our commitment to
                  quality and efficiency is central to our approach, ensuring
                  that every product meets the highest standards for optimal
                  care.
                </p>
                <p>
                  In addition to medicines, THESAY Pharma provides advanced
                  medical equipment designed to streamline disease diagnosis and
                  patient monitoring. These tools help improve healthcare
                  efficiency and ensure accurate, timely treatment. Our tailored
                  diagnostic solutions are equally focused on human and
                  veterinary care, offering precision for both sectors. By
                  representing trusted veterinary brands, we empower
                  veterinarians with the best resources to improve animal health
                  and welfare, ensuring reliable and effective solutions for
                  animal care globally.
                </p>
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
              className="relative min-h-[400px]"
            >
              <div
                className="absolute inset-0 "
                style={{
                  backgroundImage: `url(${segment})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundAttachment: "fixed",
                }}
              ></div>
              <div className="absolute inset-0 bg-[#0f3d2e]/40"></div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
