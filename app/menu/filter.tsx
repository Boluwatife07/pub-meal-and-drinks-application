import React from 'react'

const icon = [
    {
        img: "/burger.png",
        name: "burger"
    },
    {
        img: "/taco.png",
        name: "Taco"
    },
    {
        img: "/drinks.png",
        name: "drinks"
    },
    {
        img: "/pizza.png",
        name: "pizza"
    }

]

export default function filter() {
  return (
    <div className=' '>
<div className="p-4 grid grid-cols-4  w-full">
      {icon.map((item, index) => (
        <div
          key={index}
          className='flex justify-center  '
        >
            <div className=' flex flex-col gap-2 items-center p-2 rounded-xl hover:bg-red-700 '>
                <div><img src={item.img} alt="" /></div>
                <div className='text-gray-500 text-lg font-medium capitalizen transition-all ease-in-out hover:text-white '>{item.name}</div>

            </div>
         </div>
      ))}
    </div>
    </div>
  )
}
