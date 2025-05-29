import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <Image
          src="/images/desert_drone_image.jpeg"
          alt="Drone flying over desert landscape"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Aerial Excellence
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mb-8">
              Capturing the world from new perspectives
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Image
                src="/images/AVU_logo001_white_no_BG.webp"
                alt="AVU Drone Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
                priority
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
            Whether you're in real estate or civil engineering, we deliver high-quality 4K videos and photos with precision.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-8 md:p-12 bg-white">
        <div className="container mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Get in Touch</h3>
          <form className="max-w-xl mx-auto space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              required
            />
            <textarea
              placeholder="Tell us about your project..."
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors"
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
            <Image
              src="/images/AVU_logo001_white_no_BG.webp"
              alt="AVU Drone Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <p>&copy; {new Date().getFullYear()} AVU Drone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}