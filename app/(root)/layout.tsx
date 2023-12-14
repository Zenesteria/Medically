import React from 'react'

interface LayoutProps{
  children:React.ReactNode
}

export default function layout({children}:LayoutProps) {
  return (
    <div className='w-full h-screen bg-black p-4'>
      {children}
    </div>
  )
}
