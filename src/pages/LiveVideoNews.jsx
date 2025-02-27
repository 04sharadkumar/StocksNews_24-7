import React, { useState, useEffect, useRef } from "react";
import { FaHeart, FaComment, FaShare, FaUser, FaHome, FaCompass, FaBell, FaSearch, FaSpinner } from "react-icons/fa"; 

const LiveVideoNews = () => {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState({});
  const [loading, setLoading] = useState(true); 
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchVideosWithDelay = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate slow loading (2s delay)
      fetchVideos(page);
      setLoading(false);
    };

    fetchVideosWithDelay();
  }, [page]);

  const fetchVideos = async (page) => {
    const API_KEY = "YOUR_PEXELS_API_KEY"; // Replace with a valid API key
    const response = await fetch(
      `https://api.pexels.com/videos/popular?page=${page}&per_page=5`,
      {
        headers: { Authorization: API_KEY },
      }
    );
    const data = await response.json();
    setVideos((prev) => [...prev, ...data.videos]);
  };

  const toggleLike = (index) => {
    setLiked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      {loading ? (
        // **Slower Loading Animation**
        <div className="w-full h-screen flex flex-col justify-center items-center text-white">
          <FaSpinner className="text-5xl md:text-7xl animate-spin text-gray-300" />
          <p className="mt-2 text-sm md:text-lg text-gray-400">Loading Reels...</p>
        </div>
      ) : videos.length > 0 ? (
        <div
          className="absolute top-0 left-0 w-full h-full flex transition-transform duration-500"
          style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
        >
          {videos.map((video, index) => (
            <div key={index} className="relative w-full h-full flex justify-center items-center">
              <video
                className="w-full h-full object-cover max-w-[480px] md:max-w-[700px] lg:max-w-[900px] aspect-[9/16] rounded-md shadow-lg"
                src={video.video_files[0].link}
                controls
                autoPlay={index === currentIndex}
              />

              {/* Left Side Icons (50% Down) */}
              <div className="absolute top-1/2 left-5 flex flex-col gap-6 text-white text-opacity-70 transform -translate-y-1/2">
                <button className="hover:text-white">
                  <FaHome size={28} />
                </button>
                <button className="hover:text-white">
                  <FaCompass size={28} />
                </button>
                <button className="hover:text-white">
                  <FaSearch size={28} />
                </button>
                <button className="hover:text-white">
                  <FaBell size={28} />
                </button>
                <button className="hover:text-white">
                  <FaUser size={28} />
                </button>
              </div>

              {/* Right Side Action Icons */}
              <div className="absolute bottom-24 right-5 flex flex-col gap-4 items-center text-white">
                <button onClick={() => toggleLike(index)} className="flex flex-col items-center">
                  <FaHeart size={24} className={liked[index] ? "text-red-500" : "text-white"} />
                  <span className="text-xs">120</span>
                </button>
                <button className="flex flex-col items-center">
                  <FaComment size={24} />
                  <span className="text-xs">30</span>
                </button>
                <button className="flex flex-col items-center">
                  <FaShare size={24} />
                  <span className="text-xs">Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center items-center text-white">
          No videos found.
        </div>
      )}
    </div>
  );
};

export default LiveVideoNews;
