import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import createScn from "@/lib/utils";
import styles from "./styles.module.scss";

const scn = createScn(styles);

export const AddToCart = () => {
  return (
    <Link href={"#"} className={scn("addToCart")}>
      <ShoppingBag className={scn("addToCart__icon")} />
    </Link>
  );
};
