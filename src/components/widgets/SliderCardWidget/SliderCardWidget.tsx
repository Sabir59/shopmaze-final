import createScn from "@/lib/utils";
import Image from "next/image";
import React from "react";

import styles from "./styles.module.scss";

const scn=createScn(styles)

interface SliderCardWidgetProps {
  title: string;
  brand?: string;
  featuredImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  quote?: string;
  bgColor?: string;
}

export const SliderCardWidget = ({
  title,
  featuredImage,
  logo,
  quote,
  bgColor,
}: SliderCardWidgetProps) => {
  return (
    <div
      className={scn("sliderCardWidget")}
      style={{ backgroundColor: bgColor || "#4b5563" }}
    >
      <div className={scn("sliderCardWidget__content")}>
        <span className={scn("sliderCardWidget__title")}>{title}</span>
        {logo && <Image {...logo} className={scn("sliderCardWidget__logo")} />}
        {quote && (
          <span className={scn("sliderCardWidget__quote")}>
            {quote}
          </span>
        )}
      </div>
      <div className={scn("sliderCardWidget__thumbnail")}>
        <Image {...featuredImage} className={scn("sliderCardWidget__featuredImage")} />
      </div>
    </div>
  );
};
