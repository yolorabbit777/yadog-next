'use client';
import Image from "next/image";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineSync } from "react-icons/ai";
import { HiCog } from "react-icons/hi";
import { RiVolumeUpFill } from "react-icons/ri";
 

export default function LobbyHeader() {


  return (
    <div className="w-[500px] z-[500] fixed h-[205px] flex flex-col justify-between">
        <div className="shadow-inner shadow-black absolute bg-black h-[230px]">
            <Image src="/images/lobby/lobby@3x.png" className='obtain-cover h-[230px] -z-1' alt="footer" width={500} height={1} />
        </div>
        <div className="w-full flex justify-between px-2">
            <div className="flex items-center p-2">
                <Image src="/images/guild/avatar.png" alt="footer" className="z-[100]" width={50} height={50} />
                <div className="z-[100]">
                    <p className="text-white text-[13px] font-medium">好玩一直玩</p>
                    <div className="flex items-center">
                        <button className="-translate-x-1 bg-gradient-to-b from-[#FFFFFF] to-[#B6938A] rounded-[30px] border border-white px-2 py-[2px] flex items-center">
                            <BsPersonCircle className="text-[#523705]" />
                            <span className="text-[#523705] text-[13px] font-bold">我的</span>
                        </button>
                        <button className="bg-gradient-to-b from-[#FFF2A6] to-[#EE9025] rounded-[30px] border border-white px-3">
                            <span className="text-[#523705] text-[13px] font-black">VIP4</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center z-[100]">
                <Image src="/images/guild/footprinter@3x.png" alt="footprinter" className="z-[11] translate-x-3" width={32} height={32} />
                <div className="flex items-center border-[0.5px] border-white rounded-[30px] z-[10] px-2 py-1 pl-4 ">
                    <p className="text-white font-black text-[14px]">1,234,567.89</p>
                    <AiOutlineSync className="text-white " style={{ strokeWidth: 70 }} />
                </div>
                <HiCog className="text-white w-8 h-8" />
            </div>
        </div>
        <div className="flex flex-row items-center px-2">
            <RiVolumeUpFill className="z-[100] text-white" />
            <p className="text-[13px] text-white font-medium z-[100]">我是公告----我是公告</p>
        </div>
    </div>
  );
}
