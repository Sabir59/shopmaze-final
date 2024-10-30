import { ArrowRight, LucideIcon } from "lucide-react";

import styles from "./styles.module.scss";
import createScn, { cn } from "@/lib/utils";
const scn = createScn(styles);

interface WidgetProps {
  title: string;
  icon: LucideIcon;
}
const Widget = ({ title, icon: Icon }: WidgetProps) => {
  return (
    <div className={cn(scn("megaMenu__widget"))}>
      <span className={cn(scn("megaMenu__widgetIconContainer"))}>
        <Icon className={cn(scn("megaMenu__widgetIcon"))} />
      </span>
      <div className={cn(scn("megaMenu__widgetContent"))}>
        <span className={cn(scn("megaMenu__widgetTitle"))}>{title}</span>
        <span className={cn(scn("megaMenu__widgetBrowse"))}>
          Browse All
          <ArrowRight className={cn(scn("megaMenu__widgetArrow"))} />
        </span>
      </div>
    </div>
  );
};

export default Widget;
