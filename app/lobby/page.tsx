'use client';
import { use, useState } from "react";
import LobbyHeader from "./lobbyHeader";
import LobbyNavigation from "./lobbyNavigation";
import LobbyContent from "./lobbyContent";
import LobbyFooter from "./layout/footer";
import RankingModal from "./modal/rankingModal";
import ActivityModal from "./modal/activityModal";
import MallModal from "./modal/mallModal";
import FaCaiJinModal from "./modal/faCaiJinModal";
import TeleCommunicationBillModal from "./modal/teleCommunicationBillModal";
import MobilePaymentModal from "./modal/mobilePaymentModal";
import BankTransferModal from "./modal/bankTransferModal";
import CreditCardModal from "./modal/creditCardModal";
import GiftModal from "./modal/giftModal";

 const lobbyClassifyData = ["全部", "最愛", "電動", "街機", "棋牌", "獎池"]

export default function Home() {

  const [ activeIndex, setActiveIndex] = useState(0)

  const [rankingModalShow, setRankingModalShow] = useState(false)
  const [activityModalShow, setActivityModalShow] = useState(false)
  const [mallModalShow, setMallModalShow] = useState(false)
  const [faCaiJinModalShow, setFaCaiJinModalShow] = useState(false)
  const [teleComBillModalShow, setTeleComBillModalShow ] = useState(false)
  const [mobilePaymentModalShow, setMobilePaymentModalShow] = useState(false)
  const [bankTransferModalShow, setBankTransferModalShow] = useState(false)
  const [creditCardModalShow, setCreditCardModalShow] = useState(false)
  const [giftModalShow, setGiftModalShow] = useState(true)

  return (
    <div className="bg-black h-screen flex flex-col items-center">
      <div className="bg-[#191223] h-screen overflow-auto hide-scrollbar flex flex-col justify-start items-center w-[500px] relative">
        <LobbyHeader />
        <LobbyNavigation listItem={lobbyClassifyData} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        <LobbyContent activeIndex={activeIndex} />
        <LobbyFooter 
        setRankingModalShow={setRankingModalShow}
        setActivityModalShow={setActivityModalShow}
        setMallModalShow={setMallModalShow}
        />


        { activityModalShow && <ActivityModal setActivityModalShow={setActivityModalShow} /> }
        {/* <DetailActivityMain /> */}
        { rankingModalShow && <RankingModal setRankingModalShow={setRankingModalShow} /> }
        { mallModalShow && <MallModal setMallModalShow={setMallModalShow} /> }
        { faCaiJinModalShow && <FaCaiJinModal setFaCaiJinModalShow={setFaCaiJinModalShow} /> }
        { teleComBillModalShow && <TeleCommunicationBillModal setTeleComBillModalShow={setTeleComBillModalShow} /> }
        { mobilePaymentModalShow && <MobilePaymentModal setMobilePaymentModalShow={setMobilePaymentModalShow} /> }
        { bankTransferModalShow && <BankTransferModal setBankTransferModalShow={setBankTransferModalShow} /> }
        { creditCardModalShow && <CreditCardModal setCreditCardModalShow={setCreditCardModalShow} /> }
        { giftModalShow && <GiftModal setGiftModalShow={setGiftModalShow} /> }
      </div>
    </div>
  );
}
