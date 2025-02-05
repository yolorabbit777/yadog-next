import MonthNavigation from "@/components/lobby/monthNavigation";
import Image from "next/image";
import { useState } from "react";

const modalDataList = [
    {
        'rank' : 1,
        'avatar' : <Image src="/images/guild/avatar.png" alt="footer" width={50} height={50} />,
        'text': "好玩一直玩",
        'point': "3,032,266",
    },
    {
        'rank' : 2,
        'avatar' : <Image src="/images/guild/avatar.png" alt="footer" width={50} height={50} />,
        'text': "好玩一直玩",
        'point': "3,032,266",
    },
    {
        'rank' : 3,
        'avatar' : <Image src="/images/guild/avatar.png" alt="footer" width={50} height={50} />,
        'text': "好玩一直玩",
        'point': "3,032,266",
    }
]

const monthDataList = ["12月", "11月", "10月", "9月", "8月", "7月"]

export default function KingsRanking() {

    const [activeMonthIndex, setActiveMonthIndex] = useState(0)

    return (
        <>
        <MonthNavigation 
            dataList={monthDataList} 
            activeDateIndex={activeMonthIndex} 
            setActiveDateIndex={setActiveMonthIndex} />
        <p className="text-white text-[10px] font-medium">每月更新</p>    
        { modalDataList.map((data, index) => 
                              
            <div 
                key={index}
                className="rounded-r-[25px] mt-2 bg-white flex pr-2 flex-row justify-between items-center w-full">
                <div className="flex flex-row justify-center items-center gap-2">
                    <Image src={`/images/lobby/award.png`} alt="medal" className="object-cover -translate-x-2 w-[80px] h-[80px] rounded-[10px]" width={80} height={80} />
                    {data.avatar}
                    <div>
                        <p className="text-[15px] font-medium text-[#FFA600]">王者</p>
                        <p className="text-[15px] text-[#523705] font-bold text-stroke-white">{data.text}</p>
                    </div>

                </div>
                <div className="flex flex-row justify-center items-center pr-1">
                    <p className="text-[25px] text-[#523705] font-black">{data.point}</p>
                    <p className="text-[#523705] text-[13px] font-black">倍</p>
                </div>
            </div>
        
        )}
        </>
    );
}
