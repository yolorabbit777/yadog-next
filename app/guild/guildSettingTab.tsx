import SwitchButton from "@/components/common/switchButton";

export default function GuildSettingTab({isAutoRemoveLoginMonth, setAutoRemoveLoginMonth}: {isAutoRemoveLoginMonth: boolean , setAutoRemoveLoginMonth: (status: boolean) => void}) {
  return (
    <div className="w-full flex flex-row justify-between items-center bg-[#7433F6] -mt-3 px-[19px] py-4">
          <p className="font-bold text-white text-[16px]">自動剔除一個月以上未登入</p>
          <SwitchButton isActive={isAutoRemoveLoginMonth} setActive={setAutoRemoveLoginMonth} />
      </div>
  );
}