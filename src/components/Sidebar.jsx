import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { GoHome, GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineSmartDisplay } from "react-icons/md";

const Sidebar = () => {
    const [activeIndex, setActive] = useState(0);
  return (
    <div>
        <div className="fixed left-0 w-20 h-full bg-white">
            <div>
                <div className="flex flex-col gap-4">
                    <div onClick={() => setActive(1)} className={`rounded-lg w-16 flex flex-col gap-2 items-center justify-center mx-auto p-3 hover:cursor-pointer ${activeIndex === 1 ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>
                        {activeIndex === 1 ? <GoHomeFill size={24} /> : <GoHome size={24}/>}
                        <p className="text-[10px]">Home</p>
                    </div>
                    <div onClick={() => setActive(2)} className={`rounded-lg w-16 flex flex-col gap-2 items-center justify-center mx-auto p-3 hover:cursor-pointer ${activeIndex === 2 ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>
                        <SiYoutubeshorts size={24} />
                        <p className="text-[10px]">Shorts</p>
                    </div>
                    <div onClick={() => setActive(3)} className={`rounded-lg w-16 flex flex-col gap-2 items-center justify-center mx-auto p-3 hover:cursor-pointer ${activeIndex === 3 ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>
                        <MdSubscriptions size={24} />
                        <p className="text-[10px]">Subscriptions</p>
                    </div>
                    <div onClick={() => setActive(4)} className={`rounded-lg w-16 flex flex-col gap-2 items-center justify-center mx-auto p-3 hover:cursor-pointer ${activeIndex === 4 ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>
                        <MdOutlineSmartDisplay size={24} />
                        <p className="text-[10px]">You</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
