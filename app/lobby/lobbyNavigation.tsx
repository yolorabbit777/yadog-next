'use client';

import { RiSearchLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
 

export default function LobbyNavigation(
    {
        listItem,
        activeIndex,
        setActiveIndex
    } : {
        listItem : Array<String>, 
        activeIndex: number, 
        setActiveIndex: ((status:number) => void)
    }
) {

  const [searchBarActive, setSearchBarActive] = useState(false)

  return (
    <div className="fixed z-[550] mt-[205px] flex flex-col">
        <div className="select-none flex justify-center items-center gap-2 rounded-[30px] bg-white shadow-inner shadow-black py-[5px] px-6">
        { listItem.map((data, index) => 
            <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-3 py-1 rounded-[80px] ${activeIndex == index && "border-[2px] border-[#89E0FF] bg-gradient-to-r from-[#37C0FB] to-[#1D70DD]"}`}>
                    <span className={`text-[15px] font-bold ${activeIndex == index ? "text-white" : "text-[#523705]"}`} >{data}</span>
            </button>
        ) }

            { searchBarActive ? 
            <button 
                onClick={() => setSearchBarActive(false)}
                className="py-2 px-3 rounded-[80px] border-[2px] border-[#89E0FF] bg-gradient-to-r from-[#37C0FB] to-[#1D70DD]">
                <AiOutlineClose className="text-white" style={{ strokeWidth : 200}} />
            </button>
                :
            <button onClick={() => setSearchBarActive(true)} className="">
                <RiSearchLine  className="w-8 h-6" />
            </button>
            }
        </div>
        { searchBarActive &&
            <div className="w-[90%] absolute top-[46px] py-3 self-center bg-[#FFECCD] rounded-b-[10px] flex justify-center items-center"> 
                <div className="flex flex-row relative items-center">
                    <RiSearchLine  className="w-8 h-6 absolute"  />
                    <input 
                        placeholder="請輸入遊戲名稱"
                        className="outline-none px-9 py-3 bg-[#F5EEDD] shadow-inner shadow-[#888] rounded-[10px]">
                    </input>
                    <button className="absolute right-1 bg-[#D9D9D9] rounded-full w-8 h-8 flex justify-center items-center">
                        <AiOutlineClose className="text-[#523705] w-6 h-6" style={{ strokeWidth : 100}} />
                    </button>
                </div>
            </div>
        }
    </div>
  );
}
