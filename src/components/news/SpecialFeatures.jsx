import React from 'react';

const features = [
  {
    title: "The AI Revolution",
    excerpt: "How artificial intelligence is transforming industries",
    category: "TECHNOLOGY",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0eNQ8e8pLG0TJZU6W4sM3g_VAodZj-n8xtQ&s"
  },
  {
    title: "Climate Solutions",
    excerpt: "Innovative approaches to combat global warming",
    category: "ENVIRONMENT",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLAMTutDIxiXKzI1bOkCjCj9y4CNjQ8qNRVg&s"
  },
  {
    title: "Space Exploration",
    excerpt: "The next frontier for human civilization",
    category: "SPACE",
    image: ''
  },
  {
    title: "Health Tech",
    excerpt: "Breakthroughs in medical technology",
    category: "HEALTH",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1KpRmnQP-0Cg1-eZmaYEniGBDGdopopG9wA&s"
  }
];

const SpecialFeatures = ({ darkMode }) => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold dark:text-white mb-6">In-Depth Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`rounded-xl overflow-hidden shadow-md hover:shadow-lg transition ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
          >
            <div className="relative h-48">
              {feature.image && (
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t ${darkMode ? 'from-gray-900' : 'from-black'} to-transparent`}>
                <span className={`text-xs font-medium px-2 py-1 rounded-md ${darkMode ? 'bg-blue-900/70 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                  {feature.category}
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}>
                <a href="#">{feature.title}</a>
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{feature.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialFeatures;