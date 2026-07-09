import React from "react";
import { motion } from "framer-motion";
import serviceShape from "../assets/images/shapes/service-block-shape.webp";
import { AnimatedText } from "./AnimatedText";

const services = [
  {
    title: "Market Intelligence",
    icon: (
      <svg
        width="70"
        height="70"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="12" y="50" width="10" height="28" fill="#fff" />
        <rect x="28" y="38" width="10" height="40" fill="#fff" />
        <rect x="44" y="44" width="10" height="34" fill="#fff" />
        <rect x="60" y="30" width="10" height="48" fill="#fff" />
        <path
          d="M12 50L33 38L49 44L65 30"
          fill="none"
          stroke="#fff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M60 30H70V40"
          stroke="#fff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description:
      "Staying ahead requires staying informed. Our focus on market intelligence and trends equips partners with insights to adapt to innovations, ensuring a competitive edge in their business operations.",
  },
  {
    title: "Tender Business",
    icon: (
      <svg
        width="70"
        height="70"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 12H56L76 32V78C76 82 73 85 69 85H18C14 85 11 82 11 78V20C11 16 14 12 18 12Z"
          stroke="#fff"
          strokeWidth="4"
        />
        <path d="M56 12V32H76" stroke="#fff" strokeWidth="4" />
        <rect x="24" y="40" width="34" height="4" fill="#fff" />
        <rect x="24" y="50" width="28" height="4" fill="#fff" />
        <rect x="24" y="60" width="20" height="4" fill="#fff" />
        <circle cx="62" cy="66" r="12" stroke="#fff" strokeWidth="4" />
        <path
          d="M56 66L60 70L68 62"
          stroke="#fff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description:
      "Our tender expertise ensures precise participation in requests. We identify optimal pricing and procure suitable products, supporting efficient distribution across our extensive network.",
  },
  {
    title: "Sales & Marketing",
    icon: (
      <svg
        width="70"
        height="70"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="14" y="48" width="10" height="28" fill="#fff" />
        <rect x="30" y="36" width="10" height="40" fill="#fff" />
        <rect x="46" y="42" width="10" height="34" fill="#fff" />
        <path
          d="M14 48L35 36L51 42L74 20"
          fill="none"
          stroke="#fff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M68 20H74V26"
          stroke="#fff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M52 58L82 48V74L52 64V58Z" fill="#fff" />
        <rect x="46" y="58" width="8" height="14" fill="#fff" />
        <path
          d="M84 50C88 54 88 68 84 72"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M90 46C95 54 95 68 90 76"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
    description:
      "Effective sales and marketing strategies are essential. We provide tailored approaches for diverse markets, empowering clients to make informed decisions for global product distribution.",
  },
  {
    title: "Institutional Business",
    icon: (
      <svg
        width="70"
        height="70"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 30L48 12L84 30H12Z" fill="#fff" />
        <rect x="20" y="34" width="8" height="34" fill="#fff" />
        <rect x="36" y="34" width="8" height="34" fill="#fff" />
        <rect x="52" y="34" width="8" height="34" fill="#fff" />
        <rect x="68" y="34" width="8" height="34" fill="#fff" />
        <rect x="16" y="70" width="64" height="6" fill="#fff" />
        <circle cx="30" cy="78" r="3" fill="#fff" />
        <circle cx="48" cy="84" r="3" fill="#fff" />
        <circle cx="66" cy="78" r="3" fill="#fff" />
        <path
          d="M30 78L48 84L66 78"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description:
      "We specializes in institutional sales, supplying medicines to hospitals, government bodies, corporations, and centralized institutions by partnering with trusted suppliers.",
  },
  {
    title: "Distribution & Logistics",
    icon: (
      <svg
        width="70"
        height="70"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="14" y="36" width="42" height="22" fill="#fff" />
        <path d="M56 40H70L80 50V58H56V40Z" fill="#fff" />
        <circle cx="30" cy="64" r="6" fill="#fff" />
        <circle cx="64" cy="64" r="6" fill="#fff" />
        <rect x="14" y="28" width="26" height="4" fill="#fff" />
        <rect x="14" y="22" width="18" height="4" fill="#fff" />
      </svg>
    ),
    description:
      "With unmatched expertise in pharmaceutical distribution, we handle specialized import and export requirements, ensuring the safe delivery of products using methods essential for their integrity.",
  },
  {
    title: "Regulatory Support",
    icon: (
      <svg
        width="70"
        height="70"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48 12L78 24V46C78 66 64 80 48 86C32 80 18 66 18 46V24L48 12Z"
          stroke="#fff"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M34 50L44 60L64 40"
          stroke="#fff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description:
      "Operating in diverse locations, we offer expert regulatory support. Our professionals ensure seamless market entry and product registrations while adhering to each region's unique norms and laws.",
  },
];

export function OurServices() {
  return (
    <section className="service-section-two overflow-hidden bg-[#f7f6f2] pt-[120px] pb-[120px] px-[30px]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="sec-title mb-[50px]">
          <div className="flex-content">
            <h2 className="title text-3xl md:text-4xl font-bold text-[#0f3d2e] tracking-wide">
              <AnimatedText
                inline
                lines={[
                  {
                    text: "OUR SERVICES",
                  },
                ]}
              />
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="outer-box rounded-[13px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 g-0">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="service-block-two h-full"
              >
                <div
                  className={`group inner-box p-[60px_30px] pt-[50px] bg-white text-center relative z-10 h-full transition-all duration-500 group hover:bg-[#00701C] ${
                    index % 3 !== 2 ? "border-r border-[#d9d9d9]" : ""
                  } ${index < 3 ? "border-b border-[#d9d9d9]" : ""}`}
                >
                  {/* Icon */}
                  <div
                    className="
    icon
    w-[134px]
    h-[134px]
    rounded-full
    bg-[#00701C]
    mx-auto
    mb-5
    flex
    items-center
    justify-center
    transition-all
    duration-500
    group-hover:bg-[#0f3d2e]
  "
                  >
                    <div className="icon-flip">{service.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="content-box">
                    <h4 className="title text-xl font-bold text-[#0f3d2e] mb-5 transition-colors duration-300 group-hover:text-white">
                      {service.title}
                    </h4>
                    <p className="text max-w-[345px] mx-auto text-[16px] leading-[28px] text-gray-600 text-justify transition-colors duration-300 group-hover:text-white">
                      {service.description}
                    </p>
                  </div>

                  {/* Decorative Shape Background */}
                  <div className="absolute inset-0 pointer-events-none">
                    <img
                      src={serviceShape}
                      alt=""
                      className="w-full h-full opacity-75"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
