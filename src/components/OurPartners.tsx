import React from 'react';
import { motion } from 'framer-motion';

// Import partner logos
import partner26 from "../assets/images/partners/26.webp";
import partner27 from "../assets/images/partners/27.webp";
import partner28 from "../assets/images/partners/28.webp";
import partner29 from "../assets/images/partners/29.webp";

const partners = [
  { id: 1, name: 'Partner 26', image: partner26 },
  { id: 2, name: 'Partner 27', image: partner27 },
  { id: 3, name: 'Partner 28', image: partner28 },
  { id: 4, name: 'Partner 29', image: partner29 }
];

export function OurPartners() {
  return (
    <section className="brand-section-two pt-[30px] bg-white px-[30px]">
      <div className="container-fluid mb-[50px]">
        <div className="container mx-auto px-4 md:px-8">
          {/* Section Title */}
          <div className="sec-title mb-[50px]">
            <motion.h2 
              className="title text-center text-3xl md:text-4xl font-bold text-[#0f3d2e] tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Partners
            </motion.h2>
          </div>

          {/* Partners Grid - 4 in a row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 items-center justify-items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className="brand-block w-full"
              >
                <a href="#" className="block">
                  <img 
                    src={partner.image} 
                    alt={partner.name} 
                    loading="lazy"
                    className="w-full h-auto max-h-32 md:max-h-40 lg:max-h-[130px] object-contain"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}