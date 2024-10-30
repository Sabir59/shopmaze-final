import { User } from "lucide-react";
import React from "react";

import styles from "./styles.module.scss";
import createScn from "@/lib/utils";

const scn = createScn(styles);

export const UserActions = () => {
  return (
    <div className={scn("userActions")}>
      <User className={scn("userActions__icon")} />
    </div>
  );
};
