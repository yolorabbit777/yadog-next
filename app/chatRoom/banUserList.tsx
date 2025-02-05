'use client'; 


// Define an interface for the data type
interface BanUserData {
   avatar: React.ReactNode;
   ID: string;
 }

export default function BanUserList({banUsers} : {banUsers:Array<BanUserData>}) {



   return (
    <div className="w-full flex flex-col justify-start items-center p-2 py-3" >
      {banUsers.map((user, index) => (
         <div key={index} className="w-full flex flex-col" >
            <div  className="w-full flex flex-row justify-between items-center py-1">
               <div className="flex gap-2 items-center ">
                     {user.avatar}
                     <p className="text-white font-black text-[12px]">{user.ID}</p>
               </div>
               <button className="rounded-[20px] border-[2px] border-white px-2 pb-1">
                  <span className="text-[12px] font-black text-white">解除禁言</span>
               </button>
            </div>
            <hr className="my-1 bg-[#9D9FF9]" />
         </div>
      ))}
    </div>
  );
}
