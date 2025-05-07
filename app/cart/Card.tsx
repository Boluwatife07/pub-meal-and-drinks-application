import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Card({ p_name, p_price, p_image }: any) {
  return (
    <div className="rounded-lg  flex gap-3 p-3 items-center border border-gray-100 h-full">
      <div>
        <input type="checkbox" name="" id="" className=" h-5 w-5" />
      </div>
      <div
        className={`w-[50%] overflow-hidden rounded-lg  bg-cover bg-no-repeat  bg-center`}
      >
        <img src={p_image} alt="" className="" />
      </div>
      <div className=" flex flex-col  w-full">
        <div className="  font-semibold text-xl">{p_name}</div>
        <div className=" text-red-700 font-bold text-lg">{p_price}</div>
        <div className="flex items-center justify-between">
          <div className="  items-center flex gap-4 text-2xl font-bold ">
            <div className="cursor-pointer ">-</div>
            <div className=" text-lg">2</div>
            <div className="cursor-pointer ">+</div>
          </div>
          <div>
            <FaRegTrashAlt className=" text-[#F14141] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
