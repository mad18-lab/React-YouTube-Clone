import React from 'react';
import logo from "../assets/images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

const VidSidebar = ({ isClicked, setIsClicked }) => {
  return (
    <div
      className={`fixed inset-0 transform ${
        isClicked ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-150 ease-in-out z-50 bg-gray-600 bg-opacity-75`}
    >
      <div className="w-64 h-full bg-white">
        <div className="px-2 py-8 overflow-y-auto">
          <div className="flex gap-5 items-center">
            <div
              className="hover:cursor-pointer hover:rounded-full hover:bg-gray-200 p-3"
              onClick={() => setIsClicked(!isClicked)}
            >
              <RxHamburgerMenu size={20} />
            </div>
            <div className="flex hover:cursor-pointer">
              <img src={logo} alt="YoutubeLogo" className="w-20" />
              <sup>IN</sup>
            </div>
          </div>
          <div className="flex flex-col p-2">
            <div className="flex flex-col gap-2">
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
              <hr className="w-full" />
              <div className="flex gap-4 rounded-lg items-center py-2 px-3 text-lg hover:bg-gray-200 cursor-pointer">
                <h1 className="font-semibold">You &gt;</h1>
              </div>
              {Array(10)
                .fill()
                .map((_, index) => (
                  <div key={index}>
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
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VidSidebar;
