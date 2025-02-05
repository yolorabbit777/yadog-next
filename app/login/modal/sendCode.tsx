'use client'; 

import Image from "next/image";

export default function SendCode({isActive, setActive} : {isActive:boolean, setActive: (status: boolean) => void}) {

  const handleCancelSendCode = () => {

    console.log(isActive)
    setActive(false)
  }

  const handleConfirmSendCode = () => {
    setActive(false)
  }

  return (
    <div className=" z-[1000] absolute w-full h-full flex flex-col items-center">
      <div className="absolute w-full h-full bg-[#160133] opacity-80">
      </div>
      <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
              <Image src="/images/login/loginBox@3x.png" alt="header" className="translate-y-[24%] z-[1003]" width={450} height={275} />
              <p className="text-white text-[23px] font-bold -translate-y-[122%] z-[100000]">手機認證</p>
          </div>
          <div className="w-full px-[18px] opacity-100 -translate-y-10">
              <div className="flex flex-col justify-between items-center gap-[18px] border-[10px] border-[#DC9409] rounded-[50px] px-[42px] pb-[30px] pt-[72px] bg-gradient-to-b from-[#5B0B90] to-[#052657]">
                  <input 
                      placeholder="請輸入手機號碼" 
                      className="w-full rounded-[10px] bg-[#F5EEDD] p-[13px] text-[15px] shadow-inner shadow-black outline-none" />
                  <div className="w-full flex flex-row justify-between gap-4">
                      <input
                        placeholder="請輸入驗證碼"
                        className="w-[40%] rounded-[10px] bg-[#F5EEDD] p-[13px] text-[15px] shadow-inner shadow-black outline-none" />
                      <button className="w-[60%] bg-gradient-to-b from-[#FF6365] to-[#CB1162] px-3 py-2 border-[2px] border-white rounded-[30px] outline-none">
                          <span className="text-[15px] text-white font-medium">發送手機簡訊驗證碼</span>
                      </button>
                  </div>
                  <p className="self-start text-white text-[13px] font-medium whitespace-pre-line">
                      驗證碼以簡訊方式發送至您綁定的手機
                      <br />
                      (若沒收到驗證碼,請留意手機遭封鎖的訊息區)
                      <br />
                  </p>
                  <div className="flex flex-row justify-between items-center gap-[22px]">
                      <button 
                        onClick={handleCancelSendCode}
                        className="rounded-[30px] border-[3px] border-white bg-gradient-to-b from-[#FFFFFF] to-[#B6938A] py-1 px-9">
                          <span className="text-[15px] text-[#523705] font-medium">取消</span>
                      </button>
                      <button 
                        onClick={handleConfirmSendCode}
                        className="rounded-[30px] border-[3px] border-white bg-gradient-to-b from-[#73FDE1] to-[#0C9286] py-1 px-9">
                          <span className="text-[15px] text-white text-stroke-wheet font-medium">確定</span>
                      </button>
                  </div>
              </div>
          </div>
      </div>
        
    </div>
  );
}
