"use client";
import { useState } from "react";
import { MegaMenuItem } from "../MegaMenu/types";
import { ChevronRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import createScn from "@/lib/utils";
import styles from "./styles.module.scss";

const scn = createScn(styles);

export const SidebarItem = ({
  name,
  href,
  icon: Icon,
  lists,
}: MegaMenuItem) => {
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );

  const toggleDropdown = (key: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className={scn("sidebar__group")}>
      <span className="font-medium text-sm text-gray-800">{name}</span>
      {Object.keys(lists).map((key) => (
        <div key={key}>
          <div
            className="inline-flex gap-1 items-center cursor-pointer px-1 rounded-sm text-sm p-1 text-gray-600 capitalize"
            onClick={() => toggleDropdown(key)}
          >
            <ChevronRight className="size-4" />
            {key}
          </div>
          {
            <ul
              className={`flex flex-col gap-1 mt-1 border-l border-gray-200 text-gray-600 ml-7 transition-all duration-300 ease-in-out overflow-y-hidden ${
                openDropdowns[key] ? "max-h-96" : "max-h-0"
              }`}
            >
              {lists[key].map(({ name, href, icon: _Icon }) => (
                <li
                  key={name}
                  className="text-sm flex items-center gap-1 px-1 rounded-sm py-1 pl-3"
                >
                  <Link href={href}>
                    <span className="block">{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          }
        </div>
      ))}
    </div>
  );
};
