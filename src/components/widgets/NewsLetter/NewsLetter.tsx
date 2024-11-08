import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import React from "react";

import styles from "./styles.module.scss";
import createScn from "@/lib/utils";

const scn = createScn(styles);

export const NewsLetter = () => {
  return (
    <div className={scn("newsletter")}>
      {/* Left */}
      <div className={scn("newsletter__left")}>
        <span className={scn("newsletter__title")}>News Letter</span>
        <span className={scn("newsletter__description")}>
          Subscribe to our newsletter
        </span>
      </div>
      {/* Right */}
      <div className={scn("newsletter__right")}>
        <Input
          placeholder="youremail@example.com"
          className={scn("newsletter__input")}
        />
        <Send className={scn("newsletter__send")} />
      </div>
    </div>
  );
};
