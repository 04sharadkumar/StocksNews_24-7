import React, { useEffect, useState } from "react";
import axios from "axios";

const HeroNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines", {
          params: {
            apiKey: "b88df71f04a74c5693e9cdae86ed05ae",
            country: "us",
            category: "general",
          },
        });

        console.log("Fetched news data:", response.data);
        setNewsData(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    if (newsData.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
    }, 30000);

    return () => clearInterval(interval);
  }, [newsData]);

  const currentNews = newsData[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto mt-6 p-4">
      {currentNews ? (
        <>
          <img
            src={currentNews.urlToImage || "https://via.placeholder.com/600x400"}
            alt="News"
            className="rounded-lg shadow-lg w-full h-80 md:h-96 object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/60 to-transparent p-5 rounded-b-lg">
            <h2 className="text-lg md:text-2xl font-bold text-white">{currentNews.title}</h2>
            <p className="text-xs md:text-sm text-gray-300 mt-1">
              {new Date(currentNews.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </>
      ) : (
        <p className="text-center text-lg font-semibold text-gray-700">Loading breaking news...</p>
      )}
    </div>
  );
};

export default HeroNews;
