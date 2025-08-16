import React, { useState, ReactNode } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface HoverPopoverProps {
  trigger: ReactNode;
  hoverContent: ReactNode;
  popoverContent: ReactNode;
  hoverXOffset?: number;
  hoverYOffset?: number;
}

export const HoverPopover: React.FC<HoverPopoverProps> = ({
  trigger,
  hoverContent,
  popoverContent,
  hoverXOffset = 0,
  hoverYOffset = 0,
}) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <HoverCard closeDelay={100} openDelay={100}>
        <PopoverTrigger className="p-0 outline-0">
          <HoverCardTrigger
            className={`cursor-pointer p-0 ${popoverOpen ? "pointer-events-none" : ""}`}
          >
            {trigger}
          </HoverCardTrigger>
        </PopoverTrigger>
        <HoverCardContent
          align="start"
          alignOffset={hoverXOffset}
          sideOffset={hoverYOffset}
          side="left"
          className="w-fit border-none p-0 outline-0"
        >
          {hoverContent}
        </HoverCardContent>
      </HoverCard>
      <PopoverContent className="w-fit border-none p-0 outline-0">{popoverContent}</PopoverContent>
    </Popover>
  );
};
