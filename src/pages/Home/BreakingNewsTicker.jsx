const BreakingNewsTicker = ({ newsData }) => {
    return (
      <div className="bg-red-600 text-white p-2 rounded-md mb-4 overflow-hidden relative">
        <div className="whitespace-nowrap animate-scroll flex">
          {newsData.map((news) => (
            <span key={news.id} className="mx-4">{news.title} | </span>
          ))}
          {/* Duplicate for seamless scrolling */}
          {newsData.map((news) => (
            <span key={`${news.id}-duplicate`} className="mx-4">{news.title} | </span>
          ))}
        </div>
        <style>
          {`
            @keyframes scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .animate-scroll {
              display: inline-flex;
              animation: scroll 10s linear infinite;
            }
          `}
        </style>
      </div>
    );
  };
  
  export default BreakingNewsTicker;
  