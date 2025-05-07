import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const foodData = [
  {
    title: "Ordinary Burgers",
    image: "/burger1.png",
    rating: 4.9,
    distance: "190m",
    price: "17,230",
  },
  {
    title: "Burger With Meat",
    image: "/burger2.png",
    rating: 4.9,
    distance: "190m",
    price: "17,230",
  },
  {
    title: "Cheesy Burger",
    image: "/burger3.png",
    rating: 4.9,
    distance: "190m",
    price: "17,230",
  },
  {
    title: "Double Stack",
    image: "/burger4.png",
    rating: 4.9,
    distance: "190m",
    price: "17,230",
  },
];

export default function FoodGrid() {
  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
      {foodData.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-1  relative"
        >
          <div className="absolute top-2 right-2  bg-white rounded-full p-1 text-center">
            <FiHeart className="text-red-500" />
          </div>

          <img
            src={item.image}
            alt={item.title}
            className="w-full  object-cover"
          />

          <div className="p-2">
            <h3 className="text-sm text-black font-semibold">{item.title}</h3>

            <div className="flex items-center justify-between text-xs text-black gap-2 mt-1">
                <div>
              <FaStar className="text-red-400" size={12} />
              <span>{item.rating}</span>
              </div>
            <div className="text-orange-500 font-semibold mt-1 text-sm">
              ${item.price}
            </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}
