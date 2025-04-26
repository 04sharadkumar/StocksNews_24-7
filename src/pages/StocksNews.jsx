import React from "react";
import { FaChartLine, FaArrowUp, FaArrowDown, FaRupeeSign, FaInfoCircle, FaSearch } from "react-icons/fa";
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";

const StocksNews = () => {
  // Data
  const indices = [
    { name: "NIFTY 50", value: "22,494.25", change: "+1.25%", isPositive: true },
    { name: "SENSEX", value: "73,492.75", change: "+1.12%", isPositive: true },
    { name: "BANKNIFTY", value: "47,394.80", change: "+0.89%", isPositive: true },
    { name: "NIFTY IT", value: "34,005.60", change: "-0.45%", isPositive: false },
    { name: "NIFTY AUTO", value: "19,842.30", change: "+2.15%", isPositive: true },
  ];

  const gainers = [
    { symbol: "TATAMOTORS", price: "678.45", change: "+3.5%", volume: "12.4M" },
    { symbol: "HDFCBANK", price: "1,540.75", change: "+2.1%", volume: "8.2M" },
    { symbol: "INFY", price: "1,345.90", change: "+0.9%", volume: "5.7M" },
    { symbol: "BHARTIARTL", price: "1,128.30", change: "+2.8%", volume: "4.3M" },
    { symbol: "LT", price: "3,412.50", change: "+1.9%", volume: "3.1M" },
  ];

  const losers = [
    { symbol: "RELIANCE", price: "2,410.50", change: "-1.2%", volume: "9.8M" },
    { symbol: "ICICIBANK", price: "945.30", change: "-0.5%", volume: "7.5M" },
    { symbol: "TCS", price: "3,845.60", change: "-0.8%", volume: "3.2M" },
    { symbol: "HINDUNILVR", price: "2,345.25", change: "-0.3%", volume: "2.1M" },
    { symbol: "ITC", price: "412.80", change: "-0.7%", volume: "6.4M" },
  ];

  const mostTraded = [
    {
      name: "Tata Motors",
      symbol: "TATAMOTORS",
      price: "678.45",
      change: "+3.5%",
      img: "https://logo.clearbit.com/tatamotors.com",
      isPositive: true,
      sector: "Automobile",
      volume: "12.4M"
    },
    {
      name: "Reliance Industries",
      symbol: "RELIANCE",
      price: "2,410.50",
      change: "-1.2%",
      img: "https://logo.clearbit.com/ril.com",
      isPositive: false,
      sector: "Oil & Gas",
      volume: "9.8M"
    },
    {
      name: "HDFC Bank",
      symbol: "HDFCBANK",
      price: "1,540.75",
      change: "+2.1%",
      img: "https://logo.clearbit.com/hdfcbank.com",
      isPositive: true,
      sector: "Banking",
      volume: "8.2M"
    },
    {
      name: "Infosys",
      symbol: "INFY",
      price: "1,345.90",
      change: "+0.9%",
      img: "https://logo.clearbit.com/infosys.com",
      isPositive: true,
      sector: "IT",
      volume: "5.7M"
    },
    {
      name: "ICICI Bank",
      symbol: "ICICIBANK",
      price: "945.30",
      change: "-0.5%",
      img: "https://logo.clearbit.com/icicibank.com",
      isPositive: false,
      sector: "Banking",
      volume: "7.5M"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header with Search */}
    

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4">
        {/* Market Overview */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Market Overview</h2>
            <div className="text-sm text-gray-500 flex items-center">
              <span className="mr-2">As of {new Date().toLocaleTimeString()}</span>
              <FaInfoCircle className="text-blue-500" />
            </div>
          </div>
          
          {/* Indices */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {indices.map((index, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600">{index.name}</h3>
                    <p className="text-xl font-bold text-gray-900">{index.value}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${index.isPositive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {index.change}
                  </span>
                </div>
                <div className={`mt-2 h-1 rounded-full ${index.isPositive ? 'bg-green-500' : 'bg-red-500'}`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Traded Stocks */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Most Traded Stocks</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sector</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mostTraded.map((stock, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full bg-white p-1 border border-gray-200" src={stock.img} alt={stock.name} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{stock.name}</div>
                          <div className="text-sm text-gray-500">{stock.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FaRupeeSign className="text-gray-400 mr-1" />
                        <span className="text-sm font-medium">{stock.price}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${stock.isPositive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {stock.change}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stock.volume}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stock.sector}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Gainers & Losers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Gainers */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <BsGraphUpArrow className="mr-2" /> Top Gainers
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {gainers.map((stock, index) => (
                    <tr key={index} className="hover:bg-green-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{stock.symbol}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
                        <FaRupeeSign className="text-gray-400 mr-1" />
                        {stock.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {stock.change}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stock.volume}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Losers */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-500 p-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <BsGraphDownArrow className="mr-2" /> Top Losers
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {losers.map((stock, index) => (
                    <tr key={index} className="hover:bg-red-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{stock.symbol}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
                        <FaRupeeSign className="text-gray-400 mr-1" />
                        {stock.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          {stock.change}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stock.volume}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Market News (Placeholder) */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Market News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="h-40 bg-gray-200 rounded mb-3 animate-pulse"></div>
                <h3 className="font-semibold text-gray-800 mb-2">Market update: Sensex gains 500 points as banking stocks rally</h3>
                <p className="text-sm text-gray-600 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore...</p>
                <span className="text-xs text-blue-600">Read more →</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default StocksNews;