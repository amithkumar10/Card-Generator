import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";

const Card = ({ input }) => {
  return (
    <div className=" relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden">
      <div className="flex justify-between">
        <FaRegFileAlt />
        <IoMdCloseCircle />
      </div>
      <p>{input}</p>
      <button
        className=" absolute left-0 h-[3rem] bg-green-500 w-full  bottom-0  items-center justify-center text-white font-semibold"
        onClick={() => {}}
      >
        Download
      </button>
    </div>
  );
};

export default Card;
