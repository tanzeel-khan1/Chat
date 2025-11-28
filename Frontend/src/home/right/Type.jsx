import React from "react";
import { IoIosSend } from "react-icons/io";

const Type = () => {
  return (
    <>
      <div className="flex space-x-3 h-[8vh] text-center bg-gray-800">
        <div className="w-[70%] mx-4">
          <input
            type="text"
            placeholder="  Type here"
            className="w-full px-3 py-3 grow outline-none h-12 rounded-lg flex items-center  bg-slate-900 border-[1px] border-gray-700"
          />
        </div>

        <button className="text-3xl">
          <IoIosSend />
        </button>
      </div>
    </>
  );
};

export default Type;
