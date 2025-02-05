'use client'; 

import Image from "next/image";
import { useState } from "react";

export default function AccountLogin({isActive, setActive} : {isActive:boolean, setActive: (status: boolean) => void}) {

  const handleEnterAccount = () => {
    console.log(isActive)
    setActive(false)
  }

  const [isPasswordShow, setPasswordShow] = useState(false)

  return (
    <div className=" z-[1000] absolute w-full h-full flex flex-col items-center">
      <div className="absolute w-full h-full bg-[#160133] opacity-80">
      </div>
      <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
              <Image src="/images/login/accountLogin@3x.png" alt="header" className="translate-y-[24%] z-[1003]" width={450} height={275} />
              <p className="text-white text-[23px] font-bold -translate-y-[122%] z-[100000]">帳號</p>
          </div>
          <div className="w-full px-[18px] opacity-100 -translate-y-10">
              <div className="flex flex-col justify-between items-center gap-[18px] border-[10px] border-[#DC9409] rounded-[50px] px-[42px] pb-[30px] pt-[72px] bg-gradient-to-b from-[#5B0B90] to-[#052657]">
                 
                  <div className="flex w-full flex-col items-start gap-1">
                    <p className="text-[18px] text-white font-bold">帳號</p>
                    <input
                        placeholder="請輸入帳號"
                        className="w-full shadow-inner shadow-black bg-[#F9F0E0] rounded-[10px] text-[#523705] outline-none text-[13px] font-medium p-3"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-1">
                    <p className="text-[18px] text-white font-bold">密碼</p>
                    <div className="w-full relative flex flex-col justify-center items-end">
                        <input
                            placeholder="請輸入密碼"
                            type={`${isPasswordShow? "text" : "password"}`}
                            className="w-full font-black shadow-inner shadow-black bg-[#F9F0E0] rounded-[10px] text-[#523705] outline-none text-[13px] font-medium p-3"
                        />
                        { 
                            isPasswordShow ? 
                            <button  onClick={() => setPasswordShow(false)} className="absolute mr-3">
                                <Image src="/images/login/closeEye.svg" alt="eye" width={24} height={12} />
                            </button>
                            :
                            <button onClick={() => setPasswordShow(true)}  className="absolute mr-3">
                                <Image src="/images/login/openEye.svg" alt="eye" width={24} height={12} />
                            </button>
                         }
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center mt-6">
                      <button 
                        onClick={handleEnterAccount}
                        className="rounded-[30px] outline-none border-[3px] border-white bg-gradient-to-b from-[#73FDE1] to-[#0C9286] py-1 px-9">
                          <span className="text-[15px] text-white text-stroke-wheet font-medium">登入</span>
                      </button>
                  </div>
              </div>
          </div>
      </div>
        
    </div>
  );
}
