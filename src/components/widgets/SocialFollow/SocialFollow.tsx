import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import styles from "./styles.module.scss";
import createScn from "@/lib/utils";

const scn = createScn(styles);

interface listItems {
  icon: LucideIcon;
  href: string;
}

interface SocialFollowProps {
  title: string;
  list: listItems[];
}
export const SocialFollow = ({ title, list }: SocialFollowProps) => {
  return (
    <div className={scn("socialFollow")}>
      <span className={scn("socialFollow__title")}>{title}</span>
      <ul className={scn("socialFollow__list")}>
        {list.map(({ icon: Icon, href }) => (
          <li key={href} className={scn("socialFollow__item")}>
            <Link href={href}>
              <Icon className={scn("socialFollow__icon")} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
