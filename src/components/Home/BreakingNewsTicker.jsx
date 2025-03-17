import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BreakingNewsTicker = () => {
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

        // Store the news data
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
    }, 4000); // Change news every 4 seconds

    return () => clearInterval(interval);
  }, [newsData]);

  return (
    <div className="bg-red-600 text-white p-3 rounded-lg mb-4 overflow-hidden shadow-lg border border-gray-200 text-center">
      <span className="text-lg font-semibold tracking-wide animate-fade-in">
        {newsData.length > 0 ? newsData[currentIndex]?.title : "Loading breaking news..."}
      </span>
    </div>
  );
};

export default BreakingNewsTicker;




// import React from "react";

// const BreakingNewsTicker = () => {
//   return (
//     <div className="p-6">


//       {/* ✅ Black Background Div */}
      
//     </div>
//   );
// };

// export default BreakingNewsTicker;




