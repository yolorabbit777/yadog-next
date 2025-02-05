'use client'; 

import Image from "next/image";

export default function WelcomeUser() {

   return (
    <div className="w-full bg-white rounded-[20px] flex flex-col gap-2 shadow-xl shadow-black">
        <div className="w-full px-4 flex flex-row justify-between items-center py-1 pr-4">
            <div className="flex flex-row items-center gap-3 px-1 py-2">
                <Image src="/images/guild/avatar.png" alt="footer" width={50} height={50} />
                <p className="text-[#523705] text-[14px] font-black">系統公告</p>
            </div>
            <div className="flex flex-col pr-5">
                <p className="text-[12px] text-[#523705] font-black">回覆</p>
                <p className="text-[12px] text-[#523705] font-black">上午</p>
                <p className="text-[12px] text-[#523705] font-black">11:51</p>
            </div>
        </div>
        <hr />
        <p className="text-[#523705] px-4 text-[16px] font-medium my-4">歡迎＂潤水群慈＂加入金爸爸</p>
    </div>
  );
}
