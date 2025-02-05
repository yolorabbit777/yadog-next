import Image from "next/image";
import DescriptionItemHeader from "@/components/chatRoom/descriptionItemHeader";


export default function FaCaiJinModal({setFaCaiJinModalShow}: {setFaCaiJinModalShow:(status: boolean) => void}) {

    return (
        <div className="fixed inset-0 flex justify-center items-center top-0 left-0 z-[600] h-full ">
            <div className="w-[500px] bg-[#160133] relative flex justify-end items-end bg-opacity-80 h-full px-4">
                <div className="w-full rounded-[20px] ">
                    <div className="p-[10px] bg-gradient-to-r from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-[50px]">
                        <div className="min-h-[500px] relative bg-gradient-to-b from-[#5B0B90] to-[#052657] bg-opacity-94 rounded-[50px] pt-[60px] gap-1 flex flex-col items-center flex flex-row items-start p-4">
                            <Image src="/images/lobby/facaijin.png" alt="activity" className="absolute z-[400] -top-[230px]" width={466} height={194} />
                            <div className="absolute flex flex-col items-center -top-[35px] gap-4">
                                <p className="text-white text-[23px] font-bold z-[400]">發財金</p>
                            </div>
                            <div className="w-full flex justify-between items-center mt-8 px-3">
                                <p className="w-1/2 text-white text-[14px] font-bold">每日僅可選擇一個領取且僅能領取發財金一次，每5分鐘更新。</p>
                                <button className="flex items-center px-2 gap-2 py-1 border-white border-[2px] rounded-[80px] bg-gradient-to-b from-[#73FAFF] to-[#08219E]">
                                    <Image src="/images/lobby/exclaim.png" alt="activity" width={27} height={27} />
                                    <span className="text-white text-[15px] font-medium">發財金說明</span>
                                </button>
                            </div>
                            <DescriptionItemHeader header="選擇方案" />
                            <div className="w-full flex flex-col items-center gap-3 mt-4">

                                <div className="w-full flex items-end justify-between rounded-[30px] p-5 bg-[#F5EEDD] shadow-inner shadow-[#ddd]">
                                    <div className="w-3/5 flex flex-col gap-2">
                                        <p className="text-[#523705] text-[15px] font-black">當日累積儲值</p>
                                        <div className="rounded-[30px] bg-[#DBCFCF] shadow-inner shadow-[#444] p-[3px]">
                                            <button className="w-full h-full rounded-[30px] bg-gradient-to-b from-[#FFED25] to-[#FFBC05]">
                                                <p className="text-[#523705] text-[15px] font-black">1,000/1,000</p>
                                            </button>
                                        </div>
                                        <p className="text-[#523705] text-[15px] font-black mt-2">當日虧損</p>
                                        <div className="rounded-[30px] bg-[#DBCFCF] shadow-inner shadow-[#444] p-[3px]">
                                            <button className="w-full h-full rounded-[30px] bg-gradient-to-b from-[#FFED25] to-[#FFBC05]">
                                                <p className="text-[#523705] text-[15px] font-black">1,000/1,000</p>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-2/5 relative relative flex flex-col items-center pb-2">
                                        <Image src="/images/lobby/reward.png" alt="reward" width={127} height={127} />
                                        <div className="absolute bottom-0 self-end flex justify-between items-center gap-2 py-1 px-3 bg-gradient-to-b from-[#FF9F32] to-[#FB4C0D] rounded-[30px] border-[2px] border-white">
                                            <Image src="/images/guild/footprinter@3x.png" alt="reward" width={27} height={27} />
                                            <p className="text-white font-black text-[15px] text-stroke">10,000</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full flex items-end justify-between rounded-[30px] p-5 bg-[#F5EEDD] shadow-inner shadow-[#ddd]">
                                    <div className="w-3/5 flex flex-col gap-2">
                                        <p className="text-[#523705] text-[15px] font-black">當日累積儲值</p>
                                        <div className="rounded-[30px] bg-[#DBCFCF] shadow-inner shadow-[#444] p-[3px]">
                                            <button className="w-full h-full rounded-[30px] bg-gradient-to-b from-[#FFED25] to-[#FFBC05]">
                                                <p className="text-[#523705] text-[15px] font-black">1,000/1,000</p>
                                            </button>
                                        </div>
                                        <p className="text-[#523705] text-[15px] font-black mt-2">當日虧損</p>
                                        <div className="rounded-[30px] bg-[#DBCFCF] shadow-inner shadow-[#444] p-[3px]">
                                            <button className="w-full h-full rounded-[30px] bg-gradient-to-b from-[#FFED25] to-[#FFBC05]">
                                                <p className="text-[#523705] text-[15px] font-black">1,000/1,000</p>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-2/5 relative relative flex flex-col items-center pb-2">
                                        <Image src="/images/lobby/reward.png" alt="reward" width={127} height={127} />
                                        <div className="absolute bottom-0 self-end flex justify-between items-center gap-2 py-1 px-3 bg-gradient-to-b from-[#FF9F32] to-[#FB4C0D] rounded-[30px] border-[2px] border-white">
                                            <Image src="/images/guild/footprinter@3x.png" alt="reward" width={27} height={27} />
                                            <p className="text-white font-black text-[15px] text-stroke">10,000</p>
                                        </div>
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
                    onClick={() => setFaCaiJinModalShow(false)}
                    className='w-[65px] h-[65px] absolute rounded-full bg-black' >
                    <Image src="/images/guild/closeVector.svg" alt="footer" className='transform transition-transform duration-300 hover:rotate-90' width={66} height={66} />
                </button>
                <Image src="/images/guild/moneymountain@3x.png" className='' alt="footer" width={500} height={80} />
            </div>
        </div>
    );
}
