import React from 'react'
import { assets } from '../assets/assets'

export default function Description() {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 px-6 md:px-24 bg-gradient-to-b from-gray-50 to-white text-center">
      {/* Header */}
      <div className="mb-14">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Create AI Images
        </h1>
        <p className="text-gray-500 mt-3 text-lg">
          Turn your imagination into visuals
        </p>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 bg-white/50 backdrop-blur-md shadow-xl rounded-3xl p-8 md:p-12 border border-gray-100">
        {/* Image section */}
        <div className="flex-shrink-0">
          <img
            src={assets.sample_img_1}
            alt="AI generated sample"
            className="w-72 sm:w-80 xl:w-96 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text content */}
        <div className="text-left md:text-start">
          <h2 className="text-3xl md:text-4xl font-semibold mb-5 text-gray-800">
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima saepe
            quidem consectetur recusandae, deserunt rem temporibus et consequatur
            sequi enim nemo. Cupiditate voluptates quos id amet ipsam labore
            fugiat? Quas.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            exercitationem tempora explicabo consequatur delectus nihil. Nobis
            quod ad unde quia consequuntur, quisquam commodi quae nemo tempora
            quam harum repellendus atque iste pariatur earum iusto explicabo.
            Exercitationem, quaerat. Quam recusandae hic omnis, laboriosam, amet
            quaerat dolorum similique placeat magni, sequi deserunt?
          </p>
        </div>
      </div>

      {/* Decorative Gradient Glow */}
      <div className="absolute -z-10 w-[80%] h-[80%] bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 opacity-40 blur-3xl rounded-full top-1/2 -translate-y-1/2"></div>
    </section>
  )
}
