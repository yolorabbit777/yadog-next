'use client'; 

import Image from "next/image";
import { useState } from "react";
import SendCode from "./modal/sendCode";
import AccountLogin from "./modal/AccountLogin";

export default function Home() {

  const [isSendCodeActive, setSendCodeActive] = useState(false)
  const [isAccountLoginActive, setAccountLoginActive] = useState(false)

  const handleSendCodeActive = () => {
    setSendCodeActive(true)
  }

  const handleAccountLoginActive = () => {
    setAccountLoginActive(true)
  }

  return (
    <div className="bg-black h-screen flex flex-col items-center">
      <div className="bg-background h-screen overflow-auto hide-scrollbar flex flex-col justify-center items-center w-[500px] relative">

            { isSendCodeActive && <SendCode isActive={isSendCodeActive} setActive={setSendCodeActive} /> }
            { isAccountLoginActive && <AccountLogin isActive={isAccountLoginActive} setActive={setAccountLoginActive} /> }

            <Image src="/images/login/greeting@3x.png" alt="background" className="z-50" width={400} height={400} />
            
            <div className="flex flex-col justify-center items-center gap-6 z-50 -mt-8">
                    <button 
                      onClick={handleSendCodeActive}
                      className="w-full flex flex-row z-50 justify-start items-center select-none px-8 py-1 gap-2 rounded-[50px] border-[2px] border-white bg-[#19BC03]">
                        <Image src="/images/login/line.svg" alt="footer" className="z-50" width={52} height={52} />
                        <p className="text-white text-[20px] font-black">LINE登入</p>
                    </button>
                    <button 
                      onClick={handleAccountLoginActive}
                      className=" w-full flex flex-row items-center select-none px-8 py-1 gap-2 pr-12 rounded-[50px] border-[2px] border-white bg-[#0363BC]">
                        <Image src="/images/login/facebook.svg" alt="footer" className="z-50" width={52} height={52} />
                        <p className="text-white text-[20px] font-black">Facebook登入</p>
                    </button>
                    <div className="w-[105%] flex flex-row justify-between items-center">
                        <button className="flex flex-col justify-center items-center w-[76px] h-[76px] rounded-full bg-[#24C2E5] border-[3px] border-white p-1">
                        <Image src="/images/login/telegram.svg" alt="footer" className="z-50" width={39} height={32} />
                            <p className="text-white text-[13px] font-medium">Telegram</p>
                        </button>
                        <button className="flex flex-col justify-center items-center shadow-inner shadow-[#333] w-[76px] h-[76px] rounded-full bg-[#FFA43D] border-[3px] border-white p-1">
                        <Image src="/images/login/user.svg" alt="footer" className="z-50" width={39} height={32} />
                            <p className="text-[#523705] text-[13px] font-medium text-stroke-white">帳號</p>
                        </button>
                        <button className="flex flex-col justify-center shadow-inner shadow-[#999] items-center w-[76px] h-[76px] rounded-full bg-white border-[3px] border-white p-1">
                        <Image src="/images/login/wechat.svg" alt="footer" className="z-50" width={39} height={32} />
                            <p className="text-[#523705] text-[13px] font-medium">簡訊</p>
                        </button>
                    </div>
            </div>
            <Image src="/images/login/loginbg@3x.png" className="absolute w-full h-full" alt="footer" width={500} height={1500} />
      </div>
    </div>
  );
}
