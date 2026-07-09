import React from "react";
import { motion } from "framer-motion";
import teamShape from "../assets/images/shapes/team-shape.webp";

// Import team member images
import team1 from "../assets/images/team/1.webp";
import team2 from "../assets/images/team/2.webp";
import team3 from "../assets/images/team/3.webp";
import team4 from "../assets/images/team/4.webp";
import { AnimatedText } from "./AnimatedText";

const team = [
  {
    name: "Albina Omirzhanova",
    title: "Cluster Head - CIS Region",
    image: team1,
  },
  {
    name: "Senthil Nagaraj",
    title: "General Manager, MEA & LATAM",
    image: team2,
  },
  {
    name: "Mr. Aslan Shayakhmedov",
    title: "Special Projects Director",
    image: team3,
  },
  {
    name: "Mr. Vijay Kumar",
    title: "Veterinary Business Head, GCC",
    image: team4,
  },
];

export function OurTeam() {
  return (
    <section className="team-section pt-[120px] px-[30px] pb-[60px] overflow-hidden relative z-10 bg-white">
      {/* Shape Decoration */}
      <div className="team-shape absolute bottom-0 left-0 z-[-1]">
        <img
          src={teamShape}
          alt="Decorative Team Shape"
          loading="lazy"
          className="w-auto h-auto"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title with View More Button */}
        <div className="sec-title mb-[50px]">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h2 className="title text-3xl md:text-4xl font-bold text-[#0f3d2e] tracking-wide">
              <AnimatedText
                inline
                lines={[
                  {
                    text: "Our Team",
                  },
                ]}
              />
            </h2>
            <motion.a
              href="/teams"
              className="btn-two inline-block bg-[#0f3d2e] hover:bg-[#1a5c47] text-white px-[80px] py-4 rounded font-medium transition-colors text-sm uppercase tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              View More
            </motion.a>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="team-block group"
            >
              <div className="inner-box relative z-10 transition-all duration-300 rounded-[20px] bg-white hover:bg-[#173939] overflow-hidden">
                {/* Image */}
                <figure className="image rounded-t-[20px] overflow-hidden transition-all duration-300 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full aspect-square object-cover transition-all duration-300 group-hover:grayscale"
                  />
                  
                  {/* Green Blended/Splash Effect - Bottom Left (appears on hover) */}
                  <div 
                    className="absolute bottom-0 left-0 w-[300px] h-[250px] opacity-0 group-hover:opacity-100 transition-all duration-500"
  style={{
    background:
      "radial-gradient(circle at bottom left, rgba(39, 174, 63, 0.8) 0%, rgba(39, 174, 63, 0.4) 35%, rgba(39, 174, 63, 0.15) 70%, transparent 100%)",
                      transform: 'scale(0.5)',
                      transformOrigin: 'bottom left',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(0.5)';
                    }}
                  />
                  
                  {/* Alternative: CSS Animation based on group hover */}
                  <div 
                    className="absolute bottom-0 left-0 w-[150px] h-[150px] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                    style={{
                      background: 'radial-gradient(ellipse at bottom left, #27ae3f 0%, rgba(39, 174, 63, 0.6) 30%, rgba(39, 174, 63, 0.2) 60%, transparent 80%)',
                      transform: 'scale(0.3) translate(20%, 20%)',
                      transformOrigin: 'bottom left',
                    }}
                  >
                    <style>
                      {`
                        .team-block:hover .splash-effect {
                          transform: scale(1) translate(0%, 0%) !important;
                        }
                      `}
                    </style>
                  </div>
                </figure>

                {/* Content Box */}
                <div className="content-box p-[20px_30px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.05)] rounded-b-[20px] transition-all duration-300">
                  <h5 className="title text-[#0f3d2e] font-bold text-base mb-0 transition-colors duration-300 group-hover:text-white">
                    {member.name}
                  </h5>
                  <p className="sub-title text-[#27ae3f] font-semibold text-sm leading-[28px] mb-0 transition-colors duration-300 group-hover:text-white">
                    {member.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}