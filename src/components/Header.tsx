import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import productListPDF from "../assets/images/THESAYPHARMAPRODUCTLIST.pdf";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="main-header header-style-one">
        {/* Header Top */}
        <div className="header-top bg-black text-white h-[34px]">
          <div className="flex items-center h-full">
            <div className="w-[70%] flex items-center px-8">
              <ul className="info-list flex flex-wrap items-center gap-6 text-white text-sm font-medium">
                <li className="flex items-center gap-2">
                  <Mail size={14} className="text-white" />
                  <a
                    href="mailto:info@thesaypharma.ae"
                    className="text-white font-medium"
                  >
                    info@thesaypharma.ae
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={14} className="text-white" />
                  <span>Business Bay, Dubai, UAE</span>
                </li>
              </ul>
            </div>
            <div className="w-[30%] bg-[#00701c] h-full flex items-center justify-end px-8">
              <ul className="top-social-icon flex items-center gap-4 ">
                <li>
                  <a
                    href="https://www.linkedin.com/company/thesaypharma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00701c] transition-colors inline-block hover:[animation:flip-twice_0.7s_ease-in-out]"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={14} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/thesay.pharma/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00701c] transition-colors inline-block hover:[animation:flip-twice_0.7s_ease-in-out]"
                    aria-label="Instagram"
                  >
                    <Instagram size={14} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main box */}
        <div
          className={`main-box bg-white shadow-md transition-shadow duration-300 ${isSticky ? "shadow-lg" : ""}`}
        >
          <div className="max-w-[1450px] mx-auto px-8 py-3">
            <div className="flex items-center justify-between gap-5">
              {/* Logo Box */}
              <div className="logo-box flex-shrink-0">
                <Link
                  to="/"
                  className="logo block"
                  aria-label="Thesay Pharma Home"
                >
                  <img
                    src={logo}
                    alt="Thesay Pharma"
                    title="Thesay"
                    className="max-h-[50px] w-auto"
                  />
                </Link>
              </div>

              {/* Nav Box */}
              <div className="nav-outer hidden lg:block flex-1">
                <nav>
                  <ul className="flex items-center gap-12 font-semibold text-[18px]">
                    <li>
                      <Link
                        to="/"
                        className="hover:text-[#1a4137] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1a4137] hover:after:w-full after:transition-all after:duration-300"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="hover:text-[#1a4137] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1a4137] hover:after:w-full after:transition-all after:duration-300"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services"
                        className="hover:text-[#1a4137] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1a4137] hover:after:w-full after:transition-all after:duration-300"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/segments"
                        className="hover:text-[#1a4137] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1a4137] hover:after:w-full after:transition-all after:duration-300"
                      >
                        Segments
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/partners"
                        className="hover:text-[#1a4137] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1a4137] hover:after:w-full after:transition-all after:duration-300"
                      >
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/teams"
                        className="hover:text-[#1a4137] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1a4137] hover:after:w-full after:transition-all after:duration-300"
                      >
                        Teams
                      </Link>
                    </li>
                  </ul>

                  <ul className="flex items-center gap-12 font-semibold text-[18px] mt-2">
                    <li>
                      <Link
                        to="/contact"
                        className="hover:text-[#1a4137] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1a4137] hover:after:w-full after:transition-all after:duration-300"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/whats-new"
                        className="text-green-700 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1a4137] hover:after:w-full after:transition-all after:duration-300"
                      >
                        What's New
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Outer Box */}
              <div className="outer-box flex items-center gap-4">
                <a
                  href={productListPDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1a4137] text-white font-semibold px-12 py-4"
                >
                  Downloads
                </a>
                <button
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors mobile-nav-toggler text-[#00701c]"
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Toggle menu"
                >
                  <Menu size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-50 lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        >
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="fixed right-0 top-0 h-full w-[300px] max-w-full bg-[#222222] shadow-2xl overflow-y-auto">
            <div className="flex flex-col h-full">
              <div className="upper-box flex items-center justify-between p-4 border-b border-white/10">
                <Link
                  to="/"
                  className="nav-logo"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <img
                    src="/images/logo-light.png"
                    alt="THESAY PHARMA"
                    className="max-h-[65px] w-auto"
                  />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:opacity-50 transition-opacity text-2xl w-[30px] h-[30px] flex items-center justify-center bg-white/10 rounded"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col border-t border-white/10">
                <Link
                  to="/"
                  className="text-white text-base font-normal py-3 px-5 border-b border-white/10 hover:text-white transition-colors hover:pl-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-white text-base font-normal py-3 px-5 border-b border-white/10 hover:text-white transition-colors hover:pl-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="text-white text-base font-normal py-3 px-5 border-b border-white/10 hover:text-white transition-colors hover:pl-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/segments"
                  className="text-white text-base font-normal py-3 px-5 border-b border-white/10 hover:text-white transition-colors hover:pl-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Segments
                </Link>
                <Link
                  to="/partners"
                  className="text-white text-base font-normal py-3 px-5 border-b border-white/10 hover:text-white transition-colors hover:pl-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Partners
                </Link>
                <Link
                  to="/teams"
                  className="text-white text-base font-normal py-3 px-5 border-b border-white/10 hover:text-white transition-colors hover:pl-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Teams
                </Link>
                <Link
                  to="/contact"
                  className="text-white text-base font-normal py-3 px-5 border-b border-white/10 hover:text-white transition-colors hover:pl-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/blogs?page=1"
                  className="text-[#00701c] text-base font-bold py-3 px-5 border-b border-white/10 hover:text-white transition-colors hover:pl-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  What's New
                </Link>
              </nav>

              <div className="content-box p-5 border-t border-white/10 border-b border-white/10">
                <h4 className="text-white font-bold text-xl mb-2">About Us</h4>
                <p className="text-white/50 text-sm leading-7 text-justify max-w-[245px]">
                  THESAY Pharma, headquartered in Dubai, is a privately held &
                  diversified organization.
                </p>
              </div>

              <ul className="contact-list-one p-5 space-y-5">
                <li className="relative pl-[54px] min-h-[50px]">
                  <div className="contact-info-box">
                    <Phone
                      size={20}
                      className="absolute left-0 top-1 text-white"
                    />
                    <span className="block text-xs text-[#00701c] font-medium uppercase">
                      Call Now
                    </span>
                    <a
                      href="tel:+97145876443"
                      className="text-white text-base font-medium"
                    >
                      +971 4 587 6443
                    </a>
                  </div>
                </li>
                <li className="relative pl-[54px] min-h-[50px]">
                  <div className="contact-info-box">
                    <Mail
                      size={20}
                      className="absolute left-0 top-1 text-white"
                    />
                    <span className="block text-xs text-[#00701c] font-medium uppercase">
                      Send Email
                    </span>
                    <a
                      href="mailto:info@thesaypharma.ae"
                      className="text-white text-base font-medium"
                    >
                      info@thesaypharma.ae
                    </a>
                  </div>
                </li>
              </ul>

              <ul className="social-links flex items-center justify-between bg-[#00701c] border-t border-white/10 mt-auto">
                <li className="flex-1 text-center border-r border-white/10">
                  <a
                    href="https://www.linkedin.com/company/thesaypharma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-[50px] leading-[50px] text-white hover:text-[#1a4137] transition-colors"
                  >
                    <Linkedin size={16} className="inline" />
                  </a>
                </li>
                <li className="flex-1 text-center">
                  <a
                    href="https://www.instagram.com/thesay.pharma/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-[50px] leading-[50px] text-white hover:text-[#1a4137] transition-colors"
                  >
                    <Instagram size={16} className="inline" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sticky Header - WITH UNDERLINE EFFECT */}
        <div
          className={`sticky-header fixed top-0 left-0 right-0 bg-white shadow-lg z-40 transition-transform duration-300 ${
            isSticky ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="auto-container max-w-[1450px] mx-auto px-4 md:px-8">
            <div className="inner-container flex items-center py-3">
              <div className="logo flex-shrink-0">
                <Link to="/">
                  <img
                    src={logo}
                    alt="Thesay Logo"
                    className="max-h-[40px] w-auto"
                  />
                </Link>
              </div>
              <div className="nav-outer ml-auto hidden lg:block">
                <nav className="main-menu">
                  <ul className="navigation flex items-center space-x-14 font-bold text-[16px] text-gray-800">
                    <li>
                      <Link
                        to="/"
                        className="hover:text-[#1a4137] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1a4137] hover:after:w-full after:transition-all after:duration-300"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="hover:text-[#1a4137] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1a4137] hover:after:w-full after:transition-all after:duration-300"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services"
                        className="hover:text-[#1a4137] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1a4137] hover:after:w-full after:transition-all after:duration-300"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/segments"
                        className="hover:text-[#1a4137] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1a4137] hover:after:w-full after:transition-all after:duration-300"
                      >
                        Segments
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/partners"
                        className="hover:text-[#1a4137] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1a4137] hover:after:w-full after:transition-all after:duration-300"
                      >
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/teams"
                        className="hover:text-[#1a4137] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1a4137] hover:after:w-full after:transition-all after:duration-300"
                      >
                        Teams
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="hover:text-[#1a4137] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1a4137] hover:after:w-full after:transition-all after:duration-300"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs?page=1"
                        className="text-[#00701c] hover:text-green-700 transition-colors font-bold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1a4137] hover:after:w-full after:transition-all after:duration-300"
                      >
                        What's New
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors mobile-nav-toggler text-[#00701c]"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Toggle menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes flip-twice {
            0% {
              transform: rotateY(0deg);
            }
            25% {
              transform: rotateY(180deg);
            }
            50% {
              transform: rotateY(360deg);
            }
            75% {
              transform: rotateY(180deg);
            }
            100% {
              transform: rotateY(0deg);
            }
          }
        `}</style>
      </header>
    </>
  );
}
