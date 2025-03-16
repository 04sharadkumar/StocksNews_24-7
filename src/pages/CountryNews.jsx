
import React, { useEffect, useState } from "react";

const CountryNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL =
    "https://newsdata.io/api/1/latest?apikey=pub_69501420d3ee9b949a72f7174ee7296400fa9&country=in";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.results) {
          setNews(data.results);
        } else {
          throw new Error("No news found");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading latest news...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>

      <ul className="space-y-4">
        {news.length > 0 ? (
          news.map((article, index) => (
            <li key={index} className="border p-4 rounded shadow hover:bg-gray-100 transition">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-600"
              >
                {article.title}
              </a>
              <p className="text-gray-700">
                {article.description ? article.description : "No description available"}
              </p>
              <p className="text-sm text-gray-500">
                Source: {article.source_id} | Date: {article.pubDate}
              </p>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-600">No latest news available.</p>
        )}
      </ul>
    </div>
  );
};

export default CountryNews;
