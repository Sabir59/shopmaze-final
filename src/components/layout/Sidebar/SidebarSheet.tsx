import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";

interface SidebarSheetProps {
  children: React.ReactNode;
  className?: string;
}
export const SidebarSheet = ({ children, className }: SidebarSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className={`w-[280px] ${className}`}>
        <SheetHeader>
          <SheetTitle>Sidebar Sheet</SheetTitle>
          <SheetDescription>This is a sidebar sheet</SheetDescription>
        </SheetHeader>
        <SheetHeader>{children}</SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
