import Image from "next/image";
import UserHeader from "./user-header";
import NavCalendar from "./nav-calendar";
import NavBudgeting from "./nav-budgeting";

const Navbar = () => {
  return (
    <nav className="bg-dark h-[5.125rem] py-[1.3125rem] px-[30px] lg:px-[4.875rem] flex items-center justify-between">
      <Image src="logo.svg" alt="Logo" width={154} height={26} />
      <div className="flex items-center gap-[1.5625rem]">
        <ul className="hidden sm:flex items-center gap-6">
          <li className="cursor-not-allowed">
            <Image
              src="/layout/icons/Notification.svg"
              alt="Notification"
              width={32}
              height={32}
            />
          </li>
          <li className="">
            <NavBudgeting />
          </li>
          <li>
            <NavCalendar />
          </li>
          <li className="cursor-not-allowed">
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
