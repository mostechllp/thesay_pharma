import React from 'react';
import { motion } from 'framer-motion';

import gallery1 from "../assets/images/gallery/1.jpeg"
import gallery2 from "../assets/images/gallery/2.jpeg"
import gallery3 from "../assets/images/gallery/3.jpeg"
import gallery4 from "../assets/images/gallery/4.jpeg"
import gallery5 from "../assets/images/gallery/5.jpeg"
import gallery6 from "../assets/images/gallery/6.png"
import { ArrowUpRight } from 'lucide-react';
import shape from "../assets/images/shapes/case-three-shape.webp" 

const events = [
  {
    title: 'Duphat 2026',
    date: '25–27 August',
    description: "MENA's largest gathering of the entire pharmaceutical value chain.",
    status: 'UPCOMING'
  },
  {
    title: 'ADIHEX 2026',
    date: '28 Aug-06 Sept',
    description: 'An annual celebration of Emirati heritage and cultural traditions.',
    status: 'UPCOMING'
  },
  {
    title: 'CPHI Milan 2026',
    date: '06-08 October',
    description: 'Global platform showcasing innovative healthcare solutions.',
    status: 'UPCOMING'
  }
];

// Gallery images (replace with actual imports)
const galleryImages = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6
];

export function UpcomingEvents() {
  return (
    <section className="case-section-three overflow-hidden relative z-10 bg-[#0f3d2e]">
      {/* Shape Decoration */}
      <div className="sec-shape absolute z-[-1] top-[10px] left-0">
        <img src={shape} alt="" />
      </div>

      {/* Box Shapes */}
      <div className="box-shape w-[189px] h-[189px] absolute bottom-0 left-0 z-[-1]">
        <div className="box1 h-full w-1/2 bg-white/15 absolute bottom-0 left-0"></div>
        <div className="box2 w-full h-1/2 bg-white/15 absolute bottom-0 left-0"></div>
      </div>

      <div className="outer-box flex items-center container mx-auto px-4 md:px-8">
        {/* Content Column - Left Side */}
        <div className="content-column w-full lg:w-[48%]">
          <div className="inner-column max-w-[600px] mx-auto lg:mx-0 lg:mr-[120px] my-[60px] lg:my-[60px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sec-title mb-[30px]">
                <h2 className="title text-white text-3xl md:text-4xl font-bold tracking-wide">
                  Upcoming Events
                </h2>
              </div>
            </motion.div>

            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.15
                }}
                className="sec-title mb-[30px]"
              >
                {/* Date */}
                <h6
  className="
    inline-block
    bg-[#00701C]
    text-white
    text-sm
    font-bold
    uppercase
    px-5
    py-2
    rounded-full
    mb-3
  "
>
  {event.date}
</h6>
                
                {/* Title */}
                <h4 className="title text-white text-xl md:text-2xl font-bold mb-2.5">
                  {event.title}
                </h4>
                
                {/* Description */}
                <p className="text-white/80 text-[16px] leading-[30px]">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Column - Right Side */}
        <div className="image-column w-full lg:w-[52%]">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-0"
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="case-block-three relative z-10 group overflow-hidden"
              >
                <figure className="image overflow-hidden">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    loading="lazy"
                    className="w-full  transition-transform duration-500 group-hover:scale-110"
                  />
                </figure>
                
                {/* Hover Icon */}
                <a
                  href="#"
                  className="icon w-[50px] h-[50px] bg-[#27ae3f] text-white rounded-full flex items-center justify-center absolute top-[30px] right-[30px] z-10 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:right-[40px]"
                >
                  <ArrowUpRight/>
                </a> 
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}