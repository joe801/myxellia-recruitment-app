import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SalesOverviewChart from "./sales-overview-chart";
import SalesCard from "./sales-cards";

const SalesOverview = () => {
  return (
    <div className="rounded-2xl bg-white shadow-md border border-[#E4E4E4]">
      <div className="py-4 px-[22px] border-b border-light-grey">
        <div className="flex items-end justify-between mb-4 font-dm-sans">
          <div className="space-y-2">
            <h4 className="text-dark text-xl/[100%] font-semibold">
              Sales Overview
            </h4>
            <p className="text-mid-grey text-xs/[100%]">
              Showing overview Jan 2022 - Sep 2022
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-full p-4 text-xs/[100%] font-medium text-center cursor-not-allowed"
          >
            View Transactions
          </Button>
        </div>
        <div className="w-full flex justify-end ">
          <Tabs defaultValue="year">
            <TabsList className="flex items-center gap-3">
              {tabsData.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="py-2 px-[18px] text-deep-grey text-sm/[100%] text-center cursor-pointer font-dm-sans rounded-lg data-[state=active]:bg-[#F5F5F5] data-[state=active]:font-semibold"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
      <div className="grid grid-cols-2 py-4 px-[22px]">
        <SalesOverviewChart />
        <SalesCard />
      </div>
    </div>
  );
};

const tabsData = [
  { value: "week", label: "1 Week" },
  { value: "month", label: "1 Month" },
  { value: "year", label: "1 Year" },
];

export default SalesOverview;
