import React, { useState } from 'react';
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

const Sidebar2 = () => {
    const [activeIndex, setActive] = useState(0);
  return (
    <div>
        <div className="group h-full w-[240px] left-0 overflow-y-auto">
            <div className="absolute left-0 scrollbar-none group-hover:scrollbar-thin overflow-y-auto">
                <div className="flex flex-col p-4">
                    <div className="flex flex-col gap-2">
                        {Array(20).fill(
                            <>
                                <div onClick={() => setActive(1)} className={`flex gap-4 rounded-lg items-center py-2 px-3 text-sm hover:bg-gray-200 cursor-pointer ${activeIndex === 1 ? "bg-gray-200" : "hover:bg-gray-200"}`}>
                                    <GoHomeFill size={24} className="mr-4" />
                                    <h1>Home</h1>
                                </div>
                                <div onClick={() => setActive(2)} className={`flex gap-4 rounded-lg items-center py-2 px-3 text-sm hover:bg-gray-200 cursor-pointer ${activeIndex === 2 ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>
                                    <SiYoutubeshorts size={24} className="mr-4" />
                                    <h1>Shorts</h1>
                                </div>
                                <div onClick={() => setActive(3)} className={`flex gap-4 rounded-lg items-center py-2 px-3 text-sm hover:bg-gray-200 cursor-pointer ${activeIndex === 3 ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>
                                    <MdSubscriptions size={24} className="mr-4" />
                                    <h1>Subscriptions</h1>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Sidebar2;
