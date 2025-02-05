import Image from "next/image";

const modalDataList = [
    {
        'rank' : 1,
        'avatar' : <Image src="/images/guild/avatar.png" alt="footer" width={45} height={45} />,
        'text': "好玩一直玩",
        'point': 481,
        "percent" : 50,
    },
    {
        'rank' : 2,
        'avatar' : <Image src="/images/guild/avatar.png" alt="footer" width={45} height={45} />,
        'text': "好玩一直玩",
        'point': 440,
        "percent" : 41,
    },
    {
        'rank' : 3,
        'avatar' : <Image src="/images/guild/avatar.png" alt="footer" width={45} height={45} />,
        'text': "好玩一直玩",
        'point': 281,
        "percent": 99,
    },
    {
        'rank' : 4,
        'avatar' : <Image src="/images/guild/avatar.png" alt="footer" width={45} height={45} />,
        'text': "好玩一直玩",
        'point': 265,
        "percent" : 97,
    },
    {
        'rank' : 5,
        'avatar' : <Image src="/images/guild/avatar.png" alt="footer" width={45} height={45} />,
        'text': "好玩一直玩",
        'point': 261,
        'percent': 98
    }
]

export default function PKList() {

    return (
        <>
        { modalDataList.map((data, index) => 
                              
            <div 
                key={index}
                className="rounded-[25px] mt-3 mb-1 flex px-2 flex-row justify-between items-center border-[5px] border-[#DC9409] bg-gradient-to-b from-[#EEB109] to-[#FAE8AB] w-full">
                <div className="flex flex-row justify-center items-center gap-2">
                    { data.rank <= 3 ? 
                    (<Image src={`/images/guild/${data.rank}st@3x.png`} alt="medal" className="-translate-y-[20px]" width={80} height={80} />)
                    :
                    (
                    <p className="text-[#E1A763] text-stroke text-[40px] font-black mx-6">{data.rank}</p>
                    )}
                    {data.avatar}
                    <p className="text-[15px] text-[#523705] font-bold text-stroke-white">{data.text}</p>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <p className="text-[30px] text-[#523705] font-black">{data.point}</p>
                    <div className="flex flex-col">
                        <p className="text-[13px] text-white font-black text-stroke">{data.percent}%</p>
                        <p className="text-[#523705] text-[13px] font-black">勝</p>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}
