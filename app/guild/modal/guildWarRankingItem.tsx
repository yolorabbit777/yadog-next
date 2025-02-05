import Image from "next/image";

export default function GuildWarRankingItem({rank, helper, level, point}: {rank: number, helper: string, level: string, point: number}) {
  return (
    <div className="rounded-[60px] mt-3 mb-1 flex px-2 flex-row justify-between items-center border-[5px] border-[#DC9409] bg-[#FFF7DB] w-full">
        { rank <= 3 ? 
        (<Image src={`/images/guild/${rank}st@3x.png`} alt="footer" width={80} height={80} />)
        :
        (
          <p className="text-[#E1A763] text-stroke text-[40px] font-black mx-6">{rank}</p>
        )
        }
        <div className="flex flex-col -translate-x-10">
            <p className="text-[20px] font-medium text-[#250202]">{helper}</p>
            <p className="text-[13px] font-medium text-[#DA8625]">{level}</p>
        </div>
        <div className="flex flex-col items-start px-3">
            <p className="text-[15px] font-medium text-[#3A0606]">公會積分</p>
            <p className="text-[30px] font-black text-white text-stroke drop-shadow-3xl">{point}</p>
        </div>
    </div>
  );
}
