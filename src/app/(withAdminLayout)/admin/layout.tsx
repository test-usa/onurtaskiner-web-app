import AdminNavBar from "@/components/AdminPage/Shared/AdminNavBar";
import AdminSideBar from "@/components/AdminPage/Shared/AdminSideBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " Blinqo- Admin",
  description: "Admin Dashboard for Blinqo",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F4]">
      <div className="flex flex-col md:flex-row min-h-screen bg-[#F4F4F4]">
        {/* Sidebar */}
        <aside className=" w-[300px] bg-white shadow-md z-10">
          <AdminSideBar />
        </aside>

        {/* Main Content */}
        <main className=" h-full flex-1 overflow bg-base-200 mt-10 md:mt-0">
          <AdminNavBar />
          <div className="p-4">{children}</div>
        </main>
      </div>
    </div>
  );
}

/* <div className="flex justify-center items-center min-h-screen bg-[#F4F4F4]"></div>
  
  import AdminNavBar from "@/components/AdminPage/Shared/AdminNavBar";
import AdminSideBar from "@/components/AdminPage/Shared/AdminSideBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " Blinqo- Admin",
  description: "Admin Dashboard for Blinqo",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex min-h-screen font-manrope bg-[var(--color-dashboardbg)]">
   
        <AdminSideBar />
      
        <main className="flex-1 font-manrope min-h-screen  transition-all duration-300 bg-[var(--color-dashboardbg)] ease-in-out">
          <div>
            <AdminNavBar />
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

  */
