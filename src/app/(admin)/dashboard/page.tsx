import ThemeToggleButton from "@/components/button/ThemeToggleButton";
import React from "react";

const AdminDashboard = () => {
  return (
    <div className="flex-col">
      <span className="mb-5">Admin Dashboard</span>

      <ThemeToggleButton />
    </div>
  );
};

export default AdminDashboard;
