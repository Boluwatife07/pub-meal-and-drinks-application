"use client"
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import Menugrid from "./menugrid";
import Filter from "./filter";
import BottomNav from "../components/bottomnav";
import { useState } from "react";

export default function Page() {
    const [selectedType, setSelectedType] = useState("");
  return (
    <div className="">
      <div className="relative min-h-[200px]">
        <div className="  absolute top-0 left-0 w-full h-full  bg-[url('/background.jpg')] bg-cover bg-no-repeat bg-center p-5">
          <div className=" backdrop-blur-xs  border h-full border-white p-4 rounded-lg shadow-xl ">
          <div className="flex justify-end gap-5  text-white">
            <button className="border p-1 rounded-full flex justify-center items-center" aria-label="Search">
              <CiSearch size={20} />
            </button>
            <button className="border p-1 text-center  rounded-full flex justify-center items-center" aria-label="Notifications">
              <IoIosNotificationsOutline size={20} />
            </button>
          </div>

       <div className="  mt-5 flex iems-center justify-center ">
  <h1 className="text-xl md:text-3xl border-b-2  text-white font-semibold">
    Good food, Good Life.
  </h1>
</div>
</div>
        </div>
      </div>

      <div className="flex justify-between p-5">
        <h1>Find by Category</h1>
        <h1 className="text-red-800">See all</h1>
      </div>
      <Filter selectedType={selectedType} onSelect={setSelectedType} />
      <Menugrid type={selectedType} />
      <BottomNav  />
    </div>
  );
}
