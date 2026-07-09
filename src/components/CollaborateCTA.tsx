import React from 'react'
import { ArrowUpRightIcon } from 'lucide-react'
export function CollaborateCTA() {
  return (
    <section className="w-full bg-[#0f3d26] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-[#1a7a34] px-8 py-14 sm:px-14 md:flex-row md:items-center">
          <h2 className="max-w-xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            Looking to collaborate or partner with us?
          </h2>
          <a
            href="#connect"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
          >
            Let's Connect
            <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
