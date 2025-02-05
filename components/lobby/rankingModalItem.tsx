import Image from "next/image";

export default function RankingModalItem({rank, avatar, text, point}: {rank: number, avatar: React.ReactNode, text: string, point: string}) {
  return (
    <div className="rounded-[25px] mt-3 mb-1 flex px-2 flex-row justify-between items-center border-[5px] border-[#DC9409] bg-gradient-to-b from-[#EEB109] to-[#FAE8AB] w-full">
        <div className="flex flex-row justify-center items-center gap-2">
            { rank <= 3 ? 
            (<Image src={`/images/guild/${rank}st@3x.png`} alt="medal" className="-translate-y-[20px]" width={80} height={80} />)
            :
            (
            <p className="text-[#E1A763] text-stroke text-[40px] font-black mx-6">{rank}</p>
            )}
            {avatar}
            <p className="text-[15px] text-[#523705] font-bold text-stroke-white">{text}</p>
        </div>
        <div className="flex flex-row justify-center items-center">
            <Image src="/images/guild/footprinter@3x.png" alt="footer" width={40} height={40} />
            <p className="text-[15px] text-[#523705] font-black">{point}</p>
        </div>
    </div>
  );
}
