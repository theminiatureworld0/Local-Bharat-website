import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import Breadcrumb from "@/components/common/Breadcrumb";
import { getAllCategories } from "@/lib/categories";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "All Local Business Categories | Local Bharat",
  description: "Browse verified local categories: Home Improvement & Custom Work, Printing & Packaging, Local Manufacturing, Traditional Stonework, Doorstep Services, and B2B Supplies.",
  canonicalUrl: "/collections",
});

export default function CollectionsPage() {
  const categoriesList = getAllCategories();

  return (
    <div className="pt-6 pb-16 bg-[#F3E9DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ name: "Categories", item: "/collections" }]} />

        {/* Page Heading */}
        <div className="py-6 sm:py-8 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF6EE] text-[#B5532F] border border-[#E4D3BD] text-[11px] font-semibold mb-2.5">
            <span>✦</span>
            <span>Marketplace Directory</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2E1A12] tracking-tight">
            Local Business Categories
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-[#7B5C4B] font-normal leading-relaxed">
            Discover verified shops, manufacturing workshops, master artisans, and doorstep technicians in your city. Select a category to explore listings or request custom quotations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-4">
          {categoriesList.map((cat, idx) => (
            <article
              key={cat.slug}
              className="group flex flex-col bg-[#FBF6EE] rounded-2xl border border-[#E4D3BD] overflow-hidden shadow-parchment-soft hover:shadow-parchment-card hover:border-[#B5532F]/60 transition-all duration-300"
            >
              {/* Image */}
              <Link
                href={`/collections/${cat.slug}`}
                className="relative aspect-[16/10] w-full overflow-hidden bg-[#2E1A12] block"
                tabIndex={-1}
                aria-hidden="true"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A12]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                <span className="absolute top-2.5 right-2.5 text-[10px] font-semibold text-[#2E1A12] bg-[#FBF6EE]/95 px-2.5 py-0.5 rounded shadow-2xs">
                  {cat.productCount} {cat.productCount === 1 ? "Offering" : "Offerings"}
                </span>

                <span className="absolute bottom-2.5 left-2.5 text-[10px] font-medium text-white bg-[#B5532F] px-2 py-0.5 rounded">
                  Category 0{idx + 1}
                </span>
              </Link>

              {/* Information */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h2 className="font-serif text-base sm:text-lg font-semibold text-[#2E1A12] group-hover:text-[#B5532F] transition-colors leading-snug">
                    <Link href={`/collections/${cat.slug}`}>
                      {cat.name}
                    </Link>
                  </h2>
                  <p className="mt-1 text-xs text-[#7B5C4B] line-clamp-3 leading-relaxed font-light">
                    {cat.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E4D3BD] flex items-center justify-between text-xs">
                  <Link
                    href={`/collections/${cat.slug}`}
                    className="inline-flex items-center text-xs font-semibold text-[#B5532F] group-hover:text-[#D9743F] transition-colors gap-1.5 py-1"
                  >
                    <span>Explore Listings</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-[10px] text-[#7B5C4B] bg-[#F3E9DC] px-2.5 py-0.5 rounded-full border border-[#E4D3BD] font-medium">
                    Verified Vendors
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
