import React from 'react';
import { motion } from 'framer-motion';
import shape from "../assets/images/shapes/feature-shape.webp";

// Import SVG icons
import iconHealthcare from "../assets/images/about/20.svg";
import iconDiagnostics from "../assets/images/about/22.svg";
import iconVeterinary from "../assets/images/about/23.svg";
import iconManufacturing from "../assets/images/about/21.svg";

export const segments = [
  {
    title: 'HUMAN HEALTHCARE',
    icon: iconHealthcare,
    description: 'We specialize in procuring and distributing high-quality medicines, ensuring reliable access to diverse markets within all our established regions globally.'
  },
  {
    title: 'DIAGNOSTICS',
    icon: iconDiagnostics,
    description: 'We provide diagnostic medications tailored for patients, supporting healthcare needs in both human and veterinary sectors with precision.'
  },
  {
    title: 'VETERINARY',
    icon: iconVeterinary,
    description: 'We specialize in representing renowned veterinary brands, excelling in branding and distributing international products to meet customer needs.'
  },
  {
    title: 'MANUFACTURING',
    icon: iconManufacturing,
    description: 'Committed to delivering innovative, trusted and compliant diagnostic solutions across Food Safety, Animal Health, and Human Healthcare.'
  }
];

export function BusinessSegments() {
  return (
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
        {/* Section Title */}
        <motion.div 
          className="mb-[50px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d2e] uppercase tracking-wide">
            BUSINESS SEGMENTS
          </h2>
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
                delay: index * 0.1 
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
  );
}