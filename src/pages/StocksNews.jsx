import React from "react";
import { FaChartLine, FaArrowUp, FaArrowDown } from "react-icons/fa";

const StocksNews = () => {
  // Fake static data
  const gainers = [
    { symbol: "TATAMOTORS", price: "678.45", change: "+3.5%" },
    { symbol: "HDFCBANK", price: "1,540.75", change: "+2.1%" },
    { symbol: "INFY", price: "1,345.90", change: "+0.9%" },
  ];
  const losers = [
    { symbol: "RELIANCE", price: "2,410.50", change: "-1.2%" },
    { symbol: "ICICIBANK", price: "945.30", change: "-0.5%" },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white text-black rounded-lg shadow-lg">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 flex items-center justify-center gap-2">
        <FaChartLine className="text-blue-600" /> Indian Stock Market Live
      </h1>

      {/* Indices Section */}
      <h1 className="text-2xl font-bold mb-4">Indices</h1>
      <div className="p-6 rounded-lg shadow-md max-w-5xl w-full mx-auto">
        <div className="relative">
          <div id="indices-container" className="flex space-x-5 overflow-x-auto scrollbar-hide snap-x px-6 md:grid md:grid-cols-5 md:space-x-0 md:overflow-visible">
            {[
              { name: "NIFTY", value: "22,494" },
              { name: "SENSEX", value: "73,492" },
              { name: "BANKNIFTY", value: "47,394" },
              { name: "MIDNIFTY", value: "10,290" },
              { name: "FINNIFTY", value: "19,005" },
            ].map((index, idx) => (
              <div key={idx} className="bg-gray-900 p-6 rounded-lg shadow text-center min-w-[250px] snap-center md:min-w-0 border border-gray-700 hover:border-white transition-all">
                <h2 className="text-lg font-semibold text-white">{index.name}</h2>
                <h4 className="text-xl font-bold text-green-400">{index.value}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Most Traded Stocks */}
      <h1 className="text-2xl font-bold mb-6 mt-8">Most Traded Stocks</h1>
      <div className="mt-6 p-6 rounded-xl shadow-lg">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-7xl">
            {[
              {
                name: "Tata Motors",
                price: "678.45",
                change: "+3.5%",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSeSlyNJx45ac5kRAD8INKDJ3eAI0nC-ifhw&s",
                isPositive: true,
              },
              {
                name: "Reliance Industries",
                price: "2,410.50",
                change: "-1.2%",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnbw2v9DbD-6P4eYq6ve5wnZHGQ0-Kd-tzA&s",
                isPositive: false,
              },
              {
                name: "HDFC Bank",
                price: "1,540.75",
                change: "+2.1%",
                img: "https://i.pinimg.com/736x/1e/b4/93/1eb49385575175ab7f541d7000273a1b.jpg",
                isPositive: true,
              },
              {
                name: "Infosys",
                price: "1,345.90",
                change: "+0.9%",
                img: "https://static.vecteezy.com/system/resources/previews/020/190/476/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg",
                isPositive: true,
              },
              {
                name: "ICICI Bank",
                price: "945.30",
                change: "-0.5%",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8mXBusladp4eop5YLbiGOpipboZcpsGylw&s",
                isPositive: false,
              },
            ].map((stock, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-5 text-center transition-all hover:shadow-2xl hover:border-white">
                <img src={stock.img} alt={stock.name} className="w-20 h-20 mx-auto mb-4 rounded-full bg-white p-1" />
                <h2 className="text-lg sm:text-xl font-semibold text-white">{stock.name}</h2>
                <p className="text-2xl font-bold text-gray-300">₹ {stock.price}</p>
                <h4 className={`font-medium flex items-center justify-center gap-1 text-lg ${stock.isPositive ? "text-green-400" : "text-red-500"}`}>
                  {stock.isPositive ? "▲" : "▼"} {stock.change}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gainers & Losers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-green-600 flex items-center gap-2">
            <FaArrowUp className="text-green-500" /> Top 10 Gainers
          </h2>
          <ul className="mt-2 list-disc list-inside text-gray-800">
            {gainers.map((stock, index) => (
              <li key={index} className="flex justify-between border-b py-2">
                <span>{stock.symbol}</span>
                <span className="text-green-700">₹{stock.price} ({stock.change})</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-red-600 flex items-center gap-2">
            <FaArrowDown className="text-red-500" /> Top 10 Losers
          </h2>
          <ul className="mt-2 list-disc list-inside text-gray-800">
            {losers.map((stock, index) => (
              <li key={index} className="flex justify-between border-b py-2">
                <span>{stock.symbol}</span>
                <span className="text-red-700">₹{stock.price} ({stock.change})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StocksNews;
