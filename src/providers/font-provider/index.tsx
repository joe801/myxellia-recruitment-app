import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const FontProvider = ({ children }: { children: React.ReactNode }) => {
  return <div className={` ${dmSans.variable}`}>{children}</div>;
};
