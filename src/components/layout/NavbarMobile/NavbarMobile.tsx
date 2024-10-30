import { SearchFilter } from "@/components/features";
import { MaxWidthWrapper } from "@/components/hoc";
import { images } from "@/constants/images";
import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
import { SidebarSheet } from "../Sidebar/SidebarSheet";
import { Sidebar } from "../Sidebar/Sidebar";
import { mobileSidebarData } from "@/seeds/mobileSidebarData";
import { megaMenuHome } from "@/seeds/megaMenuHome";

export const NavbarMobile = () => {
  return (
    <MaxWidthWrapper className="py-3 flex justify-between items-center gap-3 md:hidden">
      <Image
        {...images.mainLogoMobile}
        className="object-contain aspect-auto"
      />
      <div className="flex-1">
        <SearchFilter />
      </div>
      <div className="lg:hidden">
        <SidebarSheet className="w-[calc(100%-24px)]" >
          <Sidebar data={megaMenuHome} />
        </SidebarSheet>
      </div>
    </MaxWidthWrapper>
  );
};
