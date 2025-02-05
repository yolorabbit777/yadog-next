'use client'; 

import Image from "next/image";
import { BiSearchAlt2 } from "react-icons/bi";

export default function FriendListSearchModal() {

   return (
    <div className="w-full absolute px-4" >
        <div className="w-full h-full bg-[#1C0B2C] opacity-80">

        </div>
        <div className="h-full bg-gradient-to-b from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] p-2 rounded-[50px]">
            <div className="w-full h-full bg-gradient-to-b from-[#5B0B90] to-[#052657] rounded-[50px]">
                <div className="w-full h-full flex flex-col justify-start items-center p-4 pt-12 gap-3">
                    <div className="w-[250px] relative flex items-center mb-4">
                        <input
                            placeholder="搜尋所有玩家"
                            className="rounded-[10px] shadow-inner shadow-[#666] p-4 bg-[#F5EEDD] text-[#3D0303] outline-none pr-9" />
                        <BiSearchAlt2 className="w-9 h-9 absolute -right-4" />
                    </div>

                    <div className="w-full rounded-[20px] bg-white flex items-center gap-4 p-1 shadow-md shadow-black">
                        <Image src="/images/guild/avatar.png" className='' alt="footer" width={50} height={50} />
                        <p className="text-[15px] text-[#523705] font-black">台中送重機</p>
                    </div>
                    <div className="w-full rounded-[20px] bg-white flex items-center gap-4 p-1 shadow-md shadow-black">
                        <Image src="/images/guild/avatar.png" className='' alt="footer" width={50} height={50} />
                        <p className="text-[15px] text-[#523705] font-black">台中送重機</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
