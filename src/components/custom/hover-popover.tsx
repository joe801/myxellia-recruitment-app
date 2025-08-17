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
  popoverXOffset?: number;
  popoverYOffset?: number;
  popoverClassName?: string;
  isModal?: boolean;
}

export const HoverPopover: React.FC<HoverPopoverProps> = ({
  trigger,
  hoverContent,
  popoverContent,
  hoverXOffset = 0,
  hoverYOffset = 0,
  popoverXOffset = 0,
  popoverYOffset = 0,
  popoverClassName = "",
  isModal = false,
}) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  if (isModal) {
    return (
      <>
        <HoverCard closeDelay={100} openDelay={100}>
          <HoverCardTrigger
            className={`cursor-pointer p-0 ${popoverOpen ? "pointer-events-none" : ""}`}
            onClick={() => setPopoverOpen(true)}
          >
            {trigger}
          </HoverCardTrigger>
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

        {popoverOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/20 z-40"
              onClick={() => setPopoverOpen(false)}
            />
            {/* Modal Content */}
            <div
              className={`fixed inset-0 flex items-center justify-center z-50 pointer-events-none ${popoverClassName}`}
            >
              <div className="pointer-events-auto">{popoverContent}</div>
            </div>
          </>
        )}
      </>
    );
  }

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <HoverCard closeDelay={100} openDelay={100}>
        <PopoverTrigger className="p-0 outline-0 cursor-pointer">
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
      <PopoverContent
        alignOffset={popoverXOffset}
        sideOffset={popoverYOffset}
        className={`w-fit border-none p-0 outline-0 shadow-none ${popoverClassName}`}
      >
        {popoverContent}
      </PopoverContent>
    </Popover>
  );
};
