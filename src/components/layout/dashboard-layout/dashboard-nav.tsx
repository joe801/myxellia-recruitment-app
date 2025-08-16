import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "./nav-item";
import Image from "next/image";
import clsx from "clsx";
import { Section } from "@/components/custom";
import { Search } from "lucide-react";

const DashboardNav = () => {
  const pathname = usePathname();

  return (
    <Section className="border-b border-light-grey bg-white flex items-center justify-between">
      <NavigationMenu>
        <NavigationMenuList className="flex flex-row gap-6">
          {NavItem.map((item) => {
            const isActive = pathname === item.path;
            return (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  asChild
                  className={clsx(
                    "w-[170px] h-[38px] rounded-lg flex items-center justify-center",
                    isActive && " bg-light-grey text-dark font-bold ",
                  )}
                >
                  <Link href={item.path}>
                    <span className="flex items-center gap-2">
                      {item.icon && (
                        <Image
                          src={
                            isActive && item.activeIcon
                              ? item.activeIcon
                              : item.icon
                          }
                          alt={item.title}
                          className="w-5 h-5"
                          width={24}
                          height={24}
                        />
                      )}
                      {item.title}
                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex w-[319px] items-center gap-2 bg-light-grey rounded-xl px-4 py-2">
        <Search size={24} color="#606060" />
        <input
          type="text"
          className="outline-none border-none text-semi-grey font-dm-sans"
          placeholder="Search listings, users here..."
        />
      </div>
    </Section>
  );
};

export default DashboardNav;
