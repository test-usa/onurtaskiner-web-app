import Image from "next/image";
import logo from "../../asets/icon/logo1.png";

import { FaRegUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { PiBuildingApartmentFill } from "react-icons/pi";

const AdminSideBar = () => {
  return (
    <aside className="bg-white text-black min-h-screen w-full px-4 py-6 shadow-lg">
      <div className="flex justify-center items-center mb-10 space-x-2">
        {/* Logo */}
        <Image
          src={logo.src}
          alt="Logo"
          className="w-[42px] h-[42px]"
          width={42}
          height={42}
        />

        {/* Brand Name */}
        <h1 className="w-[75px] h-[29px] text-[24px] font-bold leading-[100%] tracking-[0] bg-gradient-to-r from-[#003366] to-[#518BEC] text-transparent bg-clip-text font-sansita">
          Blinqo
        </h1>
      </div>

      <nav>
        <ul className="space-y-3">
          <p>Menu</p>
          <li>
            <div className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-[#003366] hover:text-white text-left font-medium border border-transparent  cursor-pointer">
              <MdDashboard className="text-lg" />
              <span>Dashboard</span>
            </div>
          </li>
          <li>
            <div className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-[#003366] hover:text-white text-left font-medium border border-transparent  cursor-pointer">
              <FaRegUser className="text-lg" />
              <span>User Management</span>
            </div>
          </li>
          <li>
            <div className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-[#003366] hover:text-white text-left font-medium border border-transparent  cursor-pointer">
              <PiBuildingApartmentFill className="text-lg" />
              <span>Venu Management</span>
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSideBar;
