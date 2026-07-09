import React from "react";
import { motion } from "framer-motion";
import ceoImage from "../assets/images/ceo.webp";
import strategyGlobe from "../assets/images/shapes/stategy-globe.webp";

export function CEOMessage() {
  return (
    <section className="strategy-section pt-[60px] pb-[60px] overflow-hidden relative z-10 bg-[#f7f6f2] px-2 md:px-[30px]">

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Content Column - Left */}
          <motion.div
            className="lg:col-span-7 content-column"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inner-column max-w-[620px] lg:max-w-[620px]">
              {/* CEO's Message Label */}
              <div className="sec-title mb-[30px]">
                <h4 className="text-[#00701c] text-2xl md:text-base font-bold tracking-wider mb-2">
                  CEO's Message
                </h4>
                <h2 className="title text-[#0f3d2e] text-3xl md:text-4xl font-bold">
                  Dr. Noushad Abdurahiman
                </h2>
              </div>

              {/* CEO Message Content */}
              <motion.p
                className="text mt-[30px] text-gray-600 text-lg leading-relaxed text-justify"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                The journey of THESAY Pharma began when I was pursuing my
                postgraduate studies in medicine in Kazakhstan. During my final
                year, I ventured into small-scale business, selling medicines
                and essential items. This entrepreneurial pursuit opened my eyes
                to the challenges of accessing critical care and premium
                medicines, which were often expensive and scarce. Determined to
                bridge this gap, I established a regulatory team and expanded
                into logistics and sales, laying the foundation for what would
                eventually become THESAY Pharma.
              </motion.p>

              <motion.p
                className="text mt-[30px] text-gray-600 text-lg leading-relaxed text-justify"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                In 2006, recognizing Dubai's position as a global hub, I
                expanded our operations to the UAE. This strategic move allowed
                us to participate in major tenders, winning key contracts that
                propelled our growth into the CIS, GCC, and African regions.
                Over time, our commitment to quality and innovation established
                the company as a trusted name in the pharmaceutical industry,
                enabling us to address diverse healthcare needs across multiple
                markets.
              </motion.p>

              <motion.p
                className="text mt-[30px] text-gray-600 text-lg leading-relaxed text-justify"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Today, we operate in over 26+ countries, supported by a
                dedicated team of more than 240+ employees managing a portfolio
                of 600+ products. Guided by our core values of{" "}
                <b className="text-[#0f3d2e]">
                  Trust, Accountability, Boldness, Professionalism, and
                  Diversity,
                </b>{" "}
                we continue to push boundaries and create value for communities
                worldwide. As we move forward, I am confident that the company
                will achieve new milestones and solidify its position as a
                global leader in the pharmaceutical sector.
              </motion.p>
            </div>
          </motion.div>

          {/* Image Column - Right */}
          <motion.div
            className="lg:col-span-5 image-column"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Rotating Globe Shape */}
              <div className="absolute -bottom-[120px] -right-[150px] z-0 pointer-events-none">
                <img
                  src={strategyGlobe}
                  alt=""
                  className="animate-spin-slow w-[500px]"
                />
              </div>

              {/* CEO Image */}
              <figure className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                <img
                  src={ceoImage}
                  alt="Dr. Noushad Abdurahiman - CEO of THESAY Pharma"
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </figure>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
