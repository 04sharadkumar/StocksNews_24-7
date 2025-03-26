import { useState, useEffect } from "react";
import { Globe, Briefcase, TrendingUp, Film, Landmark, Newspaper, PlayCircle } from "lucide-react";

const NewsSection = ({ title, icon: Icon, news = [] }) => {
  return (
    <div className="mt-6 bg-black text-white shadow-lg rounded-xl overflow-hidden border border-gray-700 transition-transform transform hover:scale-105">
      <div className="flex items-center justify-between bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-4">
        <h2 className="text-xl font-bold flex items-center gap-3">
          <Icon className="w-7 h-7 text-white" /> {title}
        </h2>
        <div className="flex items-center gap-2 text-red-500 animate-pulse">
          <PlayCircle className="w-6 h-6" title="Live" />
          <span className="text-sm font-semibold">Live</span>
        </div>
      </div>
      <div className="p-6 bg-gray-900">
        {news && news.length > 0 ? (
          <ul className="divide-y divide-gray-700">
            {news.map((article, index) => (
              <li key={index} className="py-4 flex gap-5 items-start">
                {article.image && (
                  <img src={article.image} alt={article.title} className="w-24 h-24 object-cover rounded-lg border border-gray-600 shadow-md" />
                )}
                <div>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-blue-400 hover:underline font-semibold hover:text-blue-300 transition"
                  >
                    {article.title}
                  </a>
                  <p className="text-sm text-gray-400 mt-1 font-light">{article.source}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-center py-6">No news available.</p>
        )}
      </div>
    </div>
  );
};

const fetchNews = async (category) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=29e959f99d8941e1bae06d5c3ca17b61`
    );
    const data = await response.json();

    console.log(`Fetched news for category: ${category}`, data); // ✅ Console log API response

    return data.articles.map((article) => ({
      title: article.title,
      url: article.url,
      source: article.source.name,
      image: article.urlToImage || "https://via.placeholder.com/100",
    }));
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

const NewsContainer = () => {
  const [newsData, setNewsData] = useState({
    indiaNews: [],
    sportsNews: [],
    entertainmentNews: [],
    stocksNews: [],
    businessNews: [],
    worldNews: []
  });

  useEffect(() => {
    (async () => {
      const indiaNews = await fetchNews("general");
      const sportsNews = await fetchNews("sports");
      const entertainmentNews = await fetchNews("entertainment");
      const stocksNews = await fetchNews("business");
      const businessNews = await fetchNews("technology");
      const worldNews = await fetchNews("world");

      console.log("News Data:", {
        indiaNews,
        sportsNews,
        entertainmentNews,
        stocksNews,
        businessNews,
        worldNews,
      }); // ✅ Console log all categories data

      setNewsData({ indiaNews, sportsNews, entertainmentNews, stocksNews, businessNews, worldNews });
    })();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <NewsSection title="Latest News from India" icon={Newspaper} news={newsData.indiaNews} />
      </div>
      <div>
        <NewsSection title="World News" icon={Globe} news={newsData.worldNews} />
      </div>
      <div>
        <NewsSection title="Entertainment News" icon={Film} news={newsData.entertainmentNews} />
      </div>
      <div>
        <NewsSection title="Stocks News" icon={TrendingUp} news={newsData.stocksNews} />
      </div>
      <div>
        <NewsSection title="Business News" icon={Briefcase} news={newsData.businessNews} />
      </div>
      <div>
        <NewsSection title="Sports News" icon={Landmark} news={newsData.sportsNews} />
      </div>
    </div>
  );
};

export default NewsContainer;
                                