'use client'; 

import GuildFooter from "@/components/layout/guild/footer";
import HeaderButton from "@/components/guild/headerButton";
import MyGuildTab from "./myGuildTab";
import AllGuildTab from "./allGuildTab";
import DescriptGuildTab from "./descrptGuildTab";
import { useState } from "react";

export default function Home() {

  const [activeTab, setActiveTab] = useState("MY");
  return (
    <div className="bg-black h-screen flex flex-col items-center">
      <div className="bg-background h-screen overflow-auto hide-scrollbar w-[500px] relative px-[16px] py-[29px]">
        
        <div className="w-full h-[70px] bg-gradient-to-b from-[#F9E0A9] to-[#DC9409] rounded-t-[20px]">
            <div className="flex justify-between items-center flex-row gap-[10px] h-full px-4 py-5">
                <HeaderButton text="我的公會" isActive={activeTab == "MY"} onClick={() => setActiveTab("MY")} />
                <hr className="w-[1px] h-full bg-[#FFFFFA]" />  
                <HeaderButton text="所有公會" isActive={activeTab == "ALL"} onClick={() => setActiveTab("ALL")} />
                <hr className="w-[1px] h-full bg-[#FFFFFA]" />  
                <HeaderButton text="公會說明" isActive={activeTab == "DESC"} onClick={() => setActiveTab("DESC")} />
            </div>
        </div>
        <div className="w-full rounded-b-[20px] bg-[#150F20F0] mb-[120px] pb-5 border-[5px] border-[#DC9409]">
          { activeTab == "MY" && <MyGuildTab /> }
          { activeTab == "ALL" && <AllGuildTab /> }
          { activeTab == "DESC" && <DescriptGuildTab /> }
        </div>
        
      </div>
      <GuildFooter />
    </div>
  );
}
