import DashboardLayout from "@/components/layout/dashboard-layout";
import SalesOverview from "./components/sales-overview";
import { user } from "@/hooks/auth";
import OverviewCards from "./components/overview-cards";
import NewsCards from "./components/news-cards";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h3 className="text-xl/[100%] font-semibold text-dark font-dm-sans">
        Welcome, {user?.firstName ?? "User"}
      </h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2">
          <SalesOverview />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <OverviewCards />
        </div>
        <div className="col-span-1 md:col-span-3">
          <NewsCards />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
