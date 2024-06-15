import React from 'react';
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

const Sidebar2 = () => {
  return (
    <div className="group h-screen w-[230px] fixed left-0 overflow-y-auto">
        <div className="absolute left-0 h-full w-full px-2 overflow-y-auto scrollbar-none group-hover:scrollbar-thin">
            <div className="flex flex-col p-2">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-4 rounded-lg items-center py-2 px-3 text-sm hover:bg-gray-200 cursor-pointer">
                        <GoHomeFill size={24} className="mr-4"/>
                        <h1>Home</h1>
                    </div>
                    <div className="flex gap-4 rounded-lg items-center py-2 px-3 text-sm hover:bg-gray-200 cursor-pointer">
                        <SiYoutubeshorts size={24} className="mr-4"/>
                        <h1>Shorts</h1>
                    </div>
                    <div className="flex gap-4 rounded-lg items-center py-2 px-3 text-sm hover:bg-gray-200 cursor-pointer">
                        <MdSubscriptions size={24} className="mr-4"/>
                        <h1>Subscriptions</h1>
                    </div>
                    <hr className="w-full" />
                    <div className="flex gap-4 rounded-lg items-center py-2 px-3 text-lg hover:bg-gray-200 cursor-pointer">
                        <h1 className="font-semibold">You &gt;</h1>
                    </div>
                    {/* Repeat the content to enable scrolling */}
                    {Array(10).fill(
                        <>
                            <div className="flex gap-4 rounded-lg items-center py-2 px-3 text-sm hover:bg-gray-200 cursor-pointer">
                                <GoHomeFill size={24} className="mr-4"/>
                                <h1>Home</h1>
                            </div>
                            <div className="flex gap-4 rounded-lg items-center py-2 px-3 text-sm hover:bg-gray-200 cursor-pointer">
                                <SiYoutubeshorts size={24} className="mr-4"/>
                                <h1>Shorts</h1>
                            </div>
                            <div className="flex gap-4 rounded-lg items-center py-2 px-3 text-sm hover:bg-gray-200 cursor-pointer">
                                <MdSubscriptions size={24} className="mr-4"/>
                                <h1>Subscriptions</h1>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Sidebar2;
