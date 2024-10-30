import styles from "./styles.module.scss";
import createScn, { cn } from "@/lib/utils";
import { ReactNode } from "react";

const scn = createScn(styles);

interface containerProps {
  className?: string;
  children: ReactNode;
}

export const MaxWidthWrapper = ({ className, children }: containerProps) => {
  return (
    <div className={cn(scn("maxwidth-wrapper"), className)}>{children}</div>
  );
};
