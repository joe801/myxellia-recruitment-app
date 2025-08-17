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
          <Avatar className="size-10 hover:bg-white box-content border-4 border-transparent hover:border-white transition-all duration-300">
            <AvatarImage src={user?.avatar} />
            <AvatarFallback className="bg-white text-black text-[23px]/[130%] font-medium font-dm-sans">
              {user?.firstName[0]}
            </AvatarFallback>
          </Avatar>
        }
        hoverContent={
          <div className="w-48 mt-2 p-4 rounded-lg bg-gray-100 text-black shadow-sm font-dm-sans border-none outline-none">
            <p className="text-[20px] font-semibold">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-base">{user?.email}</p>
          </div>
        }
        popoverContent={
          <div className="w-[250px] sm:w-[350px] min-h-[500px] bg-white shadow-xl mt-2 mr-20 text-black p-4 rounded-lg  font-dm-sans border-none outline-none">
            <div className="w-full border border-gray-300 p-4 rounded-lg flex items-center gap-4">
              <Avatar className="size-10">
                <AvatarImage src={user?.avatar} />
                <AvatarFallback className="bg-green-800 text-white text-[23px]/[130%] font-medium font-dm-sans">
                  {user?.firstName[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-[20px] font-semibold">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-base">{user?.email}</p>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default UserHeader;
