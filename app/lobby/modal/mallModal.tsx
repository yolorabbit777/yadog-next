import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
import { BsFillShareFill } from "react-icons/bs";
import DescriptionItemHeader from "@/components/chatRoom/descriptionItemHeader";


export default function MallModal({setMallModalShow}: {setMallModalShow:(status: boolean) => void}) {

    return (
        <div className="fixed inset-0 flex justify-center items-center top-0 left-0 z-[600] h-full ">
            <div className="w-[500px] bg-[#160133] relative flex justify-end items-end bg-opacity-80 h-full px-4">
                <div className="w-full rounded-[20px] ">
                    <div className="p-[10px] bg-gradient-to-r from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-[50px]">
                        <div className="min-h-[700px] relative bg-gradient-to-b from-[#5B0B90] to-[#052657] bg-opacity-94 rounded-[50px] pt-[60px] gap-1 flex flex-col items-center flex flex-row items-start p-4">
                            <Image src="/images/lobby/mallback.png" alt="activity" className="absolute z-[400] -top-[230px]" width={466} height={194} />
                            <div className="absolute flex flex-col items-center -top-[75px] gap-4">
                                <p className="text-white text-[23px] font-bold z-[400]">VIP</p>
                                <p className="text-white text-[23px] font-bold z-[400]">活動</p>
                            </div>
                            <div className="w-full flex justify-between items-center mt-8 px-3">
                                <div className="p-2 rounded-full flex justify-between items-center bg-white gap-4 pl-5">
                                    <p className="text-[15px] font-bold text-[#2334E5]">您有優惠券</p>
                                    <button className="flex items-center px-2 gap-2 py-1 border-[#89E0FF] border-[2px] rounded-[80px] bg-gradient-to-r from-[#37C0FB] to-[#1D70DD]">
                                        <span className="text-white font-bold text-[15px]">選擇優惠</span>
                                        <SlArrowRight className="text-white" style={{ strokeWidth: 220}} />
                                    </button>
                                </div>
                                <button className="flex items-center px-2 gap-2 py-1 border-white border-[2px] rounded-[80px] bg-gradient-to-b from-[#F6B469] to-[#FB4C0D]">
                                    <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center">
                                        <BsFillShareFill />
                                    </div>
                                    <span className="text-white text-[15px] font-medium">儲值推薦</span>
                                </button>
                            </div>
                            <div className="flex items-center">
                                <Image src="/images/lobby/rotate_award.png" alt="footer" className="translate-x-5" width={157} height={147} />
                                <div className="w-[200px] flex items-center justify-end p-2 pl-10 rounded-r-[80px] bg-gradient-to-r from-[#FFDA57] to-[#FF9501]">
                                    <button className="px-1 py-2 flex justify-center items-center gap-1 rounded-[80px] bg-gradient-to-r from-[#FF6365] to-[#CB1162] border-[2px] border-white">
                                        <span className="text-white font-medium text-[15px]">購買小狗守護卡</span>
                                        <SlArrowRight className="text-white" style={{ strokeWidth: 220}} />
                                    </button>
                                </div>
                            </div>
                            <DescriptionItemHeader header="快速儲值" />
                            <div className="w-full grid grid-cols-3 gap-2 mt-3">
                                {[0,1,2,3,4,5].map((index) => 
                                <div key={index} className="w-full gap-1 bg-[#F0EEF8] shadow-inner rounded-[15px] shadow-[#ddd] p-3 flex flex-col justify-center items-center">
                                    <Image src="/images/lobby/linepay.png" alt="footer" className="" width={66} height={19} />
                                    <hr className="w-full h-[2px] bg-[#67583D]" />
                                    <div className="flex justify-center gap-1 items-center">
                                        <Image src="/images/guild/footprinter@3x.png" alt="footer" className="" width={20} height={20} />
                                        <p className="text-[#523705] text-[15px] font-black">105,000</p>
                                    </div>
                                    <button className="rounded-[30px] bg-gradient-to-b from-[#07AA76] to-[#2BE7D7] border-[2px] border-white px-2 py-[1px] shadow-md shadow-[#555]">
                                        <span className="text-white text-[15px] font-black">$1,000</span>
                                    </button>
                                </div>
                                )}
                            </div>
                            <DescriptionItemHeader header="快速儲值" />
                            <div className="w-full grid grid-cols-3 gap-2 mt-3">
                                {[0,1,2].map((index) => 
                                <div 
                                    key={index}
                                    className="w-full gap-1 bg-[#F0EEF8] shadow-inner rounded-[15px] shadow-[#ddd] p-3 flex flex-col justify-center items-center">
                                    <Image src="/images/lobby/linepay.png" alt="footer" className="" width={66} height={19} />
                                    <hr className="w-full h-[2px] bg-[#67583D]" />
                                    <div className="flex justify-center gap-1 items-center">
                                        <Image src="/images/guild/footprinter@3x.png" alt="footer" className="" width={20} height={20} />
                                        <p className="text-[#523705] text-[15px] font-black">105,000</p>
                                    </div>
                                    <button className="rounded-[30px] bg-gradient-to-b from-[#07AA76] to-[#2BE7D7] border-[2px] border-white px-2 py-[1px] shadow-md shadow-[#555]">
                                        <span className="text-white text-[15px] font-black">$1,000</span>
                                    </button>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed w-[500px] bottom-0 flex flex-col items-center z-[1000]">
                <Image src="/images/guild/dog@3x.png" alt="footer" className='absolute -right-8' width={157} height={147} />
                <Image src="/images/guild/reward@3x.png" alt="footer" className='absolute right-20 bottom-0' width={60} height={60} />
                <button 
                    onClick={() => setMallModalShow(false)}
                    className='w-[65px] h-[65px] absolute rounded-full bg-black' >
                    <Image src="/images/guild/closeVector.svg" alt="footer" className='transform transition-transform duration-300 hover:rotate-90' width={66} height={66} />
                </button>
                <Image src="/images/guild/moneymountain@3x.png" className='' alt="footer" width={500} height={80} />
            </div>
        </div>
    );
}
