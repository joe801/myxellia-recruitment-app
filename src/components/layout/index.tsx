import Navbar from "./navbar";
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Myxellia</title>
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
