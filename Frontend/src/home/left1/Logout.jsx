import React from "react";
import { RiLogoutBoxLine } from "react-icons/ri";

const Logout = () => {
  return (
    <div className=" w-[4%] bg-slate-950 text-white flex flex-col justify-end">
      <div className="p-2 align-bottom">
        <button>
          <RiLogoutBoxLine className="text-5xl p-3 cursor-pointer hover:bg-gray-600 rounded-full duration-300" />
        </button>
      </div>
    </div>
  );
};

export default Logout;
