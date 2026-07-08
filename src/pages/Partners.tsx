import React, { Component } from 'react';
import { motion } from 'framer-motion';

import { Header } from '../components/Header';
import { PageHero } from '../components/PageHero';
import { Footer } from '../components/Footer';

// Import all partner logos (1-61)
import partner1 from "../assets/images/partners/1.webp";
import partner2 from "../assets/images/partners/2.webp";
import partner3 from "../assets/images/partners/3.webp";
import partner4 from "../assets/images/partners/4.webp";
import partner5 from "../assets/images/partners/5.webp";
import partner6 from "../assets/images/partners/6.webp";
import partner7 from "../assets/images/partners/7.webp";
import partner8 from "../assets/images/partners/8.webp";
import partner9 from "../assets/images/partners/9.webp";
import partner10 from "../assets/images/partners/10.webp";
import partner11 from "../assets/images/partners/11.webp";
import partner12 from "../assets/images/partners/12.webp";
import partner13 from "../assets/images/partners/13.webp";
import partner14 from "../assets/images/partners/14.webp";
import partner15 from "../assets/images/partners/15.webp";
import partner16 from "../assets/images/partners/16.webp";
import partner17 from "../assets/images/partners/17.webp";
import partner18 from "../assets/images/partners/18.webp";
import partner19 from "../assets/images/partners/19.webp";
import partner20 from "../assets/images/partners/20.webp";
import partner21 from "../assets/images/partners/21.webp";
import partner22 from "../assets/images/partners/22.webp";
import partner23 from "../assets/images/partners/23.webp";
import partner24 from "../assets/images/partners/24.webp";
import partner25 from "../assets/images/partners/25.webp";
import partner26 from "../assets/images/partners/26.webp";
import partner27 from "../assets/images/partners/27.webp";
import partner28 from "../assets/images/partners/28.webp";
import partner29 from "../assets/images/partners/29.webp";
import partner30 from "../assets/images/partners/30.webp";
import partner31 from "../assets/images/partners/31.webp";
import partner32 from "../assets/images/partners/32.webp";
import partner33 from "../assets/images/partners/33.webp";
import partner34 from "../assets/images/partners/34.webp";
import partner35 from "../assets/images/partners/35.webp";
import partner36 from "../assets/images/partners/36.webp";
import partner37 from "../assets/images/partners/37.webp";
import partner38 from "../assets/images/partners/38.webp";
import partner39 from "../assets/images/partners/39.webp";
import partner40 from "../assets/images/partners/40.webp";
import partner41 from "../assets/images/partners/41.webp";
import partner42 from "../assets/images/partners/42.webp";
import partner43 from "../assets/images/partners/43.webp";
import partner44 from "../assets/images/partners/44.webp";
import partner45 from "../assets/images/partners/45.webp";
import partner46 from "../assets/images/partners/46.webp";
import partner47 from "../assets/images/partners/47.webp";
import partner48 from "../assets/images/partners/48.webp";
import partner49 from "../assets/images/partners/49.webp";
import partner50 from "../assets/images/partners/50.webp";
import partner51 from "../assets/images/partners/51.webp";
import partner52 from "../assets/images/partners/52.webp";
import partner53 from "../assets/images/partners/53.webp";
import partner54 from "../assets/images/partners/54.webp";
import partner55 from "../assets/images/partners/55.webp";
import partner56 from "../assets/images/partners/56.webp";
import partner57 from "../assets/images/partners/57.webp";
import partner58 from "../assets/images/partners/58.webp";
import partner59 from "../assets/images/partners/59.webp";
import partner60 from "../assets/images/partners/60.webp";
import partner61 from "../assets/images/partners/61.webp";

// Partner names array
const partnerNames = [
  'SMICK', 'Eskag Pharma', 'SK plasma', 'Incepta', 'Eczane', 'Extrovis',
  'Oscar Pharma', 'Renhe', 'Venus', 'SLC Pharma', 'CS', 'DNA-DX',
  'Genetic', 'Piramal Critical Care', 'medicair', 'Alvogen', 'Orion Pharma',
  'CDBIO', 'Eriochem', 'Biosidus', 'Serum Institute of India',
  'Indian Immunologicals', 'Galenicum', 'Biocon', 'Bharat Biotech',
  'Bharat Serums & Vaccines', 'ZTE Bio', 'Biological E Limited', 'Polifarma',
  'Novell', 'Hanlim Pharm', 'Kalcex', 'DEVA', 'Sinovac', 'Accord',
  'Jubilant LifeSciences', 'ELPEN', 'Hepalink', 'Gan & Lee', 'VUAB Pharma',
  'Seacross', 'Zenex Animal Health', 'Manuka Vet', 'Contura', 'Pet Naturals',
  'JT Pharma', 'Univet', 'Dong Bang Co', 'THESAY', 'LG Chem',
  'Amega Biotech', 'Huisheng Biopharm', 'Sinopharm', 'Normon', 'Emcure',
  'CKD Pharm', 'Sinotherapeutics', 'Poly Pharm', 'Gland', 'Invengene',
  'eubiologics'
];

// Partner images array
const partnerImages = [
  partner1, partner2, partner3, partner4, partner5, partner6,
  partner7, partner8, partner9, partner10, partner11, partner12,
  partner13, partner14, partner15, partner16, partner17, partner18,
  partner19, partner20, partner21, partner22, partner23, partner24,
  partner25, partner26, partner27, partner28, partner29, partner30,
  partner31, partner32, partner33, partner34, partner35, partner36,
  partner37, partner38, partner39, partner40, partner41, partner42,
  partner43, partner44, partner45, partner46, partner47, partner48,
  partner49, partner50, partner51, partner52, partner53, partner54,
  partner55, partner56, partner57, partner58, partner59, partner60,
  partner61
];

// Combine partners with their images
const partners = partnerNames.map((name, index) => ({
  name: name,
  image: partnerImages[index] || partnerImages[0] // fallback to first image if missing
}));

export function Partners() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-[#27ae3f] selection:text-white">
      <Header />
      <main>
        <PageHero title="We Are Partnering With" breadcrumb="Manufacturers" />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true,
                    margin: '-40px'
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index % 6 * 0.06
                  }}
                  className="aspect-[3/2] bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center p-4"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-h-30 max-w-full object-contain"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}