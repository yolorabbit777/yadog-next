'use client'; 

import Image from "next/image";

export default function InputBar() {


   return (
    <div className="w-full absolute bottom-0 flex flex-row justify-between items-center p-4 bg-white">
       <button className="">
          <Image src="/images/chatRoom/picture.svg" className='' alt="upload picture" width={19} height={19} />
       </button>
       <button className="">
          <Image src="/images/chatRoom/sound.svg" className='' alt="upload picture" width={19} height={19} />
       </button>
       <div className="flex justify-end w-[280px] ">
            <input 
              placeholder="請輸入訊息"
              className="w-full h-[40px] border rounded-[30px] bg-[#FFF4C8] outline-none p-4 text-[12px]" />
              <button className="absolute">
                  <Image src="/images/chatRoom/emoji.svg" alt="upload picture" width={40} height={40} />
              </button>
       </div>
       <button className="bg-gradient-to-b from-[#FF9F32] to-[#FB4C0D] rounded-[30px] py-[10px] px-[30px] border-[2px] border-white shadow-[#aaa] shadow-md">
          <span className="text-white font-black text-[15px]">送出</span>
       </button>

    </div>
  );
}
