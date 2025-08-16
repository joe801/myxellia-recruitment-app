import Image from "next/image";
import UserHeader from "./user-header";
import { HoverPopover } from "@/components/custom";
import NavCalendar from "./nav-calendar";

const Navbar = () => {
  return (
    <nav className="bg-dark h-[5.125rem] py-[1.3125rem] px-[4.875rem] flex items-center justify-between">
      <Image src="logo.svg" alt="Logo" width={154} height={26} />
      <div className="flex items-center gap-[1.5625rem]">
        <ul className="flex items-center gap-6">
          <li className="">
            <Image
              src="/layout/icons/Notification.svg"
              alt="Notification"
              width={32}
              height={32}
            />
          </li>
          <li className="">
            <HoverPopover
              hoverXOffset={70}
              hoverYOffset={-50}
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
              popoverContent={<div>Budgeting Popover</div>}
            />
          </li>
          <li>
            <NavCalendar />
          </li>
          <li>
            <Image
              src="/layout/icons/message.svg"
              alt="Message"
              width={32}
              height={32}
            />
          </li>
        </ul>
        <UserHeader />
      </div>
    </nav>
  );
};

export default Navbar;
