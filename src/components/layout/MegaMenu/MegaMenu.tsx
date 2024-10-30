"use client";

import { MaxWidthWrapper } from "@/components/hoc";
import {
  ArrowRight,
  Camera,
  Computer,
  Gamepad,
  GamepadIcon,
  Headphones,
  Laptop,
  LucideIcon,
  Phone,
  Smartphone,
  TrendingUp,
  Watch,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import styles from "./styles.module.scss";
import createScn, { cn } from "@/lib/utils";
import { navigationMenuItems } from "./seeds";
import Link from "next/link";
import Image from "next/image";

const scn = createScn(styles);

export const MegaMenu = () => (
  <section className={cn(scn("megaMenu"))}>
    <MaxWidthWrapper>
      <NavigationMenu className={cn(scn("megaMenu__menu"))}>
        <NavigationMenuList>
          {Object.entries(navigationMenuItems).map(
            ([title, { image, lists }]) => (
              <NavigationMenuItem key={title}>
                <NavigationMenuTrigger className={cn(scn("megaMenu__trigger"))}>
                  {title === "phones" ? (
                    <Smartphone className="mr-2 h-5 w-5" />
                  ) : title === "laptops" ? (
                    <Laptop className="mr-2 h-5 w-5" />
                  ) : title === "smart watches" ? (
                    <Watch className="mr-2 h-5 w-5" />
                  ) : title === "headphones" ? (
                    <Headphones className="mr-2 h-5 w-5" />
                  ) : title === "cameras" ? (
                    <Camera className="mr-2 h-5 w-5" />
                  ) : (
                    <Gamepad className="mr-2 h-5 w-5" />
                  )}
                  {title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className={cn(scn("megaMenu__content"))}>
                  <ul className={cn(scn("megaMenu__menulist"))}>
                    <li className={cn(scn("megaMenu__menulistItem"))}>
                      <ul className="grid gap-12 grid-cols-4">
                        {Object.entries(lists).map(
                          ([categoryName, items], index) => (
                            <li
                              key={index}
                              className="col-span-1 flex flex-col"
                            >
                              <p className="flex items-center gap-2 capitalize text-sm leading-5 font-semibold text-slate-700  pb-[6px]">
                                {categoryName}
                              </p>
                              <ul className="flex mt-4 mb-10 flex-col gap-4">
                                {items.map(({ name, href }, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="text-gray-300 flex flex-col gap-4 text-xs font-pregular"
                                  >
                                    <Link
                                      href={href}
                                      className="text-slate-600"
                                    >
                                      {name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                              {categoryName === "latest releases" && (
                                <div className="mt-auto flex items-center gap-4 bg-[#F7F7FB] p-2 rounded-md">
                                  <span className="text-sm font-pregular text-slate-600 w-8 h-8 bg-white flex items-center justify-center rounded-sm">
                                    <TrendingUp className="size-5 text-teal-700" />
                                  </span>
                                  <div className="flex flex-col leading-5">
                                    <span className="text-sm font-bold text-teal-800">
                                      Latest Releases
                                    </span>
                                    <span className="text-xs text-gray-700 flex items-center gap-1">
                                      Browse All
                                      <ArrowRight className="size-3" />
                                    </span>
                                  </div>
                                </div>
                              )}
                              {categoryName === "top models" && (
                                <div className="mt-auto flex items-center gap-4 bg-[#F7F7FB] p-2 rounded-md">
                                  <span className="text-sm font-pregular text-slate-600 w-8 h-8 bg-white flex items-center justify-center rounded-sm">
                                    <TrendingUp className="size-5 text-teal-700" />
                                  </span>
                                  <div className="flex flex-col leading-5">
                                    <span className="text-sm font-bold text-teal-800">
                                      Top models
                                    </span>
                                    <span className="text-xs text-gray-700 flex items-center gap-1">
                                      Browse All
                                      <ArrowRight className="size-3" />
                                    </span>
                                  </div>
                                </div>
                              )}
                              {categoryName === "how to guides" && (
                                <div className="mt-auto flex items-center gap-4 bg-[#F7F7FB] p-2 rounded-md">
                                  <span className="text-sm font-pregular text-slate-600 w-8 h-8 bg-white flex items-center justify-center rounded-sm">
                                    <TrendingUp className="size-5 text-teal-700" />
                                  </span>
                                  <div className="flex flex-col leading-5">
                                    <span className="text-sm font-bold text-teal-800">
                                      How to guides
                                    </span>
                                    <span className="text-xs text-gray-700 flex items-center gap-1">
                                      Browse All
                                      <ArrowRight className="size-3" />
                                    </span>
                                  </div>
                                </div>
                              )}
                              {categoryName === "accessories" && (
                                <div className="mt-auto flex items-center gap-4 bg-[#F7F7FB] p-2 rounded-md">
                                  <span className="text-sm font-pregular text-slate-600 w-8 h-8 bg-white flex items-center justify-center rounded-sm">
                                    <TrendingUp className="size-5 text-teal-700" />
                                  </span>
                                  <div className="flex flex-col leading-5">
                                    <span className="text-sm font-bold text-teal-800">
                                      Accessories
                                    </span>
                                    <span className="text-xs text-gray-700 flex items-center gap-1">
                                      Browse All
                                      <ArrowRight className="size-3" />
                                    </span>
                                  </div>
                                </div>
                              )}
                            </li>
                          )
                        )}
                      </ul>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </MaxWidthWrapper>
  </section>
);
