import Image from "next/image";
import GuildWarRankingItem from "./guildWarRankingItem";

const guildWarRankingData = [
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
    },
    {
        rank: 4,
        helper: "新北好幫幫",
        level: "等級1",
        point: 16
    },
    {
        rank: 5,
        helper: "高雄好幫幫",
        level: "等級1",
        point: 12
    }      
]

export default function CurrentRankingModal({setActive}: {setActive: (status: boolean) => void}) {

   
  return (
    <div className="fixed inset-0 flex justify-center items-center top-0 left-0 z-50 h-full ">
        <div className="w-[500px] bg-[#160133] relative flex justify-center items-center bg-opacity-80 h-full px-4">
            <button onClick={() => setActive(false)} >
                <Image src="/images/guild/modalclose.svg" className="absolute top-2 right-2" alt="footer" width={21} height={21} />
            </button>
            <div className="w-full rounded-[20px] ">
                <div className="p-[3px] bg-gradient-to-r from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-lg">
                    <div className="bg-gradient-to-b rounded-t-lg flex justify-center items-center py-4 items-center from-[#FEE385] to-[#EF932B]">
                        <p className="text-white text-[25px] text-stroke text-center font-black">當期排行</p>
                    </div>
                    <div className="bg-[#150F20] bg-opacity-94 rounded-b-lg p-3 gap-5 flex flex-col items-center flex flex-row items-start">
                        <div className="w-full h-[600px] overflow-auto hide-scrollbar">
                                {
                                    guildWarRankingData.map((winner, index) => 
                                        <GuildWarRankingItem key={index} rank={winner.rank} helper={winner.helper} level={winner.level} point={winner.point} />
                                    )
                                }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}