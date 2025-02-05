import Image from "next/image";
import AllGuildSearchItem from "@/components/guild/allGuildSearchItem";

const searchTabList = [
  {
    avatar: <Image src="/images/guild/avatar.svg" alt="footer" width={86} height={86} />,
    displayText: "台中好幫幫",
    detail: "等級1",
    amount: "8,888,888.88"
  },
  {
    avatar: <Image src="/images/guild/avatar.svg" alt="footer" width={86} height={86} />,
    displayText: "台中好幫幫",
    detail: "等級1",
    amount: "8,888,888.88"
  },
  {
    avatar: <Image src="/images/guild/avatar.svg" alt="footer" width={86} height={86} />,
    displayText: "台中好幫幫",
    detail: "等級1",
    amount: "8,888,888.88"
  },
  {
    avatar: <Image src="/images/guild/avatar.svg" alt="footer" width={86} height={86} />,
    displayText: "台中好幫幫",
    detail: "等級1",
    amount: "8,888,888.88"
  },
  {
    avatar: <Image src="/images/guild/avatar.svg" alt="footer" width={86} height={86} />,
    displayText: "台中好幫幫",
    detail: "等級1",
    amount: "8,888,888.88"
  }
]

export default function AllGuildTab() {
  
  return (
    <div className="w-full flex flex-col justify-center  gap-[11px] p-2 rounded-b-[20px]">
      <div className="flex flex-row justify-between items-center p-2">
          <div className="flex flex-row justify-between items-center bg-[#D9D9D9] rounded-[5px]">
              <Image src="/images/guild/search@3x.png" alt="footer" width={48} height={48} />
              <input className="w-[200px] text-[#444] h-full outline-none bg-[#D9D9D9]" />
              <button>
              <Image src="/images/guild/close@3x.png" className="m-2" alt="footer" width={27} height={27} />
              </button>
          </div>
          <button className="rounded-[30px] bg-gradient-to-b from-[#73FDE1] to-[#0C9286] py-1 px-3 border-white border-[3px]">
              <span className="text-white text-[18px] text-stroke-wheet">建立公會</span>
          </button>
      </div>
      <div className="flex flex-col justify-start gap-3 px-3">
          {searchTabList.map((tab, index) => (
            <AllGuildSearchItem 
              key={index}
              avatar={tab.avatar} 
              displayText={tab.displayText}
              detail={tab.detail}
              amount={tab.amount}
              onClick={() => {}}
            />
          ))}     
          
      </div>
    </div>
  );
}
