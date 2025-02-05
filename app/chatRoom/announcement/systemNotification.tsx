'use client'; 

import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";

export default function SystemNotification() {


   return (
    <div className="w-full flex flex-row justify-between items-end gap-2">
        <div className="w-full bg-white rounded-[20px] flex flex-row items-center gap-4 p-2 pr-4 shadow-xl shadow-black">
            <Image src="/images/chatRoom/game@3x.png" alt="footer" width={70} height={70} />
            <p className="text-[13px] text-[#523705] font-medium">恭喜＂萬萬萬萬＂在＂埃及秘寶＂獲得329.40倍大獎</p>
            <SlArrowRight className="text-[#523705] w-4 h-6" style={{ strokeWidth: 300 }} />
        </div>
        <div className="flex flex-col">
            <Image src="/images/chatRoom/notification.svg" alt="footer" width={38} height={38} />
            <p className="text-[12px] text-white">上午</p>
            <p className="text-[12px] text-white">11:51</p>
        </div>
    </div>
    
  );
}
