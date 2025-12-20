import React from "react";
import Search from "./Search";
import User from "./User";
import { X } from "lucide-react";

const Left = ({ setShowSidebar }) => {
  return (
    <div className="w-full md:w-[30%] bg-black text-white h-screen flex flex-col overflow-hidden">
      {/* Mobile Header with Menu Toggle */}
      <div className="flex items-center justify-between p-4 md:hidden border-b border-gray-700">
        <h1 className="font-bold text-2xl">Chat's</h1>
        <button
          onClick={() => setShowSidebar(false)}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      
      {/* Desktop Title */}
      <h1 className="hidden md:block font-bold text-2xl md:text-3xl p-2 px-4 md:px-11 mt-2">Chat's</h1>
      
      <div className="flex-1 overflow-hidden flex flex-col">
        <Search />
        <hr className="border-gray-700" />
        <User setShowSidebar={setShowSidebar} />
      </div>
    </div>
  );
};

export default Left;
