import React, { useState } from 'react'
import { GoHome, GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineSmartDisplay } from "react-icons/md";

const Sidebar = () => {
    const [homeClick, setHomeClick] = useState(false);
    const [shortClick, setShortClick] = useState(false);
    const [subsClick, setSubsClick] = useState(false);
    const [youClick, setYouClick] = useState(false);
  return (
    <div className="h-full w-20 ml-[5px] relative">
        <div className="absolute left-0">
            <div className="flex flex-col gap-4">
                <div onClick={() => setHomeClick(true)} className="rounded-lg w-16 flex flex-col gap-2 items-center justify-center mx-auto p-3 hover:cursor-pointer hover:bg-gray-200">
                    {homeClick == true ? <GoHomeFill size={24}/> : <GoHome size={24}/>}
                    <p className="text-[10px]">Home</p>
                </div>
                <div className="rounded-lg w-16 flex flex-col gap-2 items-center justify-center mx-auto p-3 hover:cursor-pointer hover:bg-gray-200">
                    <SiYoutubeshorts size={24}/>
                    <p className="text-[10px]">Shorts</p>
                </div>
                <div className="rounded-lg w-16 flex flex-col gap-2 items-center justify-center mx-auto p-3 hover:cursor-pointer hover:bg-gray-200">
                    <MdSubscriptions size={24}/>
                    <p className="text-[10px]">Subscriptions</p>
                </div>
                <div className="rounded-lg w-16 flex flex-col gap-2 items-center justify-center mx-auto p-3 hover:cursor-pointer hover:bg-gray-200">
                    <MdOutlineSmartDisplay size={24}/>
                    <p className="text-[10px]">You</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
