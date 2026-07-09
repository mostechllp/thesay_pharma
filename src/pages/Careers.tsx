import React from "react";
import { ChevronRightIcon } from "lucide-react";
import { div } from "framer-motion/client";
import { Header } from "../components/Header";
import { PageHero } from "../components/PageHero";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
const responsibilities = [
  "Manage and analyze data to support strategic decisions.",
  "Streamline processes and integrate business intelligence.",
  "Conduct market research and provide insights.",
  "Support CRM, ERP, and other business tools.",
  "Collaborate with cross-functional teams to support business growth.",
];
const qualifications = [
  "Bachelor’s degree in Business Administration, Life Sciences, or a related field.",
  "2–3 years of experience in backend support or administrative roles.",
];
function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <ChevronRightIcon
        className="mt-1 h-4 w-4 flex-shrink-0 text-gray-400"
        aria-hidden="true"
      />
      <span className="text-gray-600">{children}</span>
    </li>
  );
}
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-base font-semibold text-gray-900">{label}</p>
      <p className="mt-1 text-gray-500">{value}</p>
    </div>
  );
}
export function Careers() {
  return (
    <>
      <SEO
        title="Careers - THESAY PHARMA | Join Our Expert Team"
        description="Explore career opportunities at THESAY Pharma. Join a leading pharmaceutical distributor in Dubai and grow your career in a dynamic, global healthcare environment."
        keywords="pharma careers dubai, pharmaceutical jobs UAE, healthcare careers, join thesay pharma, medical distribution jobs"
      />
      <div>
        <Header />
        <PageHero title="Careers" breadcrumb="Creers" />
        <section className="w-full bg-white px-[50px]">
          <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:pb-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {/* Main content */}
              <div className="lg:col-span-2">
                <h2 className="max-w-2xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                  Backend Support – Business Development (Pharmaceuticals)
                </h2>

                <div className="mt-8 space-y-4 text-gray-600 text-lg">
                  <p className="font-semibold text-gray-900">We're Hiring!</p>
                  <p>
                    Join our dynamic team at THESAY Pharma and be part of a
                    fast-growing pharmaceutical company in Dubai. We're looking
                    for a talented Backend Support – Business Development
                    (Pharmaceuticals) professional to help us drive growth and
                    operational excellence.
                  </p>
                </div>

                <div className="mt-10">
                  <h3 className="text-lg font-medium text-gray-800">
                    Key Responsibilities:
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {responsibilities.map((item) => (
                      <ListItem key={item}>{item}</ListItem>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <h3 className="text-lg font-medium text-gray-800">
                    Qualifications:
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {qualifications.map((item) => (
                      <ListItem key={item}>{item}</ListItem>
                    ))}
                    <ListItem>
                      Strong analytical, communication, and organizational
                      skills.
                      <br />
                      Visit{" "}
                      <a
                        href="https://www.thesaypharma.ae"
                        className="font-medium text-gray-800 underline"
                      >
                        www.thesaypharma.ae
                      </a>{" "}
                      for more details.
                    </ListItem>
                  </ul>
                </div>

                <div className="mt-10">
                  <a
                    href="mailto:hr@thesay.ae"
                    className="inline-flex items-center gap-2 bg-[#0f4d2e] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0c3d24]"
                  >
                    Apply Now
                    <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1  max-w-[250px]">
                <div className="space-y-6 bg-[#f5f4ef] p-8 px-[80px] py-[50px]">
                  <InfoRow label="Job Type" value="Full-Time" />
                  <InfoRow label="Location" value="Dubai, UAE" />
                  <InfoRow label="Job Status" value="Active" />
                  <InfoRow label="Posted On" value="27 January, 2026" />
                </div>
              </aside>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
