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
    <div className="flex flex-col md:flex-row min-h-screen bg-[#F4F4F4]">
      {/* Sidebar */}
      <aside className="w-[20%] bg-white shadow-md z-10">
        <AdminSideBar />
      </aside>

      {/* Main Content */}
      <main className="w-[80%] flex-1 overflow-hidden bg-base-200 mt-10 md:mt-0">
        {/* <AdminNavBar /> */}
        <div className="p-4">{children}</div>
      </main>
    </div>
  );
}
