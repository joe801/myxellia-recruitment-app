import { ChevronRight } from "lucide-react";
import Image from "next/image";

const OverviewCards = () => {
  return (
    <div className="flex flex-col gap-5 justify-between">
      {data.map((card, index) => (
        <div
          key={index}
          className="rounded-2xl border shadow-sm border-light-grey bg-white font-dm-sans"
        >
          <div className="border-b-[0.5px] rounded-t-2xl border-[#E4E4E4] bg-[#F9FAFB] px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <Image
                src={card?.icon}
                alt={card?.title}
                width={24}
                height={24}
              />
              <p className="text-sm/[100%] font-medium text-[#292929]">
                {card?.title}
              </p>
            </div>
            <button className="text-[#4545FE] text-xs/[100%] text-right font-medium flex items-center gap-0.5 cursor-not-allowed">
              <span>View all</span>
              <ChevronRight size={18} />
            </button>
          </div>
          <div className="p-4 pt-6 flex gap-4 justify-between items-center">
            <div className="space-y-2">
              <p className="text-sm/[20px] text-[#525252] font-medium">Total</p>
              <h4 className="text-[24px]/[38px] text-[#141414] font-bold">
                {card?.total}
              </h4>
            </div>
            <div className="space-y-2">
              <p className="text-sm/[20px] text-[#525252] font-medium">
                Active
              </p>
              <h4 className="text-[24px]/[38px] text-[#141414] font-bold">
                {card?.active}
              </h4>
            </div>
            <div className="space-y-2">
              <p className="text-sm/[20px] text-[#525252] font-medium">
                Archived
              </p>
              <h4 className="text-[24px]/[38px] text-[#141414] font-bold">
                {card?.archived}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const data = [
  {
    title: "Listings Overview",
    icon: "/dashboard/icons/home.svg",
    total: "1.8K",
    active: "80",
    archived: "1K",
  },
  {
    title: "Users Overview",
    icon: "/dashboard/icons/profile.svg",
    total: "20.7K",
    active: "8.5K",
    archived: "7.5K",
  },
];

export default OverviewCards;
