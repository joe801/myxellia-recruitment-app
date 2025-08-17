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
          <div className="bg-[#0D0D0D] text-[#969696] mt-4">
            <Calendar
              mode="single"
              defaultMonth={date}
              selected={date}
              onSelect={setDate}
              classNames={{
                selected: `bg-blue-500 text-white`, // Highlight the selected day
              }}
            />
          </div>
        }
      />
    </div>
  );
};

export default NavCalendar;
