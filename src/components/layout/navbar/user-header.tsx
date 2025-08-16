import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { user } from "@/hooks/auth";
import { HoverPopover } from "@/components/custom";

const UserHeader = () => {
  return (
    <div>
      <HoverPopover
        hoverYOffset={-30}
        hoverXOffset={70}
        trigger={
          <Avatar className="size-10">
            <AvatarImage src={user?.avatar} />
            <AvatarFallback className="bg-white text-black text-[23px]/[130%] font-medium font-dm-sans">
              {user?.name[0]}
            </AvatarFallback>
          </Avatar>
        }
        hoverContent={
          <div className="w-48 mt-2 p-4 rounded-lg bg-gray-300 text-black font-dm-sans border-none outline-none">
            <p className="text-[20px] font-semibold">{user?.name}</p>
            <p className="text-base">{user?.email}</p>
          </div>
        }
        popoverContent={<div>Place content for the popover here.</div>}
      />
    </div>
  );
};

export default UserHeader;
