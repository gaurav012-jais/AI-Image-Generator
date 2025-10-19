import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

export default function Testimonial() {
  return (
    <section className="flex flex-col items-center justify-center my-24 px-4">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2 text-center">
        Customer Testimonials
      </h1>
      <p className="text-gray-500 mb-12 text-center">
        What our users are saying
      </p>

      {/* Testimonial Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-xl border border-gray-100 rounded-2xl 
                       shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 
                       p-8 flex flex-col items-center text-center"
          >
            <img
              className="rounded-full w-20 h-20 object-cover mb-4 border-4 border-purple-100 shadow-sm"
              src={testimonial.image}
              alt={testimonial.name}
            />
            <h2 className="text-xl font-semibold text-gray-800">{testimonial.name}</h2>
            <p className="text-gray-500 mb-3 text-sm">{testimonial.role}</p>

            {/* Stars */}
            <div className="flex mb-4">
              {Array(testimonial.stars)
                .fill()
                .map((_, i) => (
                  <img
                    key={i}
                    src={assets.rating_star}
                    alt="star"
                    className="w-5 h-5 animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              “{testimonial.text}”
            </p>
          </div>
        ))}
      </div>

      {/* Gradient accent line */}
      <div className="mt-14 w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
    </section>
  )
}
