import React from 'react';
import { FiClock } from 'react-icons/fi';

const NewsHero = ({ darkMode }) => {
  return (
    <section className="mb-12">
      <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="relative h-96 w-full">
          <img 
            src="https://assets.weforum.org/article/image/responsive_big_webp_uYJ_L4bNuO-lnvXUIv9X77vMsMxBk2ShXGxGqp6bpTw.webp"
            alt="Featured Story"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-gray-900/90 via-gray-900/30' : 'from-gray-900/90 via-gray-900/20'}`}></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <span className={`text-xs font-medium px-2 py-1 rounded-md mb-2 inline-block ${darkMode ? 'bg-blue-900/70 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
              FUTURE TECH
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">The Next Decade of Innovation: What to Expect</h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-200'} mb-4`}>Experts predict the technologies that will transform our lives by 2030</p>
            <div className="flex items-center text-sm text-gray-300">
              <span className="flex items-center mr-4">
                <FiClock className="mr-1" /> 8 min read
              </span>
              <span>By Dr. Alan Turing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;