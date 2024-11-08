import createScn from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./styles.module.scss";

interface CategoryCardProps {
  name: string;
  href: string;
  image: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
}

const scn = createScn(styles);

export const CategoryCard = ({ name, href, image }: CategoryCardProps) => {
  return (
    <div>
      {/* Image */}
      <Link href={href} className={scn("categoryCard")}>
        <div className={scn("categoryCard__thumbnail")}>
          <Image {...image} className={scn("categoryCard__image")} />
        </div>
        <span className={scn("categoryCard__name")}>{name}</span>
      </Link>
      {/* Name */}
    </div>
  );
};
