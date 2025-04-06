// const TrendingTopics = ({ topics }) => {
//     return (
//       <div className="mt-6">
//         <h2 className="text-2xl font-bold mb-4">Trending Topics</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {topics.map((topic, index) => (
//             <div key={index} className="bg-gray-200 p-3 rounded-md text-center">{topic}</div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default TrendingTopics;
  

// Trending Topics Component
import { useState,useEffect } from "react";
import {
  Globe,
  Briefcase,
  TrendingUp,
  Film,
  Landmark,
  Newspaper,
  PlayCircle,
  Sun,
  Search,
  Clock,
  Bookmark,
  Share2,
  Menu,
  X,
  Bell
} from "lucide-react";

const TrendingTopics = () => {
  const topics = [
    "Elections 2024",
    "Stock Market",
    "Climate Change",
    "Tech Summit",
    "Olympics",
    "Health Care",
    "Space Exploration",
    "Celebrity News",
  ];

  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-red-600" />
          Trending Topics
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition cursor-pointer text-center font-medium hover:text-red-600"
            >
              #{topic}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingTopics;