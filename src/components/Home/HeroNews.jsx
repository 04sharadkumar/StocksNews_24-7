import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HeroNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            apiKey: 'b88df71f04a74c5693e9cdae86ed05ae',
            country: 'us',
            category: 'general',
          },
        });

        console.log("Fetched news data:", response.data);
        setNewsData(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    if (newsData.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
    }, 30000); // Change news every 30 seconds

    return () => clearInterval(interval);
  }, [newsData]);

  const currentNews = newsData[currentIndex];

  return (
    <div className="relative max-w-3xl mx-auto">
      {currentNews ? (
        <>
          <img 
            src={currentNews.urlToImage || "https://via.placeholder.com/600x400"} 
            alt="News" 
            className="rounded-lg shadow-lg w-full h-72 object-cover" 
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-4 w-full">
            <h2 className="text-xl font-semibold">{currentNews.title}</h2>
            <p className="text-sm opacity-80">{new Date(currentNews.publishedAt).toLocaleDateString()}</p>
          </div>
        </>
      ) : (
        <p className="text-center text-lg font-semibold text-gray-700">Loading breaking news...</p>
      )}
    </div>
  );
};

export default HeroNews;
