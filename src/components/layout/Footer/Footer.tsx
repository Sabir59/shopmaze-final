import { MaxWidthWrapper } from "@/components/hoc";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-teal-900 py-12 text-white">
      <MaxWidthWrapper className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
        <ul className="flex flex-col gap-3">
          <li>
            <span className="font-medium mb-5 block text-gray-200">
              Shop<span>Maze</span>
            </span>
          </li>
          <li>
            <span className="font-medium mb-5 block text-gray-200">
              Contact us
            </span>
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li>
            <span className="font-medium mb-5 block text-gray-200">
              Programming Languages
            </span>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              JavaScript
            </Link>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Python
            </Link>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Java
            </Link>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              C++
            </Link>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Ruby
            </Link>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Swift
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li>
            <span className="font-medium mb-5 block text-gray-200">
              Business & Finance
            </span>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Entrepreneurship
            </Link>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Project Management
            </Link>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Finance Basics
            </Link>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Investing
            </Link>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Sales Techniques
            </Link>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Business Strategy
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li>
            <span className="font-medium mb-5 block text-gray-200">
              Health & Wellness
            </span>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Nutrition
            </Link>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Yoga & Meditation
            </Link>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Mental Health
            </Link>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Fitness
            </Link>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Stress Management
            </Link>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Sleep Science
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li>
            <span className="font-medium mb-5 block text-gray-200">
              Creative Arts
            </span>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Photography
            </Link>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Drawing & Painting
            </Link>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Music Production
            </Link>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Film Making
            </Link>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Writing Skills
            </Link>
          </li>
          <li>
            <Link href="#" className="font-light text-sm text-gray-300">
              Public Speaking
            </Link>
          </li>
        </ul>
      </MaxWidthWrapper>
    </footer>
  );
};
