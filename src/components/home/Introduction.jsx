import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Store, TrendingUp, FileCheck2, ShieldCheck } from "lucide-react";
import Button from "@/components/common/Button";

export default function Introduction() {
  return (
    <section id="introduction" className="py-12 sm:py-16 bg-[#F3E9DC] border-b border-[#E4D3BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Column 1: Photograph (Spans 6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-parchment-card border border-[#E4D3BD] group bg-[#2E1A12]">
              <Image
                src="/images/about/craftsmanship-process.webp"
                alt="Local workshop craftsman executing custom project in India"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A12]/80 via-transparent to-transparent opacity-70" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#FBF6EE]/95 backdrop-blur-md border border-[#E4D3BD] flex items-center justify-between text-xs text-[#2E1A12]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#5E7F6E] animate-pulse" />
                  <span className="font-semibold text-[#2E1A12]">
                    Verified Local Workshop Network
                  </span>
                </div>
                <span className="text-[#B5532F] font-semibold">Tier 2 &amp; Tier 3 Hubs</span>
              </div>
            </div>
          </div>

          {/* Column 2: Editorial Text Content (Spans 6 cols) */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF6EE] text-[#B5532F] border border-[#E4D3BD] text-[11px] font-semibold">
                <span>✦</span>
                <span>The Local Bharat Mission</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2E1A12] leading-snug">
                Discover Local. <br />
                <span className="text-[#B5532F]">Grow Local. Transact with Trust.</span>
              </h2>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#7B5C4B] leading-relaxed font-normal">
              <p>
                In hundreds of thriving cities across India—from Jaipur and Pune to Nashik and beyond—skilled artisans, specialized manufacturers, and trusted service providers operate quiet workshops. Yet they depend heavily on walk-ins and word-of-mouth, while customers struggle to find reliable, vetted vendors.
              </p>
              <p>
                Local Bharat bridges this gap. We provide local businesses with an easy digital storefront, structured quotation workflows, and genuine customer leads—while giving customers one trusted place to discover nearby shops, compare estimates, and get custom work done with complete peace of mind.
              </p>
            </div>

            <div className="pt-2 border-t border-[#E4D3BD] grid grid-cols-2 gap-3">
              <div className="bg-[#FBF6EE] p-3.5 rounded-xl border border-[#E4D3BD]">
                <div className="flex items-center gap-2 mb-1">
                  <Store className="w-4 h-4 text-[#B5532F]" />
                  <h4 className="text-xs font-semibold text-[#2E1A12]">
                    Digital Storefronts
                  </h4>
                </div>
                <p className="text-[11px] text-[#7B5C4B] font-light">
                  Free professional online presence, catalogue, and enquiry inbox for local stores.
                </p>
              </div>

              <div className="bg-[#FBF6EE] p-3.5 rounded-xl border border-[#E4D3BD]">
                <div className="flex items-center gap-2 mb-1">
                  <FileCheck2 className="w-4 h-4 text-[#B5532F]" />
                  <h4 className="text-xs font-semibold text-[#2E1A12]">
                    Structured Quotations
                  </h4>
                </div>
                <p className="text-[11px] text-[#7B5C4B] font-light">
                  Compare itemised material &amp; labour quotes from 3-4 verified local specialists.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Button
                href="/about"
                variant="primary"
                size="sm"
                icon={ArrowRight}
              >
                Learn About Our Vision
              </Button>

              <Link
                href="/projects"
                className="text-xs font-semibold text-[#B5532F] hover:text-[#D9743F] flex items-center gap-1 transition-colors"
              >
                <span>View Recent Quotation Matches</span>
                <span>&rarr;</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
