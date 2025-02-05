import Image from "next/image";
import MyGuildModalSimpleHeader from "./myGuildModalSimpleHeader";


const recordData = [
    {
        type: "點數", 
        bonus: "45,000",
        remainQuantity: "1"
    },
    {
        type: "點數", 
        bonus: "45,000",
        remainQuantity: "1"
    },
    {
        type: "點數", 
        bonus: "45,000",
        remainQuantity: "1"
    }
]

export default function RedEnvelRecordModal({setActive}: {setActive: (status: boolean) => void}) {

  return (
    <div className="fixed inset-0 flex justify-center items-center top-0 left-0 z-50 h-full ">
        <div className="w-[500px] bg-[#160133] relative flex justify-center items-center bg-opacity-80 h-full px-4">
            <button onClick={() => setActive(false)} >
                <Image src="/images/guild/modalclose.svg" className="absolute top-2 right-2" alt="footer" width={21} height={21} />
            </button>
            <div className="w-full rounded-[20px] ">
                <div className="p-[3px] bg-gradient-to-r from-[#DC9409]  via-[#F9E0A9] to-[#DAB32B] rounded-lg">
                    <MyGuildModalSimpleHeader header="紅包紀錄" />
                    <div className="bg-[#150F20] bg-opacity-94  rounded-b-lg gap-1 flex flex-col items-center flex flex-row items-start">
                        <div className="w-full grid grid-cols-4 divide-x bg-[#6736F9] mt-5 py-3">
                            <p className="text-[15px] text-white font-medium text-center">類型</p>
                            <p className="text-[15px] text-white font-medium text-center">獎金</p>
                            <p className="text-[15px] text-white font-medium text-center">剩餘數量</p>
                            <p className="text-[15px] text-white font-medium text-center">數據下載</p>
                        </div>
                        <div className="w-full h-[300px] overflow-auto hide-scrollbar">
                            {
                                recordData.map((record, index) => 
                                <div key={index} className="w-full px-2 flex flex-col justify-between items-center mt-3 gap-2">
                                    <div className="w-full grid grid-cols-4">
                                        <p className="text-white text-[13px] font-medium text-center">{record.type}</p>
                                        <p className="text-white text-[13px] font-medium text-center">{record.bonus}</p>
                                        <p className="text-white text-[13px] font-medium text-center">{record.remainQuantity}</p>
                                        <button className="w-full flex items-center justify-center">
                                            <Image src="/images/guild/download.svg" alt="footer" width={25} height={25} />
                                        </button>
                                    </div>
                                    <hr className="w-full bg-white bg-opacity-50" />
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
