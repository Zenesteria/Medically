'use client'
import { LucideIcon } from "lucide-react";

import React from "react";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";

interface CompProps {
  href: string;
  Icon: LucideIcon;
  name: string;
}

export default function SidebarItem({ href, Icon, name }: CompProps) {
  const router = useRouter();
  const pathName = usePathname();
  const isActive =
    (pathName == "/" && href == "/") ||
    pathName == href ||
    pathName.startsWith(`/${href}`);

  return (
    <div className={cn("my-3 w-full flex items-center  p-4 rounded-md cursor-pointer duration-300 hover:bg-white/20 hover:text-cyan-300 text-white", isActive && 'bg-white/20 text-cyan-300')}>
        <Icon/>
        <h1 className="text-[0.8rem] mx-2">
            {name}
        </h1>
    </div>
  );
}
