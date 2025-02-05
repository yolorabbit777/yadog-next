import Image from "next/image";
import GuildWarRankingItem from "./guildWarRankingItem";

const guildWarLastWinner = [
    {
        rank: 1,
        helper: "台中好幫幫",
        level: "等級1",
        point: 60
    },
    {
        rank: 2,
        helper: "台中好幫幫",
        level: "等級1",
        point: 60
    },
    {
        rank: 3,
        helper: "台中好幫幫",
        level: "等級1",
        point: 30
    }    
]

export default function GuildWarsModal({setActive, setGuildWarDescriptActive, setGuildWarRankingActive}: {setActive: (status: boolean) => void, setGuildWarDescriptActive: (status: boolean) => void, setGuildWarRankingActive: (status: boolean) => void}) {

  const handleGuidWarRankingClick = () => {
    setGuildWarRankingActive(true);
    setActive(false);
  }  

  const handleGuildWarDescriptClick = () => {
    setGuildWarDescriptActive(true);
    setActive(false);
  }
  return (
    <div className="fixed inset-0 flex justify-center items-center top-0 left-0 z-50 h-full ">
        <div className="w-[500px] bg-[#160133] relative flex justify-center items-center bg-opacity-80 h-full px-4">
            <button onClick={() => setActive(false)} >
                <Image src="/images/guild/modalclose.svg" className="absolute top-2 right-2" alt="footer" width={21} height={21} />
            </button>
            <div className="w-full rounded-[20px] ">
                <div className="p-[3px] bg-gradient-to-r from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-lg">
                    <div className="bg-gradient-to-b rounded-t-lg grid grid-cols-2 py-4 divide-x items-center from-[#FEE385] to-[#EF932B]">
                        <button
                        className="rounded-[30px] justify-self-center shadow-md self-center border-[2px] border-white bg-gradient-to-b from-[#FDBC73] to-[#CD7209] py-1 px-[22px]"
                        >
                            <p className="text-white text-[25px] text-stroke text-center font-black">公會戰</p>
                        </button>
                        <button className="" >
                            <p className="text-white text-[25px] text-stroke text-center font-black">公會單挑</p>
                        </button>
                    </div>
                    <div className="bg-[#150F20] bg-opacity-94 rounded-b-lg p-3 gap-5 flex flex-col items-center flex flex-row items-start">
                        <div className="w-full grid grid-cols-2 mt-2">
                            <button onClick={handleGuidWarRankingClick} className="border-[3px] justify-self-center border-[#DAB32B] rounded-[30] bg-white py-2 px-5">
                                <span className="text-[15px] text-[#523705] font-medium">公會戰排行</span>
                            </button>
                            <button
                            onClick={handleGuildWarDescriptClick}
                            className="border-[3px] border-[#DAB32B] justify-self-center flex justify-center items-center rounded-[30] bg-white py-[5px] px-3">
                                <Image src="/images/guild/info.svg" alt="footer" width={30} height={30} />
                                <span className="text-[15px] text-[#523705] font-medium">公會戰說明</span>
                            </button>
                        </div>
                        <div className="w-full px-10">
                            <div className="w-full py-3 bg-[#A4F5C8] rounded-[300px] flex flex-col justify-center items-center text-[#138E08]">
                                <p className="text-[15px] font-medium">公會戰</p>
                                <p className="text-[25px] font-bold">報名成功</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center gap-4">
                            <p className="text-[20px] font-bold text-white">公會戰時間</p>
                            <div className="flex flex-row justify-center items-center gap-3">
                                <div className="flex flex-col justify-center items-center">
                                    <p className="text-[20px] font-bold text-white">2024</p>
                                    <p className="text-[28px] font-black text-white">11/01</p>
                                    <p className="text-[20px] font-bold text-white">06:00</p>
                                </div>
                                <Image src="/images/guild/guildtime.svg" alt="footer" width={80} height={80} />
                                <div className="flex flex-col justify-center items-center">
                                    <p className="text-[20px] font-bold text-white">2024</p>
                                    <p className="text-[28px] font-black text-white">11/15</p>
                                    <p className="text-[20px] font-bold text-white">23:59</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full items-center justify-center flex flex-col px-2">
                                <span className="bg-gradient-to-b from-[#DC9409] text-center to-[#FEE58D] translate-y-[50%] rounded-[30px] px-4">
                                    <span className="font-medium text-[15px] text-stroke-white">上期贏家</span>
                                </span>
                                <hr className="w-full bg-[#FFE0A5] bg-opacity-56" />
                            </div>
                            <div className="mt-[30px]">
                                {
                                    guildWarLastWinner.map((winner, index) => 
                                        <GuildWarRankingItem key={index} rank={winner.rank} helper={winner.helper} level={winner.level} point={winner.point} />
                                    )
                                }
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
