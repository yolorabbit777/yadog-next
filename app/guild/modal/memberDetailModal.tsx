import Image from "next/image";

export default function MemberDetailModal({setActive}: {setActive: (status: boolean) => void}) {

  return (
    <div className="fixed inset-0 flex justify-center items-center top-0 left-0 z-50 h-full ">
        <div className="w-[500px] bg-[#160133] relative flex justify-center items-center bg-opacity-80 h-full px-4">
            <button onClick={() => setActive(false)} >
                <Image src="/images/guild/modalclose.svg" className="absolute top-2 right-2" alt="footer" width={21} height={21} />
            </button>
            <div className="w-full rounded-[20px] ">
                <div className="p-[3px] bg-gradient-to-r from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-lg">
                    <div className="flex flex-col items-center bg-[#150F20] bg-opacity-94 rounded-b-lg gap-1 p-4 pb-8 rounded-lg flex gap-3 flex-row items-start">
                        <div className="w-full flex flex-row items-center ">
                            <div className="flex flex-col justify-center items-center">
                                <Image src="/images/guild/icon@3x.png" alt="footer" className="" width={100} height={100} />
                                <button className="bg-gradient-to-b from-[#FF7E81] to-[#7D090B] p-1 -translate-y-[60%] rounded-[80px] border border-white flex flex-row justify-center items-center">
                                    <Image src="/images/guild/kindout.svg" alt="footer" className="" width={18} height={18} />
                                    <p className="text-white text-[10px] font-medium text-stroke">踢出公會</p>
                                </button>
                            </div>
                            <div className="h-full flex flex-col justify-between items-start gap-1">
                                <p className="text-[#EEC01D] text-[10px] font-medium ml-3">暱稱</p>
                                <p className="text-white text-[20px] font-black ml-3">好玩一直玩</p>
                                <div className="w-full flex justify-between items-center gap-5">
                                    <button className="rounded-[30px] border-[2px] border-white px-12 py-1 bg-gradient-to-b from-[#FFFFFF] to-[#B6938A]" >
                                        <p className="text-shadow-md tracking-wide text-[#523705] text-[12px] font-medium" >封鎖</p>
                                    </button>
                                    <button className="rounded-[30px] border-[2px] border-white px-9 py-1 bg-gradient-to-b from-[#73FDE1] to-[#0C9286]" >
                                        <p className="text-shadow-md tracking-wide text-white text-[12px] font-medium text-stroke" >加為好友</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <textarea
                            placeholder="介紹一下自己吧^^"
                            className="w-full h-[130px] shadow-inner shadow-black rounded-[10px] bg-[#F9F0E0] outline-none p-[14px] resize-none text-[#250202] text-[15px]">
                        </textarea>
                        <div className="flex flex-row justify-between w-full items-center rounded-[10px] bg-gradient-to-b gap-1 from-[#FFEB54] to-[#CD830D] pr-6">
                            <div className="flex flex-row">
                                <Image src="/images/guild/mark@3x.png" alt="footer" width={86} height={86} />
                                <div className="flex flex-col justify-center items-start ml-1">
                                    <p className="text-[18px] text-black font-bold w-full">0 勝 0 敗</p>
                                    <p className="text-[14px] text-white font-black">連勝:0</p>
                                </div>
                            </div>
                            <button className="border-[3px] border-white bg-gradient-to-b rounded-[30px] from-[#FF7D45] to-[#E73408] py-2 px-4">
                                <span className="text-[17px] text-white font-black">開始對戰</span>
                            </button>
                        </div>
                        <div className="w-full flex-col h-[78px] rounded-[10px] bg-[#F9EBCD] flex items-center p-2 shadow-inner shadow-[#222]">
                            <div className="flex gap-3">
                                <span className="text-[15px] text-[#392603] font-bold">我的成就</span>
                                <span className="text-[15px] text-[#392603] font-bold">已達成</span>
                                <span className="text-[15px] text-[#DC0945] font-bold">3</span>
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-between bg-gradient-to-b from-[#9266F9] to-[#4F0AA3] rounded-[10px] px-6 py-1 shadow-inner shadow-black">
                            <div className="flex flex-col justify-center items-center">
                                <Image src="/images/guild/vip3@3x.png" alt="footer" width={83} height={101} />
                                <p className="text-white text-[15px] font-medium">VIP等級 <span className="text-[#DC0945] font-black text-[18px] text-stroke-white">3</span></p>
                            </div>
                            <div className="flex flex-col justify-center gap-2 items-center">
                                <p className="text-white text-[14px] font-medium">會員帳號</p>
                                <p className="text-white text-[14px] font-medium">會員餘額</p>
                                <p className="text-white text-[14px] font-medium">會員餘額</p>
                            </div>
                            <div className="flex flex-col justify-center gap-2 items-end">
                                <p className="text-white text-[14px] font-medium">ABC0123</p>
                                <p className="text-white text-[14px] font-medium">2,000.15</p>
                                <p className="text-white text-[14px] font-medium">台中好幫幫</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
