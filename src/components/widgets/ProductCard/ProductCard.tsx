import Image, { StaticImageData } from "next/image";
import React from "react";
import { Heart, Star, StarHalf, Table } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/constants/images";

import styles from "./styles.module.scss";
import createScn from "@/lib/utils";

const scn = createScn(styles);

// Interface for AffiliateLink
interface AffiliateLink {
  link: string;
}

// Interface for the Product Card Props
interface ProductCardProps {
  name: string;
  description: string;
  price: number | string;
  reviews?: number | string;
  link: string;
  image: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
  affiliateLinks: AffiliateLink[];
}

// ProductCard component
export const ProductCard = ({
  name,
  description,
  price,
  reviews,
  link,
  image,
  affiliateLinks,
}: ProductCardProps) => {
  return (
    <div className={scn("productCard")}>
      {/* Header */}
      <div className={scn("productCard__badge")}>Lenovo</div>
      <div className={scn("productCard__thumbnail")}>
        <Image {...image} className={scn("productCard__image")} />
      </div>
      {/* Body */}
      <div className={scn("productCard__body")}>
        <div className={scn("productCard__content")}>
          <div className={scn("productCard__details")}>
            <span className={scn("productCard__name")}>{name}</span>
            <span className={scn("productCard__price")}>{price}</span>
          </div>
          <p className={scn("productCard__description")}>{description}</p>
          {/* Reviews */}
          {reviews && (
            <div className={scn("productCard__reviews")}>
              <Star className={scn("productCard__star")} />
              <Star className={scn("productCard__star")} />
              <Star className={scn("productCard__star")} />
              <Star className={scn("productCard__star")} />
              <StarHalf className={scn("productCard__star")} />
              <span className={scn("productCard__reviewsCount")}>
                ({reviews})
              </span>
            </div>
          )}
        </div>
        {/* Bottom */}
        <div className={scn("productCard__footer")}>
          {affiliateLinks.length > 1 && (
            <div className={scn("productCard__affiliates")}>
              <div className={scn("productCard__affiliatesHeader")}>
                <span className={scn("productCard__affiliatesTitle")}>
                  Available in
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className={scn("productCard__affiliatesButton")}
                >
                  Compare
                  <Table className={scn("productCard__affiliatesIcon")} size={16} />
                </Button>
              </div>
              <ul className={scn("productCard__affiliatesList")}>
                <li>
                  <Image
                    src="/images/logos/logo-amazon.png"
                    alt="egghead"
                    width={36}
                    height={18}
                    className={scn("productCard__affiliatesImage")}
                  />
                </li>
                <li>
                  <Image
                    src="/images/logos/logo-alibaba.png"
                    alt="egghead"
                    width={36}
                    height={18}
                   className={scn("productCard__affiliatesImage")}
                  />
                </li>
                <li>
                  <Image
                    src="/images/logos/logo-egghead.png"
                    alt="egghead"
                    width={36}
                    height={18}
                   className={scn("productCard__affiliatesImage")}
                  />
                </li>
              </ul>
            </div>
          )}
          <div className={scn("productCard__buttonGroup")}>
            <Button className={scn("productCard__button")}>
              Buy Now
              <Image
                {...images.logoAmazonWhite}
                className={scn("productCard__buttonIcon")}
              />
            </Button>
            <div className={scn("productCard__heart")}>
              <Heart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
