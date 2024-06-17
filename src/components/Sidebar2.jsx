import React from 'react';
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

const Sidebar2 = () => {
  return (
    <div className="w-[240px] h-screen">
        <div className="group h-full w-full left-0 overflow-y-auto sticky">
            <div className="absolute left-0 px-4 overflow-y-auto scrollbar-none group-hover:scrollbar-thin">
                <div className="flex flex-col p-4">
                    <div className="flex flex-col gap-2">
                        {Array(20).fill(
                            <>
                                <div className="flex gap-4 rounded-lg items-center py-2 px-3 text-sm hover:bg-gray-200 cursor-pointer">
                                    <GoHomeFill size={24} className="mr-4" />
                                    <h1>Home</h1>
                                </div>
                                <div className="flex gap-4 rounded-lg items-center py-2 px-3 text-sm hover:bg-gray-200 cursor-pointer">
                                    <SiYoutubeshorts size={24} className="mr-4" />
                                    <h1>Shorts</h1>
                                </div>
                                <div className="flex gap-4 rounded-lg items-center py-2 px-3 text-sm hover:bg-gray-200 cursor-pointer">
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
