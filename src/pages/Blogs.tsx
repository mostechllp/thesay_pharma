import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Calendar } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// Import all blog images
import ADIHEX_2025 from "../assets/images/blog/ADIHEX 2025.png";
import ADIHEX_2026 from "../assets/images/blog/ADIHEX 2026.png";
import AICP_Conference_2025 from "../assets/images/blog/AICP conference 2025.png";
import Arab_Health_2025 from "../assets/images/blog/Arab Health 2025.png";
import Contura_Denmark_Visit from "../assets/images/blog/Contura Denmark Visit.png";
import CPHI_China_2025 from "../assets/images/blog/CPHI China 2025.png";
import CPHI_Frankfurt_2025 from "../assets/images/blog/CPHI Frankfruit 2025.png";
import CPHI_Milan_2026 from "../assets/images/blog/CPHI Milan 2026.png";
import Expopharm_2025 from "../assets/images/blog/Expopharm 2025.png";
import Medica_2025 from "../assets/images/blog/Medica 2025.png";
import Medlab_2025 from "../assets/images/blog/Medlab 2025.png";
import WFH_Labs_2026 from "../assets/images/blog/WFH Labs 2026.png";
import WHX_Dubai_2026 from "../assets/images/blog/WHX Dubai 2026.png";
import { SEO } from "../components/SEO";

export type Blog = {
  id: number;
  title: string;
  subtitle: string | null;
  date: string;
  image: string;
  body: string[];
  gallerySectionTitle: string;
  galleryCount: number;
};

export const blogsData: Blog[] = [
  {
    id: 1,
    title: "CPHI Milan 2026",
    subtitle: null,
    date: "06 October, 2026",
    image: CPHI_Milan_2026,
    body: [
      "CPHI Europe serves as a global networking, innovation and business platform where pharma professionals can meet potential partners, discover the latest technologies and trends, attend expert talks and sessions, and build strategic relationships. Organised by Informa Markets, it also includes digital networking opportunities year-round beyond the in-person exhibition.",
      "In recent editions, the event has continued to evolve — for example, adding dedicated zones for AI and technology to reflect the sector’s move toward digital solutions in drug development and manufacturing.",
    ],
    gallerySectionTitle: "Our Gallery",
    galleryCount: 6,
  },
  {
    id: 2,
    title: "WHX Dubai 2026",
    subtitle: "Thesay Pharma at WHX Dubai",
    date: "09 February, 2026",
    image: WHX_Dubai_2026,
    body: [
      "Thesay Pharma successfully participated in WHX Dubai (formerly Arab Health), one of the world’s leading healthcare exhibitions. The event was held from 9–12 February 2026 at the Dubai Exhibition Centre and brought together global healthcare leaders, innovators, manufacturers, and distributors under one roof.",
      "During the exhibition, Thesay Pharma highlighted its commitment to quality, innovation, and strong partnerships. The event provided an excellent platform to engage with industry professionals, exchange valuable insights, and explore new opportunities that support the future of healthcare.",
      "Visitors connected with the Thesay Pharma team at Stand S19 J111, where the company presented its latest developments and discussed potential collaborations. The participation enabled meaningful discussions and strengthened relationships with pharmaceutical manufacturers, distributors, and healthcare partners.",
      "WHX Dubai 2026 concluded successfully, and Thesay Pharma was proud to be part of the event, reinforcing its dedication to advancing healthcare solutions and building long-term industry partnerships.",
    ],
    gallerySectionTitle: "Highlights",
    galleryCount: 11,
  },
  {
    id: 3,
    title: "CPHI Frankfurt 2025",
    subtitle: null,
    date: "28 October, 2025",
    image: CPHI_Frankfurt_2025,
    body: ["Global platform showcasing innovative healthcare solutions."],
    gallerySectionTitle: "Highlights",
    galleryCount: 10,
  },
  {
    id: 4,
    title: "WFH Labs 2026",
    subtitle: "Thesay at WHX Labs",
    date: "12 April, 2026",
    image: WFH_Labs_2026,
    body: [
      "Thesay successfully participated in WHX Labs Dubai 2026 alongside SayGen Genetics, part of the World Health Expo. The event was held from 10–13 February 2026 at the Dubai World Trade Centre, bringing together global leaders in laboratory medicine, diagnostics, and healthcare innovation.",
      "During the exhibition, Thesay and SayGen Genetics showcased advanced PCR systems and diagnostic test kits designed to deliver accuracy, efficiency, and reliability. The solutions presented supported laboratories and healthcare providers in addressing the growing demand for high-quality diagnostic technologies.",
      "Visitors connected with the team at Stand S1 H54, where detailed discussions took place regarding the product portfolio, technological capabilities, and potential collaborations. The event served as a valuable platform to strengthen industry relationships and explore future-focused diagnostic solutions.",
      "WHX Labs Dubai 2026 concluded successfully, and Thesay, together with SayGen Genetics, was proud to have engaged with laboratory specialists, distributors, and healthcare partners, reinforcing their commitment to advancing diagnostics and shaping the future of healthcare.",
    ],
    gallerySectionTitle: "Highlights",
    galleryCount: 5,
  },
  {
    id: 5,
    title: "ADIHEX 2026",
    subtitle: null,
    date: "15 September, 2026",
    image: ADIHEX_2026,
    body: [
      "The Abu Dhabi International Hunting and Equestrian Exhibition (ADIHEX) is a major annual cultural and commercial event held at the ADNEC Centre in Abu Dhabi, UAE, celebrating the rich heritage of hunting, equestrianism, falconry and traditional outdoor life while blending it with modern innovation and global participation. Attracting hundreds of thousands of visitors, thousands of exhibitors from over 60 countries, and showcasing 15 diverse sectors ranging from equestrian sports and falconry to arts, crafts and outdoor equipment, ADIHEX serves as both a festive cultural showcase and a powerful business platform for networking, discovery and international trade in the heritage and outdoor industries.",
    ],
    gallerySectionTitle: "Our Gallery",
    galleryCount: 6,
  },
  {
    id: 6,
    title: "ADIHEX 2025",
    subtitle: null,
    date: "01 September, 2025",
    image: ADIHEX_2025,
    body: [
      "An annual celebration of Emirati heritage and cultural traditions.",
    ],
    gallerySectionTitle: "Highlights",
    galleryCount: 2,
  },
  {
    id: 7,
    title: "Arab Health 2025",
    subtitle: null,
    date: "27 January, 2025",
    image: Arab_Health_2025,
    body: ["Innovating Healthcare Solutions for a Healthier Future."],
    gallerySectionTitle: "Our Gallery",
    galleryCount: 6,
  },
  {
    id: 8,
    title: "Medlab 2025",
    subtitle: null,
    date: "03 February, 2025",
    image: Medlab_2025,
    body: ["The premier showcase for medical laboratory innovation."],
    gallerySectionTitle: "Our Gallery",
    galleryCount: 6,
  },
  {
    id: 9,
    title: "AICP Conference 2025",
    subtitle: null,
    date: "05 October, 2025",
    image: AICP_Conference_2025,
    body: [
      "THESAY Pharma proudly participated in the 12th Annual Conference of Anesthesia, ICU & Pain Management 2025, a prestigious medical gathering that brought together leading anesthesiologists, critical care specialists, and healthcare professionals from across the Middle East.",
      "The event served as a valuable platform for exchanging knowledge, discussing advancements in anesthetic practices, and exploring emerging trends in intensive care and pain management.",
      "Participation in such international medical conferences aligns with THESAY Pharma’s vision of staying connected with healthcare advancements and contributing to better healthcare delivery systems globally.",
      "By engaging with professionals and industry leaders, THESAY Pharma continues to reinforce its dedication to innovation, collaboration, and excellence in pharmaceuticals.The 12th Annual Conference of Anesthesia, ICU & Pain Management 2025 was a remarkable experience filled with learning, collaboration, and professional networking. THESAY Pharma is honored to be part of such impactful events that shape the future of healthcare.",
    ],
    gallerySectionTitle: "Highlights",
    galleryCount: 1,
  },
  {
    id: 10,
    title: "Expopharm 2025",
    subtitle: null,
    date: "24 September, 2025",
    image: Expopharm_2025,
    body: [
      "Expopharm 2025, held in Düsseldorf, Germany, is one of Europe’s leading pharmaceutical trade fairs, bringing together global innovators, healthcare professionals, and industry leaders under one roof. The event serves as a key platform for showcasing advancements in pharmacy, genetics, and healthcare solutions.",
      "At this year’s exhibition, The Say Pharma and SayGen Genetics presented their strong global presence and innovative healthcare offerings. The team actively engaged with international visitors, highlighting their commitment to delivering advanced pharmaceutical and genetic solutions across GCC, CIS, and other global markets.",
      "The booth at Hall #3, Stand G-82 attracted significant attention during the event dates of 16–18 September 2025, creating valuable networking opportunities and strengthening brand visibility in the European healthcare industry.",
    ],
    gallerySectionTitle: "Highlights",
    galleryCount: 3,
  },
  {
    id: 11,
    title: "CPHI China 2025",
    subtitle: null,
    date: "18 June, 2025",
    image: CPHI_China_2025,
    body: [
      "CPHI China 2025, held from 24–26 June 2025 at SNIEC, Shanghai, is one of Asia’s leading pharmaceutical events, bringing together global pharma companies, healthcare innovators, and industry professionals.",
      "At the event, The Say Pharma actively showcased its presence alongside leading industry participants, strengthening international collaborations and expanding its reach in the Asian pharmaceutical market. The exhibition highlighted advancements in healthcare solutions, manufacturing capabilities, and global distribution networks.",
      "The booth attracted strong engagement from visitors and partners across the pharmaceutical sector, making CPHI China 2025 a valuable platform for networking, knowledge sharing, and business growth in the evolving life sciences industry.",
    ],
    gallerySectionTitle: "Highlights",
    galleryCount: 7,
  },
  {
    id: 12,
    title: "Contura Denmark Visit",
    subtitle: null,
    date: "20 August, 2025",
    image: Contura_Denmark_Visit,
    body: [
      "We recently had the opportunity to visit Contura, Denmark, to explore their state-of-the-art manufacturing facility and strengthen our ongoing business collaboration.",
      "During the visit, our team engaged in productive discussions with Contura’s leadership and gained valuable insights into their advanced production processes and commitment to quality. The facility showcased high standards of innovation, precision, and operational excellence, reflecting their strong position in the pharmaceutical manufacturing sector.",
      "This visit further reinforced the partnership between The Say Pharma and Contura. With Arthramid already established as a successful product across UAE, Oman, Saudi Arabia, and Qatar, we are excited about expanding our portfolio with Contura’s innovative solutions.",
      "The discussions also opened new opportunities for future collaboration, focusing on delivering high-quality healthcare solutions and strengthening our shared vision of excellence and innovation.",
      "We look forward to building on this strong foundation and continuing our journey of growth together.",
    ],
    gallerySectionTitle: "Highlights",
    galleryCount: 1,
  },
  {
    id: 13,
    title: "Medica 2025",
    subtitle: null,
    date: "18 November, 2025",
    image: Medica_2025,
    body: [
      "Thesay Pharma proudly participated in MEDICA 2025, held in Düsseldorf, Germany from 17–20 November 2025. The event brought together global leaders in medical technology and healthcare innovation.",
      "Our team engaged with industry experts, explored the latest advancements in diagnostics and healthcare solutions, and strengthened valuable international connections. The visit reflects our commitment to staying at the forefront of innovation and expanding our global presence in the pharmaceutical and diagnostics sector.",
      "Thesay Pharma continues to focus on delivering excellence through collaboration, innovation, and participation in world-class healthcare platforms.",
    ],
    gallerySectionTitle: "Highlights",
    galleryCount: 2,
  },
];

const PER_PAGE = 12;

export function Blogs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const totalPages = Math.max(1, Math.ceil(blogsData.length / PER_PAGE));
  const rawPage = parseInt(searchParams.get("page") || "1", 10);
  const page = Math.min(
    Math.max(Number.isNaN(rawPage) ? 1 : rawPage, 1),
    totalPages,
  );

  const start = (page - 1) * PER_PAGE;
  const end = start + PER_PAGE;
  const pageBlogs = blogsData.slice(start, end);
  const showingFrom = blogsData.length === 0 ? 0 : start + 1;
  const showingTo = Math.min(end, blogsData.length);

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages) return;
    setSearchParams({ page: String(p) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <SEO
        title="Latest News & Insights - THESAY PHARMA"
        description="Stay updated with the latest pharmaceutical news, industry insights, and updates from THESAY Pharma, a leading healthcare provider in Dubai."
        keywords="pharma news, healthcare insights dubai, pharmaceutical updates, thesay pharma blog"
      />
      <div className="min-h-screen bg-white font-sans text-gray-800">
        <Header />
        <main>
          <PageHero title="Latest News" breadcrumb="What's New" />

          {/* Blog Section */}
          <section className="blog-section overflow-hidden pt-[120px] pb-[90px] bg-white">
            <div className="auto-container container mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {pageBlogs.map((blog) => (
                  <Link
                    to={`/blogs/${blog.id}`}
                    key={blog.id}
                    className="blog-block-two group"
                  >
                    <div className="inner-box rounded-[5px] overflow-hidden bg-white shadow-[0px_4.4px_20px_-1px_rgba(19,16,34,0.05)] transition-all duration-500 ">
                      {/* Image Box */}
                      <div className="image-box relative z-10 overflow-hidden">
                        <div className="image overflow-hidden rounded-[5px]">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="
    w-full
    aspect-[4/3]
    object-cover
    origin-center
    transition-transform
    duration-700
    ease-out
    group-hover:scale-[1.06]
  "
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Content Box */}
                      <div className="content-box p-[30px] pt-[20px]">
                        {/* Info / Date */}
                        <ul className="info flex items-center gap-5 mb-[5px]">
                          <li className="flex items-center gap-1.5 whitespace-nowrap">
                            <svg
                              width="12"
                              height="13"
                              viewBox="0 0 12 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.25 0.5C3.45711 0.5 3.625 0.667893 3.625 0.875V1.75H8.375V0.875C8.375 0.667893 8.54289 0.5 8.75 0.5C8.95711 0.5 9.125 0.667893 9.125 0.875V1.75H10C10.5523 1.75 11 2.19772 11 2.75V11.25C11 11.8023 10.5523 12.25 10 12.25H2C1.44772 12.25 1 11.8023 1 11.25V2.75C1 2.19772 1.44772 1.75 2 1.75H2.875V0.875C2.875 0.667893 3.04289 0.5 3.25 0.5ZM2.125 4.25V11.125H9.875V4.25H2.125Z"
                                fill="#1A4137"
                                className="transition-all duration-300 "
                              />
                            </svg>
                            <span className="text-[14px] text-[#737588] transition-colors duration-300 group-hover:text-[#27ae3f]">
                              {blog.date}
                            </span>
                          </li>
                        </ul>

                        {/* Title */}
                        <h5 className="title text-[#0f3d2e] font-bold text-base capitalize mt-[10px] mb-0 transition-colors duration-300">
                          {blog.title}
                        </h5>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-[40px]">
                <div className="flex flex-wrap justify-between items-center border-t border-gray-200 pt-6">
                  <p className="text-gray-500 text-sm">
                    Showing {showingFrom} to {showingTo} of {blogsData.length}{" "}
                    results
                  </p>
                  <div className="flex gap-1">
                    <button
                      onClick={() => goToPage(page - 1)}
                      disabled={page === 1}
                      aria-label="Previous page"
                      className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                    >
                      ‹
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (p) => (
                        <button
                          key={p}
                          onClick={() => goToPage(p)}
                          aria-current={p === page ? "page" : undefined}
                          className={`w-8 h-8 flex items-center justify-center rounded border ${
                            p === page
                              ? "bg-[#0f3d2e] text-white border-[#0f3d2e]"
                              : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                          }`}
                        >
                          {p}
                        </button>
                      ),
                    )}
                    <button
                      onClick={() => goToPage(page + 1)}
                      disabled={page === totalPages}
                      aria-label="Next page"
                      className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
