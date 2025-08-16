import Head from "next/head";
import DashboardNav from "./dashboard-nav";
import { Section } from "@/components/custom";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Myxellia | Dashboard</title>
      </Head>
      <DashboardNav />
      <Section>{children}</Section>
    </>
  );
};

export default DashboardLayout;
