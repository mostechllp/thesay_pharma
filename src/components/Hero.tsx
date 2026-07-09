import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroVideo from "../assets/videos/WEB.mov";
import thesayInv from "../assets/images/thesay-inv.png";
import saygenGenetics from "../assets/images/saygen-genetics.png";
import thesayVet from "../assets/images/thesay-vet.png";

export function Hero() {
  return (
    <section className="banner-section video-banner-section relative w-full min-h-[84vh] overflow-hidden flex items-center z-10 pt-[140px] pb-[70px]">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto z-10 -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="video-banner-overlay absolute top-0 left-0 w-full h-full z-20 bg-gradient-to-br from-[#274732]/85 to-[#274732]/85"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-16 relative z-30 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="video-banner-content text-white max-w-[900px] w-full text-left"
            >
              <h1 className="title text-[76px] leading-[1.05] font-semibold text-white mb-5 drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)] tracking-[-1.5px]">
                We Deliver<br />
                <span className="font-extrabold text-[#48e56f] drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)]">
                  What We<br/> Promise
                </span>
              </h1>
              <p className="text text-[16px] leading-[1.6] font-normal text-white/75 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] mb-8 max-w-[750px]">
                THESAY Pharma is a prominent name among healthcare distributors,
                supplying a comprehensive range of pharmaceutical products from 50+
                multinational companies across the globe. We have built our brand
                and reputation as a trustworthy and results-driven organization.
              </p>

              {/* Buttons */}
              <div className="banner-btn-box mt-7 flex flex-wrap gap-4">
                <a href="/about" className="btn-two bg-gradient-to-r from-[#00701c] to-[#5ebd8c] text-white font-semibold text-[17px] px-11 py-6 rounded-full hover:bg-white hover:text-[#00701c] transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-green-500/25 hover:shadow-white/20 hover:-translate-y-1">
                  About Us <ArrowRight size={18} />
                </a>
                <a href="/services" className="btn-twoo bg-white/5 border border-[#37722f]/40 text-white font-semibold text-[17px] px-11 py-6 rounded-full backdrop-blur-md hover:bg-white/10 transition-all duration-300 inline-flex items-center">
                  Our Services
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Content - 5 columns - Key Companies */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="banner-ecosystem-wrapper bg-[#0a1914]/45 border border-white/10 rounded-3xl p-7 backdrop-blur-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-radial from-[#00701c]/20 to-transparent -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-[40px]"></div>

              {/* Header */}
              <div className="ecosystem-header-box text-center mb-4 border-b border-white/10 pb-3">
                <span className="inline-flex items-center gap-1 text-[#00701c] text-[11px] font-bold uppercase tracking-[2px] mb-1">
                  <i className="fa-solid fa-layer-group mr-1"></i> Group Portfolio
                </span>
                <h3 className="text-white text-[22px] font-extrabold tracking-[-0.5px] m-0">
                  Key Companies
                </h3>
              </div>

              {/* THESAY Investments Card */}
              <div className="portfolio-card investments-card relative bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-[12px] transition-all duration-300 cursor-pointer my-4 flex items-center gap-5 hover:bg-gradient-to-br from-[#00701c]/10 to-[#0a1914]/60 hover:border-[#00701c]/40 hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:translate-x-1.5 group">
                <span className="card-badge-right absolute top-2.5 right-4 flex items-center gap-1 text-[9px] font-bold text-white/40 uppercase tracking-[1px] group-hover:text-[#00701c]">
                  <i className="fa-solid fa-crown mr-1"></i> Parent Group
                </span>
                <div className="logo-container flex items-center justify-center flex-shrink-0">
                  <img src={thesayInv} alt="THESAY Investments" className="max-h-[70px] max-w-full object-contain filter brightness-0 invert opacity-85 transition-all duration-300 group-hover:filter-none group-hover:opacity-100" />
                </div>
                <div className="card-info">
                  <h4 className="text-white text-[15.5px] font-bold m-0 mb-0.5 transition-colors duration-300 group-hover:text-[#00701c]">
                    THESAY Investments
                  </h4>
                  <p className="text-white/45 text-[11px] leading-[1.4] m-0">
                    Strategic investments & corporate governance.
                  </p>
                </div>
              </div>

              {/* SayGen Genetics Card */}
              <div className="portfolio-card saygen-card relative my-4  bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-[12px] transition-all duration-300 cursor-pointer flex items-center gap-5 hover:bg-gradient-to-br from-[#00b4d8]/10 to-[#0a1419]/60 hover:border-[#00b4d8]/40 hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:translate-x-1.5 group">
                <span className="card-badge-right absolute top-2.5 right-4 flex items-center gap-1 text-[9px] font-bold text-white/40 uppercase tracking-[1px] group-hover:text-[#00b4d8]">
                  <i className="fa-solid fa-dna mr-1"></i> Biotech
                </span>
                <div className="logo-container flex items-center justify-center flex-shrink-0">
                  <img src={saygenGenetics} alt="SayGen Genetics" className="max-h-[70px] max-w-full object-contain filter brightness-0 invert opacity-85 transition-all duration-300 group-hover:filter-none group-hover:opacity-100" />
                </div>
                <div className="card-info">
                  <h4 className="text-white text-[15.5px] font-bold m-0 mb-0.5 transition-colors duration-300 group-hover:text-[#00b4d8]">
                    SayGen Genetics
                  </h4>
                  <p className="text-white/45 text-[11px] leading-[1.4] m-0">
                    Advanced diagnostics & life sciences.
                  </p>
                </div>
              </div>

              {/* Thesay Veterinary Card */}
              <div className="portfolio-card veterinary-card my-4  relative bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-[12px] transition-all duration-300 cursor-pointer flex items-center gap-5 hover:bg-gradient-to-br from-[#00701c]/10 to-[#0a1914]/60 hover:border-[#00701c]/40 hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:translate-x-1.5 group">
                <span className="card-badge-right absolute top-2.5 right-4 flex items-center gap-1 text-[9px] font-bold text-white/40 uppercase tracking-[1px] group-hover:text-[#00701c]">
                  <i className="fa-solid fa-paw mr-1"></i> Animal Health
                </span>
                <div className="logo-container flex items-center justify-center flex-shrink-0">
                  <img src={thesayVet} alt="Thesay Veterinary" className="max-h-[70px] max-w-full object-contain filter brightness-0 invert opacity-85 transition-all duration-300 group-hover:filter-none group-hover:opacity-100" />
                </div>
                <div className="card-info">
                  <h4 className="text-white text-[15.5px] font-bold m-0 mb-0.5 transition-colors duration-300 group-hover:text-[#00701c]">
                    Thesay Veterinary
                  </h4>
                  <p className="text-white/45 text-[11px] leading-[1.4] m-0">
                    High-quality veterinary products.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}