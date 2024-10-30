import { MaxWidthWrapper } from "@/components/hoc";
import { CategoryCard } from "@/components/widgets";
import { categoryCards } from "@/seeds/categoryCards";
import React from "react";

const SectionTopCategories = () => {
  return (
    <section>
      <MaxWidthWrapper className="pb-3 border-b">
        <h3 className="text-2xl font-medium text-gray-700">
          Shop From Top{" "}
          <span className="underline text-teal-700">Categories</span>
        </h3>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="flex items-center gap-16 overflow-x-auto py-12 border-b">
        {categoryCards.map(({ id, name, href, image }) => (
          <CategoryCard key={id} name={name} href={href} image={image} />
        ))}
      </MaxWidthWrapper>
    </section>
  );
};

export default SectionTopCategories;
