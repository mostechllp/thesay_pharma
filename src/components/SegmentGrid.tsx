import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Stethoscope, Microscope, Dog } from 'lucide-react';
const segments = [
{
  title: 'HUMAN HEALTHCARE',
  icon: HeartPulse,
  description:
  'We specialize in procuring and distributing high-quality medicines, ensuring reliable access to diverse markets within all our established regions globally.'
},
{
  title: 'MEDICAL EQUIPMENTS',
  icon: Stethoscope,
  description:
  'Medical equipment simplifies tasks for experts by aiding in disease diagnosis, patient monitoring, and delivering accurate, detailed reports.'
},
{
  title: 'DIAGNOSTICS',
  icon: Microscope,
  description:
  'We provide diagnostic medications tailored for patients, supporting healthcare needs in both human and veterinary sectors with precision.'
},
{
  title: 'VETERINARY',
  icon: Dog,
  description:
  'We specialize in representing renowned veterinary brands, excelling in branding and distributing international products to meet customer needs.'
}];

interface SegmentGridProps {
  intro?: string;
}
export function SegmentGrid({ intro }: SegmentGridProps) {
  return (
    <section className="py-20 bg-[#f7f6f2]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-6 items-start mb-12">
          <h2 className="text-3xl font-bold text-[#0f3d2e] uppercase tracking-wide">
            BUSINESS SEGMENTS
          </h2>
          {intro &&
          <p className="text-gray-500 leading-relaxed lg:pt-1">{intro}</p>
          }
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow text-center group border border-gray-100">
                
                <h3 className="text-lg font-bold text-[#0f3d2e] mb-8 h-12 flex items-center justify-center uppercase">
                  {segment.title}
                </h3>
                <Icon
                  size={48}
                  className="text-[#0f3d2e] mb-6 mx-auto group-hover:text-[#27ae3f] transition-colors" />
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {segment.description}
                </p>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}