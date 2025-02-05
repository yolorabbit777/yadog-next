import DescriptionItem from "@/components/guild/descriptionItem";
import DescriptionItemHeader from "@/components/guild/descriptionItemHeader";
import ConditionItem from "@/components/guild/conditionItem";

const descriptionList = [
  {
    header: "建立公會",
    description: "1.建立當下必須為VIP6等級。\n2.繳交100萬金幣。"
  },
  {
    header: "加入公會",
    description: "VIP 1 以上才能加入公會。"
  },
  {
    header: "退出公會",
    description: "退出公會後必須等待'24小時'才能再次加入公會。"
  },
  {
    header: "副會長",
    description: "1.會長可只帶一名副會長\n2.副會長擁有:審核通過/剔除、群發站內信的權限。"
  },
  {
    header: "公會交接",
    description: "1.公會會長可選擇交接「會長職位」給指定成員。\n2.公會會長違規或被凍結，會長職位將轉移回創會會長。"
  },
  {
    header: "解散公會",
    description: "1.點擊「解散公會」後，立即解散公會，且不退回創立公會時的金幣。\n2.公會會長、創會會長，皆違規或被凍結，則解散公會。"
  },
]

const ConditionItemList = [
  {
    condition: "累積條件：",
    conditionDetail: "1.單筆10狗幣以上才會累積公會金幣。", 
    subHeader:"範例：",
    detailText: "1.會員A加入等級0的公會B 並 單筆10狗幣的進行遊玩，每一筆都會累積 10*0.8%=0.02 公會金幣。\n2.會員C加入等級6的公會D 並單筆1狗幣的進行遊玩，因低於累積門檻(10狗幣)則無法累積公會金幣。\n3.會員X加入等級7的公會Y 並不透過'任何鏈結'進行儲值50後獲得5,000狗幣，公會可獲得5,000*0.5%=25公會金幣。"
  },
  {
    condition: "領取條件：",
    conditionDetail: "1.公會會長。\n2.公會金幣必須超過10萬金幣。", 
    subHeader:"備註：",
    detailText: "1.公會金幣領取後皆會「凍結8日」贈禮。\n2.公會金幣等同於遊戲點數。"
  }
]

const GuildTreasuryText = "1.每位公會會員 進行遊戲時 皆會及時  按照「會饋金幣比例」投入至遊戲金庫中。\n2.公會成員不透過任何'鏈結'進行儲值所獲得的狗幣(不含優惠)皆會及時 按照'回饋金幣比例'投入至 公會金庫中。"

const guildLevelData = [
  {
  level: "等級0",
  memberNum: "30人",
  requirement: "-"
  },
  {
    level: "等級1",
    memberNum: "40人",
    requirement: "累積達8萬"
  },
  {
    level: "等級2",
    memberNum: "50人",
    requirement: "累積達28萬"
  },
  {
    level: "等級3",
    memberNum: "60人",
    requirement: "累積達58萬"
  },
  {
    level: "等級4",
    memberNum: "70人",
    requirement: "累積達288萬"
  },
  {
    level: "等級5",
    memberNum: "80人",
    requirement: "累積達888萬"
  },
  {
    level: "等級6",
    memberNum: "100人",
    requirement: "累積達2888萬"
  },  
  {
    level: "等級7",
    memberNum: "120人",
    requirement: "累積達3888萬"
  },  
  {
    level: "等級8",
    memberNum: "150人",
    requirement: "累積達5888萬"
  },  
  {
    level: "等級9",
    memberNum: "180人",
    requirement: "累積達8888萬"
  },  
  {
    level: "等級10",
    memberNum: "200人",
    requirement: "累積達1億"
  }
]

export default function DescriptGuildTab() {
  
  return (
    <div className="w-full flex flex-col justify-center  gap-[11px] rounded-b-[20px] select-none">
       {descriptionList.map((descriptionItem, index ) => (
        <DescriptionItem
          key={index} 
          header={descriptionItem.header}
          description={descriptionItem.description}
        />
       ))}
        <div className="w-full flex flex-col items-center px-4">
          <DescriptionItemHeader header="公會等級" />
        </div>
        <div className="w-full bg-[#B56307] mt-3 grid grid-cols-3 items-center p-2">
          <span className="whitespace-pre-line text-center text-white text-[15px]">公會等級</span>
          <span className="whitespace-pre-line text-center text-white text-[15px] border-x border-x-[#FFFFFA]">公會人數</span>
          <span className="whitespace-pre-line text-center text-white text-[15px]">公會等級條件<br />（公會金庫累積金幣）</span>
        </div>
        <div className="w-full px-2 mt-3 text-[15px] text-white">
          <div className="w-full rounded-[10px] bg-tabback shadow-md py-2">
            {guildLevelData.map((guildLevel, index) =>
              <div key={index} className="grid grid-cols-3 py-[6px]">
                <p className="text-center">{guildLevel.level}</p>
                <p className="text-center">{guildLevel.memberNum}</p>
                <p className="text-center">{guildLevel.requirement}</p>
              </div>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col items-center px-4">
          <DescriptionItemHeader header="公會金庫" />
          <p className="text-[13px] w-full text-white whitespace-pre-line mt-5">
            {GuildTreasuryText}
          </p>
        </div>
        {ConditionItemList.map((conditionItemData, index) => (
        <ConditionItem
        key={index}
        condition={conditionItemData.condition} 
        conditionDetail={conditionItemData.conditionDetail} 
        subHeader={conditionItemData.subHeader} 
        detailText={conditionItemData.detailText} />
        ))}
    </div>
  );
}
