'use client'; 

import { useState } from "react";
import NavigationBarHeader from "./NavigationBarHeader";
import ChatBox from "./chatBox";
import AnnounceMainBoard from "./announcement/announceMainBoard";
import PrivateChatMainBoard from "./privateChat/mainBoard";

export default function Home() {

  const dataList = [
    { "name": "公頻",
      "isActive" : false
    },
    { "name": "私聊",
      "isActive" : false
    },
    { "name": "公會頻",
      "isActive" : true
    },
    { "name": "公告",
      "isActive" : true
    }
  ]

  const [activeDateIndex, setActiveDateIndex] = useState(0)

  return (
    <div className="bg-black h-screen flex flex-col items-center">
      <div className="bg-[#191223] h-screen overflow-auto hide-scrollbar flex flex-col justify-start items-center w-[500px] relative">
           <NavigationBarHeader dataList={dataList} activeDateIndex={activeDateIndex} setActiveDateIndex={setActiveDateIndex}  />
           { activeDateIndex ==0 && <ChatBox />}
           { activeDateIndex ==1 && <PrivateChatMainBoard />}
           { activeDateIndex ==2 && <ChatBox />}
           { activeDateIndex ==3 && <AnnounceMainBoard />} 
      </div>
    </div>
  );
}
