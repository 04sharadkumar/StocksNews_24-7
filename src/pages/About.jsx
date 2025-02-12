import { Users, Globe, Newspaper, Shield, MessageCircle } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section  /*}
      <div className="relative bg-blue-600 text-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-5xl font-extrabold">Who We Are</h1>
        <p className="text-lg mt-3 max-w-2xl mx-auto">
          Delivering trustworthy news, insightful analysis, and expert opinions worldwide.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-md mt-12">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <Globe className="w-6 h-6 text-blue-600" /> Our Mission
        </h2>
        <p className="text-gray-700 text-lg">
          Our goal is to provide accurate, unbiased, and timely news from around the world.
          Our dedicated journalists work around the clock to bring you stories that matter.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Shield className="w-6 h-6 text-blue-600" /> Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <Newspaper className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold">Reliable Journalism</h3>
            <p className="text-gray-600 mt-2">Every news piece is meticulously fact-checked and unbiased.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <Users className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold">Expert Contributors</h3>
            <p className="text-gray-600 mt-2">Insights from industry professionals and analysts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <Globe className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold">Global Coverage</h3>
            <p className="text-gray-600 mt-2">News coverage from every corner of the world.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md text-center mt-12">
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
          <MessageCircle className="w-6 h-6" /> Get in Touch
        </h2>
        <p className="text-lg">Have any questions or feedback? Reach out to us at:</p>
        <p className="text-white font-semibold mt-2 text-xl">contact@newswebsite.com</p>
      </div>
    </div>
  );
}