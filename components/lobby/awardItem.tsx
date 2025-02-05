'use client';

import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";

export default function AwardItem({ rowSpan, colSpan }: { rowSpan: string, colSpan: number }) {
  const rowNum = () => {
    return `row-span-${rowSpan}`
  };
  return (
    <div className={`relative w-full h-full py-1 ${rowSpan} col-span-${colSpan}`}>
        <div className="relative text-center flex justify-start items-center translate-y-[25%]">
            <Image src="/images/lobby/score@3x.png" className='absolute object-cover w-full' alt="footer" width={60} height={12} />
            <p className="w-full text-white font-black text-[15px] absolute z-[100] text-center">1,234,567</p> 
            <Image src="/images/lobby/hot@3x.png" className='absolute justify-self-start -ml-2' alt="footer" width={40} height={40} />
            <button className="absolute right-1 top-1 w-[22px] h-[22px] bg-[#E9E9E9] rounded-full flex justify-center items-center">
                <AiFillHeart className="text-[#9E9C9C]" />
            </button>
        </div>
        <Image src="/images/lobby/award1@3x.png" className='object-cover w-full h-full' alt="footer" width={130} height={130} />
        <div className="absolute right-0 bottom-0 bg-[#462602] px-2 flex justify-center rounded-[30px]">
            <span className="text-white text-[12px] font-black">8,371倍</span>
        </div>
    </div>
  );
}
