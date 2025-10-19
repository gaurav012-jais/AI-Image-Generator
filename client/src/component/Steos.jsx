import React from 'react'
import { stepsData } from '../assets/assets'

export default function Steps() {
  return (
    <section className="flex flex-col items-center justify-center my-24 px-4">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-gray-900">
        How It Works
      </h1>
      <p className="text-lg text-gray-500 mb-12 text-center">
        Transform words into stunning visuals with ease
      </p>

      {/* Steps Container */}
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-6">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-5 p-6 bg-white/70 backdrop-blur-xl border border-gray-200 
                       rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex-shrink-0 bg-gradient-to-r from-indigo-100 to-purple-100 p-3 rounded-full">
              <img src={item.icon} alt="" className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {item.title}
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative bottom gradient line */}
      <div className="mt-14 w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
    </section>
  )
}
