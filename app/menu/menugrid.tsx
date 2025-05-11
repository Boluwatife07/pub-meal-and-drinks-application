"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { menuItems } from "@/api/db";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function FoodGrid({ type }) {
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = (id) => {
    if (!favorites.includes(id)) {
      setFavorites((prev) => [...prev, id]);
      toast.success("Added to favorites");
    } else {
      setFavorites((prev) => prev.filter((favId) => favId !== id));
      toast("Removed from favorites", { icon: "💔" });
    }
  };

  const filteredItems = type
    ? menuItems.filter((item) => item.type?.toLowerCase() === type.toLowerCase())
    : menuItems;

  return (
    <div className="px-4 grid grid-cols-2 md:grid-cols-3 gap-4">
      <Toaster position="top-center" />
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg p-1 shadow h-[250px] relative"
        >
          {/* Heart button */}
          <button
            onClick={() => handleFavorite(item.id)}
            className="absolute top-2 right-2 bg-white rounded-full p-2 text-center z-10"
          >
            <FiHeart
              className={`text-red-500 ${
                favorites.includes(item.id) ? "fill-red-500" : ""
              }`}
            />
          </button>

          <Link href={`/single_product/${item.id}`}>
            <img
              src={item.image}
              alt={item.name}
              className="w-full object-cover object-center rounded-lg h-[70%]"
            />

            <div className="p-2">
              <h3 className="text-sm text-black font-semibold">{item.name}</h3>

              <div className="flex items-center justify-between text-xs text-black gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <FaStar className="text-red-400" size={12} />
                  <span>{item.rating}</span>
                </div>
                <div className="text-orange-500 font-semibold mt-1 text-sm">
                  ${item.price}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
