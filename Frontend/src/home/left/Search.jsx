import React, { useState } from "react";
import { Search } from "lucide-react";
import GetAllUsers from "../../context/GetAllUsers";
import useConversation from "../../stateman/useConversation";
import toast from "react-hot-toast";

const SimpleSearch = () => {
  const [search, setSearch] = useState("");
  const [allusers] = GetAllUsers();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    const conversation = allusers?.find((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };

  return (
    <div className="px-4 py-4 flex justify-center">
      <div className="w-full max-w-xl">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center border border-gray-700 rounded-xl overflow-hidden bg-gray-900 shadow-sm hover:shadow-lg transition-shadow duration-300">
            {/* Input */}
            <input
              type="search"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-3 text-white placeholder-gray-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            />

            {/* Search Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 transition-colors duration-200 rounded-r-xl px-4 py-3 flex items-center justify-center"
            >
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SimpleSearch;
