'use client'

import React from 'react'
import Logo from '@/public/Logo.svg'
import Image from 'next/image'
import {
  MessageSquare,
  File,
  LayoutGrid,
  BarChart3,
  Settings,
  HelpCircle,
  LucideIcon,
} from "lucide-react";
import SidebarItem from './SidebarItem';





const SideBarItems = [
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

export default function Sidebar() {
  return (
    <div className='flex-[0.2] hidden h-full justify-start items-center p-4 sm:flex flex-col min-w-[150px]'>
        <Image
            src={Logo}
            width={150}
            alt=''
        />

        <div className="my-2 w-full">
            {
                SideBarItems.map((link) => {
                    return(
                        <SidebarItem
                            name={link.name}
                            href={link.href}
                            key={link.href}
                            Icon={link.Icon}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}
