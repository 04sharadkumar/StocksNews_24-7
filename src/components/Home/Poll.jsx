import { useEffect, useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const Poll = () => {
  const [like, setLike] = useState(() => {
    return parseInt(localStorage.getItem("like")) || 1500;
  });
  const [dislike, setDislike] = useState(() => {
    return parseInt(localStorage.getItem("dislike")) || 200;
  });

  useEffect(() => {
    localStorage.setItem("like", like);
  }, [like]);

  useEffect(() => {
    localStorage.setItem("dislike", dislike);
  }, [dislike]);

  return (
    <div className="p-8 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-xl text-center max-w-lg mx-auto border border-gray-300">
      <h2 className="text-3xl font-extrabold mb-5 text-gray-800">Your Opinion on This News</h2>
      <p className="text-gray-600 mb-6 text-lg">Do you support this news update? Share your thoughts below!</p>
      
      <div className="flex justify-center items-center space-x-10">
        {/* Like Button */}
        <div className="flex flex-col items-center">
          <button 
            className="bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition-transform transform hover:scale-110 shadow-md"
            onClick={() => setLike(like + 1)}
          >
            <AiOutlineLike size={28} />
          </button>
          <p className="text-green-700 font-semibold text-xl mt-2">{like}+</p>
        </div>
        
        {/* Dislike Button */}
        <div className="flex flex-col items-center">
          <button 
            className="bg-red-500 text-white p-4 rounded-full hover:bg-red-600 transition-transform transform hover:scale-110 shadow-md"
            onClick={() => setDislike((prev) => Math.max(0, prev + 1))}
          >
            <AiOutlineDislike size={28} />
          </button>
          <p className="text-red-700 font-semibold text-xl mt-2">{dislike}</p>
        </div>
      </div>
    </div>
  );
};

export default Poll;