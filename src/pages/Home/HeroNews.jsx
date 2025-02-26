const HeroNews = ({ currentNews }) => {
    return (
      <div className="relative">
        <img src={currentNews.image} alt="News" className="rounded-lg shadow-lg w-full" />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full">
          <h2 className="text-xl font-semibold">{currentNews.title}</h2>
          <p className="text-sm">{currentNews.date}</p>
        </div>
      </div>
    );
  };
  
  export default HeroNews;
  