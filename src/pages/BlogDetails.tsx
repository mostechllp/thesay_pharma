import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { blogsData } from './Blogs';
import { PageHero } from '../components/PageHero';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

// Import all gallery images from respective folders

// ADIHEX 2025 (2 images)
import adihex2025_1 from "../assets/images/blog_details/ADIHEX 2025/1.jpg";
import adihex2025_2 from "../assets/images/blog_details/ADIHEX 2025/2.jpg";

// ADIHEX 2026 (6 images)
import adihex2026_1 from "../assets/images/blog_details/ADIHEX 2026/1.jpeg";
import adihex2026_2 from "../assets/images/blog_details/ADIHEX 2026/2.jpeg";
import adihex2026_3 from "../assets/images/blog_details/ADIHEX 2026/3.jpeg";
import adihex2026_4 from "../assets/images/blog_details/ADIHEX 2026/4.jpeg";
import adihex2026_5 from "../assets/images/blog_details/ADIHEX 2026/5.jpeg";
import adihex2026_6 from "../assets/images/blog_details/ADIHEX 2026/6.png";

// AICP Conference 2025 (1 image)
import aicp2025_1 from "../assets/images/blog_details/AICP Conference 2025/1.jpg";

// Arab Health 2025 (6 images)
import arabhealth2025_1 from "../assets/images/blog_details/Arab Health 2025/1.jpeg";
import arabhealth2025_2 from "../assets/images/blog_details/Arab Health 2025/2.jpeg";
import arabhealth2025_3 from "../assets/images/blog_details/Arab Health 2025/3.jpeg";
import arabhealth2025_4 from "../assets/images/blog_details/Arab Health 2025/4.jpeg";
import arabhealth2025_5 from "../assets/images/blog_details/Arab Health 2025/5.jpeg";
import arabhealth2025_6 from "../assets/images/blog_details/Arab Health 2025/6.png";

// Contura Denmark Visit (1 image)
import contura_1 from "../assets/images/blog_details/Contura, Denmark visit/1.jpg";

// CPHI China 2025 (7 images)
import cphiChina2025_1 from "../assets/images/blog_details/CPHI China 2025/1.jpg";
import cphiChina2025_2 from "../assets/images/blog_details/CPHI China 2025/2.jpg";
import cphiChina2025_3 from "../assets/images/blog_details/CPHI China 2025/3.jpg";
import cphiChina2025_4 from "../assets/images/blog_details/CPHI China 2025/4.jpg";
import cphiChina2025_5 from "../assets/images/blog_details/CPHI China 2025/5.jpg";
import cphiChina2025_6 from "../assets/images/blog_details/CPHI China 2025/6.jpg";
import cphiChina2025_7 from "../assets/images/blog_details/CPHI China 2025/7.jpg";

// CPHI Frankfurt 2025 (10 images)
import cphiFrankfurt2025_1 from "../assets/images/blog_details/CPHI Frankfurt 2025/1.jpg";
import cphiFrankfurt2025_2 from "../assets/images/blog_details/CPHI Frankfurt 2025/2.jpg";
import cphiFrankfurt2025_3 from "../assets/images/blog_details/CPHI Frankfurt 2025/3.jpg";
import cphiFrankfurt2025_4 from "../assets/images/blog_details/CPHI Frankfurt 2025/4.jpg";
import cphiFrankfurt2025_5 from "../assets/images/blog_details/CPHI Frankfurt 2025/5.jpg";
import cphiFrankfurt2025_6 from "../assets/images/blog_details/CPHI Frankfurt 2025/6.jpg";
import cphiFrankfurt2025_7 from "../assets/images/blog_details/CPHI Frankfurt 2025/7.jpg";
import cphiFrankfurt2025_8 from "../assets/images/blog_details/CPHI Frankfurt 2025/8.jpg";
import cphiFrankfurt2025_9 from "../assets/images/blog_details/CPHI Frankfurt 2025/9.jpg";
import cphiFrankfurt2025_10 from "../assets/images/blog_details/CPHI Frankfurt 2025/10.jpg";

// CPHI Milan 2026 (6 images)
import cphiMilan2026_1 from "../assets/images/blog_details/CPHI Milan 2026/1.jpeg";
import cphiMilan2026_2 from "../assets/images/blog_details/CPHI Milan 2026/2.jpeg";
import cphiMilan2026_3 from "../assets/images/blog_details/CPHI Milan 2026/3.jpeg";
import cphiMilan2026_4 from "../assets/images/blog_details/CPHI Milan 2026/4.jpeg";
import cphiMilan2026_5 from "../assets/images/blog_details/CPHI Milan 2026/5.jpeg";
import cphiMilan2026_6 from "../assets/images/blog_details/CPHI Milan 2026/6.png";

// Expopharm 2025 (3 images)
import expopharm2025_1 from "../assets/images/blog_details/Expopharm 2025/1.jpg";
import expopharm2025_2 from "../assets/images/blog_details/Expopharm 2025/2.jpg";
import expopharm2025_3 from "../assets/images/blog_details/Expopharm 2025/3.jpg";

// MEDICA 2025 (2 images)
import medica2025_1 from "../assets/images/blog_details/MEDICA 2025/1.jpg";
import medica2025_2 from "../assets/images/blog_details/MEDICA 2025/2.jpg";

// Medlab 2025 (6 images)
import medlab2025_1 from "../assets/images/blog_details/Medlab 2025/1.jpeg";
import medlab2025_2 from "../assets/images/blog_details/Medlab 2025/2.jpeg";
import medlab2025_3 from "../assets/images/blog_details/Medlab 2025/3.jpeg";
import medlab2025_4 from "../assets/images/blog_details/Medlab 2025/4.jpeg";
import medlab2025_5 from "../assets/images/blog_details/Medlab 2025/5.jpeg";
import medlab2025_6 from "../assets/images/blog_details/Medlab 2025/6.png";

// WHX Dubai 2026 (11 images)
import whxDubai2026_1 from "../assets/images/blog_details/WHX Dubai 2026/1.jpg";
import whxDubai2026_2 from "../assets/images/blog_details/WHX Dubai 2026/2.jpg";
import whxDubai2026_3 from "../assets/images/blog_details/WHX Dubai 2026/3.jpg";
import whxDubai2026_4 from "../assets/images/blog_details/WHX Dubai 2026/4.jpg";
import whxDubai2026_5 from "../assets/images/blog_details/WHX Dubai 2026/5.jpg";
import whxDubai2026_6 from "../assets/images/blog_details/WHX Dubai 2026/6.jpg";
import whxDubai2026_7 from "../assets/images/blog_details/WHX Dubai 2026/7.jpg";
import whxDubai2026_8 from "../assets/images/blog_details/WHX Dubai 2026/8.jpg";
import whxDubai2026_9 from "../assets/images/blog_details/WHX Dubai 2026/9.jpg";
import whxDubai2026_10 from "../assets/images/blog_details/WHX Dubai 2026/10.jpg";
import whxDubai2026_11 from "../assets/images/blog_details/WHX Dubai 2026/11.jpg";

// WHX Labs 2026 (5 images)
import whxLabs2026_1 from "../assets/images/blog_details/WHX Labs 2026/1.jpg";
import whxLabs2026_2 from "../assets/images/blog_details/WHX Labs 2026/2.jpg";
import whxLabs2026_3 from "../assets/images/blog_details/WHX Labs 2026/3.jpg";
import whxLabs2026_4 from "../assets/images/blog_details/WHX Labs 2026/4.jpg";
import whxLabs2026_5 from "../assets/images/blog_details/WHX Labs 2026/5.jpg";
import { SEO } from '../components/SEO';

const galleryImages: Record<number, string[]> = {
  1: [cphiMilan2026_1, cphiMilan2026_2, cphiMilan2026_3, cphiMilan2026_4, cphiMilan2026_5, cphiMilan2026_6],
  2: [whxDubai2026_1, whxDubai2026_2, whxDubai2026_3, whxDubai2026_4, whxDubai2026_5, whxDubai2026_6, whxDubai2026_7, whxDubai2026_8, whxDubai2026_9, whxDubai2026_10, whxDubai2026_11],
  3: [cphiFrankfurt2025_1, cphiFrankfurt2025_2, cphiFrankfurt2025_3, cphiFrankfurt2025_4, cphiFrankfurt2025_5, cphiFrankfurt2025_6, cphiFrankfurt2025_7, cphiFrankfurt2025_8, cphiFrankfurt2025_9, cphiFrankfurt2025_10],
  4: [whxLabs2026_1, whxLabs2026_2, whxLabs2026_3, whxLabs2026_4, whxLabs2026_5],
  5: [adihex2026_1, adihex2026_2, adihex2026_3, adihex2026_4, adihex2026_5, adihex2026_6],
  6: [adihex2025_1, adihex2025_2],
  7: [arabhealth2025_1, arabhealth2025_2, arabhealth2025_3, arabhealth2025_4, arabhealth2025_5, arabhealth2025_6],
  8: [medlab2025_1, medlab2025_2, medlab2025_3, medlab2025_4, medlab2025_5, medlab2025_6],
  9: [aicp2025_1],
  10: [expopharm2025_1, expopharm2025_2, expopharm2025_3],
  11: [cphiChina2025_1, cphiChina2025_2, cphiChina2025_3, cphiChina2025_4, cphiChina2025_5, cphiChina2025_6, cphiChina2025_7],
  12: [contura_1],
  13: [medica2025_1, medica2025_2],
};

export function BlogDetails() {
  const { id } = useParams();
  const blogId = parseInt(id || '1', 10);
  const blog = blogsData.find((b) => b.id === blogId) || blogsData[0];
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const latestBlogs = blogsData.filter((b) => b.id !== blog.id).slice(0, 6);
  const gallery = galleryImages[blogId] || [];

  // Generate SEO description from blog content
  const generateDescription = () => {
    if (blog.subtitle) {
      return blog.subtitle;
    }
    if (blog.body && blog.body.length > 0) {
      const firstParagraph = blog.body[0];
      // Limit to 160 characters for SEO
      return firstParagraph.length > 160 
        ? firstParagraph.substring(0, 157) + '...' 
        : firstParagraph;
    }
    return `Read about ${blog.title} - insights and updates from THESAY Pharma.`;
  };

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(gallery[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (currentIndex < gallery.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(gallery[currentIndex + 1]);
    }
  };

  return (
    <>
    <SEO
        title={blog.title}
        description={generateDescription()}
        keywords={`${blog.title}, pharma news, healthcare updates, thesay insights`}
        image={blog.image}
      />
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      <main>
        <PageHero title="Blog Details" breadcrumb="Blog Details" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3 px-[50px]">
            {/* Featured Image */}
            <div className="rounded-lg overflow-hidden mb-8 bg-gray-100">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
              <Calendar size={16} />
              <span>{blog.date}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#0f3d2e]">
              {blog.title}
            </h1>

            {blog.subtitle && (
              <p className="text-lg font-semibold text-gray-800 mb-6">
                {blog.subtitle}
              </p>
            )}

            {/* Body */}
            {blog.body && blog.body.length > 0 && (
              <div className="max-w-none text-gray-600 mb-12 space-y-4 text-justify leading-relaxed text-lg">
                {blog.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}

            {/* Gallery Section */}
            {gallery.length > 0 && (
              <>
                <h2 className="text-2xl font-bold mb-6 text-[#0f3d2e]">
                  {blog.gallerySectionTitle || 'Gallery'}
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {gallery.map((image, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg overflow-hidden bg-gray-200 aspect-square cursor-pointer group relative"
                      onClick={() => openLightbox(image, idx)}
                    >
                      <img
                        src={image}
                        alt={`${blog.title} ${idx + 1}`}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm font-medium">
                          View
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-[#0f3d2e]">
                Latest Blogs
              </h3>

              <div className="space-y-6">
                {latestBlogs.map((latestBlog) => (
                  <Link
                    to={`/blogs/${latestBlog.id}`}
                    key={latestBlog.id}
                    className="flex gap-4 group"
                  >
                    <div className="w-24 h-16 rounded overflow-hidden flex-shrink-0 bg-gray-200">
                      <img
                        src={latestBlog.image}
                        alt={latestBlog.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-gray-500 text-xs mb-1">
                        <Calendar size={12} />
                        <span>{latestBlog.date}</span>
                      </div>
                      <h4 className="font-semibold text-sm text-gray-900 group-hover:text-[#27ae3f] transition-colors line-clamp-2">
                        {latestBlog.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <Link
                  to="/blogs"
                  className="text-sm font-medium text-gray-600 hover:text-[#27ae3f] transition-colors"
                >
                  View All Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X size={32} />
          </button>

          <button
            onClick={goToPrevious}
            className={`absolute left-4 text-white hover:text-gray-300 transition-colors z-10 ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={36} />
          </button>

          <button
            onClick={goToNext}
            className={`absolute right-4 text-white hover:text-gray-300 transition-colors z-10 ${
              currentIndex === gallery.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={currentIndex === gallery.length - 1}
          >
            <ChevronRight size={36} />
          </button>

          <img
            src={selectedImage}
            alt="Gallery"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {currentIndex + 1} / {gallery.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
    </>
  );
}