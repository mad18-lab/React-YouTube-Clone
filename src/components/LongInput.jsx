import React from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";

const LongInput = () => {
  return (
    <>
        <div className="flex">
            <div className="border-gray-300 border-[1px] items-center justify-center mx-auto px-5 py-[10px] rounded-tr-3xl rounded-br-3xl">
                <HiMagnifyingGlass size={20}/>
            </div>
            <input type="text" id="search" name="search" className="px-3 py-[5px] w-[550px]" placeholder="Search" />
        </div>
    </>
  )
}

export default LongInput
