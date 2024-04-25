import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const Buttoncart = () => {
  return (
    <div>
      <button className=' bg-[#0D5077] text-white px-9 py-3 rounded-full mb-4 ' >
        <div className='flex gap-3'>

        Add to cart 
      <FaShoppingCart size={20} />
        </div>
    </button>
    </div>
  )
}

export default Buttoncart
