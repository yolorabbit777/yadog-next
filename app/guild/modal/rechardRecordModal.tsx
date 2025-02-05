import Image from "next/image";
import MyGuildModalSimpleHeader from "./myGuildModalSimpleHeader";
import DateNavigationItem from "@/components/guild/dateNavigationItem";
import { useState } from "react";

const memberList = [
    {
        avatar: <Image src="/images/guild/icon@3x.png" alt="footer" width={45} height={45} />,
        name: "好玩一直玩",
        value1: "50.00",
        value2: "40.00",
        index: 0
    },
]

const dateList = ["今日", "昨日", "本週", "上週", "本月", "上月"]

export default function RechardRecordModal({setActive}: {setActive: (status: boolean) => void}) {

  const [activeDateIndex ,setActiveDateIndex] = useState(0)
  return (
    <div className="fixed inset-0 flex justify-center items-center top-0 left-0 z-50 h-full ">
        <div className="w-[500px] bg-[#160133] relative flex justify-center items-center bg-opacity-80 h-full px-4">
            <button onClick={() => setActive(false)} >
                <Image src="/images/guild/modalclose.svg" className="absolute top-2 right-2" alt="footer" width={21} height={21} />
            </button>
            <div className="w-full rounded-[20px] ">
                <div className="p-[3px] bg-gradient-to-r from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-lg">
                    <MyGuildModalSimpleHeader header="儲值紀錄" />
                    <div className="bg-[#150F20] bg-opacity-94 rounded-b-lg gap-1 flex flex-col items-center flex flex-row items-start">
                        <div className="w-full px-2 py-1">
                            <DateNavigationItem dateList={dateList} activeDateIndex={activeDateIndex} setActiveDateIndex={setActiveDateIndex} />
                        </div>
                        <div className="w-full grid grid-cols-2 divide-x bg-[#6736F9] mt-3 py-3">
                            <p className="text-[15px] text-white font-medium text-center">成員</p>
                            <p className="text-[15px] text-white font-medium text-center">累積儲值/今日貢獻度</p>
                        </div>
                        <div className="w-full flex flex-col p-3 gap-2 min-h-[300px] overflow-auto scroll-none">
                            {
                                memberList.map((member, index) => 
                                    member.index != activeDateIndex ?
                                    <div key={index} className="w-full rounded-[10px] bg-[#F9F0E0] p-1 flex flex-row justify-between items-center">
                                        <div className="flex flex-row items-center gap-3">
                                            {member.avatar}
                                            <p className="text-[15px] text-[#250202] font-medium">{member.name}</p>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <p className="text-[13px] text-[#250202] font-black">{member.value1}</p>
                                            <p className="text-[18px] text-[#EF932B] font-black">{member.value2}</p>
                                        </div>
                                    </div>
                                    :
                                    <div key={index} className="flex flex-col items-center mt-16">
                                        <Image src="/images/guild/notFound.svg" alt="footer" width={97} height={97} />
                                        <p className="text-[#828282] text-[15px] font-medium">沒有儲值紀錄資料</p>
                                    </div>
                                )
                            }
                        </div>
                        <button 
                            onClick={() => setActive(false)} 
                            className="border-[3px] mb-3 border-white rounded-[30px] py-2 px-10 bg-gradient-to-b from-[#73FDE1] to-[#0C9286] mt-4">
                            <span className="text-white text-[15px] text-stroke-wheet font-bold">數據下載</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
