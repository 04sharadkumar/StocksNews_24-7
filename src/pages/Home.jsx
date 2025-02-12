import { useState, useEffect } from "react";
import { Flame, Clock, TrendingUp, Newspaper, LineChart, BarChart } from "lucide-react";

const newsData = [
  {
    id: 1,
    title: "Breaking: Major Political Shift in the Country",
    category: "Politics",
    image: "https://source.unsplash.com/600x400/?news,politics",
    description: "A major political change has taken place, shaking the government foundation...",
    date: "Feb 10, 2025",
  },
  {
    id: 2,
    title: "Tech Giants Announce Revolutionary AI Breakthrough",
    category: "Technology",
    image: "https://source.unsplash.com/600x400/?technology,ai",
    description: "AI innovation reaches new heights as major companies unveil game-changing tech...",
    date: "Feb 09, 2025",
  },
  {
    id: 3,
    title: "Stock Market Hits Record Highs",
    category: "Business",
    image: "https://source.unsplash.com/600x400/?business,finance",
    description: "Investors celebrate as stock market soars beyond expectations...",
    date: "Feb 08, 2025",
  },
];

const indianStockMarket = [
  { name: "NIFTY 50", price: 17500, change: "+1.5%" },
  { name: "SENSEX", price: 58500, change: "-0.5%" },
  { name: "BANK NIFTY", price: 37500, change: "+2.0%" },
];

const foreignStockMarket = [
  { name: "S&P 500", price: 4500, change: "-0.8%" },
  { name: "NASDAQ", price: 14200, change: "+1.2%" },
  { name: "DOW JONES", price: 35000, change: "-0.6%" },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-3">
          <h1 className="text-4xl font-bold mb-4">Top Headlines</h1>
          <div className="relative">
            <img src={newsData[0].image} alt="News" className="rounded-lg shadow-lg w-full" />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full">
              <h2 className="text-xl font-semibold">{newsData[0].title}</h2>
              <p className="text-sm">{newsData[0].date}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <Newspaper className="w-6 h-6" /> Latest News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsData.map((news) => (
            <div key={news.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img src={news.image} alt="" className="rounded-md mb-3 w-full" />
              <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{news.date}</p>
              <p className="text-gray-700">{news.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stock Market Section */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <LineChart className="w-6 h-6" /> Stock Market Updates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Indian Stock Market */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Indian Stock Market</h3>
            {indianStockMarket.map((stock, index) => (
              <div key={index} className="p-2 border-b flex justify-between">
                <span className="font-semibold">{stock.name}</span>
                <span className={`text-sm ${stock.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>{stock.price} ({stock.change})</span>
              </div>
            ))}
          </div>
          {/* Foreign Stock Market */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Foreign Stock Market</h3>
            {foreignStockMarket.map((stock, index) => (
              <div key={index} className="p-2 border-b flex justify-between">
                <span className="font-semibold">{stock.name}</span>
                <span className={`text-sm ${stock.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>{stock.price} ({stock.change})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <Flame className="w-6 h-6" /> Featured Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md flex items-center gap-4">
            <Clock className="w-8 h-8 text-blue-600" />
            <span className="text-lg font-semibold">Latest Updates</span>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md flex items-center gap-4">
            <TrendingUp className="w-8 h-8 text-green-600" />
            <span className="text-lg font-semibold">Market Trends</span>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow-md flex items-center gap-4">
            <Newspaper className="w-8 h-8 text-yellow-600" />
            <span className="text-lg font-semibold">Editorial Picks</span>
          </div>
        </div>
      </div>
    </div>
  );
}
