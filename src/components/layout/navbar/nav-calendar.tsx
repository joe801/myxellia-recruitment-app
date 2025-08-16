import Image from "next/image";
import { HoverPopover } from "@/components/custom";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const NavCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div>
      <HoverPopover
        hoverXOffset={70}
        hoverYOffset={-50}
        trigger={
          <Image
            src="/layout/icons/Calendar.svg"
            alt="Calendar"
            width={32}
            height={32}
          />
        }
        hoverContent={
          <div className="py-2 px-3 mt-2 rounded-lg bg-[#18181B] text-white text-[10px]/[150%] font-dm-sans">
            Calendar
          </div>
        }
        popoverContent={
          <Calendar
            mode="single"
            defaultMonth={date}
            selected={date}
            onSelect={setDate}
          />
        }
      />
    </div>
  );
};

export default NavCalendar;
