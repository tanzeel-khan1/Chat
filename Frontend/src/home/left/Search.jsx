
import React from "react";
import { Search } from "lucide-react";

const SimpleSearch = () => {
  return (
    <div>
      <div className="px-6 py-4 flex justify-center">
      <div className="w-full max-w-xl">
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
          <input
            type="search"
            placeholder="Search..."
            className="flex-1 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none"
          />
          <button
            className="bg-blue-500 cursor-pointer rounded-full text-white px-6 py-3 hover:bg-blue-600 transition-colors flex items-center justify-center"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SimpleSearch;