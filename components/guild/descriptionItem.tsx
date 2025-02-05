import DescriptionItemHeader from "./descriptionItemHeader";

export default function DescriptionItem({header, description}: {header: string, description: string }) {
  return (
    <div className="w-full flex flex-col items-center px-4">
        <DescriptionItemHeader header={header} />
        <p className="text-[13px] w-full text-white whitespace-pre-line mt-5">{description}</p>
    </div>
  );
}
