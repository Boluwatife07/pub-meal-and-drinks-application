import React from "react";
import { CiCircleChevLeft, CiHeart, CiClock2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { FiDollarSign } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

export default function page() {
  return (
    <div>
      <div className=" flex flex-col gap-4  h-screen w-full p-3 ">
        {/* top part */}
        <div className="h-[40%] text-3xl text-white bg-[url('/burger.jpg')] bg-cover bg-no-repeat  bg-center p-5 rounded-2xl w-full flex justify-between">
          <div>
            <CiCircleChevLeft className="" />
          </div>
          <div className=" text-xl font-semibold"> About This Menu</div>
          <div className=" outline rounded-full  h-fit text-xl p-1">
            {" "}
            <CiHeart className="" />
          </div>
        </div>

        {/* name part  */}
        <div className="  flex flex-col gap-2 px-3 pb-5 border-b-2 border-[#EDEDED]">
          <div className=" flex flex-col gap-2 ">
            <div className="  font-semibold text-3xl">Burger With Meat</div>
            <div className=" text-[#FE8C00] font-bold text-xl">$12,230</div>
          </div>
          <div className=" text-[#878787] text-base font-normal flex justify-between gap-2 p-2 bg-[#FE8C000A] rounded-lg">
            <div className="flex gap-2 items-center">
              <FiDollarSign className="text-[#FE8C00]" /> Free Delivery
            </div>
            <div className="flex gap-2 items-center">
              <CiClock2 className="text-[#FE8C00]" /> 20-30
            </div>
            <div className="flex gap-2 items-center">
              <FaStar className="text-[#FE8C00]" /> 4.5
            </div>
          </div>
        </div>

        {/* description part  */}
        <div className=" ">
          <div className=" text-lg font-bold  px-2">
            <div className="flex gap-2 items-center">Description</div>
          </div>
          <div className=" text-[#878787] text-base font-medium  p-2 rounded-lg">
            <div className="flex gap-2 items-center">
              Burger With Meat is a typical food from our restaurant that is
              much in demand by many people, this is very recommended for you.
            </div>
          </div>
        </div>

        {/* add to cart  */}
        <div className=" flex flex-col gap-4 py-5">
          <div className="flex px-3 justify-between items-center w-full ">
            <div className=" flex gap-7 text-2xl font-bold ">
              <div className="">-</div>
              <div>2</div>
              <div className="">+</div>
            </div>
            <div className="text-[#FE8C00] font-bold text-3xl">$24,460</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className=" flex justify-center items-center gap-3 font-medium text-xl bg-[#FE8C00] text-white rounded-3xl p-4 w-full">
            <IoCartOutline /> Add To Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
