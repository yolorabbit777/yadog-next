'use client';
import Image from "next/image";
import { useState } from "react";
 
const footerItems = [
    {
        "avatar": <Image src="/images/lobby/other@3x.png" className='' alt="footer" width={50} height={50} />,
        "header": "其他"
    },
    {
        "avatar": <Image src="/images/lobby/cup@3x.png" className='' alt="footer" width={50} height={50} />,
        "header": "排行榜"
    },
    {
        "avatar": <Image src="/images/lobby/mall@3x.png" className='' alt="footer" width={50} height={50} />,
        "header": "商城"
    },
    {
        "avatar": <Image src="/images/lobby/gift@3x.png" className='' alt="footer" width={50} height={50} />,
        "header": "贈禮"
    },
    {
        "avatar": <Image src="/images/lobby/guild@3x.png" className='' alt="footer" width={50} height={50} />,
        "header": "公會"
    }
]

const otherDetails = [
    { 
        "avatar" : "/images/lobby/pk.png",
        "text" : "亂鬥",
    },
    { 
        "avatar" : "/images/lobby/act.png",
        "text" : "活動",
    },
    { 
        "avatar" : "/images/lobby/alarm.png",
        "text" : "公告",
    },
    { 
        "avatar" : "/images/lobby/task.png",
        "text" : "任務",
    },
    { 
        "avatar" : "/images/lobby/tool.png",
        "text" : "道具",
    },
    { 
        "avatar" : "/images/lobby/service.png",
        "text" : "客服",
    }
]

export default function LobbyFooter({setRankingModalShow, setActivityModalShow,setMallModalShow}:{setRankingModalShow:(status:boolean) => void, setActivityModalShow:(status:boolean) => void,setMallModalShow:(status:boolean) => void}) {

    const [otherDetailShow, setOtherDetailShow] = useState(false)

    const handleLobbyFooterClick = (index:number) => {
        switch (index) {
            case 0: {
                setOtherDetailShow(!otherDetailShow)
                break;
            }
            case 1: {
                setRankingModalShow(true);
                break;
            }
            case 2: {
                setMallModalShow(true);
                break;
            }
            case 4: {
            }
            break;
        }
    }

    const handleOtherDetailClick = (index:number) => {
        if (index == 1) {
            setActivityModalShow(true)
        }
    }

  return (
    <div className="w-[480px] bottom-5 fixed">
        { otherDetailShow && 
            <div className="w-[142px] border-2 rounded-xl flex flex-col justify-between items-center bg-gradient-to-b from-[#4A2BB2] to-[#9635EE]">
                { otherDetails.map((data, index) => 
                    <div key={index} className="w-full flex flex-col items-start gap-2 mt-1">
                        <button 
                            onClick={() => handleOtherDetailClick(index)}
                            className="flex items-center gap-4 px-4">
                            <Image src={data.avatar} className='' alt="footer" width={38} height={41} />
                            <p className="text-white font-bold text-[15px]">{data.text}</p>
                        </button>
                        <hr className="w-full" />
                    </div>
                )}
            </div>
        }
        <Image src="/images/lobby/footer.svg" className='absolute object-cover w-full' alt="footer" width={130} height={130} />
        <div className="flex flex-row justify-between px-8 items-center">
            { footerItems.map((data, index) => 
                <button 
                    key={index} 
                    onClick={() => handleLobbyFooterClick(index)}
                    className="flex flex-col gap-2 z-[300] -translate-y-[10px] justify-center items-center">
                    { data.avatar }
                    <p className="text-[15px] text-white font-bold">{data.header}</p>
                </button>
            ) }
        </div>
    </div>
  );
}
