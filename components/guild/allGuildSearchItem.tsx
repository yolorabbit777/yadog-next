import Image from "next/image";

export default function AllGuildSearchItem({avatar, displayText, detail, amount, onClick}: {avatar: React.ReactNode, displayText: string ,detail: string, amount: string,  onClick: () => void}) {
  return (
    <div className="w-full flex flex-row gap-3 rounded-[60px] bg-[#FFF7DB] border-[#DC9409] border-[4px]">
        {avatar}
        <div className="flex flex-col justify-center items-start gap-[1px]">
            <p className="text-[20px] text-[#250202]">{displayText}</p>
            <p className="text-[13px] text-[#DA8625]">{detail}</p>
            <div 
            onClick={onClick}
            className="flex flex-row justify-start -mx-2">
              <Image src="/images/guild/footprinter@3x.png" alt="coin" width={30} height={30} />
              <p className="text-[20px] text-[#250202] font-black">{amount}</p>
            </div>
        </div>
    </div>
  );
}
