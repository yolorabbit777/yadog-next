import Image from "next/image";
import DateNavigationItem from "@/components/chatRoom/dateNavigationItem";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/redux/hooks";
import { UserData } from "@/types";

const dataList=["贈禮", "贈禮中心", "贈禮紀錄"]

export default function GiftModal({setGiftModalShow}: {setGiftModalShow:(status: boolean) => void}) {
    const { loginInfo } = useAppSelector((state) => state.auth);
    const [activeDateIndex, setActiveDateIndex] = useState(0)
    const [userName, setUserName] = useState('');
    const [nickName, setNickName] = useState('');
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (loginInfo && loginInfo.userData) {
            const userData = loginInfo.userData as UserData;
            setUserName(userData.username);
            setNickName(userData.nickname);
            setScore(userData.score);
        }
    }, [loginInfo])

    return (
        <div className="fixed inset-0 flex justify-center items-center top-0 left-0 z-[600] h-full ">
            <div className="w-[500px] bg-[#160133] relative flex justify-end items-end bg-opacity-80 h-full px-4">
                <div className="w-full rounded-[20px] ">
                    <div className="p-[10px] bg-gradient-to-r from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-[50px]">
                        <div className="min-h-[500px] relative bg-gradient-to-b from-[#5B0B90] to-[#052657] bg-opacity-94 rounded-[50px] pt-[60px] gap-1 flex flex-col items-center flex flex-row items-start p-4">
                            <Image src="/images/lobby/giftheader.png" alt="activity" className="absolute z-[400] -top-[230px]" width={460} height={190} />
                            <div className="absolute flex flex-col items-center -top-[50px] gap-4">
                                <p className="text-white text-[23px] font-bold z-[400]">贈禮</p>
                            </div>
                            <div className="w-full px-2">
                                <DateNavigationItem 
                                    dataList={dataList}
                                    activeDateIndex={activeDateIndex}
                                    setActiveDateIndex={setActiveDateIndex} />
                            </div>
                            <div className="my-3 select-none w-full bg-[#F5EEDD] shadow-inner rounded-[30px] shadow-[#777] p-3 flex justify-between items-center gap-2">
                                <Image src="/images/guild/icon@3x.png" alt="activity" className="" width={110} height={110} />
                                <div className="w-full flex flex-col justify-between">
                                    <div className="w-full flex justify-between items-center">
                                        <p className="text-[#ED830A] text-[15px] font-bold">{nickName}</p>
                                        <button className="border-[2px] border-white rounded-full bg-gradient-to-b from-[#73FAFF] to-[#08219E] py-1 px-3 flex items-center gap-1">
                                            <Image src="/images/lobby/exclaim.png" alt="activity" className="" width={19} height={19} />
                                            <p className="text-[14px] text-white text-stroke-wheet">贈禮說明</p>
                                        </button>
                                    </div>
                                    <p className="text-[20px] text-[#523705] font-bold">{userName}</p>
                                    <div className="flex items-center gap-1">
                                        <Image src="/images/guild/footprinter@3x.png" alt="activity" className="" width={36} height={36} />
                                        <p className="text-[#F3B50A] text-[17px] font-black">{score.toLocaleString()} 點</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed w-[500px] bottom-0 flex flex-col items-center z-[1000]">
                <Image src="/images/guild/dog@3x.png" alt="footer" className='absolute -right-8' width={157} height={147} />
                <Image src="/images/guild/reward@3x.png" alt="footer" className='absolute right-20 bottom-0' width={60} height={60} />
                <button 
                    onClick={() => setGiftModalShow(false)}
                    className='w-[65px] h-[65px] absolute rounded-full bg-black' >
                    <Image 
                        alt="footer" 
                        width={66} 
                        height={66}
                        src="/images/guild/closeVector.svg" 
                        className='transform transition-transform duration-300 hover:rotate-90' />
                </button>
                <Image src="/images/guild/moneymountain@3x.png" className='' alt="footer" width={500} height={80} />
            </div>
        </div>
    );
}
