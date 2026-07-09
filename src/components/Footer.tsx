import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoLight from "../assets/images/logo-light.png";
import ctaLine from "../assets/images/shapes/cta-line.png";
import dualCircle from "../assets/images/shapes/dual-circle420.png";
import {
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  ChevronsUp,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="main-footer footer-style-three pt-[100px] relative bg-[#0f3d2e] overflow-hidden px-[30px]">
      {/* Dual Circle Shape - behind CTA, rotating like globe */}
      <div className="sec-shape absolute top-0 -right-[200px] z-0 pointer-events-none">
        <img
          src={dualCircle}
          alt="Decorative Shape"
          className="animate-spin-slow"
          style={{ animationDuration: "20s" }}
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* CTA Banner */}
        <motion.div
          className="footer-cta relative z-10 bg-[#00701C] p-[60px_80px] rounded-[11px] flex items-center gap-[30px] flex-wrap justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="sec-title max-w-[570px]">
            <motion.h2
              className="title text-white text-3xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Looking to collaborate or partner with us?
            </motion.h2>
          </div>
          <div className="btn-wrp mr-[30px] text-center w-fit">
            <motion.a
              href="/contact"
              className="cta-btn inline-block bg-white text-[#0f3d2e] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's Connect
              <svg
                className="inline-block ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.a>
          </div>
          <div className="bg-shape absolute bottom-0 right-0 opacity-20">
            <img src={ctaLine} alt="Decorative Line" loading="lazy" />
          </div>
        </motion.div>

        {/* Widgets Section */}
        <div className="widgets-section py-[60px] pb-[40px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Info - Column 1 */}
            <div className="footer-column">
              <div className="footer-widget about-widget">
                <div className="logo mb-6">
                  <a href="/">
                    <img src={logoLight} alt="THESAY PHARMA" className="h-12" />
                  </a>
                </div>
                <div className="widget-content">
                  <p className="text text-[#d1d5db] text-[16px] leading-[30px]">
                    Distributing 600+ trusted healthcare products worldwide
                    through 50+ partners with excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Email Links - Column 2 */}
            <div className="footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-content">
                  <ul className="space-y-6">
                    <li>
                      <p className="text-white text-lg mb-2">For Business</p>
                      <a
                        href="mailto:info@thesaypharma.ae"
                        className="flex items-center gap-2 text-[#d1d5db] hover:text-[#27ae3f] transition-colors"
                      >
                        <Mail size={16} />
                        info@thesaypharma.ae
                      </a>
                    </li>

                    <li>
                      <p className="text-white text-lg mb-2">
                        For Safety & Quality
                      </p>
                      <a
                        href="mailto:pv.safety@thesaypharma.ae"
                        className="flex items-center gap-2 text-[#d1d5db] hover:text-[#27ae3f] transition-colors"
                      >
                        <Mail size={16} />
                        pv.safety@thesaypharma.ae
                      </a>
                    </li>

                    <li>
                      <p className="text-white text-lg mb-2">Careers</p>
                      <a
                        href="mailto:careers@thesaypharma.ae"
                        className="flex items-center gap-2 text-[#d1d5db] hover:text-[#27ae3f] transition-colors"
                      >
                        <Mail size={16} />
                        careers@thesaypharma.ae
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Links - Column 3 */}
            <div className="footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-content">
                  <ul className="user-links space-y-2">
                    <li>
                      <Link
                        to="/careers"
                        className="text-white text-[16px] hover:text-[#27ae3f] transition-colors relative before:absolute before:left-0 before:bottom-[3px] before:w-0 before:h-[1px] before:bg-[#27ae3f] before:transition-all before:duration-300 hover:before:w-full"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services"
                        className="text-white text-[16px] hover:text-[#27ae3f] transition-colors relative before:absolute before:left-0 before:bottom-[3px] before:w-0 before:h-[1px] before:bg-[#27ae3f] before:transition-all before:duration-300 hover:before:w-full"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/segments"
                        className="text-white text-[16px] hover:text-[#27ae3f] transition-colors relative before:absolute before:left-0 before:bottom-[3px] before:w-0 before:h-[1px] before:bg-[#27ae3f] before:transition-all before:duration-300 hover:before:w-full"
                      >
                        Business Segments
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/partners"
                        className="text-white text-[16px] hover:text-[#27ae3f] transition-colors relative before:absolute before:left-0 before:bottom-[3px] before:w-0 before:h-[1px] before:bg-[#27ae3f] before:transition-all before:duration-300 hover:before:w-full"
                      >
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/our-team"
                        className="text-white text-[16px] hover:text-[#27ae3f] transition-colors relative before:absolute before:left-0 before:bottom-[3px] before:w-0 before:h-[1px] before:bg-[#27ae3f] before:transition-all before:duration-300 hover:before:w-full"
                      >
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        className="text-white text-[16px] hover:text-[#27ae3f] transition-colors relative before:absolute before:left-0 before:bottom-[3px] before:w-0 before:h-[1px] before:bg-[#27ae3f] before:transition-all before:duration-300 hover:before:w-full"
                      >
                        Latest News
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Address - Column 4 */}
            <div className="footer-column">
              <div className="footer-widget links-widget contact-widget">
                <div className="widget-content">
                  <ul className="user-links space-y-3">
                    <li className="flex gap-3 items-center">
                      <Phone size={18} className="text-[#27ae3f] shrink-0" />
                      <a
                        href="tel:+97145876443"
                        className="text-white hover:text-[#27ae3f] transition-colors"
                      >
                        +971 4 587 6443
                      </a>
                    </li>

                    <li className="flex gap-3 items-center">
                      <Mail size={18} className="text-[#27ae3f] shrink-0" />
                      <a
                        href="mailto:info@thesaypharma.ae"
                        className="text-white hover:text-[#27ae3f] transition-colors"
                      >
                        info@thesaypharma.ae
                      </a>
                    </li>

                    <li className="flex gap-3 items-start">
                      <MapPin
                        size={18}
                        className="text-[#27ae3f] shrink-0 mt-1"
                      />
                      <span className="text-white leading-relaxed">
                        #1101, Anantara Downtown
                        <br />
                        Business Tower, Marasi Dr,
                        <br />
                        Business Bay, Dubai, UAE - PO
                        <br />
                        Box 117929
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Back to Top button on the divider */}
        <div className="footer-bottom relative pt-0">
          {/* Divider Line with Arrow on top */}
          <div className="relative border-t border-white/10">
            {/* Back To Top Button - Centered on the divider */}
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
                absolute
                left-1/2
                -translate-x-1/2
                -top-[28px]
                w-[60px]
                h-[60px]
                bg-[#00701C]
                rounded-xl
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:bg-[#0a8a26]
                hover:-translate-y-1
                shadow-lg
                hover:shadow-xl
                border-2
                border-[#0f3d2e]
              "
            >
              <ChevronsUp size={30} className="text-white" />
            </button>
          </div>

          {/* Bottom Content */}
          <div className="pt-[50px] pb-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#d1d5db] text-lg">
              &copy; {new Date().getFullYear()} THESAY. All Rights Reserved.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/company/thesaypharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d1d5db] hover:text-[#27ae3f] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://www.instagram.com/thesay.pharma/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d1d5db] hover:text-[#27ae3f] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom spin animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </footer>
  );
}
