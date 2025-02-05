import Image from "next/image";
import DescriptionItem from "@/components/guild/descriptionItem";

const guildDescriptData = [
    {
        header: "報名時間",
        content: "每個月25號 00:00 ~ 27號 23:59 "
    },
    {
        header: "公會戰時間",
        content: "每個月1號 06:00 ~ 15號 23:59 "
    },
    {
        header: "公會戰獎勵領取時間",
        content: "每個月16號 00:00 ~ 24號 23:59 "
    },
    {
        header: "公會戰可領取獎勵",
        content: "1.第一名 5,860,000 狗幣\n2.第二名 2,880,000 狗幣\n3.第三名 1,680,000 狗幣\n4.安慰獎 380,000 狗幣 "
    }
]

const guildWarIntroduction = "1. 僅會長可接受任務。\n \
        2. 公會戰獎勵領取位置為公會戰 -> 公會戰排名 ->期數內。\n \
        3. 會長進行領取後則直接進入會長錢包(凍結8日贈禮)。\n \
        4. 任務為公會會員累積”共同完成”。\n \
        5. 每'完成'一項任務或'放棄',才能接受下一任務。\n \
        6. 每日 06:00 任務清單進行'隨機刷新'6項任務。\n \
        7. 每日最多僅能完成2個任務。\n \
        8. 每期公會戰僅能完成20次任務。\n \
        9. 任務分為1分 12分/3分難度不同的任務。\n \
        10. 依照完成任務所獲得的積分進行排名。\n \
        11. 任務種類為投注、倍數、勝場。\n \
        12. 積分10分以上且不在前三名則可獲得安慰獎。\n \
        13. 積分10分以上才可納入領獎資格。\n•公會A 排行榜顯示為第一名,但積分僅有5分,故無法領取獎項。\n \
        14. 每期公會戰 前三名及安慰獎皆可於當期結束後獲\n得威望值。\n = 3分 = 2分\n = 1分\n = 0.5分\n \
        15. 凡參加公會戰者,均視為認同公會戰相關辦法及小狗Online之各項內容和規定,並願意接受本規範,主辦單位保有隨時修改及終止之權力。\n \
        16. 公會戰若因故障無法進行時,將依照官方公布之最後結果。"

export default function GuildWarDescriptModal({setActive}: {setActive: (status: boolean) => void}) {

  return (
    <div className="fixed inset-0 flex justify-center items-center top-0 left-0 z-50 h-full ">
        <div className="w-[500px] bg-[#160133] relative flex flex-col justify-center items-center bg-opacity-80 h-full px-4">
            <button onClick={() => setActive(false)} >
                <Image src="/images/guild/modalclose.svg" className="absolute top-2 right-2" alt="footer" width={21} height={21} />
            </button>
            <div className="w-full rounded-[20px] ">
                <div className="p-[3px] bg-gradient-to-r from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-lg">
                    <div className="bg-gradient-to-b rounded-t-lg flex justify-center items-center py-4 items-center from-[#FEE385] to-[#EF932B]">
                        <p className="text-white text-[25px] text-stroke text-center font-black">公會戰說明</p>
                    </div>
                    <div className="bg-[#150F20] bg-opacity-94 rounded-b-lg p-3 gap-5 flex flex-col items-center flex flex-row items-start h-[calc(100vh-300px)] overflow-auto hide-scrollbar">
                        {
                            guildDescriptData.map((data, index) => (
                                <DescriptionItem
                                key={index} 
                                header={data.header}
                                description={data.content}
                                />
                            ))
                        }
                        <p className="text-[#FF6666] w-full text-[13px] font-medium pl-3">若前三名平手,則視最後一個完成任務的時間</p>
                        <DescriptionItem header="公會戰介紹" description={guildWarIntroduction} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
