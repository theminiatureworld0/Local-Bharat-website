import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { categories } from "@/data/categories";

export default function Collections() {
  return (
    <section className="py-12 sm:py-16 bg-[#F3E9DC]/80 border-b border-[#E4D3BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Marketplace Categories"
          title="Explore Local Business Categories"
          description="Discover vetted specialists and manufacturers in your city. Compare structured quotations, view genuine workshops, and connect directly with local masters."
          align="center"
        />

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {categories.map((cat, index) => (
            <article
              key={cat.slug}
              className="group flex flex-col bg-[#FBF6EE] rounded-2xl border border-[#E4D3BD] overflow-hidden shadow-parchment-soft hover:shadow-parchment-card hover:border-[#B5532F]/60 transition-all duration-300"
            >
              {/* Category Image */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A12]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Index & Badge */}
                <span className="absolute top-3 left-3 text-[10px] font-mono font-bold text-[#2E1A12] bg-[#FBF6EE]/95 px-2 py-0.5 rounded shadow-xs">
                  0{index + 1}
                </span>

                <span className="absolute bottom-3 left-3 text-[10px] font-medium text-white bg-[#B5532F]/90 backdrop-blur-2xs px-2.5 py-0.5 rounded-md">
                  Verified Local Vendors
                </span>
              </Link>

              {/* Card Information */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-[#2E1A12] group-hover:text-[#B5532F] transition-colors leading-snug">
                    <Link href={`/collections/${cat.slug}`}>
                      {cat.name}
                    </Link>
                  </h3>
                  <p className="mt-1.5 text-xs text-[#7B5C4B] line-clamp-2 leading-relaxed font-light">
                    {cat.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E4D3BD] flex items-center justify-between text-xs">
                  <Link
                    href={`/collections/${cat.slug}`}
                    className="inline-flex items-center text-xs font-semibold text-[#B5532F] group-hover:text-[#D9743F] transition-colors gap-1.5 py-1"
                  >
                    <span>Browse Listings &amp; Quotes</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[11px] text-[#7B5C4B]">
                    Direct Enquiries
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-10 p-5 rounded-2xl bg-[#FBF6EE] border border-[#E4D3BD] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-serif text-base font-semibold text-[#2E1A12]">
              Are you a local shop owner, artisan, or service technician?
            </h4>
            <p className="text-xs text-[#7B5C4B] mt-0.5">
              List your store on Local Bharat today for free and receive direct customer enquiries in your locality.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 px-4 py-2.5 rounded-lg bg-[#B5532F] hover:bg-[#D9743F] text-white text-xs font-semibold shadow-sm transition-all"
          >
            List Your Store (Join 🚀)
          </Link>
        </div>

      </div>
    </section>
  );
}
