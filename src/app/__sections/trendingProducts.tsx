import { MaxWidthWrapper } from "@/components/hoc";
import { SliderCardWidget } from "@/components/widgets";
import { images } from "@/constants/images";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { trendingProducts } from "@/seeds/trendingProducts";

const TrendingProducts = () => {
  return (
    <section>
      <MaxWidthWrapper className="pb-3 border-b">
        <h3 className="text-2xl font-medium text-gray-700">
          Trending in{" "}
          <span className="underline text-teal-700">Smartphones</span>
        </h3>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="overflow-x-hidden">
        <Carousel>
          <CarouselContent>
            {trendingProducts.map(
              ({ id, title, quote, bgColor, logo, featuredImage }) => (
                <CarouselItem
                  className="basis-1/1 md:basis-1/2 lg:basis-1/3"
                  key={title}
                >
                  <SliderCardWidget
                    key={id}
                    title={title}
                    quote={quote}
                    bgColor={bgColor}
                    logo={logo}
                    featuredImage={featuredImage}
                  />
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </MaxWidthWrapper>
    </section>
  );
};

export default TrendingProducts;
