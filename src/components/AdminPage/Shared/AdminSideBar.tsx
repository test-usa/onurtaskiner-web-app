/* "use client";
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
import { RiSupabaseLine } from "react-icons/ri";

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
    icon: RiSupabaseLine,
  },
  {
    title: "Platform Settings",
    href: "/admin/platform-settings",
    icon: IoSettingsOutline,
  },
];

export function AdminSideBar() {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);

  return (
    <div className="max-auto">
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
        <div className="flex justify-start items-center mb-10 ">
          <Image
            src={logo.src}
            alt="Logo"
            className="w-[42px] h-[42px]"
            width={42}
            height={42}
          />

          <h1 className="w-[75px] h-[29px] text-[24px] font-bold leading-[100%] tracking-[0] bg-gradient-to-r from-[#003366] to-[#518BEC] text-transparent bg-clip-text font-['Sansita_Swashed']">
            Blinqo
          </h1>
        </div>
        <div className="mb-4 text-[var(--color-textThree)]">Menu</div>
        <nav className="flex-grow w-[227px] h-[40px]">
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

export default AdminSideBar; */

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { MdDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { SiSimpleanalytics } from "react-icons/si";
import {
  RiSupabaseLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";

import logo from "../../../assets/icon/logo1.png";
import profile from "../../../assets/images/profile.png";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import AdminNavBar from "./AdminNavBar";

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
    title: "Reports & Analytics",
    href: "/admin/report-analysis",
    icon: SiSimpleanalytics,
  },
  {
    title: "Dispute & Refunds",
    href: "/admin/dispute-refunds",
    icon: RiSupabaseLine,
  },
  {
    title: "Platform Settings",
    href: "/admin/platform-settings",
    icon: IoSettingsOutline,
  },
];

const AdminSideBar = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F4]">
      <div className="flex flex-col md:flex-row min-h-screen">
        <aside
          className={cn(
            "transition-all duration-300 h-screen flex flex-col bg-white dark:bg-gray-900 shadow-md p-4",
            collapsed ? "w-[300px]" : "w-302"
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Image
                src={logo.src}
                alt="Logo"
                width={42}
                height={42}
                className="min-w-[42px]"
              />
              {!collapsed && (
                <h1 className="text-xl font-bold bg-gradient-to-r from-[#003366] to-[#518BEC] text-transparent bg-clip-text font-['Sansita_Swashed']">
                  Blinqo
                </h1>
              )}
            </div>
            <button
              onClick={() => setCollapsed((prev) => !prev)}
              className="text-xl text-gray-500"
            >
              {collapsed ? <RiArrowRightSLine /> : <RiArrowLeftSLine />}
            </button>
          </div>

          {!collapsed && (
            <div className="text-[var(--color-textThree)] mb-2">Menu</div>
          )}
          <nav className="flex-grow">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 rounded transition mb-1",
                  pathname === item.href
                    ? "bg-[var(--color-accent)] text-white dark:bg-red-500"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                )}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {!collapsed && <span>{item.title}</span>}
              </Link>
            ))}
          </nav>

          <div className="mt-auto">
            <Button
              variant="destructive"
              className={cn(
                "w-full justify-start gap-3 text-black",
                collapsed
                  ? "bg-white hover:bg-gray-100 px-2 py-2"
                  : "bg-white hover:bg-gray-100"
              )}
              onClick={() => alert("Logout function here")}
            >
              <TbLogout className="h-5 w-5 text-red-600" />
              {!collapsed && <span>Logout</span>}
            </Button>
          </div>
        </aside>

        <main className="h-full flex-1 overflow bg-base-200 mt-10 md:mt-0">
          <div className="hidden lg:block w-full">
            {/* <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mt-4 px-4">
              <div className="w-full sm:w-auto">
                <div className="w-full sm:w-[782px] h-[44px] bg-white border rounded-[10px] px-4 py-2 flex items-center">
                  <button className="text-gray-500 hover:text-gray-700 mr-2">
                    <IoIosSearch />
                  </button>
                  <input
                    type="text"
                    placeholder="Searchsssss..."
                    className="w-full outline-none bg-transparent"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="btn btn-primary h-10 w-10 flex items-center justify-center">
                  <IoMdNotificationsOutline className="h-5 w-4 mx-auto" />
                </button>
                <div className="h-10 w-10 rounded-full overflow-hidden">
                  <Image src={profile} alt="Profile" height={40} width={40} />
                </div>
              </div>
            </div> */}
            <AdminNavBar />
          </div>

          <div className="p-4">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminSideBar;
