import Image from "next/image";

export default function MyGuildSelectTab({avatar, displayText, isActive, setActive}: {avatar: React.ReactNode, displayText: string ,isActive:boolean,  setActive: (active: boolean) => void}) {
  return (
    <button onClick={() => setActive(!isActive)} className="w-full flex flex-row justify-between items-center bg-tabback rounded-[10px] px-[20px]">
        <div className="flex flex-row justify-between items-center gap-[7px]">
          {avatar}
          <p className="text-white text-[15px] font-bold">{displayText}</p>
        </div>
        <Image src="/images/guild/leftArrow@3x.png" alt="footer" className={`${isActive && 'transform transition-transform duration-300 rotate-90'}`} width={25} height={25} />
    </button>
  );
}
