"use client";
import { useState } from "react";
import Image from "next/image";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";

import profile from "../../../assets/images/profile.png";
import { FaUserCheck } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
/* import searchSliders from "../../../assets/icon/searchSliders1.png";
import fIcon from "../../../assets/icon/fIcon3.png"; */

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
              {/* <div className="flex items-center gap-1 pl-2">
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
                  width={10}
                  height={9}
                  className="cursor-pointer"
                />
              </div> */}
            </div>

            {/* Icons below Search Bar aligned right */}
          </div>

          {/* Notification & Profile */}
          <div className="flex items-center justify-center gap-4 relative ml-auto">
            <button className="btn btn-primary text-black h-10 w-10 flex items-center justify-center">
              <IoMdNotificationsOutline size={25} />
            </button>

            <div
              className="h-10 w-10 rounded-full overflow-hidden cursor-pointer"
              onClick={toggleDropdown}
            >
              <Image src={profile} alt="Profile" height={40} width={40} />
            </div>

            {isDropdownOpen && (
              <div className="absolute top-14 right-0 bg-white shadow-lg rounded-lg w-48 py-2 z-50 transition-all duration-200 ease-in-out">
                <button className=" text-sm text-gray-700 hover:bg-gray-100 w-full text-left px-5 py-2 transition-colors duration-150">
                  <div className="flex justy-center item-center gap-2">
                    <div>
                      <FaUserCheck />
                    </div>
                    <div>Profile</div>
                  </div>
                </button>
                <button className="  text-sm text-gray-700 hover:bg-gray-100 w-full text-left px-5 py-2 transition-colors duration-150">
                  <div className="flex justify-start item-center gap-2">
                    <div>
                      <IoSettingsOutline />
                    </div>
                    <div> Settings</div>
                  </div>
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
