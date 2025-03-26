import React, { useState, useEffect, useRef } from "react";
import { FaHeart, FaComment, FaShare, FaUser, FaArrowLeft, FaPlus, FaBookmark, FaEllipsisH } from "react-icons/fa";

const LiveVideoNews = () => {
  const [videos, setVideos] = useState([
    { link: "https://www.youtube.com/embed/QxddU3sjVRY?enablejsapi=1", title: "Latest News Update", description: "Stay updated with the latest news.", username: "newsdaily" },
    { link: "https://www.youtube.com/embed/IWmmv7T-D7U?enablejsapi=1", title: "Breaking News", description: "Breaking stories from around the world.", username: "worldnews" },
    { link: "https://www.youtube.com/embed/22F01A4Ayf8?enablejsapi=1", title: "Trending Now", description: "Most trending news today.", username: "trending24" }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState({});
  const [saved, setSaved] = useState({});
  const videoRefs = useRef([]);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (videoContainerRef.current && videoContainerRef.current.contains(e.target)) {
        e.preventDefault();
        setCurrentIndex((prev) => {
          let newIndex = e.deltaY > 0 
            ? Math.min(prev + 1, videos.length - 1) 
            : Math.max(prev - 1, 0);
          return newIndex;
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [videos.length]);

  useEffect(() => {
    videoRefs.current.forEach((iframe, index) => {
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    });
  }, [currentIndex]);

  const toggleLike = (index) => {
    setLiked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleSave = (index) => {
    setSaved((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-5 py-3 bg-black/70 z-10">
        <FaArrowLeft className="text-2xl cursor-pointer hover:opacity-80 transition" />
        <h1 className="text-xl font-bold">Reels</h1>
        <FaPlus className="text-2xl cursor-pointer hover:opacity-80 transition" />
      </div>

      <div ref={videoContainerRef} className="w-full h-full flex flex-col snap-y snap-mandatory overflow-y-scroll scrollbar-hide">
        {videos.map((video, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 snap-start relative flex items-center justify-center">
            <iframe
              ref={(el) => (videoRefs.current[index] = el)}
              className="w-full h-full max-w-xl aspect-[9/16] object-cover rounded-xl shadow-2xl border border-gray-800"
              src={`${video.link}&vq=hd720`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <div className="absolute bottom-0 left-0 right-0 px-5 py-6 bg-gradient-to-t from-black via-black/60 to-transparent">
              <div className="flex items-center gap-3 mb-2">
                <FaUser className="text-lg" />
                <span className="text-base font-semibold">@{video.username}</span>
                <button className="ml-2 px-4 py-1 text-sm border border-white rounded-full hover:bg-white hover:text-black transition">Follow</button>
              </div>
              <p className="text-sm md:text-base text-gray-300">{video.description}</p>
            </div>

            <div className="absolute right-5 bottom-24 flex flex-col gap-6 items-center">
              <button onClick={() => toggleLike(index)} className="flex flex-col items-center hover:scale-110 transition">
                <FaHeart size={28} className={`${liked[index] ? "text-red-500" : "text-white"}`} />
                <span className="text-xs mt-1">120k</span>
              </button>
              <button className="flex flex-col items-center hover:scale-110 transition">
                <FaComment size={28} className="text-white" />
                <span className="text-xs mt-1">2.3k</span>
              </button>
              <button className="flex flex-col items-center hover:scale-110 transition">
                <FaShare size={28} className="text-white" />
                <span className="text-xs mt-1">1.5k</span>
              </button>
              <button onClick={() => toggleSave(index)} className="flex flex-col items-center hover:scale-110 transition">
                <FaBookmark size={28} className={`${saved[index] ? "text-yellow-400" : "text-white"}`} />
              </button>
              <button className="flex flex-col items-center hover:scale-110 transition">
                <FaEllipsisH size={28} className="text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute right-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
        {videos.map((_, index) => (
          <div key={index} className={`w-2.5 h-2.5 rounded-full ${index === currentIndex ? 'bg-white scale-125' : 'bg-gray-500'}`} />
        ))}
        
      </div>

    </div>
  );
};

export default LiveVideoNews;