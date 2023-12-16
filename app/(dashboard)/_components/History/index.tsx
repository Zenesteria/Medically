"use client";

import { cn } from "@/lib/utils";
import { Trash } from "lucide-react";
import React, { useEffect, useState } from "react";

const History = [
  {
    title: "History One",
    desc: "Write code in HTML, CSS, and JS for a simple design",
  },
  {
    title: "History Two",
    desc: "Write code in HTML, CSS, and JS for a simple design",
  },
  {
    title: "History Three",
    desc: "Write code in HTML, CSS, and JS for a simple design",
  },
  {
    title: "History Four",
    desc: "Write code in HTML, CSS, and JS for a simple design",
  },
];

export default function HistoryComp({activeHistory,setActiveHistory}:{activeHistory:string,setActiveHistory:React.Dispatch<React.SetStateAction<string>>}) {
  const [history, setHistory] = useState(History);
  // const [activeHistory, setActiveHistory] = useState(history[0].title);
  const [selectedItems, setSelectedItems] = useState<typeof History>([]);
  const [seltems, setSeItems] = useState(0);

  const handleDelete = async () => {
    console.log("deleting. . .");
    let arrCont = [...history];
    selectedItems.map((item) => {
      let inArray = history.includes(item);
      item.title==activeHistory?setActiveHistory(''):null
      if (inArray) {
        arrCont.splice(arrCont.indexOf(item), 1);
      }
    });

    // reset
    setSelectedItems([]);


    setHistory(arrCont);
  };
  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);
  return (
    <div className="sm:flex flex-[0.3] hidden flex-col h-full">
      <div className="flex border-b-2 bg-white h-fit w-full p-4 items-center justify-between">
        <h1
          className="  font-bold tracking-wide"
          style={{ fontSize: "calc(1rem + 0.5vw)" }}
        >
          History
        </h1>
        <p className="bg-gray-100 py-2 px-4 rounded-full text-[0.8rem]">
          {selectedItems.length}/{history.length}
        </p>
      </div>
      {history.length > 0 ? (
        history.map((item) => {
          let isActive = item.title == activeHistory;
          let isChecked = false;
          const handleClick = () => {
            setActiveHistory(item.title);
          };
          return (
            <div
              className={cn(
                "flex items-start rounded-xl my-5 mx-2 duration-300 hover:bg-white hover:shadow-xl hover:shadow-cyan-50 hover:py-4",
                isActive && "bg-white shadow-xl shadow-cyan-50 py-4"
              )}
              key={item.title}
            >
              <input
                type="checkbox"
                defaultChecked={false}
                onChange={(e) => {
                  setSelectedItems((prev) => {
                    let data = [...prev];
                    if (e.target.checked) {
                      data.includes(item) ? null : data.push(item);
                    } else {
                      data.splice(data.indexOf(item), 1);
                    }
                    return data;
                  });
                }}
                className="mx-2 my-2"
              />
              <div className="cursor-pointer" onClick={handleClick}>
                <h1 className="font-semibold">{item.title}</h1>
                <p className="text-gray-400 text-[0.8rem] max-w-[200px]">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <div className="w-full h-full flex items-center justify-center text-center">
          <h1>History Empty</h1>
        </div>
      )}
      {selectedItems.length > 0 ? (
        <div
          onClick={handleDelete}
          className="mt-auto flex justify-around bg-white relative p-4 hover:text-white group overflow-hidden cursor-pointer"
        >
          <div className="w-full h-full bg-red-700 absolute top-0 right-0 -translate-y-[100%] hover:translate-y-0 group-hover:translate-y-0 duration-300"></div>
          <h1 className="font-bold z-[20] relative duration-300">Delete</h1>
          <p className="z-[20] relative duration-300">{`${selectedItems.length} Items`}</p>
          <Trash className="text-red-500 group-hover:text-white z-[20] relative" />
        </div>
      ) : null}
    </div>
  );
}
