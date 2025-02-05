
export default function ConditionItem({condition, conditionDetail,subHeader,detailText}: {condition: string, conditionDetail: string,subHeader:string,detailText:string  }) {
  return (
    <div className="w-full flex flex-col px-4">
          <p className="text-[13px] w-full text-[#0BF536] whitespace-pre-line mt-[19px]">{condition}</p>
          <p className="text-[13px] w-full text-white whitespace-pre-line mt-[11px]">{conditionDetail}</p>
          <div className="w-full rounded-[10px] bg-tabback px-[13px] py-2 shadow-md mt-3">
              <p className="text-white text-[13px]">{subHeader}</p>
              <p className="text-[13px] text-white pb-2 whitespace-pre-line">{detailText}</p>
          </div>    
        </div>
  );
}