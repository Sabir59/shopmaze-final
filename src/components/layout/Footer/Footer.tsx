import { MaxWidthWrapper } from "@/components/hoc";
import createScn from "@/lib/utils";
import Link from "next/link";
import React from "react";

import styles from "./styles.module.scss";
import { footerData } from "@/seeds/footerData";
import Image from "next/image";
import { ChevronRight, Mail, Map, PhoneCall, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { NewsLetter } from "@/components/widgets";
import { images } from "@/constants/images";

const scn = createScn(styles);

export const Footer = () => {
  return (
    <footer className="pb-12 relative">
      <Image
        {...images.footerBgImage}
        className="w-full h-full absolute left-0 top-0 z-0 object-cover object-top"
      />
      <MaxWidthWrapper className="relative z-10 -translate-y-1/2 mt-12">
        <NewsLetter />
      </MaxWidthWrapper>
      <div className="relative">
        <MaxWidthWrapper className="relative z-10 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <ul className="flex flex-col gap-3 text-white text-sm">
              <li>
                <span className="text-lg font-semibold uppercase mb-5 block">
                  brand
                </span>
              </li>
              <li className="flex items-center capitalize gap-1 translate-x-3 transition-all duration-300 ease-in-out">
                <ChevronRight className="size-4 text-gray-300" />
                <Link href="#">Phones</Link>
              </li>
              <li className="flex items-center capitalize gap-1 translate-x-3 transition-all duration-300 ease-in-out">
                <ChevronRight className="size-4 text-gray-300" />
                <Link href="#">Phones</Link>
              </li>
              <li className="flex items-center capitalize gap-1 translate-x-3 transition-all duration-300 ease-in-out">
                <ChevronRight className="size-4 text-gray-300" />
                <Link href="#">Phones</Link>
              </li>
              <li className="flex items-center capitalize gap-1 translate-x-3 transition-all duration-300 ease-in-out">
                <ChevronRight className="size-4 text-gray-300" />
                <Link href="#">Phones</Link>
              </li>
              <li className="flex items-center capitalize gap-1 translate-x-3 transition-all duration-300 ease-in-out">
                <ChevronRight className="size-4 text-gray-300" />
                <Link href="#">Phones</Link>
              </li>
              <li className="flex items-center capitalize gap-1 translate-x-3 transition-all duration-300 ease-in-out">
                <ChevronRight className="size-4 text-gray-300" />
                <Link href="#">Phones</Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-3 text-white text-sm">
              <li>
                <span className="text-lg font-semibold uppercase mb-5 block">
                  categories
                </span>
              </li>
              <li className="flex items-center capitalize gap-1 translate-x-3 transition-all duration-300 ease-in-out">
                <ChevronRight className="size-4 text-gray-300" />
                <Link href="#">Phones</Link>
              </li>
              <li className="flex items-center capitalize gap-1 translate-x-3 transition-all duration-300 ease-in-out">
                <ChevronRight className="size-4 text-gray-300" />
                <Link href="#">Laptops</Link>
              </li>
              <li className="flex items-center capitalize gap-1 translate-x-3 transition-all duration-300 ease-in-out">
                <ChevronRight className="size-4 text-gray-300" />
                <Link href="#">Smart Watches</Link>
              </li>
              <li className="flex items-center capitalize gap-1 translate-x-3 transition-all duration-300 ease-in-out">
                <ChevronRight className="size-4 text-gray-300" />
                <Link href="#">Cameras</Link>
              </li>
              <li className="flex items-center capitalize gap-1 translate-x-3 transition-all duration-300 ease-in-out">
                <ChevronRight className="size-4 text-gray-300" />
                <Link href="#">Headphones</Link>
              </li>
              <li className="flex items-center capitalize gap-1 translate-x-3 transition-all duration-300 ease-in-out">
                <ChevronRight className="size-4 text-gray-300" />
                <Link href="#">Gaming</Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-3 text-white text-sm">
              <li>
                <span className="text-lg font-semibold uppercase mb-5 block">
                  our company
                </span>
              </li>
              <li className="flex items-center capitalize gap-1 translate-x-3 transition-all duration-300 ease-in-out">
                <ChevronRight className="size-4 text-gray-300" />
                <Link href="#">Overview</Link>
              </li>
              <li className="flex items-center capitalize gap-1 translate-x-3 transition-all duration-300 ease-in-out">
                <ChevronRight className="size-4 text-gray-300" />
                <Link href="#">careers</Link>
              </li>
              <li className="flex items-center capitalize gap-1 translate-x-3 transition-all duration-300 ease-in-out">
                <ChevronRight className="size-4 text-gray-300" />
                <Link href="#">Partners</Link>
              </li>
              <li className="flex items-center capitalize gap-1 translate-x-3 transition-all duration-300 ease-in-out">
                <ChevronRight className="size-4 text-gray-300" />
                <Link href="#">Affiliates</Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-3 text-white text-sm">
              <li>
                <span className="text-lg font-semibold uppercase mb-5 block">
                  blogs
                </span>
              </li>
              <li className="flex items-center capitalize gap-1 translate-x-3 transition-all duration-300 ease-in-out">
                <ChevronRight className="size-4 text-gray-300" />
                <Link href="#">Top 10 smartphones of 2024</Link>
              </li>
              <li className="flex items-center capitalize gap-1 translate-x-3 transition-all duration-300 ease-in-out">
                <ChevronRight className="size-4 text-gray-300" />
                <Link href="#">
                  How to Choose the Perfect Laptop for Work and Play
                </Link>
              </li>
              <li className="flex items-center capitalize gap-1 translate-x-3 transition-all duration-300 ease-in-out">
                <ChevronRight className="size-4 text-gray-300" />
                <Link href="#">
                  Beginner’s Guide to Photography with DSLR Cameras
                </Link>
              </li>
            </ul>
          </div>
        </MaxWidthWrapper>
      </div>
    </footer>
  );
};
