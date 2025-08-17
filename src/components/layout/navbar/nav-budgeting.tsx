import { HoverPopover } from "@/components/custom";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const NavBudgeting = () => {
  return (
    <div>
      <HoverPopover
        hoverXOffset={70}
        hoverYOffset={-50}
        isModal={true}
        trigger={
          <Image
            src="/layout/icons/Budgeting.svg"
            alt="Budgeting"
            width={32}
            height={32}
          />
        }
        hoverContent={
          <div className="py-2 px-3 mt-2 rounded-lg bg-[#18181B] text-white text-[10px]/[150%] font-dm-sans">
            Budgeting
          </div>
        }
        popoverContent={
          <div className="bg-white rounded-[10px] overflow-hidden shadow-xl max-w-[438px] w-full">
            <Image
              src="/layout/illustrations/media.svg"
              alt="media"
              className="h-full w-full rounded-t-[10px] bg-[#0C2841]"
              height={213}
              width={438}
            />
            <div className="py-6 px-8 space-y-6">
              <ul className="space-y-6">
                {data?.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Image src={item?.icon} alt="icon" width={24} height={24} />
                    <div className="space-y-1 font-dm-sans">
                      <p className="font-semibold text-dark text-base/[100%]">
                        {item?.title}
                      </p>
                      <p className="text-xs/[100%] text-mid-grey">
                        {item?.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button className="w-full rounded-full cursor-not-allowed">
                Create Budget
              </Button>
            </div>
          </div>
        }
      />
    </div>
  );
};

const data = [
  {
    icon: "/layout/icons/setting.svg",
    title: "Set up annual budgets by account category",
    description:
      "Allocate funds across income and expense lines with full visibility.",
  },
  {
    icon: "/layout/icons/trend.svg",
    title: "Track actual vs budget in real time",
    description:
      "See how your community is performing against plan, month by month.",
  },
  {
    icon: "/layout/icons/bar.svg",
    title: "Adjust figures and forecast with ease",
    description:
      "Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.",
  },
];

export default NavBudgeting;
