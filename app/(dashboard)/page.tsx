'use client'
import { cn } from '@/lib/utils'
import { Bell, Info, Search, File, Mic, Send } from 'lucide-react'
import React, { useState } from 'react'

const History = [
  {
    title:'History One',
    desc:'Write code in HTML, CSS, and JS for a simple design'
  },
  {
    title:'History Two',
    desc:'Write code in HTML, CSS, and JS for a simple design'
  },
  {
    title:'History Three',
    desc:'Write code in HTML, CSS, and JS for a simple design'
  },
  {
    title:'History Four',
    desc:'Write code in HTML, CSS, and JS for a simple design'
  },
]

export default function Page() {
  const [activeHistory, setActiveHistory] = useState(History[0].title)
  return (
    <div className="flex w-full h-full items-center">
      <div className="flex-1 shadow-xl bg-white flex flex-col relative z-[100] h-full">
        <div className="w-full py-3 px-5 shadow-xl flex items-center justify-between">
          <h1
            className="font-bold tracking-wide"
            style={{ fontSize: "calc(0.7rem + 0.5vw)" }}
          >
            AI Chat Helper
          </h1>

          <div className="flex items-center">
            <div className="bg-gray-200 h-[5vh] text-gray-400 flex items-center rounded-full py-2 px-4 mx-2">
              <Search className="" />
              <input
                type="text"
                placeholder="Search"
                className="p-2 w-full outline-none focus:outline-none bg-transparent mx-2"
              />
            </div>
            <Bell
              size={35}
              className="p-2 bg-white hover:shadow-xl cursor-pointer duration-300 rounded-lg border mx-2"
            />
            <Info
              size={35}
              className="p-2 bg-white hover:shadow-xl cursor-pointer duration-300 rounded-lg border mx-2"
            />
          </div>
        </div>

        {/* Chat Logs */}
        <div className="h-full flex items-center justify-center w-full overflow-y-auto">
          <h1>{activeHistory}</h1>
        </div>

        {/* Chat Prompt Section */}
        <div className="flex w-full">
          <File
            size={35}
            className="p-2 bg-gray-100 hover:shadow-xl cursor-pointer duration-300 rounded-lg border mx-2"
          />
          <Mic
            size={35}
            className="p-2 bg-gray-100 hover:shadow-xl cursor-pointer duration-300 rounded-lg border mx-2"
          />
          <input
            type="text"
            className="bg-gray-100 flex-1 rounded-md outline-none text-black px-4 ml-2"
          />
          <Send
            size={35}
            className="p-2 bg-cyan-400 text-white hover:shadow-xl cursor-pointer duration-300 rounded-lg border mx-4"
          />
        </div>

        <p className="text-center text-gray-400 text-[0.7rem] my-2">
          Free Research Preview. ChatGPT may produce inacurrate information
          about people, places or facts.
        </p>
      </div>

      {/* History */}
      <div className="sm:inline flex-[0.3] hidden h-full">
        <div className="flex border-b-2 bg-white h-fit w-full p-4 items-center justify-between">
          <h1
            className="  font-bold tracking-wide"
            style={{ fontSize: "calc(1rem + 0.5vw)" }}
          >
            History
          </h1>
          <p className='bg-gray-100 py-2 px-4 rounded-full text-[0.8rem]'>
            6/50
          </p>
        </div>

        {History.map((item) => {
          let isActive = item.title == activeHistory
          const handleClick = () => {
            setActiveHistory(item.title)
          }
          return (
            <div
            onClick={handleClick}
              className={cn(
                "flex items-start rounded-xl cursor-pointer my-7 mx-2 duration-300 hover:bg-white hover:shadow-xl hover:py-4",
                isActive && "bg-white shadow-xl py-4"
              )}
              key={item.title}
            >
              <input type="checkbox" className="mx-2 my-2" />
              <div className="">
                <h1 className="font-semibold">{item.title}</h1>
                <p className="text-gray-400 text-[0.8rem] max-w-[200px]">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
