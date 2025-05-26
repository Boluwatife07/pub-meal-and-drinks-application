"use client";
import React, { useState, useEffect } from "react";
import { menuItems } from "@/api/db";
import { CiCircleChevLeft, CiHeart, CiClock2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import Bottomnav from "@/app/components/bottomnav";
import { useParams } from "next/navigation";


// type Props = {
//   params: {
//     id: string;
//   };
// };

export default function SingleProductPage({  }) {
  const [cart, setCart] = useState<any[]>([]);
  const [quantity, setQuantity] = useState(1); // Default quantity is 1
  const [notification, setNotification] = useState<string | null>(null); // Notification state

  // Find the product based on the id in params
const params = useParams();
  const id = params?.id as string;
    const product = menuItems.find(item => item.id === id);
  useEffect(() => {
    // Retrieve the cart from localStorage when the component mounts
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  if (!product) {
    return <div className="p-5 text-center">Item not found</div>;
  }

  // Handle increment
  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Handle decrement
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Handle add to cart with quantity
  const handleAddToCart = () => {
    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    let updatedCart;
    if (existingProductIndex > -1) {
      // Update the quantity of the existing product in the cart
      updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
    } else {
      // Add the new product with its quantity
      updatedCart = [...cart, { ...product, quantity }];
    }

    setCart(updatedCart);
    // Store the updated cart in localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Show the notification
    setNotification(`${product.name} has been added to the cart!`);

    // Hide the notification after 3 seconds
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className="flex flex-col gap-4 h-full w-full p-3">
      <div className="w-full flex justify-between items-center text-xl font-bold text-black pb-3 ">
      <Link href="/menu">
          <CiCircleChevLeft size={35}  />
        </Link>
        <div className="text-xl font-semibold">About This Menu</div>
        <div className="outline rounded-full  text-center flex items-center p-1">
          <CiHeart  className=" " />
        </div>
        </div>
      <div
        className="h-[40vh]  bg-cover  bg-no-repeat bg-center  rounded-2xl "
        style={{ backgroundImage: `url(${product.image})` }}
      >
      </div>

      <div className="flex flex-col gap-2 px-3 pb-5 border-b-2 border-[#EDEDED]">
        <div className="font-semibold text-3xl">{product.name}</div>
        <div className="text-red-700 font-bold text-xl">#{product.price}</div>
        <div className="text-[#878787] text-base font-normal flex justify-between gap-2 p-2 bg-[#FE8C000A] rounded-lg">
          {/* <div className="flex gap-2 items-center">
            <FiDollarSign className="text-red-700" />
          </div> */}
          <div className="flex gap-2 items-center">
            <CiClock2 className="text-red-700" /> 20-30mins
          </div>
          <div className="flex gap-2 items-center">
            <FaStar className="text-red-700" /> {product.rating}
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full">
        <div>
          <div className="text-lg font-bold px-2 mb-2">Description</div>
          <div className="text-[#878787] text-base font-medium p-2 rounded-lg">
            {product.description}
          </div>
        </div>
        {cart.length > 0 && (
          <div className="fixed flex bottom-[30%] right-0">
            <Link
              href="/cart"
              className="bg-red-700 text-white p-4 flex items-center gap-2 shadow-lg"
            >
              Proceed to Cart
            </Link>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 py-5">
        <div className="flex px-3 justify-between text-center w-full items-center">
          <div className="flex gap-7 text-lg items-center font-bold">
            <div
              className="cursor-pointer"
              onClick={decrement}
              aria-label="Decrement quantity"
            >
              -
            </div>
            <div>{quantity}</div>
            <div
              className="cursor-pointer"
              onClick={increment}
              aria-label="Increment quantity"
            >
              +
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center pt-10">
          <button
            onClick={handleAddToCart}
            className="flex justify-center items-center hover:bg-white hover:border hover:border-red-700 hover:text-red-700 gap-3 font-medium text-xl bg-red-700 text-white rounded-3xl p-4 w-full"
          >
            <IoCartOutline /> Add To Cart
          </button>
        </div>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-10 right-0 transform  bg-green-500 text-white p-3 rounded-lg shadow-lg">
          {notification}
        </div>
      )}

      <Bottomnav />
    </div>
  );
}
