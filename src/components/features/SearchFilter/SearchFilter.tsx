import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import createScn from "@/lib/utils";

import styles from "./styles.module.scss";

const scn = createScn(styles);

export const SearchFilter = () => {
  return (
    <div className={scn("searchFilter")}>
      <Input placeholder="Search..." className={scn("searchFilter__input")} />
      <Search className={scn("searchFilter__icon")} />
    </div>
  );
};
