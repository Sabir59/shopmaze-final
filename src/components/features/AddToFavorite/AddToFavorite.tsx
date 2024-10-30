import Link from "next/link";
import { Heart } from "lucide-react";
import createScn from "@/lib/utils";
import styles from "./styles.module.scss";

const scn = createScn(styles);

export const AddToFavorite = () => {
  return (
    <Link href="#" className={scn("addToFavorite")}>
      <Heart className={scn("addToFavorite__icon")} />
    </Link>
  );
};
