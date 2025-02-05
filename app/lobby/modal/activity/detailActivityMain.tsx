import Image from "next/image";
import { useState } from "react";
import { SlArrowLeft } from "react-icons/sl";


export default function DetailActivityMain() {

    return (
        <div className="fixed inset-0 flex justify-center items-center top-0 left-0 z-[600] h-full ">
            <div className="w-[500px] bg-[#160133] relative flex justify-end items-end bg-opacity-80 h-full px-4">
                <div className="w-full rounded-[20px] ">
                    <div className="p-[10px] bg-gradient-to-r from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-[50px]">
                        <div className="min-h-[700px] relative bg-gradient-to-b from-[#5B0B90] to-[#052657] bg-opacity-94 rounded-[50px] pt-[60px] gap-1 flex flex-col items-center flex flex-row items-start p-4">
                            <Image src="/images/lobby/activity.png" alt="activity" className="absolute z-[400] -top-[130px]" width={466} height={194} />
                            <p className="absolute text-white text-[23px] font-bold z-[400] -top-[40px]">活動</p>
                           
                            <div className="rounded-[25px] mt-3 flex flex-row justify-start items-end relative w-full h-[182px]">
                                <Image src="/images/lobby/lobby@3x.png" className='obtain-cover h-full w-full rounded-[20px] absolute -z-1' alt="footer" width={500} height={1} />
                            </div>
                            <div className="mt-2 w-full flex flex-col justify-start items-start">
                                <p className="text-[18px] text-white font-black">優惠代碼活動開跑!</p>
                                <p className="text-[13px] text-[#FFBE3F] font-bold">2025-01-01 ~ 2025-12-30</p>
                                <br />
                                <p className="text-[18px] text-[#FF9C39] font-black">活動時間:</p>
                                <p className="text-[18px] text-white font-bold">2025-01-01 ~ 2025-12-30</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed w-[500px] bottom-0 flex flex-col items-center z-[1000]">
                <Image src="/images/guild/dog@3x.png" alt="footer" className='absolute -right-8' width={157} height={147} />
                <Image src="/images/guild/reward@3x.png" alt="footer" className='absolute right-20 bottom-0' width={60} height={60} />
                <button className='flex justify-center gap-2 px-2 py-1 items-center border-[2px] border-white absolute rounded-[30px] bg-gradient-to-b from-[#73FDE1] to-[#0C9286]' >
                    <SlArrowLeft className="w-3 h-4 text-white" style={{ strokeWidth: 320 }} />
                    <p className="text-[18px] text-white font-medium text-stroke">所有活動</p>
                </button>
                <Image src="/images/guild/moneymountain@3x.png" className='' alt="footer" width={500} height={80} />
            </div>
        </div>
    );
}
