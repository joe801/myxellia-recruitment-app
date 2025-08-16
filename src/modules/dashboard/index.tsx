import DashboardLayout from "@/components/layout/dashboard-layout";
import SalesOverview from "./components/sales-overview";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h3 className="text-xl/[100%] font-semibold text-dark font-dm-sans">
        Welcome, Joseph
      </h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2">
          <SalesOverview />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
