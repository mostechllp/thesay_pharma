import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Globe,
  ShieldCheck,
  Users,
  Globe2,
  Package,
  Award,
} from "lucide-react";
import { Header } from "../components/Header";
import { PageHero } from "../components/PageHero";
import { Footer } from "../components/Footer";

// Import images
import aboutImage from "../assets/images/about/about-three-image.png";
import chooseImage from "../assets/images/choose/choose-image1.png";
import serviceBg from "../assets/images/service/service-bg.jpg";
import featureShape from "../assets/images/shapes/feature-shape.png";
import serviceFiveShape from "../assets/images/shapes/service-five-shape.png";
import stepsLine from "../assets/images/shapes/steps-line.png";
import icon2 from "../assets/images/about/2.svg";
import icon3 from "../assets/images/about/3.svg";
import icon4 from "../assets/images/about/4.svg";
import icon5 from "../assets/images/about/5.png";
import icon6 from "../assets/images/about/6.png";
import icon7 from "../assets/images/about/7.png";
import icon8 from "../assets/images/about/8.png";
import icon9 from "../assets/images/about/9.png";
import icon10 from "../assets/images/about/10.png";
import icon11 from "../assets/images/about/11.png";
import icon12 from "../assets/images/about/12.png";
import saygenLogo from "../assets/images/saygen.png";
import thesayvetLogo from "../assets/images/thesayvet.png";
import { DrivenByExcellence } from "../components/DrivenByExcellence";
import { AnimatedText } from "../components/AnimatedText";
import { SEO } from "../components/SEO";

const whyChoose = [
  {
    num: "01",
    title: "Why Choose Us?",
    icon: icon2,
    text: "THESAY Pharma is a leader in healthcare distribution with over 25 years of experience. We offer 600+ products and maintain strong partnerships with global companies, earning the trust of healthcare providers across the Middle East and beyond.",
  },
  {
    num: "02",
    title: "Global Reach, Local Impact",
    icon: icon3,
    text: "Headquartered in Dubai, THESAY Pharma combines global expertise with local insight. We connect international healthcare solutions to local markets, serving both private and government sectors, ensuring our products reach those who need them across key markets.",
  },
  {
    num: "03",
    title: "Our Commitment to Quality",
    icon: icon4,
    text: "At THESAY Pharma, quality is our priority. We ensure that every product meets the highest safety and efficacy standards. Representing leading multinational companies, we deliver the best pharmaceutical and medical products to our valued customers.",
  },
];

const stats = [
  {
    value: "240+",
    label: "EMPLOYEES",
    icon: icon9,
  },
  {
    value: "26+",
    label: "COUNTRY PRESENCE",
    icon: icon10,
  },
  {
    value: "600+",
    label: "PRODUCTS",
    icon: icon11,
  },
  {
    value: "25+",
    label: "YEARS IN BUSINESS",
    icon: icon12,
  },
];

const excellenceItems = [
  {
    title: "OUR MISSION",
    icon: icon5,
    text: "To support the global distribution of pharmaceutical and healthcare products by ensuring reliable supply chains, region-specific regulatory compliance, and consistent quality standards across international markets.",
  },
  {
    title: "OUR VISION",
    icon: icon6,
    text: "To be a trusted global pharmaceutical distribution partner, recognized for regulatory strength, supply chain efficiency, and the ability to ensure smooth international distribution of healthcare products.",
  },
  {
    title: "OUR VALUES",
    icon: icon7,
    text: "Integrity, reliability, quality, and collaboration define our approach, with a strong commitment to ethical distribution practices, operational discipline, and continuous improvement to meet global healthcare supply needs.",
  },
  {
    title: "OUR GOALS",
    icon: icon8,
    text: "To expand our international distribution network, strengthen long-term partnerships, and ensure sustainable access to essential healthcare products that support patient care across global markets.",
  },
];

export function About() {
  return (
    <>
      <SEO
        title="About Us - THESAY PHARMA | Your Trusted Healthcare Partner"
        description="Learn about THESAY Pharma, a prominent pharmaceutical distributor in Dubai with a global footprint, dedicated to delivering quality healthcare solutions."
        keywords="about thesay pharma, pharma company dubai, healthcare solutions, pharmaceutical distribution history"
      />
      <div className="min-h-screen bg-white font-sans text-gray-800">
        <Header />
        <main>
          <PageHero title="THESAY Pharma" breadcrumb="About Us" />

          {/* About Section - Your Trusted Partner */}
          <section className="about-section-three overflow-hidden pt-[120px] pb-[120px] bg-white">
            <div className="container mx-auto px-4 md:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <motion.div
                  className="image-column"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inner-column relative z-10">
                    <figure className="image overflow-hidden rounded-[11px] max-w-[581px]">
                      <img
                        src={aboutImage}
                        alt="THESAY Pharma Team"
                        className="w-full h-auto"
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
                  <div className="inner-column">
                    <div className="sec-title max-w-[570px]">
                      <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 leading-[52px]">
                        YOUR TRUSTED PARTNER IN{" "}
                        <AnimatedText
                          inline
                          lines={[
                            {
                              text: "HEALTHCARE AND PHARMACEUTICAL SOLUTIONS",
                              className: "text-black font-bold",
                            },
                          ]}
                        />
                      </h2>
                      <p className="text-gray-500 leading-relaxed mt-[30px] text-justify text-lg">
                        <b>THESAY Pharma</b> is a prominent name among the
                        healthcare distributors in the business, supplying a
                        comprehensive range of Medical and Pharmaceutical
                        products from more than 50+ multinational companies
                        across the globe. We have built our brand and its
                        reputation as a trustworthy and results-oriented
                        organization.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Steps Section - Why Choose Us */}
          <section className="steps-section pb-[120px] bg-white px-[60px]">
            <div className="container mx-auto px-4 md:px-8">
              <div className="outer-box flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 relative">
                {whyChoose.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`steps-block text-center max-w-[310px] relative z-10 ${index === 1 ? "active" : ""}`}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <div className="icon w-[180px] h-[180px] rounded-full bg-[#0f3d2e] flex items-center justify-center mx-auto relative z-10 transition-all duration-500 hover:bg-[#27ae3f]">
                      <img src={item.icon} width="90" height="90" alt="icon" />
                      <span className="number absolute bottom-[10px] right-[-30px] w-[70px] h-[70px] rounded-full bg-white text-[#0f3d2e] text-[22px] font-bold flex items-center justify-center shadow-md">
                        {item.num}
                      </span>
                    </div>
                    <div className="content mt-[30px]">
                      <h4 className="title text-xl font-bold text-[#0f3d2e] mb-[15px]">
                        {item.title}
                      </h4>
                      <p className="text text-gray-500 text-lg leading-relaxed text-justify">
                        {item.text}
                      </p>
                    </div>
                    {index < 2 && (
                      <div className="line hidden md:block absolute top-[90px] right-[-115%]">
                        <img
                          src={stepsLine}
                          alt="shape"
                          className={index === 1 ? "transform rotate-180" : ""}
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Global Presence Section */}
          <section className="choose-section pb-[120px] bg-white px-[60px]">
            <div className="container mx-auto px-4 md:px-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  className="content-column"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inner-column max-w-[580px]">
                    <div className="sec-title mb-[30px]">
                      <h2 className="title text-3xl md:text-5xl font-bold text-[#0f3d2e]">
                        Our Global Presence
                      </h2>
                    </div>
                    <div className="tab-content mt-[30px]">
                      <div className="content-box">
                        <p className="text text-gray-500 leading-relaxed text-justify mt-[30px] text-lg">
                          THESAY Pharma has a strong and expanding international
                          presence, strategically operating across the CIS, GCC,
                          LATAM, South Asia, and African regions. Supported by a
                          robust marketing and distribution network, the company
                          ensures efficient market access, reliable supply
                          chains, and consistent product availability across
                          diverse healthcare markets.
                          <br />
                          <br />
                          The company holds a leading position among the top
                          three suppliers of inhalation anesthetics in the GCC
                          and CIS markets, reflecting its strength in regulated
                          pharmaceutical distribution, long-term supplier
                          partnerships, and adherence to quality and compliance
                          standards. THESAY Pharma's focus on reliability,
                          continuity of supply, and operational efficiency has
                          positioned it as a trusted distribution partner for
                          healthcare institutions and government entities.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="image-column"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="inner-column">
                    <figure className="image overflow-hidden rounded-lg">
                      <img
                        src={chooseImage}
                        alt="THESAY Pharma Global Presence"
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </figure>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Corporate Structure Section */}
          <section className="corporate-section pb-[120px]">
            <div className="container mx-auto px-4 md:px-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  className="content-column"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inner-column">
                    <div className="sec-title mb-[30px]">
                      <span
                        className="
    inline-flex
    items-center
    justify-center
    bg-[#00701C]
    text-white
    font-bold
    uppercase
    tracking-[3px]
    text-sm
    px-8
    py-4
    rounded-full
    leading-none
  "
                      >
                        CORPORATE STRUCTURE
                      </span>
                      <h2 className="title mt-[10px] text-4xl font-bold leading-tight">
                        THESAY Investments
                      </h2>
                    </div>
                    <p className="text  leading-relaxed text-justify mt-[30px] text-lg">
                      <strong>THESAY Investments</strong> stands as our parent
                      institution, steering the strategic vision, governance,
                      and capital allocation for our entire corporate group. As
                      a premier investment holding company, it drives growth
                      across diversified portfolios and fosters innovation
                      within its key operating entities.
                    </p>
                    <p className="text leading-relaxed text-justify mt-[20px] text-lg">
                      Under the umbrella of THESAY Investments, we operate two
                      leading subsidiaries specialized in their respective
                      healthcare and life sciences fields:
                    </p>
                  </div>
                </motion.div>

                <div className="subsidiary-column">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      {
                        logo: saygenLogo,
                        name: "SAYGEN GENETICS",
                        text: "A pioneering life sciences subsidiary dedicated to genetic research, advanced diagnostics, and innovative healthcare products.",
                      },
                      {
                        logo: thesayvetLogo,
                        name: "THESAY VETERINARY",
                        text: "Specialized in comprehensive animal health and veterinary solutions, distributing premium medical products to veterinary clinics and distributors globally.",
                      },
                    ].map((sub, index) => (
                      <motion.div
                        key={index}
                        className="subsidiary-card bg-white p-[40px_30px] rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-t-4 border-t-[#27ae3f] h-full transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                      >
                        <div className="icon-box mb-[25px] flex items-center justify-center">
                          <img
                            src={sub.logo}
                            alt={sub.name}
                            className="h-45 w-auto object-contain"
                          />
                        </div>
                        <p className="text-gray-600 text-[15px] leading-relaxed text-justify mb-0">
                          {sub.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <DrivenByExcellence />

          {/* Feature Section - Leading The Way */}
          <section className="feature-section have-padding pb-[120px] pt-[90px] bg-[#f7f6f2] overflow-hidden relative z-10 px-[60px]">
            <div className="shape absolute top-1/2 left-0 -translate-y-1/2 z-[-1]">
              <img
                src={featureShape}
                alt="Decorative Shape"
                className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
                loading="lazy"
              />
            </div>
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <div className="sec-title mb-[50px]">
                <div className="flex-content">
                  <h2 className="title text-3xl md:text-[45px] font-bold text-[#0f3d2e]">
                    <AnimatedText
                      lines={[
                        {
                          text: "Leading the Way in Global Healthcare Solutions",
                          className: "block w-full",
                        },
                      ]}
                    />
                  </h2>
                </div>
              </div>

              <motion.div
                className="row g-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="col-md-12">
                  <p className="text-gray-600 leading-relaxed text-justify text-lg">
                    Headquartered in Dubai, THESAY Pharma connects healthcare
                    providers with high-quality medical, pharmaceutical, and
                    diagnostic products from leading international
                    manufacturers. We offer a comprehensive portfolio covering
                    human health, veterinary care, medical devices, and
                    diagnostic solutions.
                    <br />
                    <br />
                    With a robust distribution network across the GCC, CIS,
                    LATAM South Asia and African regions, we ensure timely and
                    reliable delivery of essential healthcare products,
                    including inhalation anesthetics. Our operations are guided
                    by a commitment to excellence, compliance, and innovation,
                    fostering long-term partnerships with both government and
                    private healthcare organizations.
                    <br />
                    <br />
                    At THESAY Pharma, we don't just supply products—we provide
                    dependable solutions that strengthen healthcare systems and
                    improve patient outcomes worldwide.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-[30px]">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="feature-block"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="inner-box text-center p-[40px_30px] bg-white rounded-none shadow-[0px_5px_15px_0px_rgba(0,0,0,0.05)] relative z-10 overflow-hidden transition-all duration-500 hover:shadow-xl group">
                      <h4 className="title text-[#0f3d2e] font-bold text-xl uppercase leading-[31px]">
                        {stat.value}
                        <br />
                        {stat.label}
                      </h4>
                      <div
                        className="
    icon-box
    mt-[20px]
    transition-transform
    duration-1000
    group-hover:[transform:rotateY(720deg)]
    [transform-style:preserve-3d]
  "
                      >
                        <img
                          src={stat.icon}
                          alt={stat.label}
                          className="w-20 h-120 mx-auto"
                          loading="lazy"
                        />
                      </div>
                    </div>
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
