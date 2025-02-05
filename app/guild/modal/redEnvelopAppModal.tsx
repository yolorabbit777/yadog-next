import Image from "next/image";
import MyGuildModalSimpleHeader from "./myGuildModalSimpleHeader";
import DateNavigationItem from "@/components/guild/dateNavigationItem";
import { useState } from "react";
import MyGuildModalInputForm from "./myGuildModalInputForm";

const description = "1.每包金額最低1,000起。\n2.多組每次最多申請30組。\n3.會長身上餘額最低需保留30,000。\n4.申請次數每次最高申請10次。\n5.申請次數為當次申請每包金額與數量需重複申請數。EX:一組3包1000狗幣申請3次,最終為3組兌換碼,每組內皆有3包1000狗幣。\n6.請確認資料填寫正確,申請後會先扣除狗幣,若申請被駁回也會退還狗幣,請耐心等待審核。"

const dateList = ["一組", "多組"]

export default function RedEnvelopAppModal({setActive}: {setActive: (status: boolean) => void}) {

  const [activeDateIndex, setActiveDateIndex] = useState(0)
  return (
    <div className="fixed inset-0 flex justify-center items-center top-0 left-0 z-50 h-full ">
        <div className="w-[500px] bg-[#160133] relative flex justify-center items-center bg-opacity-80 h-full px-4">
            <button onClick={() => setActive(false)} >
                <Image src="/images/guild/modalclose.svg" className="absolute top-2 right-2" alt="footer" width={21} height={21} />
            </button>
            <div className="w-full rounded-[20px] ">
                <div className="p-[3px] bg-gradient-to-r from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-lg">
                    <MyGuildModalSimpleHeader header="儲值紀錄" />
                    <div className="bg-[#150F20] bg-opacity-94 rounded-b-lg gap-1 flex flex-col items-center flex flex-row items-start pb-4">
                        <div className="py-1">
                            <DateNavigationItem dateList={dateList} activeDateIndex={activeDateIndex} setActiveDateIndex={setActiveDateIndex} />
                        </div>
                        <div className="w-full px-4 flex flex-col justify-center gap-4">
                        <MyGuildModalInputForm header="紅包數量" detail="請輸入紅包數量" isInput={true} />
                        <MyGuildModalInputForm header="每包點數" detail="請輸入每包點數" isInput={true} />
                        <MyGuildModalInputForm header="申請次數" detail="請輸入申請次數" isInput={true} />
                        </div>
                        <button
                            onClick={() => setActive(false)} 
                            className="border-[3px] mb-3 border-white rounded-[30px] py-2 px-10 bg-gradient-to-b from-[#FEE385] to-[#CD7209] mt-4">
                            <span className="text-white text-[15px] text-stroke-wheet font-bold shadow-md">選擇可領取紅包公會</span>
                        </button>
                        <p className="text-[13px] text-white font-medium whitespace-pre-line px-9">{description}</p>
                        <button
                            onClick={() => setActive(false)} 
                            className="border-[3px] mb-3 border-white rounded-[30px] py-2 px-10 bg-gradient-to-b from-[#73FDE1] to-[#0C9286] mt-6">
                            <span className="text-white text-[15px] text-stroke-wheet font-bold">申請紅包</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
