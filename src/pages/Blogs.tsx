import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { Calendar } from 'lucide-react'
// Dummy blog data. `id` values intentionally match the live site URLs
// (e.g. /blogs/2 = WHX Dubai 2026, /blogs/7 = CPHI Frankfurt 2025,
// /blogs/8 = CPHI Milan 2026). Content is placeholder — replace freely.
export type Blog = {
  id: number
  title: string
  date: string
  image: string
  subtitle?: string
  body?: string[]
  gallerySectionTitle: 'Highlights' | 'Our Gallery'
  galleryCount: number
}

export const blogsData: Blog[] = [
  {
    id: 8,
    title: 'CPHI Milan 2026',
    date: '06 October, 2026',
    image: 'https://placehold.co/600x400/ccfbf1/0f172a?text=CPHI+Milan+2026',
    body: [
      'CPHI Europe serves as a global networking, innovation and business platform where pharma professionals can meet potential partners, discover the latest technologies and trends, attend expert talks and sessions, and build strategic relationships. Organised by Informa Markets, it also includes digital networking opportunities year-round beyond the in-person exhibition.',
      'In recent editions, the event has continued to evolve — for example, adding dedicated zones for AI and technology to reflect the sector’s move toward digital solutions in drug development and manufacturing.',
    ],
    gallerySectionTitle: 'Our Gallery',
    galleryCount: 6,
  },
  {
    id: 2,
    title: 'WHX Dubai 2026',
    date: '09 February, 2026',
    image: 'https://placehold.co/600x400/14342a/f8fafc?text=WHX+Dubai',
    subtitle: 'Thesay Pharma at WHX Dubai',
    body: [
      'Thesay Pharma successfully participated in WHX Dubai (formerly Arab Health), one of the world’s leading healthcare exhibitions. The event was held from 9–12 February 2026 at the Dubai Exhibition Centre and brought together global healthcare leaders, innovators, manufacturers, and distributors under one roof.',
      'During the exhibition, Thesay Pharma highlighted its commitment to quality, innovation, and strong partnerships. The event provided an excellent platform to engage with industry professionals, exchange valuable insights, and explore new opportunities that support the future of healthcare.',
      'Visitors connected with the Thesay Pharma team at Stand S19 J111, where the company presented its latest developments and discussed potential collaborations. The participation enabled meaningful discussions and strengthened relationships with pharmaceutical manufacturers, distributors, and healthcare partners.',
      'WHX Dubai 2026 concluded successfully, and Thesay Pharma was proud to be part of the event, reinforcing its dedication to advancing healthcare solutions and building long-term industry partnerships.',
    ],
    gallerySectionTitle: 'Highlights',
    galleryCount: 11,
  },
  {
    id: 7,
    title: 'CPHI Frankfurt 2025',
    date: '28 October, 2025',
    image: 'https://placehold.co/600x400/ccfbf1/0f172a?text=CPHI+Frankfurt',
    subtitle: 'Global platform showcasing innovative healthcare solutions.',
    gallerySectionTitle: 'Highlights',
    galleryCount: 10,
  },
  {
    id: 4,
    title: 'WHX Labs 2026',
    date: '10 February, 2026',
    image: 'https://placehold.co/600x400/166534/f0fdf4?text=WHX+Labs',
    gallerySectionTitle: 'Highlights',
    galleryCount: 9,
  },
  {
    id: 5,
    title: 'ADIHEX 2026',
    date: '28 August, 2026',
    image: 'https://placehold.co/600x400/f8fafc/475569?text=ADIHEX+2026',
    gallerySectionTitle: 'Highlights',
    galleryCount: 9,
  },
  {
    id: 6,
    title: 'ADIHEX 2025',
    date: '30 August, 2025',
    image: 'https://placehold.co/600x400/fdf8f6/78350f?text=ADIHEX+2025',
    gallerySectionTitle: 'Highlights',
    galleryCount: 9,
  },
  {
    id: 1,
    title: 'Arab Health 2025',
    date: '29 January, 2025',
    image: 'https://placehold.co/600x400/ffffff/16a34a?text=Arab+Health',
    gallerySectionTitle: 'Highlights',
    galleryCount: 9,
  },
  {
    id: 3,
    title: 'Medlab 2025',
    date: '10 February, 2025',
    image: 'https://placehold.co/600x400/ffffff/2563eb?text=Medlab',
    gallerySectionTitle: 'Highlights',
    galleryCount: 9,
  },
  {
    id: 9,
    title: 'AICP Conference 2025',
    date: '16 October, 2025',
    image: 'https://placehold.co/600x400/f3f4f6/1f2937?text=AICP',
    gallerySectionTitle: 'Highlights',
    galleryCount: 9,
  },
  {
    id: 10,
    title: 'Expopharm 2025',
    date: '16 September, 2025',
    image: 'https://placehold.co/600x400/f0fdf4/166534?text=Expopharm',
    gallerySectionTitle: 'Highlights',
    galleryCount: 9,
  },
  {
    id: 11,
    title: 'CPHI China 2025',
    date: '24 June, 2025',
    image: 'https://placehold.co/600x400/eff6ff/1d4ed8?text=CPHI+China',
    gallerySectionTitle: 'Highlights',
    galleryCount: 9,
  },
  {
    id: 12,
    title: 'Contura, Denmark Visit',
    date: '15 May, 2026',
    image: 'https://placehold.co/600x400/f1f5f9/334155?text=Contura',
    gallerySectionTitle: 'Highlights',
    galleryCount: 9,
  },
  {
    id: 13,
    title: 'CPHI Barcelona 2024',
    date: '08 October, 2024',
    image: 'https://placehold.co/600x400/e0f2fe/0369a1?text=CPHI+Barcelona',
    gallerySectionTitle: 'Highlights',
    galleryCount: 9,
  },
]
const PER_PAGE = 12

export function Blogs() {
  const [searchParams, setSearchParams] = useSearchParams()
  const totalPages = Math.max(1, Math.ceil(blogsData.length / PER_PAGE))
  const rawPage = parseInt(searchParams.get('page') || '1', 10)
  const page = Math.min(
    Math.max(Number.isNaN(rawPage) ? 1 : rawPage, 1),
    totalPages,
  )

  const start = (page - 1) * PER_PAGE
  const end = start + PER_PAGE
  const pageBlogs = blogsData.slice(start, end)
  const showingFrom = blogsData.length === 0 ? 0 : start + 1
  const showingTo = Math.min(end, blogsData.length)

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages) return
    setSearchParams({ page: String(p) })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="w-full">
      <Hero
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pageBlogs.map((blog) => (
            <Link
              to={`/blogs/${blog.id}`}
              key={blog.id}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                  <Calendar size={14} />
                  <span>{blog.date}</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-green-700 transition-colors">
                  {blog.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center border-t border-gray-200 pt-6">
          <p className="text-gray-500 text-sm">
            Showing {showingFrom} to {showingTo} of {blogsData.length} results
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
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => goToPage(p)}
                aria-current={p === page ? 'page' : undefined}
                className={`w-8 h-8 flex items-center justify-center rounded border ${
                  p === page
                    ? 'bg-green-700 text-white border-green-700'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                }`}
              >
                {p}
              </button>
            ))}
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
  )
}
