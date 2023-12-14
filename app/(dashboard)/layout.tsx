import React from "react";
import Sidebar from "./_components/Sidebar";


interface LayoutProps {
  children: React.ReactNode;
}

import {MessageSquare, File, LayoutGrid, BarChart3, Settings, HelpCircle, LucideIcon} from 'lucide-react'



const SideBarItems: {
  Icon: LucideIcon;
  name: string;
  href: string;
}[] = [
  {
    Icon: MessageSquare,
    href: "/",
    name: "AI Chat Helper",
  },
  {
    Icon: File,
    href: "/templates",
    name: "Templates",
  },
  {
    Icon: LayoutGrid,
    href: "/projects",
    name: "My Project",
  },
  {
    Icon: BarChart3,
    href: "/statistics",
    name: "Statistics",
  },
  {
    Icon: Settings,
    href: "/settings",
    name: "Settings",
  },
  {
    Icon: HelpCircle,
    href: "/FAQ",
    name: "Updates & FAQ",
  },
];

export default function layout({ children }: LayoutProps) {
  return (
    <div className="w-full h-screen bg-black p-4 flex items-center">
      <Sidebar/>
      <div className="bg-white flex-1 rounded-xl h-full">{children}</div>
    </div>
  );
}
