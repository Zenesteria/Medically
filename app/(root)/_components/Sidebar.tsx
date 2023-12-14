import React from 'react'
import Logo from '@/public/Logo.svg'
import Image from 'next/image'
import { LucideIcon } from 'lucide-react'

interface SidebarProps {
  Links: {
    Icon: LucideIcon;
    name: string;
    href: string;
  }[];
}

export default function Sidebar({Links}:SidebarProps) {
  return (
    <div className='sm:flex-[0.2] hidden h-full justify-center items-start p-4 sm:flex min-w-[150px]'>
        <Image
            src={Logo}
            width={150}
            alt=''
        />

        <div className="my-2">
            
        </div>
    </div>
  )
}
