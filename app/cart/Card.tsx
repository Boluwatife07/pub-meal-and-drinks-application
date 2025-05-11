import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Card({ p_name, p_price, p_image, quantity, onDelete, onQuantityChange }: any) {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleIncrement = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleDecrement = () => {
    if (itemQuantity > 1) {
      const newQuantity = itemQuantity - 1;
      setItemQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="rounded-lg flex gap-3 p-3 items-center border border-gray-100 h-full">
      <input type="checkbox" className="h-5 w-5" />

      <div className="grid grid-cols-3 w-full">
        {/* Left side: Image and product info */}
        <div className="flex w-full gap-7 col-span-2">
          {/* Image */}
          <div className="w-[90%] h-auto overflow-hidden rounded-lg">
            <img
              src={p_image}
              alt={p_name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between w-full">
            <div className="font-medium text-base">{p_name}</div>
            <div className="text-red-700 font-bold text-sm">{p_price}</div>
            <div className="flex items-center justify-between">
              <div className="flex gap-4 text-2xl font-bold items-center">
                <div className="cursor-pointer" onClick={handleDecrement}>-</div>
                <div className="text-lg">{itemQuantity}</div>
                <div className="cursor-pointer" onClick={handleIncrement}>+</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Trash icon */}
        <div className="flex justify-end items-center pr-4 md:pr-10 text-lg md:text-2xl">
          <FaRegTrashAlt onClick={onDelete} className="text-[#F14141] cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
