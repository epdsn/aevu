export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="flex items-center justify-between p-6 bg-gray-900 text-white">
        <h1 className="text-3xl font-bold">Aevu</h1>
        <p className="text-lg">Elevate Perspective. Deliver Precision.</p>
      </header>

      <section className="p-12 text-center bg-gray-100">
        <h2 className="text-4xl font-bold mb-4">Drone Services for Real Estate, Engineering & More</h2>
        <p className="text-xl max-w-2xl mx-auto">
          We capture stunning aerial imagery to enhance your projects and presentations. 
          Whether you're in real estate or civil engineering, we deliver high-quality 4K videos and photos with precision.
        </p>
      </section>

      <section className="p-12 bg-white">
        <h3 className="text-2xl font-semibold mb-4 text-center">Get in Touch</h3>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="Tell us about your project..."
            className="w-full p-3 border border-gray-300 rounded"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 px-6 rounded hover:bg-gray-800"
          >
            Submit
          </button>
        </form>
      </section>

      <footer className="text-center p-6 bg-gray-900 text-white">
        &copy; {new Date().getFullYear()} Aevu Drone Services. All rights reserved.
      </footer>
    </main>
  );
}