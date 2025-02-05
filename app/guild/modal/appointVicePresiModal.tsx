import Image from "next/image";
import MyGuildModalSimpleHeader from "./myGuildModalSimpleHeader";
import MyGuildModalInputForm from "./myGuildModalInputForm";

const description = "驗證碼以簡訊方式發送至您綁定的手機\n(若沒有收到驗證碼,請留意手機裡遭封鎖的訊息區)"

export default function AppointVicePresiModal({setActive}: {setActive: (status: boolean) => void}) {

  
  return (
    <div className="fixed inset-0 flex justify-center items-center top-0 left-0 z-50 h-full ">
        <div className="w-[500px] bg-[#160133] relative flex justify-center items-center bg-opacity-80 h-full px-4">
            <button onClick={() => setActive(false)} >
                <Image src="/images/guild/modalclose.svg" className="absolute top-2 right-2" alt="footer" width={21} height={21} />
            </button>
            <div className="w-full rounded-[20px] ">
                <div className="p-[3px] bg-gradient-to-r from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-lg">
                    <MyGuildModalSimpleHeader header="指派副會長" />
                    <div className="bg-[#150F20] bg-opacity-94 rounded-b-lg gap-1 flex flex-col items-center flex flex-row items-start p-4">
                        <div className="py-1">
                        </div>
                        <div className="w-full">
                            <MyGuildModalInputForm header="指派副會長的會員暱稱" detail="請輸入會員暱稱" isInput={true} />
                        </div>
                        <div className="w-full flex flex-row justify-start items-center my-4">
                            <input
                                onChange={() => {}}
                                placeholder="請輸入驗證碼"
                                className="overflow-auto w-[36%] bg-[#F9F0E0] rounded-[10px] text-[#523705] resize-none outline-none text-[13px] font-medium p-[10px]"
                            />
                            <button
                                onClick={() => setActive(false)} 
                                className="border-[3px] border-white rounded-[30px] py-[5px] px-4 bg-gradient-to-b ml-6 from-[#FF7D45] to-[#E73408]">
                                <span className="text-white text-[15px] text-stroke-wheet font-bold shadow-md">發送簡訊驗證碼</span>
                            </button>
                        </div>
                        <p className="w-full text-white text-[13px] font-medium whitespace-pre-line">{ description }</p>
                        <div className="flex flex-row justify-center gap-8 my-8">
                            <button
                                onClick={() => setActive(false)} 
                                className="border-[3px] border-white rounded-[30px] py-2 px-10 bg-gradient-to-b from-[#FFFFFF] to-[#B6938A]">
                                <span className="text-white text-[15px] text-stroke-wheet font-bold shadow-md">取消</span>
                            </button>
                            <button
                                onClick={() => setActive(false)} 
                                className="border-[3px] border-white rounded-[30px] py-2 px-10 bg-gradient-to-b from-[#73FDE1] to-[#0C9286]">
                                <span className="text-white text-[15px] text-stroke-wheet font-bold">確認</span>
                            </button>
                        </div>
                        <button
                            onClick={() => setActive(false)} 
                            className="border-[3px] border-white flex flex-row items-center gap-1 rounded-[30px] py-2 px-4 bg-gradient-to-b from-[#BF1010] to-[#28076A]">
                            <Image src="/images/guild/trash.svg" alt="footer" width={30} height={30} />
                            <span className="text-white text-[15px] text-stroke-wheet font-bold">移除副會長</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
