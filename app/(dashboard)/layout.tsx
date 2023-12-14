import React from "react";
import Sidebar from "./_components/Sidebar";


interface LayoutProps {
  children: React.ReactNode;
}


export default function layout({ children }: LayoutProps) {
  return (
    <div className="w-full h-screen bg-black p-4 flex items-center">
      <Sidebar/>
      <div className="bg-gray-100 flex-1 rounded-xl overflow-hidden h-full">{children}</div>
    </div>
  );
}
