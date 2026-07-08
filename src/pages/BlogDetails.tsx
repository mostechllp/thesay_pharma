import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { Calendar } from 'lucide-react'
import { blogsData } from './Blogs'
export function BlogDetails() {
  const { id } = useParams()
  const blogId = parseInt(id || '1', 10)
  // Find the blog or use a default one if not found
  const blog = blogsData.find((b) => b.id === blogId) || blogsData[0]
  // Latest blogs for sidebar (exclude the one being viewed)
  const latestBlogs = blogsData.filter((b) => b.id !== blog.id).slice(0, 6)
  return (
    <div className="w-full">
      <Hero
      />

      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <div className="rounded-lg overflow-hidden mb-8 bg-gray-100">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
            <Calendar size={16} />
            <span>{blog.date}</span>
          </div>

          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            {blog.title}
          </h1>

          {blog.subtitle && (
            <p className="text-lg font-semibold text-gray-800 mb-6">
              {blog.subtitle}
            </p>
          )}

          {blog.body && blog.body.length > 0 && (
            <div className="max-w-none text-gray-600 mb-12 space-y-4 text-justify leading-relaxed">
              {blog.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}

          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {blog.gallerySectionTitle}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Dummy gallery images — replace with real event photos */}
            {Array.from({ length: blog.galleryCount }, (_, idx) => idx + 1).map(
              (i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden bg-gray-200 aspect-square"
                >
                  <img
                    src={`https://placehold.co/400x400/e2e8f0/64748b?text=${encodeURIComponent(
                      blog.title,
                    )}+${i}`}
                    alt={`${blog.title} highlight ${i}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ),
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6 text-gray-900">
              Latest Blogs
            </h3>

            <div className="space-y-6">
              {latestBlogs.map((latestBlog) => (
                <Link
                  to={`/blogs/${latestBlog.id}`}
                  key={latestBlog.id}
                  className="flex gap-4 group"
                >
                  <div className="w-24 h-16 rounded overflow-hidden flex-shrink-0 bg-gray-200">
                    <img
                      src={latestBlog.image}
                      alt={latestBlog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-gray-500 text-xs mb-1">
                      <Calendar size={12} />
                      <span>{latestBlog.date}</span>
                    </div>
                    <h4 className="font-semibold text-sm text-gray-900 group-hover:text-green-700 transition-colors line-clamp-2">
                      {latestBlog.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <Link
                to="/blogs"
                className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors"
              >
                View All Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
