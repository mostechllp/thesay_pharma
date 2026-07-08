import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  FileText,
  TrendingUp,
  Building2,
  Truck,
  ShieldCheck,
} from "lucide-react";

import { Header } from "../components/Header";
import { PageHero } from "../components/PageHero";
import { SegmentGrid } from "../components/SegmentGrid";
import { Footer } from "../components/Footer";
import { BusinessSegments } from "../components/BusinessSegments";
import { OurServices } from "../components/OurServices";
import dualCircle from "../assets/images/shapes/dual-circle420.png";

const services = [
  {
    title: "Market Intelligence",
    icon: BarChart3,
    highlight: false,
    description:
      "Staying ahead requires staying informed. Our focus on market intelligence and trends equips partners with insights to adapt to innovations, ensuring a competitive edge in their business operations.",
  },
  {
    title: "Tender Business",
    icon: FileText,
    highlight: true,
    description:
      "Our tender expertise ensures precise participation in requests. We identify optimal pricing and procure suitable products, supporting efficient distribution across our extensive network.",
  },
  {
    title: "Sales & Marketing",
    icon: TrendingUp,
    highlight: false,
    description:
      "Effective sales and marketing strategies are essential. We provide tailored approaches for diverse markets, empowering clients to make informed decisions for global product distribution.",
  },
  {
    title: "Institutional Business",
    icon: Building2,
    highlight: false,
    description:
      "theSAY Pharma specializes in institutional sales, supplying medicines to hospitals, government bodies, corporations, and centralized institutions by partnering with trusted suppliers.",
  },
  {
    title: "Distribution & Logistics",
    icon: Truck,
    highlight: false,
    description:
      "With unmatched expertise in pharmaceutical distribution, we handle specialized import and export requirements, ensuring the safe delivery of products using methods essential for their integrity.",
  },
  {
    title: "Regulatory Support",
    icon: ShieldCheck,
    highlight: true,
    description:
      "Operating in diverse locations, we offer expert regulatory support. Our professionals ensure seamless market entry and product registrations while adhering to each region's unique norms and laws.",
  },
];

const excellence = [
  {
    num: "01",
    active: false,
    text: "THESAY Pharma offers data-driven market intelligence, helping partners stay ahead with emerging trends. Our insights empower strategic decisions, giving clients a competitive edge in an ever-changing healthcare market.",
  },
  {
    num: "02",
    active: false,
    text: "With unparalleled tender business expertise, THESAY Pharma ensures accurate pricing, quality sourcing, and reliable distribution. Our end-to-end approach secures critical contracts and delivers efficient, on-time solutions tailored to client needs.",
  },
  {
    num: "03",
    active: true,
    text: "THESAY Pharma's sales and marketing strategies, rooted in Dubai, are customized for diverse global markets. We optimize product positioning and distribution, driving visibility, market penetration, and overall business success for our clients.",
  },
  {
    num: "04",
    active: false,
    text: "THESAY Pharma's reliable distribution and regulatory support ensure safe transport of medical products. Our logistics expertise and regulatory guidance simplify market entry and compliance, offering seamless solutions that meet region-specific standards.",
  },
];

export function Services() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-[#27ae3f] selection:text-white">
      <Header />
      <main>
        <PageHero title="Services" breadcrumb="Services" />

        <BusinessSegments />

        <OurServices />

        {/* Driving Excellence - numbered columns */}
        <section className="py-20 bg-[#f7f6f2] px-[40px] relative overflow-visible">
          {/* Dual Circle Shape - positioned at the bottom left of the section */}
          <div className="absolute -bottom-[200px] -left-[200px] z-[1] pointer-events-none">
            <img
              src={dualCircle}
              alt="Decorative Shape"
              className="animate-spin-slow w-[500px] opacity-30"
              style={{ animationDuration: "20s" }}
              loading="lazy"
            />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f3d2e] mb-14">
              Driving Excellence In Global Healthcare Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {excellence.map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                >
                  <span
                    className="
              block
              text-6xl
              font-bold
              mb-6
              text-transparent
              [-webkit-text-stroke:2px_#c9c9c0]
              transition-all
              duration-500
              group-hover:text-[#0f3d2e]
              group-hover:[-webkit-text-stroke:0px]
            "
                  >
                    {item.num}
                  </span>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    {item.text}
                  </p>
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
