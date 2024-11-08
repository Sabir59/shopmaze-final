import { MaxWidthWrapper } from "@/components/hoc";
import createScn from "@/lib/utils";
import Link from "next/link";
import React from "react";

import styles from "./styles.module.scss";
import Image from "next/image";
import {
  ChevronRight,
  Facebook,
  Mail,
  MailIcon,
  Map,
  Phone,
  PhoneCall,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";
import { NewsLetter, SocialFollow } from "@/components/widgets";
import { images } from "@/constants/images";

const scn = createScn(styles);

const footerData = [
  {
    icon: Facebook,
    href: "https://twitter.com",
  },
  {
    icon: Twitter,
    href: "https://mail.com",
  },
  {
    icon: Youtube,
    href: "https://phone.com",
  },
];

export const Footer = () => {
  return (
    <footer className="pb-12 relative bg-blue-600">
      {/* <Image
        {...images.footerBgImage}
        className="w-full h-full absolute left-0 top-0 z-0 object-cover object-top"
      /> */}
      <MaxWidthWrapper className="relative z-10 -translate-y-1/2 mt-12">
        <NewsLetter />
      </MaxWidthWrapper>
      <div className="relative">
        <MaxWidthWrapper className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-12">
            <ul className="flex flex-col gap-3 text-white text-sm">
              <li className="flex flex-col gap-5">
                <Image {...images.logoFooterWhite} />
                <div className="flex flex-col gap-2">
                  <span className="font-medium text-white">
                    @2024 shopmaze use.
                  </span>
                  <span className="text-gray-300 text-sm">
                    Leading supplier of premium electronics at unbeatable prices
                  </span>
                </div>
              </li>
              <li className="flex flex-col gap-6 mt-6 md:mt-12">
                <div className="flex flex-col gap-1">
                  <Link
                    href="#"
                    className="font-medium text-white flex items-center gap-[6px]"
                  >
                    <Phone className="size-4" />
                    +92-305-3971103
                  </Link>
                  <Link
                    href="#"
                    className="font-medium text-white flex items-center gap-[6px]"
                  >
                    <MailIcon className="size-4" />
                    shopmaze@support.com
                  </Link>
                </div>
              </li>
            </ul>
            <ul className="flex flex-col gap-3 text-white text-sm">
              <li>
                <span className="text-lg font-semibold uppercase  md:mb-5 block">
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
                <span className="text-lg font-semibold uppercase  md:mb-5 block">
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
                <span className="text-lg font-semibold uppercase  md:mb-5 block">
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
          {/* Footer bottom */}
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between py-3 mt-14 border-t border-teal-700">
            <div className="text-white text-sm flex items-center gap-3">
              <Link href="#">Privacy Policy</Link>
              <span>-</span>
              <Link href="#">Terms & Conditions</Link>
            </div>
            <SocialFollow title="Follow us:" list={footerData} />
          </div>
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between py-3 mt-3 border-t border-teal-700">
            <span className="text-sm text-white">
              @2024 ShopMaze. All rights reserved.
            </span>
            <span className="text-white text-sm">
              Website Designed by{" "}
              <span className="text-orange-600 font-medium">
                codecalm@support.com
              </span>
            </span>
          </div>
        </MaxWidthWrapper>
      </div>
    </footer>
  );
};
