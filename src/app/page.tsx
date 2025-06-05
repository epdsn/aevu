import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <Image
          alt="Drone flying over desert landscape"
          className="object-cover"
          fill
          priority
          quality={100}
          src="/images/desert_drone_image.jpeg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Aerial Excellence
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mb-8">
              Capturing Arizona from new perspectives
            </p>
            <a 
              className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              href="#contact"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Image
                alt="AVU Drone Logo"
                className="h-[30px] w-auto"
                height={30}
                priority
                src="/images/AVU_logo001_white_no_BG.webp"
                width={179}
              />
            </div>
            <p className="text-lg text-white hidden md:block">Elevate Perspective. Deliver Precision.</p>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="p-8 md:p-12 text-center bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Drone Services for Real Estate, Engineering & More</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We capture stunning aerial imagery to enhance your projects and presentations. 
            Whether you&apos;re in real estate or civil engineering, we deliver high-quality 4K videos and photos with precision.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white p-8 md:p-12 scroll-mt-20" id="contact">
        <div className="container mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Get in Touch</h3>
          <form className="max-w-xl mx-auto space-y-4">
            <input
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              placeholder="Name"
              required
              type="text"
            />
            <input
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              placeholder="Email"
              required
              type="email"
            />
            <textarea
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              placeholder="Tell us about your project..."
              required
              rows={5}
            />
            <button
              className="w-full bg-gray-900 text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-8 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-4">
            <p>&copy; {new Date().getFullYear()} AVU Drone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}