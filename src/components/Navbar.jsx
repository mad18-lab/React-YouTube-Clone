import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdMic } from "react-icons/io";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsBell } from "react-icons/bs";
import logo from "../assets/images/logo.png"
import user from "../assets/images/user.png"
import Feed from './Feed';
import Input from './Input';
import LongInput from './LongInput';

const Navbar = () => {
    const [menuClick, setMenuClick] = useState(false);
    const [searchClick, setSearchClick] = useState(false);

  return (
    <div>
        <div className="bg-white sticky top-0 z-50 flex justify-between px-4 py-2 items-center w-full">
            <div className="flex gap-5 items-center">
                <div className="hover:cursor-pointer hover:rounded-full hover:bg-gray-200 p-3">
                    <RxHamburgerMenu size={20} onClick={() => setMenuClick(!menuClick)}/>
                </div>
                <div className="flex hover:cursor-pointer">
                    <img src={logo} alt="YoutubeLogo" className="w-20" />
                    <sup>IN</sup>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <div className="flex">
                    <div onFocus={() => setSearchClick(true)} onBlur={() => setSearchClick(false)}>
                        {searchClick ? <LongInput /> : <Input />}
                    </div>
                    <div className="bg-gray-200 border-gray-300 border-[1px] items-center justify-center mx-auto px-5 py-[10px] rounded-tr-3xl rounded-br-3xl h-[40px]">
                        <HiMagnifyingGlass size={20}/>
                    </div>
                </div>
                <div className="rounded-full p-3 bg-gray-200">
                    <IoMdMic size={20}/>
                </div>
            </div>
            <div className="flex gap-8 items-center">
                <div className="flex gap-9">
                    <AiOutlineVideoCameraAdd size={24}/>
                    <BsBell size={24}/>
                </div>
                <div className="w-12 h-12 rounded-full p-1">
                    <img src={user} alt="/" className="object-contain" />
                </div>
            </div>
        </div>
        {menuClick==true ? <Feed clicked="true" /> : <Feed clicked="false" />}
    </div>
  )
}

export default Navbar
