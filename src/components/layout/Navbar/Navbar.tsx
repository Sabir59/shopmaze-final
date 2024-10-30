import { SearchFilter } from "@/components/features";
import { MaxWidthWrapper } from "@/components/hoc";
import { images } from "@/constants/images";
import Image from "next/image";
import React from "react";
import { NavActions } from "./NavActions";

import styles from "./styles.module.scss";
import createScn from "@/lib/utils";

const scn = createScn(styles);

export const Navbar = () => {
  return (
    <nav className={scn("navbar")}>
      <MaxWidthWrapper className={scn("navbar__container")}>
        <Image {...images.mainLogo} className={scn("navbar__logo")} />
        <div className={scn("navbar__search")}>
          <SearchFilter />
        </div>
        <NavActions />
      </MaxWidthWrapper>
    </nav>
  );
};
