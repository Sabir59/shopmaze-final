import { LucideIcon } from "lucide-react";

interface MegaMenuLink {
  name: string;
  href: string;
  icon?: LucideIcon;
}

export interface MegaMenuCategory {
  [category: string]: MegaMenuLink[];
}

export interface MegaMenuItem {
  name: string;
  href: string;
  icon?: LucideIcon;
  lists: MegaMenuCategory;
}



export interface NavigationMenuItems {
  [key: string]: MegaMenuItem;
}
