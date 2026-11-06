import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "@/components/common/Button";

export default function AboutPreview() {
  return (
    <section className="py-12 sm:py-16 bg-[#F3E9DC] border-b border-[#E4D3BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Content (Spans 7 cols on lg) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF6EE] text-[#B5532F] border border-[#E4D3BD] text-[11px] font-semibold">
              <span>✦</span>
              <span>Our Vision for Bharat</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2E1A12] leading-snug">
              Building a Trusted Digital Business Network for Local India
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-[#7B5C4B] leading-relaxed font-normal">
              <p>
                Local Bharat is not just another phone directory. We believe that small shops, skilled artisans, custom fabricators, and trade specialists are the real backbone of India’s economy. Yet existing platforms either flood them with low-quality spam or demand heavy commissions on every sale.
              </p>
              <p>
                We built Local Bharat to give every genuine local business a professional digital storefront, easy lead management, and structured quotation tools. Customers can compare authentic offerings, inspect verified workshops, and hire local specialists with total clarity.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Button href="/about" variant="primary" size="md">
                Read Our Story &amp; Blueprint
              </Button>

              <Button href="/contact" variant="secondary" size="md" icon={ArrowRight}>
                List Your Business (Free)
              </Button>
            </div>
          </div>

          {/* Photograph (Spans 5 cols on lg) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#E4D3BD] shadow-parchment-card group bg-[#2E1A12]">
              <Image
                src="/images/about/about-hero.webp"
                alt="Local workshop artisan in Jaipur India"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A12]/80 via-transparent to-transparent opacity-70" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#FBF6EE]/95 backdrop-blur-md border border-[#E4D3BD]">
                <p className="font-serif text-sm font-semibold text-[#2E1A12]">Discover Local. Grow Local.</p>
                <p className="text-[#7B5C4B] text-[11px] mt-0.5 font-light">Jaipur &bull; Pune &bull; Nashik &bull; Tier 2 &amp; Tier 3 India</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
