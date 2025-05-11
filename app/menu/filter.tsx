import React from 'react';

const icon = [
  { img: "/main.png", name: "main" },
  { img: "/swallow.png", name: "Swallow" },
  { img: "/drinks.png", name: "Drink" },
  { img: "/proteins.png", name: "Proteins" },
 { img: "/snacks.png", name: "snacks" }


];

export default function Filter({ selectedType, onSelect }) {
  const icon = [
    { img: "/mainicon.jpeg", name: "main" },
    { img: "/swallowicon.jpeg", name: "swallow" },
    { img: "/drinks.png", name: "drink" },
    { img: "/chicken icon.jpeg", name: "protein" },
    { img: "/snackicon.jpeg", name: "snack"},
  ];
  const handleSelect = (type) => {
    if (selectedType === type) {
      onSelect(""); // Unselect if already selected
    } else {
      onSelect(type); // Select new filter
    }
  };

  return (
    <div className="py-2 px-3 grid grid-cols-5 w-full">
      {icon.map((item, index) => (
        <div key={index} className="flex justify-center ">
          <div
            onClick={() => handleSelect(item.name)}
            className={`group flex flex-col gap-2 items-center px-2 py-1 rounded-xl cursor-pointer transition-all ease-in-out duration-200 ${
              selectedType === item.name ? "bg-red-700 text-white" : "hover:bg-red-700"
            }`}
          >
            <div>
              <img src={item.img} alt={item.name}  className=' h-7 w-7 object-center object-cover rounded-lg'/>
            </div>
            <div
              className={`text-sm md:text-lg font-medium capitalize transition-all ease-in-out ${
                selectedType === item.name ? "text-white" : "text-gray-500 group-hover:text-white"
              }`}
            >
              {item.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}