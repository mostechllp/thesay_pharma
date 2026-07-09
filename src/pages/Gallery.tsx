import React from "react";
import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";

// Import gallery images
import img1 from "../assets/images/blog_details/CPHI Milan 2026/1.jpeg";
import img2 from "../assets/images/blog_details/CPHI Milan 2026/2.jpeg";
import img3 from "../assets/images/blog_details/CPHI Milan 2026/3.jpeg";
import img4 from "../assets/images/blog_details/CPHI Milan 2026/4.jpeg";
import img5 from "../assets/images/blog_details/CPHI Milan 2026/5.jpeg";
import img6 from "../assets/images/blog_details/CPHI Milan 2026/6.png";
import { PageHero } from "../components/PageHero";
import { SEO } from "../components/SEO";

const galleryImages = [
  { id: 1, src: img1, alt: "CPHI Milan 2026 - Image 1" },
  { id: 2, src: img2, alt: "CPHI Milan 2026 - Image 2" },
  { id: 3, src: img3, alt: "CPHI Milan 2026 - Image 3" },
  { id: 4, src: img4, alt: "CPHI Milan 2026 - Image 4" },
  { id: 5, src: img5, alt: "CPHI Milan 2026 - Image 5" },
  { id: 6, src: img6, alt: "CPHI Milan 2026 - Image 6" },
];

export function Gallery() {
  return (
    <>
      <SEO
        title="Gallery - THESAY PHARMA | Our Moments"
        description="View moments from THESAY Pharma events, exhibitions, and corporate activities."
        keywords="gallery, pharma events, medical exhibition, corporate moments, thesay pharma dubai"
      />
      <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-[#27ae3f] selection:text-white">
        <Header />
        <main>
          <PageHero title="Gallery" breadcrumb="Gallery" />

          {/* Gallery Grid */}
          <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
              {/* Image Grid - Portrait orientation */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[3/4] cursor-pointer"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
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
    </>
  );
}
