import Image from "next/image";

const modalDataList = [
    {
        'rank' : 1,
        'text1': "台中好幫幫",
        'text2': "等級 拾",
        'text3': "威望值",
        'point': 60,
    },
    {
        'rank' : 2,
        'text1': "台中好幫幫",
        'text2': "等級 拾",
        'text3': "威望值",
        'point': 34.5,
    },
    {
        'rank' : 3,
        'text1': "台中好幫幫",
        'text2': "等級 拾",
        'text3': "威望值",
        'point': 32.5,
    },
    {
        'rank' : 4,
        'text1': "台中好幫幫",
        'text2': "等級 拾",
        'text3': "威望值",
        'point': 18,
    },
    {
        'rank' : 5,
        'text1': "台中好幫幫",
        'text2': "等級 拾",
        'text3': "威望值",
        'point': 10,
    },
]

export default function GuildLeaderShip() {

    return (
        <>
        { modalDataList.map((data, index) => 
                              
            <div 
                key={index}
                className={`rounded-[25px] mt-3 mb-1 flex px-2 flex-row justify-between items-center border-[5px] bg-gradient-to-b from-[#EEB109] to-[#FAE8AB] w-full ${data.rank > 3 ? "border-[#DC9409]" : "border-white"}`}>
                <div className="flex flex-row justify-center items-center gap-2">
                    { data.rank <= 3 ? 
                    (<Image src={`/images/guild/${data.rank}st@3x.png`} alt="medal" className="" width={45} height={45} />)
                    :
                    (
                    <p className="text-[#E1A763] text-stroke text-[30px] mx-3 font-black">{data.rank}</p>
                    )}
                    <div className="flex flex-col">
                        <p className="text-[15px] text-[#523705] font-medium text-stroke-white">{data.text1}</p>
                        <p className="text-[15px] text-white font-bold text-stroke">{data.text2}</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center pr-3">
                    <p className="text-[15px] text-[#523705] font-black">{data.text3}</p>
                    <p className={`text-[25px] font-black text-stroke ${data.rank > 3 ? "text-[#F6B100]" : "text-white"}`}>{data.point}</p>
                </div>
            </div>
        
        )}
        </>
    );
}
