import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

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

export const CategoryCard = ({ name, href, image }: CategoryCardProps) => {
  return (
    <div>
      {/* Image */}
      <Link href={href} className="flex flex-col items-center gap-2">
        <div className="p-2 flex justify-center items-center rounded-lg bg-slate-200">
          <Image
            {...image}
            className="object-contain aspect-auto"
          />
        </div>
        <span className="font-medium text-sm text-gray-700 capitalize">
          {name}
        </span>
      </Link>
      {/* Name */}
    </div>
  );
};
