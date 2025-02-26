import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function NewsReel() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const reelRef = useRef(null);

  useEffect(() => {
    fetchNews(page);
  }, [page]);

  async function fetchNews(pageNumber) {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&page=${pageNumber}&pageSize=10&apiKey=wZXbdfkyxakOWPRGxmhIQ0ax4XaAUN9DqDRDiuMT`
      );
      const data = await response.json();
      setNews((prevNews) => [...prevNews, ...data.articles]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  }

  function handleScroll() {
    if (!reelRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = reelRef.current;

    if (scrollLeft + clientWidth >= scrollWidth - 10) {
      setPage((prevPage) => prevPage + 1);
    }
  }

  return (
    <div className="bg-gray-900 py-3">
      <div
        ref={reelRef}
        onScroll={handleScroll}
        className="flex gap-6 px-4 overflow-x-auto no-scrollbar whitespace-nowrap scroll-smooth"
      >
        {news.map((article, index) => (
          <Link
            key={index}
            to={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-block px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all"
          >
            {article.title}
          </Link>
        ))}
      </div>

      {loading && <p className="text-center text-white">Loading more news...</p>}
    </div>
  );
}
