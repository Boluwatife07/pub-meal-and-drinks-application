import React from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { TbRosetteDiscountFilled } from "react-icons/tb";
import Card from "./Card";
import { menuItems } from "@/api/db";

export default function page() {
  console.log("menuItems", menuItems);

  const stews = menuItems.filter((item) => item.type === "stews");
  const proteins = menuItems.filter((item) => item.type === "proteins");
  const allItems = [...stews, ...proteins];

  return (
    <div>
      <div className=" flex flex-col gap-5  h-screen w-full p-3 ">
        {/* head  */}
        <div className=" flex justify-between items-center w-full">
          <div className="  rounded-full  h-fit text-3xl ">
            <CiCircleChevLeft className="" />
          </div>
          <div> My Cart </div>
          <div className=" outline rounded-full  h-fit text-lg p-1">
            <BsThreeDots />
          </div>
        </div>

        {/* top part */}
        <div className=" py-2 w-full flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <div className=" text-[#878787] font-medium text-sm">
              Dining Location
            </div>
            <div className=" font-semibold text-base">Dine-in</div>
          </div>
          <div className="cursor-pointer border  text-red-700 font-bold text-base rounded-3xl p-2 hover:bg-red-700 hover:text-white">
            Change location
          </div>
        </div>

        <div className=" px-3 py-2 rounded-3xl border border-[#EDEDED] w-full flex justify-between items-center">
          <div>
            <TbRosetteDiscountFilled className=" text-red-700 text-3xl" />
          </div>
          <div>
            <input
              type="text"
              className=" outline-none"
              placeholder="Promo Code"
            />
          </div>
          <div className="cursor-pointer bg-red-700 text-white font-bold text-base rounded-3xl px-4 p-2 hover:bg-white hover:text-red-700 border hover:border-red-700">
            Apply
          </div>
        </div>

        {/* products  */}
        <div className=" flex flex-col gap-5 py-4">
          <Card
            p_name={"Burger With Meat"}
            p_price={"$15"}
            p_image={"/burger4.png"}
          />
          <Card
            p_name={"Ordinary Burger"}
            p_price={"$15"}
            p_image={"/burger1.png"}
          />
          <Card
            p_name={"Vegan Burger"}
            p_price={"$15"}
            p_image={"/burger2.png"}
          />
        </div>

        {/* payment */}
        <div className=" rounded-lg flex flex-col gap-4 p-4 border border-[#EDEDED]">
          <div className=" font-semibold text-lg">Payment Summary</div>
          <div className=" flex justify-between w-full ">
            <div className=" font-medium text-base text-[#878787]">
              Total Items (3)
            </div>
            <div className=" font-bold text-base">$30</div>
          </div>
          <div className=" flex justify-between w-full ">
            <div className=" font-medium text-base text-[#878787]">
              Delivery Fee
            </div>
            <div className=" font-bold text-base">Free</div>
          </div>
          <div className=" flex justify-between w-full ">
            <div className=" font-medium text-base text-[#878787]">
              Discount
            </div>
            <div className=" font-bold text-base text-red-700">-$5</div>
          </div>
          <div className=" flex justify-between w-full ">
            <div className=" font-medium text-base text-[#878787]">Total</div>
            <div className=" font-bold text-base">$25</div>
          </div>
        </div>

        <div className="">
          <div className="w-full flex justify-center cursor-pointer bg-red-700 text-white font-bold text-2xl rounded-4xl p-4 hover:bg-white hover:text-red-700 border hover:border-red-700">
            Order Now
          </div>
        </div>
      </div>
    </div>
  );
}
