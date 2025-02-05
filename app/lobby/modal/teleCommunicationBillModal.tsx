import Image from "next/image";
import DescriptionItemHeader from "@/components/chatRoom/descriptionItemHeader";


export default function TeleCommunicationBillModal({setTeleComBillModalShow}: {setTeleComBillModalShow:(status: boolean) => void}) {

    return (
        <div className="fixed inset-0 flex justify-center items-center top-0 left-0 z-[600] h-full ">
            <div className="w-[500px] bg-[#160133] relative flex justify-end items-end bg-opacity-80 h-full px-4">
                <div className="w-full rounded-[20px] ">
                    <div className="p-[10px] bg-gradient-to-r from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-[50px]">
                        <div className="min-h-[500px] relative bg-gradient-to-b from-[#5B0B90] to-[#052657] bg-opacity-94 rounded-[50px] pt-[60px] gap-1 flex flex-col items-center flex flex-row items-start p-4">
                            <Image src="/images/lobby/telecombill.png" alt="activity" className="absolute z-[400] -top-[230px]" width={466} height={194} />
                            <div className="absolute flex flex-col items-center -top-[75px] gap-4">
                                <p className="text-white text-[23px] font-bold z-[400]">VIP 4</p>
                                <p className="text-white text-[23px] font-bold z-[400]">電信帳單</p>
                            </div>
                            <p className="text-white text-[14px] font-bold">單筆儲值金額$5000或$10000以上可獲得</p>
                            <p className="text-[#FFDA57] text-[20px] font-bold">儲值優惠券</p>
                            <div className="w-full flex flex-row justify-between items-center relative">
                                <button className="flex justify-center items-center z-[300] gap-1 rounded-[30px] border-[2px] border-white bg-gradient-to-b from-[#8EBEF4] to-[#0C90E2] py-1 px-3">
                                    <Image src="/images/guild/footprinter@3x.png" alt="activity" className="" width={28} height={28} />
                                    <span className="text-white font-black text-[18px] text-stroke">212,000點</span>
                                </button>
                                <Image src="/images/lobby/box.png" alt="activity" className="z-[300]" width={85} height={85} />
                                <button className="flex justify-center items-center z-[300] gap-1 rounded-[30px] border-[2px] border-white bg-gradient-to-b from-[#FF9F32] to-[#FB4C0D] py-1 px-3">
                                    <span className="text-white font-black text-[18px] text-stroke">$2,000</span>
                                </button>
                                <Image src="/images/lobby/bottom.png" alt="activity" className="absolute w-full bottom-0 object-cover z-0 h-[30px]" width={500} height={194} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed w-[500px] bottom-0 flex flex-col items-center z-[1000]">
                <Image src="/images/guild/dog@3x.png" alt="footer" className='absolute -right-8' width={157} height={147} />
                <Image src="/images/guild/reward@3x.png" alt="footer" className='absolute right-20 bottom-0' width={60} height={60} />
                <button 
                    onClick={() => setTeleComBillModalShow(false)}
                    className='w-[65px] h-[65px] absolute rounded-full bg-black' >
                    <Image src="/images/guild/closeVector.svg" alt="footer" className='transform transition-transform duration-300 hover:rotate-90' width={66} height={66} />
                </button>
                <Image src="/images/guild/moneymountain@3x.png" className='' alt="footer" width={500} height={80} />
            </div>
        </div>
    );
}
