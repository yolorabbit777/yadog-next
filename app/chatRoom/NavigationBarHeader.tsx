'use client'; 

import DateNavigationItem from "@/components/guild/dateNavigationItem";
import Image from "next/image";

// Define an interface for the data type
interface DataItem {
  isActive: boolean;
  name: string;
}

export default function Home({dataList,activeDateIndex, setActiveDateIndex }: {dataList: Array<DataItem>,activeDateIndex: number, setActiveDateIndex: (status: number) => void}) {



   return (
    <div className="w-full flex gap-5 mt-[18px]">
        <button className="flex flex-row justify-center items-center shadow-inner shadow-black gap-2 py-4 px-1 pr-3 rounded-r-[100px] bg-white">
            <Image src="/images/chatRoom/backArrow.svg" alt="arrow" className="" width={12} height={16} />
            <span className="text-[#523705] text-[13px] font-medium">回大廳</span>
        </button>
        <DateNavigationItem dataList={dataList} activeDateIndex={activeDateIndex} setActiveDateIndex={setActiveDateIndex} />
    </div>
  );
}
