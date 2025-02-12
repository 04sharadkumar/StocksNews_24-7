import { Globe, Search, Video, BellRing } from "lucide-react";

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white p-10 text-center rounded-lg shadow-lg mb-10">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-lg mt-2">Delivering trusted news, real-time updates, and in-depth analysis</p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Global News</h3>
          <p className="text-gray-600 mt-2">Stay informed with news from around the world, covering politics, economy, and more.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Search className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Investigative Journalism</h3>
          <p className="text-gray-600 mt-2">In-depth analysis and fact-based reporting on crucial issues.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Video className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Live Coverage</h3>
          <p className="text-gray-600 mt-2">Watch live updates, breaking news, and exclusive interviews.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <BellRing className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Real-time Alerts</h3>
          <p className="text-gray-600 mt-2">Get instant notifications on the latest happenings worldwide.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 p-10 mt-10 text-center rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Stay Updated with Us</h2>
        <p className="text-gray-700 mb-4">Subscribe to our newsletter and never miss an important update.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">Subscribe Now</button>
      </div>
    </div>
  );
}
