import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">Get in Touch</h1>
        <p className="text-gray-700 mt-3 text-lg">
          Have questions or feedback? We’re here to help.
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200">
          <Mail className="w-12 h-12 text-blue-600 mx-auto mb-3" />
          <h3 className="text-2xl font-semibold">Email Us</h3>
          <p className="text-gray-600 mt-2 text-lg">contact@newswebsite.com</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200">
          <Phone className="w-12 h-12 text-green-600 mx-auto mb-3" />
          <h3 className="text-2xl font-semibold">Call Us</h3>
          <p className="text-gray-600 mt-2 text-lg">+1 (123) 456-7890</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200">
          <MapPin className="w-12 h-12 text-red-600 mx-auto mb-3" />
          <h3 className="text-2xl font-semibold">Visit Us</h3>
          <p className="text-gray-600 mt-2 text-lg">123 News Street, City, Country</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Send Us a Message</h2>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-4 rounded-lg flex items-center justify-center gap-3 text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            <Send className="w-6 h-6" /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
