import Image from "next/image";

const guildWarRankingData = [
    {
        avatar: <Image src="/images/guild/1st@3x.png" alt="footer" width={70} height={70} />,
        helper: "202410001 期",
        level: "冠軍:台中好幫幫",
    },
    {
        avatar: <Image src="/images/guild/1st@3x.png" alt="footer" width={70} height={70} />,
        helper: "202410001 期",
        level: "冠軍:台中好幫幫",
    }    
]

export default function GuildWarRankingModal({setActive, setCurrentRankingActive}: {setActive: (status: boolean) => void, setCurrentRankingActive: (status: boolean) => void}) {
    
    const handleRankingClick = () => {
        setCurrentRankingActive(true)
        setActive(false)
    }
  
    return (
    <div className="fixed inset-0 flex justify-center items-center top-0 left-0 z-50 h-full ">
        <div className="w-[500px] bg-[#160133] relative flex justify-center items-center bg-opacity-80 h-full px-4">
            <button onClick={() => setActive(false)} >
                <Image src="/images/guild/modalclose.svg" className="absolute top-2 right-2" alt="footer" width={21} height={21} />
            </button>
            <div className="w-full rounded-[20px] ">
                <div className="p-[3px] bg-gradient-to-r from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-lg">
                    <div className="bg-gradient-to-b rounded-t-lg flex justify-center py-4 items-center from-[#FEE385] to-[#EF932B]">
                        <p className="text-white text-[25px] text-stroke text-center font-black">公會戰排行</p>
                    </div>
                    <div className="bg-[#150F20] bg-opacity-94 rounded-b-lg p-3 h-[500px] overflow-auto hide-scrollbar flex flex-col items-center flex flex-row items-start">
                        {guildWarRankingData.map((data, index) => 
                         <button 
                            key={index} 
                            onClick={handleRankingClick} 
                            className="w-full rounded-[60px] border-[5px] border-[#DC9409] bg-[#FFF7DB] flex flex-row justify-between items-center gap-2 my-1 pr-1">
                            {data.avatar}
                            <div className="flex flex-col w-full justify-between items-start">
                                <p className="text-[20px] font-black text-[#250202]">{data.helper}</p>
                                <p className="text-[13px] font-medium text-[#DA8625]">{data.level}</p>
                            </div>
                            <Image src="/images/guild/brownArrow.svg" alt="footer" width={40} height={40} />
                        </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
