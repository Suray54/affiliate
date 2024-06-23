import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Affliate Clone",
  icons: {
    icon: "/favicon.ico",
  },
};

const AdminDashboard = () => {
  return (
    <div className="w-full page">
      <div className="max-w-[80vw] mx-auto">
        <span className="">Admin Dashborad</span>
      </div>
    </div>
  );
};

export default AdminDashboard;
