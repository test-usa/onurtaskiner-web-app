"use client";
import { useState } from "react";
import Image from "next/image";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";

import profile from "../../../assets/images/profile.png";
import searchSliders from "../../../assets/icon/searchSliders1.png";
import fIcon from "../../../assets/icon/fIcon1.png";

const AdminNavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <div className="w-full px-10 py-4 mx-auto h-full bg-[#003366]/20 backdrop-blur-lg pt-2">
      <div className="w-full mt-2">
        <div className="flex sm:flex-row items-start justify-between gap-4 sm:gap-0">
          {/* Search Bar */}
          <div className="px-2 w-full flex flex-col justify-start">
            <div className="w-full max-w-[782px] h-[44px] bg-white border border-gray-300 rounded-[10px] px-4 flex items-center justify-between shadow-sm">
              {/* Left - Search Icon & Input */}
              <div className="flex items-center gap-2 flex-grow">
                <IoIosSearch size={20} className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full outline-none bg-transparent text-sm md:text-base placeholder:text-gray-400"
                />
              </div>

              {/* Right - Filter & Slider Icons */}
              <div className="flex items-center gap-1 pl-2">
                <Image
                  src={searchSliders}
                  alt="Search Sliders"
                  width={22}
                  height={23}
                  className="cursor-pointer"
                />
                <Image
                  src={fIcon}
                  alt="Filter Icon"
                  width={14}
                  height={10}
                  className="cursor-pointer"
                />
              </div>
            </div>

            {/* Icons below Search Bar aligned right */}
          </div>

          {/* Notification & Profile */}
          <div className="flex items-center justify-center gap-4 relative ml-auto">
            <button className="btn btn-primary text-white h-10 w-10 flex items-center justify-center">
              <IoMdNotificationsOutline size={25} />
            </button>

            <div
              className="h-10 w-10 rounded-full overflow-hidden cursor-pointer"
              onClick={toggleDropdown}
            >
              <Image src={profile} alt="Profile" height={40} width={40} />
            </div>

            {isDropdownOpen && (
              <div className="absolute top-[50px] right-0 bg-white shadow-md rounded-lg w-40 p-2 flex flex-col items-start">
                <button className="text-sm text-gray-600 hover:bg-gray-200 w-full text-left px-4 py-2">
                  Profile
                </button>
                <button className="text-sm text-gray-600 hover:bg-gray-200 w-full text-left px-4 py-2">
                  Settings
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavBar;
