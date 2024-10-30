"use client";

import { MaxWidthWrapper } from "@/components/hoc";
import {
  Camera,
  Gamepad,
  Headphones,
  Laptop,
  Lightbulb,
  Menu,
  Package,
  Rocket,
  Smartphone,
  Trophy,
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
import Link from "next/link";
import Widget from "./Widget";
import { NavigationMenuItems } from "./types";
import Image from "next/image";
import { images } from "@/constants/images";
import { SearchFilter } from "@/components/features";

const scn = createScn(styles);

export const MegaMenu = ({ data }: { data: NavigationMenuItems }) => (
  <section className={cn(scn("megaMenu"))}>
    <MaxWidthWrapper className="flex justify-between items-center">
      <NavigationMenu className={cn(scn("megaMenu__menu"))}>
        <NavigationMenuList>
          {Object.entries(data).map(([title, { lists }]) => (
            <NavigationMenuItem
              key={title}
              className={cn(scn("megaMenu__item"))}
            >
              <NavigationMenuTrigger className={cn(scn("megaMenu__trigger"))}>
                {title === "phones" ? (
                  <Smartphone className={cn(scn("megaMenu__icon"))} />
                ) : title === "laptops" ? (
                  <Laptop className={cn(scn("megaMenu__icon"))} />
                ) : title === "smart watches" ? (
                  <Watch className={cn(scn("megaMenu__icon"))} />
                ) : title === "headphones" ? (
                  <Headphones className={cn(scn("megaMenu__icon"))} />
                ) : title === "cameras" ? (
                  <Camera className={cn(scn("megaMenu__icon"))} />
                ) : (
                  <Gamepad className={cn(scn("megaMenu__icon"))} />
                )}
                {title}
              </NavigationMenuTrigger>
              <NavigationMenuContent className={cn(scn("megaMenu__content"))}>
                <ul className={cn(scn("megaMenu__list"))}>
                  <li className={cn(scn("megaMenu__listItem"))}>
                    <ul className={cn(scn("megaMenu__menuContentList"))}>
                      {Object.entries(lists).map(
                        ([categoryName, items], index) => (
                          <li
                            key={index}
                            className={cn(scn("megaMenu__menuContentItem"))}
                          >
                            <p
                              className={cn(scn("megaMenu__menuCategoryName"))}
                            >
                              {categoryName}
                            </p>
                            <ul className={cn(scn("megaMenu__submenuList"))}>
                              {items.map(({ name, href }, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className={cn(scn("megaMenu__submenuItem"))}
                                >
                                  <Link href={href}>{name}</Link>
                                </li>
                              ))}
                            </ul>
                            <Widget
                              title={categoryName}
                              icon={
                                categoryName === "latest releases"
                                  ? Rocket
                                  : categoryName === "top models"
                                  ? Trophy
                                  : categoryName === "how to guides"
                                  ? Lightbulb
                                  : Package
                              }
                            />
                          </li>
                        )
                      )}
                    </ul>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </MaxWidthWrapper>
  </section>
);
