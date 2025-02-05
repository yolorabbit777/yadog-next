import Image from "next/image";
import MyGuildModalSimpleHeader from "./myGuildModalSimpleHeader";
import MyGuildModalInputForm from "./myGuildModalInputForm";


export default function VaultWithdrawal({setActive}: {setActive: (status: boolean) => void}) {
  return (
    <div className="fixed inset-0 flex justify-center items-center top-0 left-0 z-50 h-full ">
        <div className="w-[500px] bg-[#160133] relative flex justify-center items-center bg-opacity-80 h-full px-4">
            <button onClick={() => setActive(false)} >
                <Image src="/images/guild/modalclose.svg" className="absolute top-2 right-2" alt="footer" width={21} height={21} />
            </button>
            <div className="w-full rounded-[20px] ">
                <div className="p-[3px] bg-gradient-to-r from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-lg">
                    <MyGuildModalSimpleHeader header="金庫提領" />
                    <div className="bg-[#150F20] bg-opacity-94 rounded-b-lg p-3 gap-6 flex flex-col items-center flex flex-row items-start">
                        <div className="w-full flex justify-start px-10 gap-3 py-8 rounded-[10px] bg-tabback ">
                            <Image src="/images/guild/footprinter@3x.png" alt="footer" width={71} height={71} />
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-[#EEC01D] text-[20px] font-bold">金庫餘額</p>
                                <p className="text-white text-[20px] font-black">8,888,888.88</p>
                            </div>
                        </div>
                        <MyGuildModalInputForm header="提取餘額" detail="請輸入您要提取的金庫餘額" isInput={true} />
                        <div className="flex flex-row justify-center items-center gap-8 mb-2">
                            <button 
                            onClick={() => setActive(false)} 
                            className="border-[3px] border-white rounded-[30px] py-2 px-10 bg-gradient-to-b from-[#FFFFFF] to-[#B6938A] mt-4">
                                <span className="text-[#523705] text-[15px] font-bold">取消</span>
                            </button>
                            <button 
                            onClick={() => setActive(false)} 
                            className="border-[3px] border-white rounded-[30px] py-2 px-10 bg-gradient-to-b from-[#73FDE1] to-[#0C9286] mt-4">
                                <span className="text-white text-[15px] text-stroke-wheet font-bold">領取</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
