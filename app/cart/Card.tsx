import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Card({ p_name, p_price, p_image }: any) {
  return (
    <div className="rounded-lg  flex gap-3 p-3 items-center shadow-lg h-full">
      <div>
        <input type="checkbox" name="" id="" className=" h-6 w-6" />
      </div>
      <div
        className={`w-[50%] overflow-hidden rounded-lg  bg-cover bg-no-repeat  bg-center`}
      >
        <img src={p_image} alt="" className="" />
      </div>
      <div className=" flex flex-col  w-full">
        <div className="  font-semibold text-xl">{p_name}</div>
        <div className=" text-[#FE8C00] font-bold text-lg">{p_price}</div>
        <div className="flex items-center justify-between">
          <div className=" border border-[#dfd5d5] rounded-3xl px-3 py-1 flex gap-7 text-2xl font-bold ">
            <div className="cursor-pointer ">-</div>
            <div>2</div>
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
