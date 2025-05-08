"use client";
import logo from "../../../assets/icon/logo1.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { GoX } from "react-icons/go";
import { FcMenu } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { TbLogout } from "react-icons/tb";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { SiSimpleanalytics } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { HiReceiptRefund } from "react-icons/hi";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { title: "Dashboard", href: "/admin/dashboard", icon: MdDashboard },
  { title: "User Management", href: "/admin/user-management", icon: FaRegUser },
  {
    title: "Venue Management",
    href: "/admin/venue-management",
    icon: PiBuildingApartmentFill,
  },
  {
    title: "Booking & Payment",
    href: "/admin/booking-payment",
    icon: SlCalender,
  },
  {
    title: "Reports & Analitics",
    href: "/admin/report-analysis",
    icon: SiSimpleanalytics,
  },
  {
    title: "Dispute & Refunds",
    href: "/admin/dispute-refunds",
    icon: HiReceiptRefund,
  },
  {
    title: "Plartform Settings",
    href: "/admin/plartform-settings",
    icon: IoSettingsOutline,
  },
];

export function AdminSideBar() {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);

  return (
    <div className="h-full w-[300px] max-auto  ">
      <button
        className="md:hidden p-4 fixed top-4 left-8 z-50"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? (
          <GoX className="text-3xl text-red-700" />
        ) : (
          <FcMenu className="text-3xl" />
        )}
      </button>

      {toggle && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setToggle(false)}
        />
      )}

      <motion.aside
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: toggle ? 1 : 0, x: toggle ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="md:hidden w-72 h-screen fixed bg-[#FFFFFF] dark:bg-gray-900 text-gray-800 dark:text-white  p-6 shadow-lg z-50 flex flex-col"
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setToggle(false)}
        >
          <GoX />
        </button>

        <nav className="flex-grow space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded transition",
                pathname === item.href
                  ? "bg-blue-100 text-[var(--color-textThree)] dark:bg-blue-700 dark:text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
              onClick={() => setToggle(false)}
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="mt-auto">
          <Button
            variant="destructive"
            className="w-full justify-start gap-3 bg-white hover:bg-gray-100 text-black"
            onClick={() => alert("Logout function here")}
          >
            <TbLogout className="h-5 w-5 text-red-600" />
            Logout
          </Button>
        </div>
      </motion.aside>

      <aside className="hidden md:flex w-72 h-screen flex-col bg-[#FFFFFF] dark:bg-gray-900 text-gray-800 dark:text-white  p-6">
        <div className="flex justify-center items-center mb-10 space-x-2">
          <Image
            src={logo.src}
            alt="Logo"
            className="w-[42px] h-[42px]"
            width={42}
            height={42}
          />

          <h1 className="w-[75px] h-[29px] text-[24px] font-bold leading-[100%] tracking-[0] bg-gradient-to-r from-[#003366] to-[#518BEC] text-transparent bg-clip-text font-sansita">
            Blinqo
          </h1>
        </div>
        <div className="mb-4 text-[var(--color-textThree)]">Menu</div>
        <nav className="flex-grow  w-[227px] h-[40px]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded transition",
                pathname === item.href
                  ? "bg-[var(--color-accent)] text-white dark:bg-red-500 dark:text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="mt-auto mb-10">
          <Button
            variant="destructive"
            className="w-full justify-start gap-3 bg-white hover:bg-gray-100 text-black"
            onClick={() => alert("Logout function here")}
          >
            <TbLogout className="h-5 w-5 text-red-600" />
            Logout
          </Button>
        </div>
      </aside>
    </div>
  );
}

export default AdminSideBar;

/* 
import Image from "next/image";
import logo from "../../../assets/icon/logo1.png";

import { FaRegUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { PiBuildingApartmentFill } from "react-icons/pi";
import Link from "next/link";

const AdminSideBar = () => {
  return (
    <aside className="bg-white text-black min-h-screen w-full px-4 py-6 shadow-lg">
      <div className="flex justify-center items-center mb-10 space-x-2">
        <Image
          src={logo.src}
          alt="Logo"
          className="w-[42px] h-[42px]"
          width={42}
          height={42}
        />

        <h1 className="w-[75px] h-[29px] text-[24px] font-bold leading-[100%] tracking-[0] bg-gradient-to-r from-[#003366] to-[#518BEC] text-transparent bg-clip-text font-sansita">
          Blinqo
        </h1>
      </div>

      <nav>
        <ul className="space-y-3">
          <p>Menu</p>
          <li>
            <Link href="/admin/dashboard">
              <div className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-[#003366] hover:text-white text-left font-medium border border-transparent  cursor-pointer">
                <MdDashboard className="text-lg" />
                <span>Dashboard</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/admin/user-management">
              <div className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-[#003366] hover:text-white text-left font-medium border border-transparent  cursor-pointer">
                <FaRegUser className="text-lg" />
                <span>User Management</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/admin/venue-management">
              <div className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-[#003366] hover:text-white text-left font-medium border border-transparent  cursor-pointer">
                <PiBuildingApartmentFill className="text-lg" />
                <span>Venu Management</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSideBar; */
