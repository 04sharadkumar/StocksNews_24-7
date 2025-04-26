import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { FiClock, FiUser, FiAlertTriangle, FiTrendingUp } from 'react-icons/fi';

function Articles() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/admin/showNews');
        setNews(res.data.news.reverse());
        setLoading(false);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError('Failed to load news articles. Please try again later.');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const filteredNews = news.filter(item => {
    const matchesFilter = filter === 'all' || 
                         (filter === 'breaking' && item.isBreaking) || 
                         (filter === 'trending' && item.isTrending) ||
                         item.category.toLowerCase() === filter;
    
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-600">Loading latest news...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container max-w-6xl mx-auto py-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex items-center">
            <FiAlertTriangle className="text-red-500 mr-2" />
            <p className="text-red-700">{error}</p>
          </div>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-2 px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Latest News & Updates</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Stay informed with the most recent and relevant news from around the world
        </p>
      </div>

      {/* Filters and Search */}
      <div className="mb-8 bg-white rounded-lg shadow-sm p-4 sticky top-0 z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-grow max-w-2xl">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 text-sm rounded-full ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('breaking')}
              className={`px-3 py-1 text-sm rounded-full flex items-center gap-1 ${filter === 'breaking' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              <FiAlertTriangle size={14} /> Breaking
            </button>
            <button
              onClick={() => setFilter('trending')}
              className={`px-3 py-1 text-sm rounded-full flex items-center gap-1 ${filter === 'trending' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              <FiTrendingUp size={14} /> Trending
            </button>
            {Array.from(new Set(news.map(item => item.category))).slice(0, 3).map(category => (
              <button
                key={category}
                onClick={() => setFilter(category.toLowerCase())}
                className={`px-3 py-1 text-sm rounded-full ${filter === category.toLowerCase() ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredNews.length === 0 ? (
        <div className="text-center py-12">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">No articles found</h3>
          <p className="mt-1 text-gray-500">
            {searchTerm ? 'Try a different search term' : 'No articles match the current filters'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item, index) => (
            <article 
              key={index} 
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full bg-white"
            >
              {item.image && (
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-3 right-3 flex gap-2">
                    {item.isBreaking && (
                      <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded-full flex items-center">
                        <FiAlertTriangle className="mr-1" size={10} /> BREAKING
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="px-2 py-1 bg-purple-600 text-white text-xs font-bold rounded-full flex items-center">
                        <FiTrendingUp className="mr-1" size={10} /> TRENDING
                      </span>
                    )}
                  </div>
                </div>
              )}
              
              <div className="p-5 flex flex-col flex-grow">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                  {item.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center">
                      <FiUser className="mr-1" size={14} />
                      <span>{item.author}</span>
                    </div>
                    <div className="flex items-center">
                      <FiClock className="mr-1" size={14} />
                      <span>{format(new Date(item.date), 'MMM d, yyyy')}</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {item.readTime} read
                    </span>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {filteredNews.length > 0 && (
        <div className="mt-10 flex justify-center">
          <button className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
            Load More Articles
          </button>
        </div>
      )}
    </div>
  );
}

export default Articles;