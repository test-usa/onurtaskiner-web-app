"use client";
import { useState } from "react";
import profile from "../../../assets/images/profile.png";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";
import Wrapper from "@/components/wrapper/wrapper";

const AdminNavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <Wrapper>
      <div className="w-full mt-4 ">
        <div className="flex sm:flex-row items-center justify-between gap-4 sm:gap-0">
          {/* Search Bar */}
          <div className="w-full sm:w-auto px-2">
            <div className="w-full sm:w-[782px] h-[44px] bg-white border rounded-[10px] px-4 py-2 flex items-center">
              <button className="text-gray-500 hover:text-gray-700 mr-2">
                <IoIosSearch size={20} />
              </button>
              <input
                type="text"
                placeholder="Search..."
                className="w-full outline-none bg-transparent text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Notification & Profile */}
          <div className="flex items-center justify-center gap-4 relative ml-auto">
            {/* Notification Button */}
            <button className="btn btn-primary h-10 w-10 flex items-center justify-center">
              <IoMdNotificationsOutline size={20} />
            </button>

            {/* Profile Image */}
            <div
              className="h-10 w-10 rounded-full overflow-hidden cursor-pointer"
              onClick={toggleDropdown}
            >
              <Image src={profile} alt="Profile" height={40} width={40} />
            </div>

            {/* Dropdown Menu */}
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
    </Wrapper>
  );
};

export default AdminNavBar;
