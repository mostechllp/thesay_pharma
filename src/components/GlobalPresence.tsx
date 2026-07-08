import React from 'react';
import { motion } from 'framer-motion';
import map from "../assets/images/choose-image1.webp"
export function GlobalPresence() {
  return (
    <section className="py-20 px-10 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>
            
            <h2 className="text-5xl font-bold text-[#00701c] mb-6">
              Our Global Presence
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                THESAY Pharma is a fast-growing, dynamic pharmaceutical company
                with a strong presence across the Middle East, Africa, and Asia.
                We are engaged in the supply of a wide range of pharmaceutical
                and healthcare products, including prescription drugs, OTC
                medicines, medical devices, and consumer health products.
              </p>
              <p>
                Our commitment to quality and excellence has earned us the trust
                of healthcare professionals and patients alike. We continuously
                strive to expand our product portfolio and geographical reach to
                meet the evolving needs of the global healthcare market. With a
                robust distribution network and a dedicated team, we ensure
                timely and reliable access to essential medicines.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="relative">
            
            {/* Placeholder for World Map */}
            <img
              src={map}
              alt="Global Presence Map"
              className="w-full h-auto object-contain" />
            
          </motion.div>
        </div>
      </div>
    </section>);

}