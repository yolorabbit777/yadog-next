import DateNavigationItem from "@/components/chatRoom/dateNavigationItem";
import Image from "next/image";
import { useState } from "react";
import RichList from "./ranking/richList";
import PKList from "./ranking/pkList";
import KingsRanking from "./ranking/kingsRanking";
import GuildLeaderShip from "./ranking/guildLeaderShip";
import RichListFooter from "./footer/richListFooter";
import PkListFooter from "./footer/pkListFooter";
import KingsRankingFooter from "./footer/kingsRankingFooter";
import GuildLeaderShipFooter from "./footer/guildLeaderShipFooter";

const dataList = ["富豪榜", "PK榜", "王者榜", "公會榜"]



export default function RankingModal({setRankingModalShow}: {setRankingModalShow:(status: boolean) => void}) {

    const [activeDataIndex, setActiveDateIndex] = useState(0)

    return (
        <div className="fixed inset-0 flex justify-center items-center top-0 left-0 z-[600] h-full ">
            <div className="w-[500px] bg-[#160133] relative flex justify-end items-end bg-opacity-80 h-full px-4">
                <div className="w-full rounded-[20px] ">
                    <div className="p-[10px] bg-gradient-to-r from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-[50px]">
                        <div className="relative bg-gradient-to-b from-[#5B0B90] to-[#052657] bg-opacity-94 rounded-[50px] pt-[70px] gap-1 flex flex-col items-center flex flex-row items-start p-4">
                            <Image src="/images/lobby/ranking.png" alt="ranking" className="absolute -top-[200px]" width={351} height={266} />
                            
                            <div className="w-full px-3">
                                <DateNavigationItem 
                                    dataList={dataList} 
                                    activeDateIndex={activeDataIndex} 
                                    setActiveDateIndex={setActiveDateIndex} />
                            </div>
                            <p className="text-[10px] text-white font-medium self-end px-4">狗幣餘額排名，每15分鐘更新</p>
                            { activeDataIndex == 0 && <RichList /> }
                            { activeDataIndex == 1 && <PKList /> }
                            { activeDataIndex == 2 && <KingsRanking /> }
                            { activeDataIndex == 3 && <GuildLeaderShip /> }
                        </div>
                    </div>
                </div>
            </div>
        { activeDataIndex == 0 && <RichListFooter setRankingModalShow={setRankingModalShow}  /> }
        { activeDataIndex == 1 && <PkListFooter setRankingModalShow={setRankingModalShow}  /> }
        { activeDataIndex == 2 && <KingsRankingFooter setRankingModalShow={setRankingModalShow}  /> }
        { activeDataIndex == 3 && <GuildLeaderShipFooter setRankingModalShow={setRankingModalShow}  /> }
        {/* <DefaultFooter /> */}
        </div>
    );
}
