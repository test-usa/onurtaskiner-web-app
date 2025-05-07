// app/admin/layout.tsx
import AdminSideBar from "@/components/AdminPage/AdminSideBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gardening Trip Advice - Admin",
  description: "Admin Dashboard for Gardening Trip Advice",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F4F4F4]">
      {/* Sidebar */}
      <div className="w-[20%] bg-[#FFFFFF] text-white">
        <AdminSideBar />
      </div>

      {/* Main Content */}
      <div className="w-[80%] bg-base-200 p-1">{children}</div>
    </div>
  );
}
