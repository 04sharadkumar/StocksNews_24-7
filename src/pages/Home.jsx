// import { useState, useEffect } from "react";
// import BreakingNewsTicker from "@/components/Home/BreakingNewsTicker";
// import HeroNews from "@/components/Home/HeroNews";
// import WeatherWidget from "@/components/Home/WeatherWidget";
// import TrendingTopics from "@/components/Home/TrendingTopics";
// import FeaturedVideo from "@/components/Home/FeaturedVideo";
// import Poll from "@/components/Home/Poll";
// import IndiaNews from "@/components/Home/IndiaNews"

// const newsData = [
//   {
//     id: 1,
//     title: "Breaking: Major Political Shift in the Country",
//     category: "Politics",
//     image: "https://source.unsplash.com/600x400/?news,politics",
//     description: "A major political change has taken place, shaking the government foundation...",
//     date: "Feb 10, 2025",
//   },
//   {
//     id: 2,
//     title: "Tech Giants Announce Revolutionary AI Breakthrough",
//     category: "Technology",
//     image: "https://source.unsplash.com/600x400/?technology,ai",
//     description: "AI innovation reaches new heights as major companies unveil game-changing tech...",
//     date: "Feb 09, 2025",
//   },
//   {
//     id: 3,
//     title: "Stock Market Hits Record Highs",
//     category: "Business",
//     image: "https://source.unsplash.com/600x400/?business,finance",
//     description: "Investors celebrate as stock market soars beyond expectations...",
//     date: "Feb 08, 2025",
//   },
// ];

// const trendingTopics = ["Elections 2025", "New AI Breakthroughs", "Crypto Market Trends", "Sports Championships"];

// const Home = () => {
//   const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsData.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-6 mt-10">
//       {/* Breaking News Ticker */}
//       <BreakingNewsTicker newsData={newsData} />

//       {/* Hero Section */}
//       <HeroNews currentNews={newsData[currentNewsIndex]} />

//       {/* Weather Widget */}
//       {/* <WeatherWidget /> */}
      

//       {/* Trending Topics */}
//       <TrendingTopics topics={trendingTopics} />

//       {/* Featured Video */}
//       <FeaturedVideo />      

//       {/* country News */}
//       <IndiaNews />

//       {/* Poll Section */}
//       <Poll />

//     </div>
//   );
// };

// export default Home;




//Fourth Home


import { useState, useEffect } from 'react';
import { FiSearch, FiMenu, FiX, FiClock, FiBookmark, FiShare2, FiChevronRight, FiSun, FiMoon } from 'react-icons/fi';
import { FaRegNewspaper, FaRegBell, FaRegUserCircle } from 'react-icons/fa';

const NextGenNewsHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [activeCategory, setActiveCategory] = useState('trending');
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Simulated news data
  useEffect(() => {
    const fetchNews = () => {
      setIsLoading(true);
      setTimeout(() => {
        const simulatedNews = [
          {
            id: 1,
            title: 'Quantum Computing Breakthrough Announced',
            excerpt: 'Researchers achieve quantum supremacy with new 256-qubit processor that solves previously impossible problems.',
            category: 'technology',
            date: '15 min ago',
            image: 'https://source.unsplash.com/random/600x400/?quantum',
            isBreaking: true,
            isTrending: true,
            author: 'Dr. Elena Rodriguez',
            readTime: '4 min read'
          },
          {
            id: 2,
            title: 'Global Carbon Emissions See First Decline in Decade',
            excerpt: 'New report shows 5.8% reduction as renewable energy adoption reaches record levels worldwide.',
            category: 'environment',
            date: '42 min ago',
            image: 'https://source.unsplash.com/random/600x400/?climate',
            isBreaking: false,
            isTrending: true,
            author: 'Mark Chen',
            readTime: '3 min read'
          },
          {
            id: 3,
            title: 'Neural Interface Allows Thought-to-Text Communication',
            excerpt: 'Breakthrough medical device helps paralyzed patients communicate at nearly normal speeds.',
            category: 'health',
            date: '1 hour ago',
            image: 'https://source.unsplash.com/random/600x400/?neuroscience',
            isBreaking: true,
            isTrending: false,
            author: 'Sarah Johnson',
            readTime: '5 min read'
          },
          {
            id: 4,
            title: 'Mars Colony Project Receives $10B Funding Boost',
            excerpt: 'Private space consortium announces ambitious timeline for first permanent human settlement.',
            category: 'space',
            date: '2 hours ago',
            image: 'https://source.unsplash.com/random/600x400/?mars',
            isBreaking: false,
            isTrending: true,
            author: 'James Wilson',
            readTime: '6 min read'
          },
          {
            id: 5,
            title: 'AI-Powered Legal Assistant Passes Bar Exam',
            excerpt: 'Artificial intelligence system scores in top 10% of test-takers, raising questions about future of legal profession.',
            category: 'technology',
            date: '3 hours ago',
            image: 'https://source.unsplash.com/random/600x400/?ai',
            isBreaking: false,
            isTrending: false,
            author: 'Priya Patel',
            readTime: '4 min read'
          },
          {
            id: 6,
            title: 'Fusion Energy Reactor Achieves Net Power Gain',
            excerpt: 'Experimental facility produces more energy than it consumes for the first time in history.',
            category: 'science',
            date: '5 hours ago',
            image: 'https://source.unsplash.com/random/600x400/?fusion',
            isBreaking: true,
            isTrending: true,
            author: 'Dr. Robert Kim',
            readTime: '7 min read'
          }
        ];

        setNewsData(simulatedNews);
        setIsLoading(false);
      }, 1200);
    };

    fetchNews();
  }, []);

  const categories = [
    { id: 'trending', name: 'Trending' },
    { id: 'technology', name: 'Tech' },
    { id: 'science', name: 'Science' },
    { id: 'health', name: 'Health' },
    { id: 'environment', name: 'Environment' },
    { id: 'space', name: 'Space' },
    { id: 'business', name: 'Business' }
  ];

  const filteredNews = activeCategory === 'trending' 
    ? newsData.filter(news => news.isTrending)
    : newsData.filter(news => news.category === activeCategory);

  const breakingNews = newsData.filter(news => news.isBreaking);
  const searchedNews = searchQuery 
    ? newsData.filter(news => 
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    : filteredNews;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${darkMode ? 'dark:bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button 
                className="lg:hidden text-gray-700 dark:text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
              <div className="flex items-center">
                <FaRegNewspaper className="text-blue-600 dark:text-blue-400 text-2xl mr-2" />
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                  NexusNews
                </h1>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 font-medium text-sm rounded-full transition ${activeCategory === category.id 
                    ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200' 
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </nav>
            
            {/* User Controls */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search news..."
                  className={`pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 w-64 transition ${darkMode 
                    ? 'bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400' 
                    : 'border-gray-300 focus:ring-blue-500 focus:border-transparent'}`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FiSearch className={`absolute left-3 top-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </div>
              
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
              >
                {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>
              
              <button className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                <FaRegBell size={18} />
              </button>
              
              <button className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                <FaRegUserCircle size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`lg:hidden ${darkMode ? 'dark:bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="container mx-auto px-4 py-3">
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search news..."
                  className={`pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 w-full transition ${darkMode 
                    ? 'bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400' 
                    : 'border-gray-300 focus:ring-blue-500 focus:border-transparent'}`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FiSearch className={`absolute left-3 top-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-3 py-2 text-left font-medium text-sm rounded-md transition ${activeCategory === category.id 
                    ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200' 
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setIsMenuOpen(false);
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="container mx-auto px-4 py-6">
        {/* Breaking News Alert */}
        {breakingNews.length > 0 && (
          <div className={`mb-6 p-3 rounded-lg flex items-center ${darkMode ? 'bg-red-900/30 border-l-4 border-red-500' : 'bg-red-50 border-l-4 border-red-600'}`}>
            <span className={`font-bold mr-3 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>BREAKING</span>
            <div className="flex-1 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                {breakingNews.map((news, index) => (
                  <span key={news.id} className="mr-8">
                    <a href="#" className={`font-medium ${darkMode ? 'hover:text-red-300' : 'hover:text-red-700'}`}>
                      {news.title}
                    </a>
                    {index < breakingNews.length - 1 && ' • '}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 dark:border-blue-400"></div>
          </div>
        ) : (
          <>
            {/* Hero Section */}
            <section className="mb-12">
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="relative h-96 w-full">
                  <img 
                    src="https://source.unsplash.com/random/1200x600/?future"
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

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Primary Content */}
              <div className="lg:col-span-2">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold dark:text-white">
                    {activeCategory === 'trending' ? 'Trending Stories' : `${categories.find(c => c.id === activeCategory)?.name} News`}
                  </h2>
                  <button className={`text-sm flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
                    View all <FiChevronRight className="ml-1" />
                  </button>
                </div>

                {searchedNews.length === 0 ? (
                  <div className={`rounded-lg shadow p-8 text-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h3 className={`text-xl font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>No news found</h3>
                    <p className={`${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Try a different search or category</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {searchedNews.map(news => (
                      <article 
                        key={news.id} 
                        className={`rounded-xl overflow-hidden shadow-md hover:shadow-lg transition ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
                      >
                        <div className="relative h-48">
                          <img 
                            src={news.image} 
                            alt={news.title}
                            className="w-full h-full object-cover"
                          />
                          {news.isBreaking && (
                            <span className={`absolute top-2 left-2 text-xs font-medium px-2 py-1 rounded-md ${darkMode ? 'bg-red-900/80 text-red-200' : 'bg-red-100 text-red-800'}`}>
                              BREAKING
                            </span>
                          )}
                        </div>
                        <div className="p-5">
                          <div className="flex justify-between items-start mb-3">
                            <span className={`text-xs font-medium px-2 py-1 rounded-md ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                              {news.category.toUpperCase()}
                            </span>
                            <span className={`text-xs flex items-center ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                              <FiClock className="mr-1" /> {news.date}
                            </span>
                          </div>
                          <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}>
                            <a href="#">{news.title}</a>
                          </h3>
                          <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{news.excerpt}</p>
                          <div className="flex justify-between items-center">
                            <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{news.readTime}</span>
                            <div className="flex space-x-3">
                              <button className={`p-1 rounded-full ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'}`}>
                                <FiBookmark />
                              </button>
                              <button className={`p-1 rounded-full ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'}`}>
                                <FiShare2 />
                              </button>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="space-y-8">
                {/* Newsletter */}
                {/* <div className={`rounded-xl p-6 shadow-md ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-blue-50 to-white border border-blue-100'}`}>
                  <h3 className="text-xl font-bold dark:text-white mb-2">Stay Informed</h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Get curated news delivered to your inbox daily</p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email"
                      className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${darkMode 
                        ? 'bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400' 
                        : 'border border-gray-300 focus:ring-blue-500 focus:border-transparent'}`}
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition"
                    >
                      Subscribe Now
                    </button>
                  </form>
                  <p className={`text-xs mt-3 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>No spam, just quality news</p>
                </div> */}

                {/* Trending Now */}
                <div className={`rounded-xl p-5 shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className="text-xl font-bold dark:text-white mb-4">Trending Now</h3>
                  <div className="space-y-4">
                    {newsData
                      .filter(news => news.isTrending)
                      .slice(0, 4)
                      .map((news, index) => (
                        <div key={news.id} className="flex items-start space-x-3 group">
                          <span className={`font-bold text-lg ${index < 2 ? (darkMode ? 'text-blue-400' : 'text-blue-600') : (darkMode ? 'text-gray-500' : 'text-gray-400')}`}>
                            {index + 1}
                          </span>
                          <div>
                            <h4 className={`font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                              <a href="#">{news.title}</a>
                            </h4>
                            <p className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                              {news.category} • {news.date}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Podcast Section */}
                <div className={`rounded-xl overflow-hidden shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="relative h-40">
                    <img 
                      src="https://source.unsplash.com/random/600x400/?podcast"
                      alt="Podcast"
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-gray-900/90' : 'from-gray-900/70'}`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="bg-white text-blue-600 rounded-full p-4 hover:bg-gray-100 transition shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold dark:text-white mb-1">The Future Now Podcast</h3>
                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Latest episode: Quantum Computing Explained</p>
                    <button className={`text-sm font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
                      Listen Now
                    </button>
                  </div>
                </div>
              </aside>
            </div>

            {/* Special Feature Section */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold dark:text-white mb-6">In-Depth Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "The AI Revolution",
                    excerpt: "How artificial intelligence is transforming industries",
                    category: "TECHNOLOGY",
                    image: "https://source.unsplash.com/random/600x400/?ai"
                  },
                  {
                    title: "Climate Solutions",
                    excerpt: "Innovative approaches to combat global warming",
                    category: "ENVIRONMENT",
                    image: "https://source.unsplash.com/random/600x400/?climate"
                  },
                  {
                    title: "Space Exploration",
                    excerpt: "The next frontier for human civilization",
                    category: "SPACE",
                    image: "https://source.unsplash.com/random/600x400/?space"
                  },
                  {
                    title: "Health Tech",
                    excerpt: "Breakthroughs in medical technology",
                    category: "HEALTH",
                    image: "https://source.unsplash.com/random/600x400/?medical"
                  }
                ].map((feature, index) => (
                  <div 
                    key={index} 
                    className={`rounded-xl overflow-hidden shadow-md hover:shadow-lg transition ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
                  >
                    <div className="relative h-48">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
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
          </>
        )}
      </main>

      {/* Footer */}
      {/* <footer className={`mt-16 py-12 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <FaRegNewspaper className="text-blue-600 dark:text-blue-400 text-2xl mr-2" />
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                  NexusNews
                </h2>
              </div>
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Delivering tomorrow's news today with accuracy and insight.
              </p>
              <div className="flex space-x-4">
                <a href="#" className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300 hover:text-white' : 'bg-gray-200 text-gray-700 hover:text-gray-900'}`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300 hover:text-white' : 'bg-gray-200 text-gray-700 hover:text-gray-900'}`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300 hover:text-white' : 'bg-gray-200 text-gray-700 hover:text-gray-900'}`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.058 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider dark:text-gray-300 mb-4">Sections</h3>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category.id}>
                    <a 
                      href="#" 
                      className={`text-sm ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveCategory(category.id);
                      }}
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider dark:text-gray-300 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>About Us</a></li>
                <li><a href="#" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>Careers</a></li>
                <li><a href="#" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>Contact</a></li>
                <li><a href="#" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>Advertise</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider dark:text-gray-300 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>Terms</a></li>
                <li><a href="#" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>Privacy</a></li>
                <li><a href="#" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>Cookies</a></li>
                <li><a href="#" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>Accessibility</a></li>
              </ul>
            </div>
          </div>
          <div className={`mt-12 pt-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} text-center`}>
            <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              © {new Date().getFullYear()} NexusNews. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default NextGenNewsHome;




