import React from "react";
import { motion } from "framer-motion";

import { Header } from "../components/Header";
import { PageHero } from "../components/PageHero";
import { SegmentGrid } from "../components/SegmentGrid";
import { Footer } from "../components/Footer";
import { segments } from "../components/BusinessSegments";
import segment from "../assets/images/segment-image.jpeg";
import shape from "../assets/images/shapes/feature-shape.webp";
import { SEO } from "../components/SEO";
export function Segments() {
  return (
    <>
      <SEO
        title="Our Business Segments - THESAY PHARMA | Medicines, Diagnostics & More"
        description="Explore THESAY Pharma’s business segments: Human Healthcare, Medical Equipment, Diagnostics, and Veterinary products."
        keywords="pharma business segments, human healthcare, medical equipment distribution, diagnostic products, veterinary solutions"
      />
      <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-[#27ae3f] selection:text-white">
        <Header />
        <main>
          <PageHero title="Segments" breadcrumb="Segments" />

          <section className="relative py-[90px] overflow-hidden bg-[#f7f6f2] px-[50px]">
            {/* Shape Decoration - positioned left center */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 z-0 opacity-50 pointer-events-none">
              <img
                src={shape}
                alt="Decorative Feature Shape"
                className="w-auto h-auto max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
                loading="lazy"
              />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
              {/* Section Title with Description on Right */}
              <motion.div
                className="mb-[50px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#0f3d2e] uppercase tracking-wide lg:whitespace-nowrap">
                    BUSINESS SEGMENTS
                  </h2>
                  <p className="text-[#0f3d2e]/80 text-base md:text-xl max-w-2xl lg:text-left ps-10">
                    THESAY Pharma has a significant share of the Healthcare
                    market, encompassing both the Government and Private
                    sectors.
                  </p>
                </div>
              </motion.div>

              {/* Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {segments.map((segment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    className="group h-full"
                  >
                    <div className="bg-white p-[40px_30px] text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.05)] rounded-none overflow-hidden h-full flex flex-col">
                      {/* Title */}
                      <h3 className="text-[25px] font-bold text-[#0f3d2e] uppercase leading-[31px]">
                        {segment.title}
                      </h3>

                      {/* Icon Box - Only flips on hover */}
                      <div className="my-5 inline-block">
                        <div className="transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(360deg)]">
                          <img
                            src={segment.icon}
                            alt={segment.title}
                            width="90"
                            height="90"
                            loading="lazy"
                            className="mx-auto"
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-lg leading-relaxed text-justify flex-grow">
                        {segment.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

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
                  Global Healthcare Solutions: Medicines, Equipment,
                  Diagnostics, Veterinary Care
                </h2>
                <div className="space-y-6 border-l-2 border-[#27ae3f] pl-6 text-gray-500 text-lg leading-relaxed">
                  <p>
                    THESAY Pharma excels in delivering high-quality medicines,
                    medical equipment, diagnostic tools, and veterinary
                    solutions across global markets. We ensure consistent access
                    to essential medicines that cater to both chronic and urgent
                    medical needs, enhancing patient outcomes worldwide. With
                    our reliable distribution network, we serve diverse regions,
                    providing healthcare professionals with the products they
                    need to address various medical conditions. Our commitment
                    to quality and efficiency is central to our approach,
                    ensuring that every product meets the highest standards for
                    optimal care.
                  </p>
                  <p>
                    In addition to medicines, THESAY Pharma provides advanced
                    medical equipment designed to streamline disease diagnosis
                    and patient monitoring. These tools help improve healthcare
                    efficiency and ensure accurate, timely treatment. Our
                    tailored diagnostic solutions are equally focused on human
                    and veterinary care, offering precision for both sectors. By
                    representing trusted veterinary brands, we empower
                    veterinarians with the best resources to improve animal
                    health and welfare, ensuring reliable and effective
                    solutions for animal care globally.
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
    </>
  );
}
