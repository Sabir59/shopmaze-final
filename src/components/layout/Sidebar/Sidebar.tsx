"use client";

import React from "react";
import createScn from "@/lib/utils";
import styles from "./styles.module.scss";
import { NavigationMenuItems } from "../MegaMenu/types";
import { SidebarItem } from "./SidbarItem";

const scn = createScn(styles);

export const Sidebar = ({ data }: { data: NavigationMenuItems }) => {
  return (
    <div className={scn("sidebar", "!max-w-full")}>
      {/* {user && ( */}
        <div className={scn("sidebar__header")}>
          <div className={scn("sidebar__header--content")}>
            {/* <UserWidget name={user} email={email} status={status} /> */}
            sabirnawaz59@gmail.com
          </div>
        </div>
      {/* )} */}
      <div className={scn("sidebar__content")}>
        {Object.entries(data).map(
          ([key, { name, href, icon: Icon, lists }]) => (
            <SidebarItem
              key={key}
              name={name}
              href={href}
              icon={Icon}
              lists={lists}
            />
          )
        )}
      </div>
    </div>
  );
};
