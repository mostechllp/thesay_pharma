import React from 'react'
import { Hero } from '../components/Hero'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
export function Contact() {
  return (
    <div className="w-full">
      <Hero
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center flex flex-col items-center border border-gray-100">
            <div className="w-16 h-16 rounded-full border-2 border-green-700 flex items-center justify-center mb-4 text-green-700">
              <MapPin size={32} />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              #1101, Anantara Downtown
              <br />
              Business Tower, Marasi Dr,
              <br />
              Business Bay, Dubai, UAE - PO
              <br />
              Box 117929
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center flex flex-col items-center border border-gray-100">
            <div className="w-16 h-16 rounded-full border-2 border-green-700 flex items-center justify-center mb-4 text-green-700">
              <Phone size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Number</h3>
            <p className="text-gray-600 text-sm">+971 4 587 6443</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center flex flex-col items-center border border-gray-100">
            <div className="w-16 h-16 rounded-full border-2 border-green-700 flex items-center justify-center mb-4 text-green-700">
              <Mail size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-600 text-sm">info@thesaypharma.ae</p>
          </div>
        </div>

        {/* Get In Touch Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
            <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              {/* Map Placeholder */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178653926922!2d55.26815331500902!3d25.18277798390312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d6a3f8b8f7%3A0x8b5b8b8b8b8b8b8b!2sAnantara%20Downtown%20Dubai%20Hotel!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div>
            <p className="text-gray-600 mb-8 mt-2">
              Have questions? Get in touch with us for more information.
            </p>
            <form className="space-y-6">
              <div className="border-b border-gray-300 py-2 flex items-center gap-3">
                <span className="text-gray-400">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full outline-none bg-transparent"
                  required
                />
              </div>
              <div className="border-b border-gray-300 py-2 flex items-center gap-3">
                <span className="text-gray-400">
                  <Mail size={20} />
                </span>
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full outline-none bg-transparent"
                  required
                />
              </div>
              <div className="border-b border-gray-300 py-2 flex items-start gap-3 h-32">
                <span className="text-gray-400 mt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </span>
                <textarea
                  placeholder="Enter Your Message here"
                  className="w-full h-full outline-none bg-transparent resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#1a3b32] text-white px-8 py-3 rounded flex items-center gap-2 hover:bg-green-900 transition-colors"
              >
                <Send size={16} /> Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
