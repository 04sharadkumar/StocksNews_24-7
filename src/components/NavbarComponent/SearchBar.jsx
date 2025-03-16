import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className="relative w-full md:w-auto">
      <input
        type="text"
        placeholder="Search news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearch}
        className="bg-gray-900 text-white px-4 py-2 rounded-full w-full md:w-52 border border-gray-700 focus:ring-2 focus:ring-blue-400 transition-all duration-200"
      />
      <FaSearch className="absolute right-3 top-3 text-gray-400 cursor-pointer" />
    </div>
  );
};

export default SearchBar;
