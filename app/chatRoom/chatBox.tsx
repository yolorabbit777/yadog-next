'use client'; 

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Image from "next/image";
import React, { useState } from "react";
import InputBar from "./inputBar";
import BanUserList from "./banUserList";

export default function ChatBox() {


  const [dropdownVisible, setDropdownVisible] = useState(false);

  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });


  const handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault(); 
    console.log(dropdownPosition)
    setDropdownPosition({top: event.clientX, left: event.clientY})
    setDropdownVisible(true);
  }

  const handleCloseDropdown = () => {
    setBanListShow(false);
    setDropdownVisible(false);
  };

  const banUserListData = [
    { 
      "avatar" : <Image src="/images/chatRoom/avatar2@3x.png" className='' alt="footer" width={40} height={40} />,
      "ID" : "玩家ID"
    },
    { 
      "avatar" : <Image src="/images/chatRoom/avatar2@3x.png" className='' alt="footer" width={40} height={40} />,
      "ID" : "玩家ID"
    },
    { 
      "avatar" : <Image src="/images/chatRoom/avatar2@3x.png" className='' alt="footer" width={40} height={40} />,
      "ID" : "玩家ID"
    },
    { 
      "avatar" : <Image src="/images/chatRoom/avatar2@3x.png" className='' alt="footer" width={40} height={40} />,
      "ID" : "玩家ID"
    }
  ]

  const [banListShow, setBanListShow] = useState(false)

   return (
    <div className="w-full mt-7 ">
      <div className="px-8">

            <div 
              onContextMenu={handleRightClick}
              className="flex items-start flex-row gap-3">
                <Image src="/images/guild/avatar.png" className='' alt="footer" width={45} height={45} />
                <div className="flex flex-col gap-2">
                  <p className="tex-[12px] text-white font-black">台中送重機</p>
                  <div className="px-4 py-2 rounded-b-[10px] rounded-r-[10px] bg-gradient-to-b from-[#7622E1] to-[#5702C5] max-w-[300px]">
                      <p className="text-[12px] text-white whitespace-pre-line break-words">
                        💰金幣多💰 <br /> 
                        📢狗幣首選
                        <br /> 
                        <br /> 
                        📢誠信安心
                        <br /> 
                        📢處理快速
                        <br /> 
                        📢24H在線
                        <br /> 
                        <br /> 
                        加Line：shop94168
                        <br /> 
                        🀄️就是一路發🀄️
                      </p>
                  </div>
                </div>
                <div className="flex flex-col self-end">
                      <p className="text-[12px] text-white font-black">回覆</p>
                      <p className="text-[12px] text-white">上午</p>
                      <p className="text-[12px] text-white">11:51</p>
                  </div>
            </div>
            {
              dropdownVisible && (
                !banListShow ?
                <div 
                  onMouseLeave={handleCloseDropdown}
                  className="w-full rounded-[20px] border-[5px] border-[#DAB32B] p-[13px] flex flex-col gap-[6px]">
                  <button className="w-full rounded-[15px] bg-[#2A1357] flex flex-row justify-start items-center p-1 px-2 gap-5">
                        <Image src="/images/chatRoom/trash.svg" className='' alt="trash" width={35} height={35} />
                        <p className="text-[15px] text-white font-bold">刪除訊息</p>
                  </button>
                  <button className="w-full rounded-[15px] bg-[#2A1357] flex flex-row justify-start items-center p-1 px-2 gap-5">
                        <Image src="/images/chatRoom/unmute.svg" className='' alt="trash" width={35} height={35} />
                        <p className="text-[15px] text-white font-bold">禁言</p>
                  </button>
                  <button 
                    onClick={() => setBanListShow(true)}
                    className="w-full rounded-[15px] bg-[#2A1357] flex flex-row justify-between items-center p-1 px-2">
                      <div className="flex flex-row justify-start items-center gap-5 justify-start">
                          <Image src="/images/chatRoom/unhand.svg" className='' alt="trash" width={35} height={35} />
                          <p className="text-[15px] text-white font-bold">禁言列表</p>
                      </div>
                      <div onClick={() => setBanListShow(true)}>
                          <SlArrowRight className="text-white w-4 h-4" style={{ strokeWidth: 120 }} />
                      </div>
                  </button>
                </div>
                :
                <div 
                onMouseLeave={handleCloseDropdown}
                className="w-full rounded-[20px] border-[5px] border-[#DAB32B] py-[13px] flex flex-col gap-[6px]">
                  <button onClick={() => setBanListShow(false)} className="flex flex-row justify-between items-center px-2">
                      <SlArrowLeft className="text-white w-4 h-4" style={{ strokeWidth: 120 }} />
                      <p className="w-full text-center text-white text-[15px] font-black">禁言列表</p>
                  </button>
                  <hr className="mt-3" />
                  <div className="m-3 bg-[#2A1357] rounded-[15px] flex flex-col max-h-[260px] overflow-auto hide-scrollbar">
                      <BanUserList banUsers={banUserListData} />
                  </div>  
              </div>
              )}
      </div>
      <InputBar />
    </div>
  );
}
