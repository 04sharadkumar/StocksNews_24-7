// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const BreakingNewsTicker = () => {
//   const [newsData, setNewsData] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get('https://newsapi.org/v2/top-headlines', {
//           params: {
//             apiKey: 'b88df71f04a74c5693e9cdae86ed05ae',
//             country: 'us', // You can change this to any country or region code
//             category: 'general', // You can change the category if needed
//           },
//         });

//         // Log the response data to check if API is working
//         console.log("Fetched news data:", response.data);

//         // Update the state with the fetched news data
//         setNewsData(response.data.articles);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//       }
//     };

//     // Fetch the news when the component mounts
//     fetchNews();
//   }, []);

//   return (
//     <div className="bg-red-600 text-white p-3 rounded-lg mb-4 overflow-hidden relative shadow-lg border border-gray-200">
//       <div className="flex gap-8">
//         {/* Loop over the fetched news data */}
//         {newsData.length > 0 ? (
//           newsData.map((news, index) => (
//             <span key={index} className="mx-4">
//               {news.title} | 
//             </span>
//           ))
//         ) : (
//           <span>Loading breaking news...</span>
//         )}
//         {/* Duplicate for seamless scrolling */}
//         {newsData.length > 0 ? (
//           newsData.map((news, index) => (
//             <span key={`${index}-duplicate`} className="mx-4">
//               {news.title} | 
//             </span>
//           ))
//         ) : (
//           <span>Loading breaking news...</span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BreakingNewsTicker;



import React from "react";

const BreakingNewsTicker = () => {
  return (
    <div className="p-6">


      {/* ✅ Black Background Div */}
      
    </div>
  );
};

export default BreakingNewsTicker;




