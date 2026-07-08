import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Plus } from 'lucide-react';

import { Header } from '../components/Header';
import { PageHero } from '../components/PageHero';
import { Footer } from '../components/Footer';

// Import team images
import ceoImage from "../assets/images/team/ceo.png";
import teamShape from "../assets/images/shapes/team-shape.png";

// Import all team member images (1-34)
import team1 from "../assets/images/team/1.png";
import team2 from "../assets/images/team/2.png";
import team3 from "../assets/images/team/3.png";
import team4 from "../assets/images/team/4.png";
import team5 from "../assets/images/team/5.png";
import team6 from "../assets/images/team/6.png";
import team7 from "../assets/images/team/7.png";
import team8 from "../assets/images/team/8.png";
import team9 from "../assets/images/team/9.png";
import team10 from "../assets/images/team/10.png";
import team11 from "../assets/images/team/11.png";
import team12 from "../assets/images/team/12.png";
import team13 from "../assets/images/team/13.png";
import team14 from "../assets/images/team/14.png";
import team15 from "../assets/images/team/15.png";
import team16 from "../assets/images/team/16.png";
import team17 from "../assets/images/team/17.png";
import team18 from "../assets/images/team/18.png";
import team19 from "../assets/images/team/19.png";
import team20 from "../assets/images/team/20.png";
import team21 from "../assets/images/team/21.png";
import team22 from "../assets/images/team/22.png";
import team23 from "../assets/images/team/23.png";
import team24 from "../assets/images/team/24.png";
import team25 from "../assets/images/team/25.png";
import team26 from "../assets/images/team/26.png";
import team27 from "../assets/images/team/27.png";
import team28 from "../assets/images/team/28.png";
import team29 from "../assets/images/team/29.png";
import team30 from "../assets/images/team/30.png";
import team31 from "../assets/images/team/31.png";
import team32 from "../assets/images/team/32.png";
import team33 from "../assets/images/team/33.png";
import team34 from "../assets/images/team/34.png";

interface Member {
  name: string;
  title: string;
  image?: any;
  showSocial?: boolean;
}

interface Group {
  heading: string;
  members: Member[];
}

const groups: Group[] = [
  {
    heading: 'BUSINESS HEADS',
    members: [
      { name: 'Ms. Albina Omirzhanova', title: 'Cluster Head - CIS Region', image: team1, showSocial: true },
      { name: 'Mr. Senthil Nagaraj', title: 'General Manager, MEA & LATAM', image: team2, showSocial: false },
      { name: 'Mr. Aslan Shayakhmedov', title: 'Special Projects Director', image: team3, showSocial: false },
      { name: 'Mr. Vijay Kumar', title: 'Veterinary Business Head, GCC', image: team4, showSocial: false }
    ]
  },
  {
    heading: 'CIS Region',
    members: [
      { name: 'Ms. Katsiaryna', title: 'Business Development Manager - CIS', image: team5, showSocial: false },
      { name: 'Mr. Valentine', title: 'Business Development Manager - CIS', image: team6, showSocial: false },
      { name: 'Mr. Ruslan Midaev', title: 'Business Development Manager - CIS', image: team7, showSocial: false }
    ]
  },
  {
    heading: 'Africa, GCC & LATAM Region',
    members: [
      { name: 'Mr. Subhani Shaik', title: 'Manager - International Business, Africa & South Asia', image: team8, showSocial: false },
      { name: 'Mr. Sankalp Zodape', title: 'Regional Business Development Asst. Manager - GCC & LATAM', image: team11, showSocial: false },
      { name: 'Mr. Getaneh Eneyew Demessie', title: 'Commercial Director - Ethiopia', image: team9, showSocial: false },
      { name: 'Mr. Asaye Ashengo', title: 'Country Manager - Ethiopia', image: team10, showSocial: false }
    ]
  },
  {
    heading: 'UAE Market',
    members: [
      { name: 'Mr. Suneel Babu Bejjam', title: 'Business Development Manager - UAE', image: team12, showSocial: false },
      { name: 'Mr. Fawzy Elsorajy', title: 'Business Development Manager - UAE', image: team13, showSocial: false },
      { name: 'Ms. Lena Alsayed', title: 'Business Development Executive - UAE', image: team14, showSocial: false },
      { name: 'Dr. Iftikhar Alam', title: 'Veterinary Business Development Executive - UAE', image: team15, showSocial: false },
      { name: 'Mr. Saffy Palathingal', title: 'Veterinary Business Development Executive - UAE', image: team16, showSocial: false }
    ]
  },
  {
    heading: 'NPD & In - Licensing',
    members: [
      { name: 'Ms. Ruchira A Poojary', title: 'Sr. Manager, NPD & In - Licensing - Global', image: team17, showSocial: false },
      { name: 'Mr. Anatoly', title: 'Sr. Manager, NPD & In - Licensing - CIS', image: team18, showSocial: false }
    ]
  },
  {
    heading: 'Regulatory Affairs',
    members: [
      { name: 'Dr. Prashant Patel', title: 'QPPV & Regulatory Affairs Manager', image: team20, showSocial: false },
      { name: 'Mr. Chennaiah Puttapaka', title: 'Regulatory Affairs Asst. Manager - Africa', image: team21, showSocial: false },
      { name: 'Mr. Sarun P', title: 'Regulatory Affairs Asst. Manager - GCC', image: team22, showSocial: false },
      { name: 'Dr. Jeena Saji', title: 'Regulatory Affairs Executive', image: team23, showSocial: false }
    ]
  },
  {
    heading: 'Finance & Logistics',
    members: [
      { name: 'Mr. Abhilash Nanupillai', title: 'Finance Manager', image: team24, showSocial: false },
      { name: 'Mr. Akshay Pambadiyil', title: 'General Accountant - UAE', image: team25, showSocial: false },
      { name: 'Mr. Ilyas Ibrahim', title: 'Logistics Coordinator', image: team27, showSocial: false }
    ]
  },
  {
    heading: 'Administration',
    members: [
      { name: 'Mr. Faim K Pathan', title: 'Corporate Secretary & Sr. Officer', image: team28, showSocial: false },
      { name: 'Mr. Tanveer Hussain', title: 'PRO', image: team29, showSocial: false },
      { name: 'Ms. Shokhista', title: 'PA to CEO / HR Executive - UAE', image: team30, showSocial: false },
      { name: 'Ms. Ksennia', title: 'Office Manager UAE', image: team31, showSocial: false },
      { name: 'Ms. Deepita', title: 'Executive Asst. Legal & HR', image: team32, showSocial: false }
    ]
  },
  {
    heading: 'IT, Digital & Marketing',
    members: [
      { name: 'Mr. Jithin C', title: 'IT Manager', image: team33, showSocial: false },
      { name: 'Mr. Muhammed Shanoob', title: 'Digital Marketing Strategist', image: team34, showSocial: false }
    ]
  }
];

export function Teams() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-[#27ae3f] selection:text-white">
      <Header />
      <main>
        <PageHero title="Our Team" breadcrumb="Teams" />

        {/* CEO Quote Banner - Matching Blade Template */}
        <section className="choose-section-seven pt-[120px] pb-[60px] px-[30px] overflow-hidden bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                className="image-column"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inner-column h-full">
                  <figure className="image max-w-[642px] relative z-10 float-left lg:float-none">
                    <img
                      src={ceoImage}
                      alt="CEO - Dr. Noushad Abdurahiman"
                      className="w-full rounded-[30px]"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </motion.div>

              <motion.div
                className="content-column"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inner-column max-w-[580px] lg:max-w-[580px] mt-[30px] lg:mt-0">
                  <div className="sec-title mb-[30px] ps-[50px]">
                    <h1 className="title text-[#008000] text-3xl md:text-4xl lg:text-5xl font-bold leading-[53px]">
                      Leadership is purpose in motion—science honest, care human, life first.
                    </h1>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="team-section pb-[120px] overflow-hidden relative z-10 bg-white px-[30px]">
          {/* Team Shape Decoration */}
          <div className="team-shape absolute bottom-0 left-0 z-[-1]">
            <img src={teamShape} alt="Decorative Shape" className="sway__animation" loading="lazy" />
          </div>

          <div className="container mx-auto px-4 md:px-8">
            {groups.map((group, gi) => (
              <div key={group.heading}>
                {/* Section Title */}
                <div className={`sec-title center mb-[50px] ${gi > 0 ? 'mt-[50px]' : ''}`}>
                  <h2 className="title text-2xl md:text-3xl font-bold text-[#0f3d2e] text-center uppercase tracking-wide">
                    {group.heading}
                  </h2>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {group.members.map((member, index) => (
                    <motion.div
                      key={member.name}
                      className="team-block"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                    >
                      <div className="inner-box relative z-10 transition-all duration-300 rounded-[20px] bg-white hover:bg-[#0f3d2e] group">
                        {/* Image */}
                        <figure className="image rounded-t-[20px] overflow-hidden transition-all duration-300 relative">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full aspect-square object-cover transition-all duration-300 group-hover:grayscale"
                            loading="lazy"
                          />
                          {/* Gradient Overlay */}
                          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-[#317241] to-transparent opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible"></div>
                        </figure>

                        {/* Socials - Plus Button - Only for first member */}
                        {member.showSocial && (
                          <div className="socials w-[40px] h-[40px] rounded-full bg-[#27ae3f] text-white absolute right-5 bottom-[83px] cursor-pointer text-sm transition-all duration-300 flex items-center justify-center group-hover:bg-[#0f3d2e] group-hover:text-[#27ae3f]">
                            <Plus size={16} className="transition-all duration-300 group-hover:rotate-135" />
                            <ul className="absolute bottom-[45px] right-0 flex flex-col items-center gap-1.5 invisible group-hover:visible">
                              <li className="opacity-0 invisible translate-y-2.5 transition-all duration-700 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                                <a href="#" className="w-[40px] h-[40px] rounded-full bg-white text-[#27ae3f] flex items-center justify-center hover:bg-[#27ae3f] hover:text-white transition-all duration-300">
                                  <Linkedin size={16} />
                                </a>
                              </li>
                            </ul>
                          </div>
                        )}

                        {/* Content Box */}
                        <div className="content-box p-[20px_30px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.05)] rounded-b-[20px] transition-all duration-300 group-hover:bg-[#0f3d2e]">
                          <h5 className="title text-[#0f3d2e] font-bold text-xl mb-0 transition-colors duration-300 group-hover:text-white">
                            {member.name}
                          </h5>
                          <p className="sub-title text-[#27ae3f] font-semibold text-[15px] leading-[28px] mb-0 transition-colors duration-300 group-hover:text-white">
                            {member.title}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}