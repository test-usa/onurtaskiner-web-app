"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

import logo from "../../../assets/icon/logo1.png";
import profile from "../../../assets/images/profile.png";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import AdminNavBar from "@/components/AdminPage/Shared/AdminNavBar";

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
    href: "/admin/plartform-settings",
    icon: IoSettingsOutline,
  },
];

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const hideNavBar =
    pathname === "/admin/active-user-details" ||
    pathname === "/admin/user-payment" ||
    pathname === "/admin/memnoy-refund/" ||
    pathname.startsWith("/admin/booking-payment/") ||
    pathname.startsWith("/admin/memnoy-refund") ||
    pathname.startsWith("/admin/venue-management/");

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F4] overflow-hidden">
      <div className="flex flex-col md:flex-row h-screen overflow-hidden">
        {/* Sidebar for Desktop */}
        <motion.aside
          initial={false}
          animate={{ width: collapsed ? 80 : 296 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="hidden md:flex flex-col fixed top-0 left-0 h-screen z-20 bg-white dark:bg-gray-900 shadow-md p-4"
        >
          <div className="flex items-center justify-between mb-6 h-[48px]">
            <div className="flex items-center gap-2">
              <div className="w-[42px] h-[46px]">
                <Image src={logo} alt="Logo" width={52} height={52} />
              </div>
              {!collapsed && (
                <h1 className="text-[28px] font-bold leading-normal font-['Sansita_Swashed'] bg-gradient-to-b from-[#408DF0] to-[#0E579E] text-transparent bg-clip-text">
                  Blinqo
                </h1>
              )}
            </div>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-3xl text-[var(--color-textThree)]"
            >
              {collapsed ? <RiArrowRightSLine /> : <RiArrowLeftSLine />}
            </button>
          </div>

          {!collapsed && (
            <div className="text-[var(--color-textThree)] mb-5 font-Robot">
              Menu
            </div>
          )}
          <nav className="flex-grow space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 rounded transition text-[var(--color-textThree)]",
                  pathname.startsWith(item.href)
                    ? "bg-[var(--color-accent)] text-white"
                    : "hover:bg-gray-200 dark:hover:bg-[var(--color-textThree)]"
                )}
              >
                <item.icon className="h-5 w-5 shrink-0 font-Robot font-[20px]" />
                {!collapsed && <span>{item.title}</span>}
              </Link>
            ))}
          </nav>

          <div className="mt-auto mb-20">
            <Button
              variant="destructive"
              className={cn(
                "w-full justify-start gap-3",
                collapsed
                  ? "bg-white hover:bg-gray-100 px-2 py-2"
                  : "bg-white hover:bg-gray-100"
              )}
              onClick={() => alert("Logout")}
            >
              <TbLogout className="h-6 w-6 text-red-600" />
              {!collapsed && (
                <span className="text-black font-Robot">Log Out</span>
              )}
            </Button>
          </div>
        </motion.aside>

        {/* Mobile Topbar */}
        <div className="md:hidden sticky top-0 z-20 bg-[#003366]/20 backdrop-blur-lg shadow-sm flex justify-between items-center px-4 py-3">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <div className="flex items-center gap-4">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Image
                src={profile}
                alt="Profile"
                width={36}
                height={36}
                className="rounded-full"
              />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed inset-0 z-30 bg-black bg-opacity-40 flex"
            >
              <aside className="bg-white w-64 h-full p-4 space-y-4 shadow-lg relative">
                <button
                  className="absolute top-3 right-3 text-[var(--color-textThree)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ✕
                </button>
                <div className="flex flex-col items-center gap-2 mb-4">
                  <Image
                    src={profile}
                    alt="Profile"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <h2 className="font-semibold text-lg">Admin Panel</h2>
                </div>
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-2 rounded transition",
                        pathname === item.href
                          ? "bg-[var(--color-accent)] text-white"
                          : "hover:bg-gray-200"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </nav>

                <Button
                  variant="destructive"
                  className="w-full justify-start gap-3 mt-80"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    alert("Logout");
                  }}
                >
                  <TbLogout className="h-6 w-6 text-red-600" />
                  <span className="text-black">Log Out</span>
                </Button>
              </aside>
              <div
                className="flex-1"
                onClick={() => setMobileMenuOpen(false)}
              ></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main
          className={cn(
            "flex-1 bg-base-200 overflow-y-auto transition-all duration-300",
            collapsed ? "md:ml-[80px]" : "md:ml-[296px]"
          )}
        >
          {!hideNavBar && (
            <div className="hidden md:block sticky top-0 z-10">
              <AdminNavBar />
            </div>
          )}
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

/* "use client";

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

import logo from "../../../assets/icon/logo1.png";
import profile from "../../../assets/images/profile.png";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import AdminNavBar from "@/components/AdminPage/Shared/AdminNavBar";

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
    href: "/admin/plartform-settings",
    icon: IoSettingsOutline,
  },
];

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const hideNavBar =
    pathname === "/admin/active-user-details" ||
    pathname === "/admin/user-payment" ||
    pathname === "/admin/memnoy-refund/" ||
    pathname.startsWith("/admin/booking-payment/") ||
    pathname.startsWith("/admin/memnoy-refund") ||
    pathname.startsWith("/admin/venue-management/");

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F4] overflow-hidden">
      <div className="flex flex-col md:flex-row h-screen overflow-hidden">

        <aside
          className={cn(
            "hidden md:flex flex-col fixed top-0 left-0 h-screen z-20 bg-white dark:bg-gray-900 shadow-md p-4 transition-all duration-300",
            collapsed ? "w-[80px]" : "w-[296px]"
          )}
        >
          <div className="flex items-center justify-between mb-6 h-[48px] ">
            <div className="flex items-center gap-2">
              <div className=" w-[42px] h-[46px]">
                <Image src={logo} alt="Logo" width={52} height={52} />
              </div>
              {!collapsed && (
                <h1 className="text-[36px] font-bold leading-normal font-['Sansita_Swashed'] bg-gradient-to-b from-[#408DF0] to-[#0E579E] text-transparent bg-clip-text">
                  Blinqo
                </h1>
              )}
            </div>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-3xl text-[var(--color-textThree)]"
            >
              {collapsed ? <RiArrowRightSLine /> : <RiArrowLeftSLine />}
            </button>
          </div>

          {!collapsed && (
            <div className="text-[var(--color-textThree)] mb-5  font-Robot">
              Menu
            </div>
          )}
          <nav className="flex-grow space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 rounded transition text-[var(--color-textThree)] ",
                  pathname.startsWith(item.href)
                    ? "bg-[var(--color-accent)] text-white"
                    : "hover:bg-gray-200 dark:hover:bg[var(--color-textThree)]"
                )}
              >
                <item.icon className="h-5 w-5 shrink-0 font-Robot font-[20px]" />
                {!collapsed && <span>{item.title}</span>}
              </Link>
            ))}
          </nav>

          <div className="mt-auto mb-20">
            <Button
              variant="destructive"
              className={cn(
                "w-full justify-start gap-3 ",
                collapsed
                  ? "bg-white hover:bg-gray-100 px-2 py-2"
                  : "bg-white hover:bg-gray-100"
              )}
              onClick={() => alert("Logout")}
            >
              <TbLogout className="h-6 w-6 text-red-600" />
              {!collapsed && (
                <span className="text-black font-Robot">Log Out</span>
              )}
            </Button>
          </div>
        </aside>


        <div className=" md:hidden sticky top-0 z-20 bg-[#003366]/20 backdrop-blur-lg shadow-sm flex justify-between items-center px-4 py-3">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <div className="flex items-center gap-4">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Image
                src={profile}
                alt="Profile"
                width={36}
                height={36}
                className="rounded-full"
              />
            </button>
          </div>
        </div>


        {mobileMenuOpen && (
          <div className="fixed inset-0 z-30 bg-black bg-opacity-40 flex">
            <aside className="bg-white w-64 h-full p-4 space-y-4 shadow-lg relative">
              <button
                className="absolute top-3 right-3 text-[var(--color-textThree)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                ✕
              </button>
              <div className="flex flex-col items-center gap-2 mb-4">
                <Image
                  src={profile}
                  alt="Profile"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <h2 className="font-semibold text-lg">Admin Panel</h2>
              </div>
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2 rounded transition",
                      pathname === item.href
                        ? "bg-[var(--color-accent)] text-white"
                        : "hover:bg-gray-200"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                ))}
              </nav>

              <Button
                variant="destructive"
                className="w-full justify-start gap-3 mt-80"
                onClick={() => {
                  setMobileMenuOpen(false);
                  alert("Logout");
                }}
              >
                <TbLogout className="h-6 w-6 text-red-600" />
                <span className="text-black">Log Out</span>
              </Button>
            </aside>
            <div
              className="flex-1"
              onClick={() => setMobileMenuOpen(false)}
            ></div>
          </div>
        )}


        <main
          className={cn(
            "flex-1 bg-base-200 overflow-y-auto transition-all duration-300",
            collapsed ? "md:ml-[80px]" : "md:ml-[296px]"
          )}
        >
 
          {!hideNavBar && (
            <div className="hidden md:block sticky top-0 z-10">
              <AdminNavBar />
            </div>
          )}
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; */
