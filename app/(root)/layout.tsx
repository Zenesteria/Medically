import React from "react";
import Sidebar from "./_components/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: LayoutProps) {
  return (
    <div className="w-full h-screen bg-black p-4 flex items-center">
      <Sidebar/>
      <div className="bg-white flex-1 rounded-xl h-full">{children}</div>
    </div>
  );
}
