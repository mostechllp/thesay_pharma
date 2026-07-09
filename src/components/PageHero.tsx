import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import banner from "../assets/images/banner/banner-image2.jpeg";
import ShapeBg from "../assets/images/shapes/service-five-shape.webp";

interface PageHeroProps {
  title: string;
  breadcrumb: string;
}

export function PageHero({ title, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[350px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d2e]/95 via-[#0f3d2e]/75 to-[#154736]/50 z-0" />

      {/* Shape Background - on the RIGHT side */}
      <div className="absolute bottom-0 -right-[200px] z-20 pointer-events-none">
        <img 
          src={ShapeBg} 
          alt="Decorative Shape" 
          className="w-auto h-auto "
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 py-16 md:py-24">
        <motion.nav
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5
          }}
          aria-label="Breadcrumb"
          className="flex items-center text-sm text-gray-300 mb-4"
        >
          <Link
            to="/"
            className="text-[#27ae3f] hover:text-[#4ade80] transition-colors"
          >
            Home
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <span>{breadcrumb}</span>
        </motion.nav>
        
        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.1
          }}
          className="text-6xl md:text-6xl font-bold text-white"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}