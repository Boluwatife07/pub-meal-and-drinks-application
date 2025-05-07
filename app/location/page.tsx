import { ShoppingBag } from 'lucide-react'
import React from 'react'
import { ImSpoonKnife } from 'react-icons/im'

export default function page() {
  return (
    <div>
        <div className=' bg-white h-screen'>
            <div className=' flex h-full justify-center items-center '>
            <div className=' grid grid-cols-2 gap-10'>
            <div className=' bg-red-700 py-10 text-center justify-center px-4 rounded-lg flex flex-col gap-3'>
                <div className='   rounded-[50%] border-4 border-white justify-center flex p-1' >
                <ImSpoonKnife size={80} className=' bg-white text-red-500 rounded-[50%] px-4 border' />
                </div>
                <div className=' text-lg font-bold text-white'>Dine-in</div>
                </div>
                <div className='  py-10 text-center justify-center px-4 rounded-lg border border-gray-400 flex flex-col gap-3'>
                    <div className=' flex justify-center'>
                <ShoppingBag size={80} className='  text-red-500 rounded-[50%] px-4 ' />
                </div>
                <div className=' text-lg font-bold text-gray-700'>Take-away</div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
