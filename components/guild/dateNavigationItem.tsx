// Define an interface for the data type
interface DataItem {
    isActive: boolean;
    name: string;
}

export default function DateNavigationItem({dataList, activeDateIndex, setActiveDateIndex}:{dataList:Array<DataItem>, activeDateIndex:number, setActiveDateIndex:(val:number) => void }) {
    return (
        <div className="h-full rounded-[80px] p-3 gap-6 flex bg-white justify-between shadow-inner shadow-black items-center">
            {
                dataList.map((data, index) => 
                    <button 
                        key={index} 
                        onClick={() => setActiveDateIndex(index)} 
                        className={`rounded-[80px] px-4 py-1  ${activeDateIndex == index ? "text-white bg-gradient-to-r from-[#37C0FB] to-[#1D70DD] border-[2px] border-[#89E0FF]" : "text-black"}  `}>
                        <div className="relative flex flex-col justify-end items-end">
                            { data.isActive && activeDateIndex != index && <div className="w-[10px] h-[10px] absolute -top-2 -right-2 rounded-full bg-[#FF0303]"></div> }
                            <p className="text-[13px] font-bold">{data.name}</p>
                        </div>
                    </button>
                )
            }
        </div>
    )
}

