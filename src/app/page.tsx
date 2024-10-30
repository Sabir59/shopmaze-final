import {
  Footer,
  MegaMenu,
  Navbar,
  NavbarMobile,
  Sidebar,
} from "@/components/layout";
import SectionTopCategories from "./__sections/topCategories";
import { megaMenuHome } from "@/seeds/megaMenuHome";
import { productCardSeeds } from "@/seeds/productCard";
import { MaxWidthWrapper } from "@/components/hoc";
import { ProductCard } from "@/components/widgets";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section>
        {/* Top  */}
        <section>
          <Navbar />
          <NavbarMobile />
          <MegaMenu data={megaMenuHome} />
        </section>
        {/* Main */}
        <div className="flex flex-col gap-8 lg:gap-16 py-6 lg:py-12">
          <section className="flex flex-col gap-12">
            <SectionTopCategories />
          </section>
          <section>
            <MaxWidthWrapper>
              <div className="flex flex-col justify-end gap-4">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                  {productCardSeeds.map(
                    (
                      {
                        name,
                        description,
                        reviews,
                        price,
                        link,
                        image,
                        affiliateLinks,
                      },
                      index
                    ) => (
                      <ProductCard
                        key={index}
                        name={name}
                        description={description}
                        price={price}
                        link={link}
                        image={image}
                        affiliateLinks={affiliateLinks}
                        reviews={reviews}
                      />
                    )
                  )}
                </div>
              </div>
            </MaxWidthWrapper>
          </section>
        </div>
      </section>

      <section className="mt-auto">
        <Footer />
      </section>
    </main>
  );
}
