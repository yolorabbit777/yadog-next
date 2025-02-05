'use client'; 

import Image from "next/image";

 const FriendListData = [
    {
        'name': "台中送重機",
        "ID" : "老闆 加Line：shop94168 ️",
        "avatar" : <Image src="/images/guild/avatar.svg" className='' alt="trash" width={50} height={50} />,
        "isActive": false
    },
    {
        'name': "三叔公",
        "ID" : "甚麼時候打?",
        "avatar" : <Image src="/images/guild/avatar.svg" className='' alt="trash" width={50} height={50} />,
        "isActive": true
    },
 ]

export default function FriendList() {

   return (
    <div className="w-full flex flex-col justify-start items-center gap-3 mt-6" >
        { FriendListData.map((data, index) => 
            <button key={index} className="w-full flex flex-col gap-3">
                <div className="w-full flex flex-row justify-between items-center px-3 gap-2">
                    <div className="flex flex-row gap-2">
                        { data.avatar }
                        <div className="flex flex-col items-start">
                            <p className="text-white font-black text-[15px]">{data.name}</p>
                            <p className="text-white font-medium text-[12px]">{data.ID}</p>
                        </div>
                    </div>
                    {data.isActive && <div className="w-3 h-3 bg-[#FD813E] rounded-full" /> }
                </div>
                <hr className="w-full bg-[#FFE0A5]" />
            </button>
        )}
    </div>
  );
}
