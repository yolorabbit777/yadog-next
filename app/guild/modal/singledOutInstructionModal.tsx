import Image from "next/image";

const singledOutInstructionList = [
    "1. 公會戰積分達9分以上時,會在當天晚上18:00選 出相同積分的公會進行公會單挑。",
    "2. 若有偶數個公會都達相同積分,會依任務最後達 成時間來進行排序。EX:有四個同分公會,依照 完成任務時間,最早完成的與第二早的公會進行 單挑,則第三與第四完成的公會進行。",
    "3. 若當日只有奇數個公會達相同分,那最後一名的 公會則無法進行單挑。",
    "4. 會長可在當天18:00-21:00接受/拒絕對戰。其 中一方拒絕則當天不進行單挑。",
    "5. 若雙方公會會長皆接受對戰則會在當天的22:00 - 22:30進行公會單挑。",
    "6. 公會單挑為公會內的所有成員皆能參與,只要符 合遊戲條件投注皆會累積進倍數。",
    "7. 兩個公會所有成員累積倍數加總高者獲勝。",
    "8. 獲勝者公會戰積分'加1分',戰敗者公會戰積分'扣1分'",
    "9. 若平手或未達局數則不加分也不減分。",
    "10. 號召越多公會成員上線投注獲勝機會越高喔!"
]

export default function SingledOutInstructionModal({setActive}: {setActive: (status: boolean) => void}) {
  return (
    <div className="fixed inset-0 flex justify-center items-center top-0 left-0 z-50 h-full ">
        <div className="w-[500px] bg-[#160133] relative flex justify-center items-center bg-opacity-80 h-full px-4">
            <button onClick={() => setActive(false)} >
                <Image src="/images/guild/modalclose.svg" className="absolute top-2 right-2" alt="footer" width={21} height={21} />
            </button>
            <div className="w-full rounded-[20px] ">
                <div className="p-[3px] bg-gradient-to-r from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-lg">
                    <div className="bg-gradient-to-b rounded-t-lg flex items-center justify-center py-4 divide-x items-center from-[#FEE385] to-[#EF932B]">
                        <p className="text-white text-[25px] text-stroke text-center font-black">單挑說明</p>
                    </div>
                    <div className="bg-[#150F20] bg-opacity-94 rounded-b-lg p-6 gap-6 flex flex-col items-start">
                            {singledOutInstructionList.map((text, index) => 
                                <p key={index} className="text-white text-[13px] whitespace-pre-line font-medium">
                                    {text}
                                </p>
                            )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
