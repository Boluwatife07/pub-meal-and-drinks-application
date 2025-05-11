"use client";
import React, { useEffect, useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { TbRosetteDiscountFilled } from "react-icons/tb";
import Card from "./Card";
import { menuItems } from "@/api/db";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);
  const router = useRouter();

  const handleDelete = (indexToRemove: number) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate the totals based on updated quantities
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 0; // Placeholder for discount logic
  const total = subtotal - discount;

  return (
    <div className="flex flex-col gap-5 h-screen w-full p-3">
      {/* Head */}
      <div className="flex justify-between items-center w-full">
        <CiCircleChevLeft onClick={() => router.back()}className="text-3xl rounded-full h-fit" />
        <div>My Cart</div>
        <BsThreeDots className="text-lg rounded-full h-fit p-1 border" />
      </div>

      {/* Top Part */}
      <div className="py-2 w-full flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <div className="text-[#878787] font-medium text-sm">Dining Location</div>
          <div className="font-semibold text-base">Dine-in</div>
        </div>
        <Link className="cursor-pointer border text-red-700 font-bold text-base rounded-3xl p-2 hover:bg-red-700 hover:text-white" href={"/"}>
          Change location
        </Link>
      </div>

      {/* Promo Code */}
      <div className="px-3 py-2 rounded-3xl border border-[#EDEDED] w-full flex justify-between items-center">
        <TbRosetteDiscountFilled className="text-red-700 text-3xl" />
        <input type="text" className="outline-none" placeholder="Promo Code" />
        <div className="cursor-pointer bg-red-700 text-white font-bold text-base rounded-3xl px-4 p-2 hover:bg-white hover:text-red-700 border hover:border-red-700">
          Apply
        </div>
      </div>

      {/* Products */}
      <div className="flex flex-col gap-5 py-4">
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500">Your cart is empty.</div>
        ) : (
          cartItems.map((item, index) => (
            <Card
              key={index}
              p_name={item.name}
              p_price={`$${item.price}`}
              p_image={item.image}
              quantity={item.quantity}
              onDelete={() => handleDelete(index)}
              onQuantityChange={(newQuantity) => handleQuantityChange(index, newQuantity)}
            />
          ))
        )}
      </div>

      {/* Payment Summary */}
      <div className="rounded-lg flex flex-col gap-4 p-4 border border-[#EDEDED]">
        <div className="font-semibold text-lg">Payment Summary</div>
        <div className="flex justify-between w-full">
          <div className="font-medium text-base text-[#878787]">
            Total Items ({totalItems})
          </div>
          <div className="font-bold text-base">${subtotal.toFixed(2)}</div>
        </div>
        <div className="flex justify-between w-full">
          <div className="font-medium text-base text-[#878787]">Service Fee</div>
          <div className="font-bold text-base">0.00</div>
        </div>
        <div className="flex justify-between w-full">
          <div className="font-medium text-base text-[#878787]">Discount</div>
          <div className="font-bold text-base text-red-700">-$0.00</div>
        </div>
        <div className="flex justify-between w-full">
          <div className="font-medium text-base text-[#878787]">Total</div>
          <div className="font-bold text-base">${total.toFixed(2)}</div>
        </div>
      </div>

      {/* Order Button */}
      <div className="w-full flex justify-center cursor-pointer bg-red-700 text-white font-bold text-2xl rounded-4xl p-4 hover:bg-white hover:text-red-700 border hover:border-red-700">
        Order Now
      </div>
    </div>
  );
}
