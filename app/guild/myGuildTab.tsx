import Image from "next/image";
import MyGuildSelectTab from "@/components/guild/myGuildSelectTab";

import { useState } from "react";
import ShareLinkModal from "./modal/shareLinkModal";
import UpdateInfoModal from "./modal/updateInfoModal";
import VaultWithdrawal from "./modal/vaultWithdrawal";
import GuildWarsModal from "./modal/guildWarsModal";
import SingledOutInstructionModal from "./modal/singledOutInstructionModal";
import MemeberListModal from "./modal/memberListModal";
import RechardRecordModal from "./modal/rechardRecordModal";
import RedEnvelopAppModal from "./modal/redEnvelopAppModal";
import ChangePresidentModal from "./modal/changePresidentModal";
import AppointVicePresiModal from "./modal/appointVicePresiModal";
import RedEnvelRecordModal from "./modal/redEnvelRecordModal";
import RedEnvelRevRecordModal from "./modal/redEnvelRevRecordModal";
import DisbandGuildModal from "./modal/disbandGuildModal";
import GuildSettingTab from "./guildSettingTab";
import GuildWarRankingModal from "./modal/guildWarRankingModal";
import CurrentRankingModal from "./modal/CurrentRankingModal";
import GuildWarDescriptModal from "./modal/guildWarDescriptModal";
import MemberDetailModal from "./modal/memberDetailModal";

export default function MyGuildTab() {

  const [shareLinkActive, setShareLinkActive] = useState(false)
  const [updateGuildInfoActive, setUpdateGuildInfoActive] = useState(false)
  const [vaultWithdrawalActive, setVaultWithdrawalActive] = useState(false)
  const [guildWarsActive, setGuildWarsActive] = useState(false)
  const [guildWarRankingActive, setGuildWarRankingActive] = useState(false)
  const [currentRankingActive, setCurrentRankingActive] = useState(false)
  const [guildWarDescriptActive, setGuildWarDescriptActive] = useState(false)
  const [singleOutInstActive, setSingleOutInstActive] = useState(false)

  const [memberListActive, setMemberListActive] = useState(false)
  const [memberDetailActive, setMemberDetailActive] = useState(false)
  const [rechargeRecordActive, setRechargeRecordActive] = useState(false)
  const [redEnvelAppActive, setRedEnvelAppActive] = useState(false)
  const [redEnvelRevRecordActive, setRedEnvelRevRecordActive] = useState(false)
  const [redEnvelRecordActive, setRedEnvelRecordActive] = useState(false)
  const [changePresidentActive, setChangePresidentActive] = useState(false)
  const [appointVicePresiActive, setAppointVicePresiActive] = useState(false)
  const [disbandGuildActive, setDisbandGuildActive] = useState(false)
  const [guildSettingActive, setGuildSettingActive] = useState(false)
  
  const [isAutoRemoveLoginMonth, setAutoRemoveLoginMonth] = useState(true)

  const seletTabList = [
    {
      avatar: <Image src="/images/guild/member@3x.png" alt="footer" width={50} height={50} />,
      displayText: "會員列表",
      isActive: memberListActive,
      setActive: setMemberListActive
    },
    {
      avatar: <Image src="/images/guild/stored@3x.png" alt="footer" width={50} height={50} />,
      displayText: "儲值紀錄",
      isActive: rechargeRecordActive,
      setActive: setRechargeRecordActive
    },
    {
      avatar: <Image src="/images/guild/redenvelope@3x.png" alt="footer" width={50} height={50} />,
      displayText: "紅包申請",
      isActive: redEnvelAppActive,
      setActive: setRedEnvelAppActive
    },
    {
      avatar: <Image src="/images/guild/redaudit@3x.png" alt="footer" width={50} height={50} />,
      displayText: "紅包審核紀錄",
      isActive: redEnvelRevRecordActive,
      setActive: setRedEnvelRevRecordActive
    },
    {
      avatar: <Image src="/images/guild/enveloperecord@3x.png" alt="footer" width={50} height={50} />,
      displayText: "紅包紀錄",
      isActive: redEnvelRecordActive,
      setActive: setRedEnvelRecordActive
    },
    {
      avatar: <Image src="/images/guild/changepresident@3x.png" alt="footer" width={50} height={50} />,
      displayText: "更換會長",
      isActive: changePresidentActive,
      setActive: setChangePresidentActive
    },
    {
      avatar: <Image src="/images/guild/appointvice@3x.png" alt="footer" width={50} height={50} />,
      displayText: "指派副會長",
      isActive: appointVicePresiActive,
      setActive: setAppointVicePresiActive
    },
    {
      avatar: <Image src="/images/guild/disband@3x.png" alt="footer" width={50} height={50} />,
      displayText: "解散公會",
      isActive: disbandGuildActive,
      setActive: setDisbandGuildActive
    },
    {
      avatar: <Image src="/images/guild/guildsetting@3x.png" alt="footer" width={50} height={50} />,
      displayText: "公會設定",
      isActive: guildSettingActive,
      setActive: setGuildSettingActive
    }
  ]

  const presidentList = [
    {
      role: "會長",
      value: "皮卡丘"    
    },
    {
      role: "副會長",
      value: "小智"    
    },
    {
      role: "創會會長",
      value: "皮卡丘"    
    },
    {
      role: "公會人數",
      value: "19/50"    
    }
  ]

  const textAreaText = "1.貢獻回饋最高100%\n2.不定時加碼\n3.記得加入社群"

  return (
    <div className="w-full flex flex-col justify-center select-none gap-[11px] p-2 rounded-b-[20px]">
      <div className="w-full flex flex-row items-center gap-3">
        <Image src="/images/guild/avatar@3x.png" alt="footer" className="-ml-[50px]" width={189} height={107} />
        <div className="h-full flex flex-col justify-between gap-1 -ml-[40px]">
            <p className="text-white text-[20px] font-[900]">台中好幫幫</p>
            <p className="text-[#EEC01D] text-[13px] font-[500]">等級1</p>
            <button className="rounded-[30px] border-[2px] border-white px-3 py-1 bg-gradient-to-b from-[#FDBC73] to-[#CD7209] self-center" >
                <p className="text-shadow-md tracking-wide text-black text-[12px] font-[500] text-stroke-white" >進入社群</p>
            </button>
        </div>
        <div className="h-full flex flex-col justify-between items-start">
          <button onClick={() => setShareLinkActive(true)}>
            <Image src="/images/guild/com@3x.png" alt="footer" width={50} height={50} />
          </button>
          <button onClick={() => setUpdateGuildInfoActive(true)}>
            <Image src="/images/guild/setting@3x.png" alt="footer" width={50} height={50} />
          </button>
        </div>
      </div>
      <textarea
        value={textAreaText}
        onChange={() => {}}
        className="w-full h-[125px] overflow-auto bg-[#F9F0E0] rounded-[10px] shadow-md p-4 outline-none resize-none text-[#523705] text-[13px]">
      </textarea>
      <div className="w-full rounded-[10px] bg-tabback p-3">
        <div className="flex flex-row justify-start items-center">
            <Image src="/images/guild/coin@3x.png" alt="footer" width={72} height={72} />
            <div className="flex flex-col justify-center gap-[2px] items-start">
                <p className="text-[#EEC01D] text-[13px] font-bold">公會累積金幣</p>
                <p className="text-white text-[20px] font-bold">8,888,888.88</p>
            </div>
        </div>
        <hr className="bg-[#FEFEFE] bg-opacity-30 my-2 h-[2px]" />
        <div className="w-full flex flex-row justify-between items-end">
            <div className="flex flex-col justify-between items-start">
                <p className="text-[#EEC01D] text-[13px]">金庫餘額</p>
                <p className="text-white text-[15px]">77,777.77</p>
            </div>
            <button 
              onClick={() => setVaultWithdrawalActive(true)}
              className="rounded-[30px] border-2 bg-gradient-to-b from-[#7EFD73] to-[#2B920C]">
                <span className="mx-[5px] my-[12px] text-[12px] text-black font-bold text-stroke-white">金庫提領</span>
            </button>
        </div>
      </div>
      <div className="w-full bg-tabback flex justify-center items-center py-[6px] rounded-[10px] shadow-inner">
          <button 
            onClick={() => setGuildWarsActive(true)}
            className="bg-gradient-to-b from-[#FF7D45] text-[20px] to-[#E73408] rounded-[30px] text-white border-4 border-white px-[38px] py-[6px]">
            公會戰
          </button>
      </div>
      <div className="w-full bg-[#EAFCFF] flex gap-[6px] flex-col justify-center items-center px-[27px] py-[10px] rounded-[10px] shadow-inner">
          {
            presidentList.map((presidnet, index) => 
            <div className="w-full flex flex-col gap-1" key={index}>
              <div className="w-full flex flex-row justify-between items-center px-[7px]">
                <span className="text-[#3D0303] font-medium text-[12px]">{presidnet.role}</span>
                <span className="text-black font-black text-[12px]">{presidnet.value}</span>
              </div>
              { index != (presidentList.length) - 1 && <hr className="w-full bg-[#A89B9B] h-[2px]" /> }
            </div>
            )
          }
      </div>
      {seletTabList.map((tab, index) => (
        <MyGuildSelectTab
          key={index}
          avatar={tab.avatar}
          displayText={tab.displayText}
          isActive={tab.isActive}
          setActive={tab.setActive}
        />
      ))}

      { shareLinkActive && <ShareLinkModal setActive={setShareLinkActive} /> }
      { updateGuildInfoActive && <UpdateInfoModal setActive={setUpdateGuildInfoActive} /> }
      { vaultWithdrawalActive && <VaultWithdrawal setActive={setVaultWithdrawalActive} /> }
      { guildWarsActive && < GuildWarsModal setActive={setGuildWarsActive} setGuildWarDescriptActive={setGuildWarDescriptActive} setGuildWarRankingActive={setGuildWarRankingActive} /> }
      { guildWarRankingActive && <GuildWarRankingModal setActive={setGuildWarRankingActive} setCurrentRankingActive={setCurrentRankingActive} /> }
      { currentRankingActive && <CurrentRankingModal setActive={setCurrentRankingActive} /> }
      { guildWarDescriptActive && <GuildWarDescriptModal setActive={setGuildWarDescriptActive} /> }
      { singleOutInstActive && < SingledOutInstructionModal setActive={setSingleOutInstActive} /> }
      
      { memberListActive && <MemeberListModal setActive={setMemberListActive} setMemberDetailActive={setMemberDetailActive} /> }
      { memberDetailActive && <MemberDetailModal setActive={setMemberDetailActive} /> }
      { rechargeRecordActive && <RechardRecordModal setActive={setRechargeRecordActive} /> }
      { redEnvelAppActive && <RedEnvelopAppModal setActive={setRedEnvelAppActive} /> }
      { redEnvelRevRecordActive && <RedEnvelRevRecordModal setActive={setRedEnvelRevRecordActive} /> }
      { redEnvelRecordActive && <RedEnvelRecordModal setActive={setRedEnvelRecordActive} /> }
      { changePresidentActive && <ChangePresidentModal setActive={setChangePresidentActive} /> }
      { appointVicePresiActive && <AppointVicePresiModal setActive={setAppointVicePresiActive} /> }
      { disbandGuildActive && <DisbandGuildModal setActive={setDisbandGuildActive} /> }
      { guildSettingActive && <GuildSettingTab isAutoRemoveLoginMonth={isAutoRemoveLoginMonth} setAutoRemoveLoginMonth={setAutoRemoveLoginMonth} />}
    
    </div> 
  );
}
