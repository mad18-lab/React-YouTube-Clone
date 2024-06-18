import React from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";

const LongInput = () => {
  return (
    <div className="relative flex gap-5 items-center">
      <HiMagnifyingGlass size={18} className="absolute left-4 text-gray-700 mr-8" />
      <input type="text" id="search" name="search" placeholder="Search"
      className="border-gray-300 border-[1px] rounded-bl-3xl rounded-tl-3xl pl-10 py-[8px] w-[580px] h-[40px]" />
    </div>
  )
}

export default LongInput
