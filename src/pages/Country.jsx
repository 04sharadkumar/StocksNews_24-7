import React, { useEffect, useState } from "react";
import { FaBusinessTime, FaGlobe, FaFilm, FaUsers, FaSearch, FaLanguage } from "react-icons/fa"; 
import classNames from "classnames"; 

const Country = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("in");
  const [language, setLanguage] = useState("en"); // Default language: English
  const [searchQuery, setSearchQuery] = useState("");

  const API_URL = `https://newsdata.io/api/1/latest?apikey=pub_69501420d3ee9b949a72f7174ee7296400fa9&country=${country}&category=${category}&language=${language}`;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        console.log("Fetching URL:", API_URL); // Debugging
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("API Response:", data); // Debugging

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
  }, [category, country, language]); 

  if (loading) return <p className="text-center text-gray-500">Loading latest news...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  const filteredNews = news.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Latest News</h1>

      {/* Search Box */}
      <div className="mb-6 flex justify-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search news..."
            className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Filters: Category & Language */}
      <div className="mb-6 flex flex-wrap justify-center space-x-6">
        {["general", "business", "entertainment", "sports"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={classNames("px-4 py-2 text-white font-semibold rounded-lg transition", {
              "bg-blue-600": category === cat,
              "bg-gray-400 hover:bg-blue-600": category !== cat,
            })}
          >
            {cat === "general" && <FaGlobe className="inline mr-2" />}
            {cat === "business" && <FaBusinessTime className="inline mr-2" />}
            {cat === "entertainment" && <FaFilm className="inline mr-2" />}
            {cat === "sports" && <FaUsers className="inline mr-2" />}
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Language Selection */}
      <div className="mb-6 flex justify-center">
        <FaLanguage className="mr-2 text-gray-600" />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="bn">Bengali</option>
          <option value="ta">Tamil</option>
          <option value="te">Telugu</option>
          <option value="mr">Marathi</option>
          <option value="gu">Gujarati</option>
          <option value="ml">Malayalam</option>
          <option value="kn">Kannada</option>
          <option value="or">Odia</option>
          <option value="pa">Punjabi</option>
          <option value="as">Assamese</option>
          <option value="ur">Urdu</option>
          <option value="sd">Sindhi</option>
          <option value="ne">Nepali</option>
          <option value="ks">Kashmiri</option>
          <option value="sa">Sanskrit</option>
          <option value="mai">Maithili</option>
        </select>
      </div>

      {/* News List */}
      <ul className="space-y-6">
        {filteredNews.length > 0 ? (
          filteredNews.map((article, index) => (
            <li key={index} className="border p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-600 hover:text-blue-800"
              >
                {article.title}
              </a>
              <p className="text-gray-700 mt-2">{article.description || "No description available"}</p>
              <p className="text-sm text-gray-500 mt-2">
                Source: {article.source_id} | Date: {new Date(article.pubDate).toLocaleDateString()}
              </p>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-600">No news available for your search criteria.</p>
        )}
      </ul>
    </div>
  );
};

export default Country;
