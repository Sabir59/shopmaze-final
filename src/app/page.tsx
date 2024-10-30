import { MaxWidthWrapper } from "@/components/hoc";
import { MegaMenu, Navbar } from "@/components/layout";
import { CategoryCard } from "@/components/widgets";
import { categoryCards } from "@/seeds/categoryCards";
import SectionTopCategories from "./__sections/topCategories";

export default function Home() {
  return (
    <>
      <Navbar />
      <MegaMenu />
      <div className="py-12 flex flex-col gap-12">
        <SectionTopCategories />
      </div>
    </>
  );
}
