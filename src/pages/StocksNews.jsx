import React from "react";
import { FaChartLine, FaArrowUp, FaArrowDown } from "react-icons/fa";

const StocksNews = () => {
  // Fake data for indices
  const indices = [
    { name: "NIFTY", value: "22,494" },
    { name: "SENSEX", value: "74,392" },
    { name: "BANKNIFTY", value: "48,521" },
    { name: "MIDNIFTY", value: "12,345" },
    { name: "FINNIFTY", value: "18,902" },
  ];

  // Fake data for most traded stocks
  const mostTradedStocks = [
    {
      name: "Tata Motors",
      price: "678.45",
      change: "+3.5%",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Tata_Motors.svg/1200px-Tata_Motors.svg.png",
      isPositive: true,
    },
    {
      name: "Reliance Industries",
      price: "2,410.50",
      change: "-1.2%",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Reliance_Industries_Logo.svg",
      isPositive: false,
    },
    {
      name: "HDFC Bank",
      price: "1,540.75",
      change: "+2.1%",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/69/HDFC_Bank_logo.svg",
      isPositive: true,
    },
  ];

  // Fake data for top gainers and losers
  const gainers = [
    { symbol: "TCS", price: "3,500", change: "+4.2%" },
    { symbol: "Infosys", price: "1,400", change: "+3.8%" },
  ];
  
  const losers = [
    { symbol: "HUL", price: "2,300", change: "-2.1%" },
    { symbol: "ITC", price: "450", change: "-1.8%" },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white text-black rounded-lg shadow-lg">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 flex items-center justify-center gap-2">
        <FaChartLine className="text-blue-600" /> Indian Stock Market Live
      </h1>

      {/* Indices Section */}
      <h1 className="text-2xl font-bold mb-4">Indices</h1>
      <div className="flex space-x-5 overflow-x-auto scrollbar-hide px-6">
        {indices.map((index, idx) => (
          <div
            key={idx}
            className="bg-gray-900 p-6 rounded-lg shadow text-center text-white min-w-[250px] border border-gray-700 hover:border-white transition-all"
          >
            <h2 className="text-lg font-semibold">{index.name}</h2>
            <h4 className="text-xl font-bold text-green-400">{index.value}</h4>
          </div>
        ))}
      </div>

      {/* Most Traded Stocks */}
      <h1 className="text-2xl font-bold mb-6 mt-8">Most Traded Stocks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mostTradedStocks.map((stock, index) => (
          <div key={index} className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-5 text-center hover:shadow-2xl hover:border-white">
            <img src={stock.img} alt={stock.name} className="w-20 h-20 mx-auto mb-4 rounded-full bg-white p-1" />
            <h2 className="text-lg font-semibold text-white">{stock.name}</h2>
            <p className="text-2xl font-bold text-gray-300">₹ {stock.price}</p>
            <h4 className={`text-lg font-medium flex items-center justify-center gap-1 ${stock.isPositive ? "text-green-400" : "text-red-500"}`}>
              {stock.isPositive ? "▲" : "▼"} {stock.change}
            </h4>
          </div>
        ))}
      </div>

      {/* Gainers & Losers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-green-600 flex items-center gap-2">
            <FaArrowUp className="text-green-500" /> Top Gainers
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
            <FaArrowDown className="text-red-500" /> Top Losers
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