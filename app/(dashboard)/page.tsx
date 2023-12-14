import { Bell, Info, Search } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div className="flex w-full h-full items-center">
      <div className="flex-1 shadow-xl bg-white relative z-[100] h-full">
        <div className="w-full p-3 shadow-xl flex items-center justify-between">
          <h1>AI Chat Helper</h1>

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
      </div>
      <div className="sm:flex flex-[0.3] hidden h-full"></div>
    </div>
  );
}
