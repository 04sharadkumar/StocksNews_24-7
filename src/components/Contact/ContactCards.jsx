// components/ContactCards.js
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, HelpCircle } from "lucide-react";

export default function ContactCards() {
  const cards = [
    { 
      icon: <Mail className="w-10 h-10 text-blue-600" />, 
      title: "Email Us", 
      info: "support@indianewswebsite.in" 
    },
    { 
      icon: <Phone className="w-10 h-10 text-green-600" />, 
      title: "Call Us", 
      info: "+91 11 1234 5678" 
    },
    { 
      icon: <MapPin className="w-10 h-10 text-red-600" />, 
      title: "Visit Us", 
      info: "1st Floor, Media Tower, Saket, New Delhi, India" 
    },
    { 
      icon: <HelpCircle className="w-10 h-10 text-yellow-600" />, 
      title: "Help Center", 
      info: "Visit our help center for FAQs and assistance at: help.indianewswebsite.in"
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform"
          whileHover={{ scale: 1.05 }}
        >
          {/* Card Icon */}
          <div className="bg-blue-100 p-3 sm:p-4 rounded-full mb-4 inline-flex items-center justify-center">
            {card.icon}
          </div>
          
          {/* Card Title */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{card.title}</h3>
          
          {/* Card Info */}
          <p className="text-gray-600 text-sm sm:text-base mt-2">{card.info}</p>
        </motion.div>
      ))}
    </div>
  );
}
