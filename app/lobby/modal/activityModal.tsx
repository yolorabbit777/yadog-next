import DateNavigationItem from "@/components/chatRoom/dateNavigationItem";
import ActivityModalItem from "@/components/lobby/activityModalItem";
import Image from "next/image";
import { useState } from "react";

const dataList = ["活動", "公告"]

const modalDataList = [
    {
        'image' : "/images/lobby/lobby@3x.png",
        'text': "優惠代碼活動開跑!",
        'startDate': "2025-01-01",
        'endDate': "2025-12-30"
    },
    {
        'image' : "/images/lobby/lobby@3x.png",
        'text': "優惠代碼活動開跑!",
        'startDate': "2025-01-01",
        'endDate': "2025-12-30"
    },
    {
        'image' : "/images/lobby/lobby@3x.png",
        'text': "優惠代碼活動開跑!",
        'startDate': "2025-01-01",
        'endDate': "2025-12-30"
    },
]

export default function ActivityModal({setActivityModalShow} : {setActivityModalShow: (status: boolean) => void}) {

    const [activeDataIndex, setActiveDateIndex] = useState(0)

    return (
        <div className="fixed inset-0 flex justify-center items-center top-0 left-0 z-[600] h-full ">
            <div className="w-[500px] bg-[#160133] relative flex justify-end items-end bg-opacity-80 h-full px-4">
                <div className="w-full rounded-[20px] ">
                    <div className="p-[10px] bg-gradient-to-r from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-[50px]">
                        <div className="min-h-[700px] relative bg-gradient-to-b from-[#5B0B90] to-[#052657] bg-opacity-94 rounded-[50px] pt-[60px] gap-1 flex flex-col items-center flex flex-row items-start p-4">
                            <Image src="/images/lobby/activity.png" alt="activity" className="absolute z-[400] -top-[130px]" width={466} height={194} />
                            <p className="absolute text-white text-[23px] font-bold z-[400] -top-[40px]">活動</p>
                            <div className="w-[60%] px-3">
                                <DateNavigationItem
                                    dataList={dataList} 
                                    activeDateIndex={activeDataIndex} 
                                    setActiveDateIndex={setActiveDateIndex} />
                            </div>
                            {activeDataIndex ==0 && 
                            
                            modalDataList.map((data, index) => 
                              
                                <ActivityModalItem
                                    key={index} 
                                    image={data.image} 
                                    text={data.text} 
                                    startDate={data.startDate} 
                                    endDate={data.endDate} />
                            )
                            
                            }
                            {activeDataIndex ==1 &&  
                              
                            <div className="w-full flex flex-row p-2 mt-2 ">
                               <div className="w-[45%] flex flex-col gap-4 px-3 py-1 border-r-[2px] border-[#8E3FB2]">
                                    <div className="bg-[#917DFF] rounded-[15px] p-4">
                                        <p className="text-[18px] font-bold text-white text-stroke">2025/1月商城例行維護公告</p>
                                    </div>
                                    <p className="text-[18px] font-bold text-white">針對近期冒用本公司名義、商標等事件之聲明</p>     
                                    <p className="text-[18px] font-bold text-white">反詐三"不"驟</p>     
                                    <p className="text-[18px] font-bold text-white">小狗12/26系統例行維護</p>     
                               </div>
                               <div className="w-[45%] flex flex-col gap-4 px-3 py-1 mt-2">
                                    <p className="text-[18px] font-bold text-[#FF9C39]">維護時間:</p>  
                                    <p className="text-[18px] font-bold text-white">2025-01-01(三) 08:00~09:30</p>  
                                    <p className="text-[18px] font-bold text-[#FF9C39]">維護項目:</p>     
                               </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed w-[500px] bottom-0 flex flex-col items-center z-[1000]">
                <Image src="/images/guild/dog@3x.png" alt="footer" className='absolute -right-8' width={157} height={147} />
                <Image src="/images/guild/reward@3x.png" alt="footer" className='absolute right-20 bottom-0' width={60} height={60} />
                <button 
                    onClick={() => setActivityModalShow(false)}
                    className='w-[65px] h-[65px] absolute rounded-full bg-black' >
                    <Image src="/images/guild/closeVector.svg" alt="footer" className='transform transition-transform duration-300 hover:rotate-90' width={66} height={66} />
                </button>
                <Image src="/images/guild/moneymountain@3x.png" className='' alt="footer" width={500} height={80} />
            </div>
        </div>
    );
}
