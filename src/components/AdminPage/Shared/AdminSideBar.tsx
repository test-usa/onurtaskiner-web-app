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
    title: "Plartform Settings",
    href: "/admin/plartform-settings",
    icon: IoSettingsOutline,
  },
];

export function AdminSideBar() {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" max-auto  ">
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
    title: "Plartform Settings",
    href: "/admin/plartform-settings",
    icon: IoSettingsOutline,
  },
];

export function AdminSideBar() {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);

  return (
    <div className="relative z-50">
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white dark:bg-gray-900 p-2 rounded shadow"
        onClick={() => setToggle(!toggle)}
        aria-label="Toggle sidebar"
      >
        {toggle ? (
          <GoX className="text-2xl text-red-600" />
        ) : (
          <FcMenu className="text-2xl" />
        )}
      </button>


      {toggle && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setToggle(false)}
        />
      )}


      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: toggle ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed top-0 left-0 w-72 h-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6 shadow-lg z-50 flex flex-col"
      >
        <nav className="flex-grow space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center w-[227px] h-[40px] rounded-[8px] px-4 py-2 gap-[20px] transition",
                pathname === item.href
                  ? "bg-blue-100 text-[var(--color-textThree)] dark:bg-blue-700 dark:text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
              onClick={() => setToggle(false)}
            >
              <item.icon className="w-[24px] h-[24px]" />
              <span className="w-[75px] h-[20px] font-roboto font-normal text-[16px] leading-[20px] tracking-[-0.02em]">
                {item.title}
              </span>
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


      <aside className="hidden md:flex w-72 h-screen flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6">
        <div className="flex items-center gap-3 mb-10">
          <Image
            src={logo.src}
            alt="Logo"
            width={42}
            height={42}
            className="w-[42px] h-[42px]"
          />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#003366] to-[#518BEC] text-transparent bg-clip-text font-['Sansita_Swashed']">
            Blinqo
          </h1>
        </div>
        <div className="mb-4 text-[var(--color-textThree)]">Menu</div>
        <nav className="flex-grow space-y-1">
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
 */
