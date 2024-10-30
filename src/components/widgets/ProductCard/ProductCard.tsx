import Image, { StaticImageData } from "next/image";
import React from "react";
import { Heart, Star, StarHalf, Table } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/constants/images";

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
    <div className="w-full max-w-full rounded-md relative bg-white border-t overflow-hidden transition-shadow ease-in-out duration-150 hover:shadow-lg cursor-pointer">
      {/* Header */}
      <div className="absolute top-0 right-0 p-1 text-white text-sm bg-orange-500">
        Lenovo
      </div>
      <div className="p-4 bg-white flex justify-center items-center">
        <Image {...image} className="object-contain max-h-[160px]" />
      </div>
      {/* Body */}
      <div className="p-4 flex flex-col gap-7">
        <div className="border-b border-slate-300 pb-2">
          <div className="flex gap-2 items-center justify-between border-b border-slate-300 pb-2">
            <span className="text-gray-800 font-semibold">{name}</span>
            <span className="text-gray-800 font-semibold text-sm">{price}</span>
          </div>
          <p className="text-sm text-gray-600 mt-3">{description}</p>
          {/* Reviews */}
          {reviews && (
            <div className="flex items-center gap-2 text-orange-500 mt-6">
              <Star className="size-4" />
              <Star className="size-4" />
              <Star className="size-4" />
              <Star className="size-4" />
              <StarHalf className="size-4" />
              <span className="text-gray-600 font-medium text-sm">
                ({reviews})
              </span>
            </div>
          )}
        </div>
        {/* Bottom */}
        <div className="flex flex-col gap-6">
          {affiliateLinks.length > 1 && (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm text-gray-600 font-medium">
                  Available in
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  Compare
                  <Table className="size-4 text-gray-600" />
                </Button>
              </div>
              <ul className="flex items-center gap-4">
                <li>
                  <Image
                    src="/images/logos/logo-amazon.png"
                    alt="egghead"
                    width={36}
                    height={18}
                    className="object-contain h-[18px]"
                  />
                </li>
                <li>
                  <Image
                    src="/images/logos/logo-alibaba.png"
                    alt="egghead"
                    width={36}
                    height={18}
                    className="object-contain h-[18px]"
                  />
                </li>
                <li>
                  <Image
                    src="/images/logos/logo-egghead.png"
                    alt="egghead"
                    width={36}
                    height={18}
                    className="object-contain h-[18px]"
                  />
                </li>
              </ul>
            </div>
          )}
          <div className="flex items-center justify-between gap-4">
            <Button className="w-full flex-1 flex items-center gap-2 bg-teal-800 hover:bg-teal-600">
              Buy Now
              <Image
                {...images.logoAmazonWhite}
                className="object-contain h-[18px] aspect-auto"
              />
            </Button>
            <div className="h-9 w-9 rounded-full border flex items-center justify-center">
              <Heart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
