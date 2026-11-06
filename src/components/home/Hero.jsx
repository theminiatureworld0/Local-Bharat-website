"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Search, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import Button from "@/components/common/Button";
import { siteConfig } from "@/config/siteConfig";

const slides = [
  {
    image: "/images/products/home-temple-mandir-01.webp",
    title: "Handcrafted Sandstone Mandirs & Cultural Stonework",
    subtitle: "Direct from Traditional Artisans • Custom Dimensions & Shikhara",
    category: "Architectural & Stone Craft",
    link: "/collections/architectural-and-stone-craft",
  },
  {
    image: "/images/products/archway-01.webp",
    title: "Custom House Gates, Fabrication & Compound Walls",
    subtitle: "Heavy-Duty Wrought Iron & Masonry • Verified Local Contractors",
    category: "Home Improvement & Custom Work",
    link: "/collections/home-improvement-and-custom-work",
  },
  {
    image: "/images/products/lotus-panel-01.webp",
    title: "Commercial Printing, Signboards & Packaging Boxes",
    subtitle: "Low MOQ Corrugated Cartons & 3D LED Signages • Factory Direct",
    category: "Printing & Business Supplies",
    link: "/collections/printing-and-business-supplies",
  },
  {
    image: "/images/products/fluted-pillar-01.webp",
    title: "Architectural Columns, Turned Pillars & Woodcraft",
    subtitle: "Bespoke Porticos & Teak Dining Suites • Generational Craftsmen",
    category: "Local Manufacturing & Artisans",
    link: "/collections/local-manufacturing-and-artisans",
  },
  {
    image: "/images/products/compact-pooja-mandir-01.webp",
    title: "5kW Rooftop Solar Systems & Clean Energy",
    subtitle: "Turnkey EPC Installation • DISCOM Net-Metering & Central Subsidy",
    category: "B2B Supplies & Wholesale",
    link: "/collections/b2b-supplies-and-wholesale",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, current]);

  return (
    <section className="relative bg-[#F3E9DC] py-8 sm:py-12 border-b border-[#E4D3BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Column: Editorial Text & Search (Spans 6 cols on lg) */}
          <div className="text-center lg:text-left lg:col-span-6 space-y-4">
            
            {/* Small Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF6EE] text-[#B5532F] border border-[#E4D3BD] text-[11px] font-medium shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#B5532F]" />
              <span>Discover Local &bull; Grow Local &bull; Tier 2 &amp; Tier 3 India</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-[#2E1A12] leading-tight">
              Discover Local Businesses. <br className="hidden sm:block" />
              <span className="text-[#B5532F]">Compare Quotes. Grow Local.</span>
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#7B5C4B] font-normal leading-relaxed max-w-lg mx-auto lg:mx-0">
              Find verified local workshops, skilled service providers, manufacturers, and artisans in your city. Post custom project requirements or list your store to receive genuine direct customer enquiries.
            </p>

            {/* Interactive Search Bar */}
            <div className="pt-2 max-w-lg mx-auto lg:mx-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (searchQuery.trim()) {
                    window.location.href = `/collections?q=${encodeURIComponent(searchQuery)}`;
                  }
                }}
                className="flex items-center rounded-xl bg-[#FBF6EE] border border-[#E4D3BD] shadow-parchment-soft p-1.5 focus-within:ring-2 focus-within:ring-[#B5532F] transition-all"
              >
                <div className="flex items-center pl-3 pr-2 text-[#7B5C4B]">
                  <Search className="w-4 h-4 text-[#B5532F]" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search furniture, packaging, fabrication, solar in Jaipur..."
                  className="w-full bg-transparent text-xs text-[#2E1A12] placeholder-[#7B5C4B]/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 px-4 py-2 rounded-lg bg-[#B5532F] hover:bg-[#D9743F] text-white text-xs font-medium transition-colors cursor-pointer"
                >
                  Search
                </button>
              </form>
              <div className="flex items-center gap-2 mt-2 text-[11px] text-[#7B5C4B] justify-center lg:justify-start">
                <span className="font-medium text-[#2E1A12]">Popular:</span>
                <Link href="/collections/home-improvement-and-custom-work" className="hover:text-[#B5532F] underline decoration-dotted">Compound Wall</Link>
                <span>&bull;</span>
                <Link href="/collections/printing-and-business-supplies" className="hover:text-[#B5532F] underline decoration-dotted">Packaging Boxes</Link>
                <span>&bull;</span>
                <Link href="/collections/architectural-and-stone-craft" className="hover:text-[#B5532F] underline decoration-dotted">Stone Mandir</Link>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5">
              <Button
                href="/collections"
                variant="primary"
                size="md"
                icon={ArrowRight}
              >
                Explore All Stores
              </Button>

              <Button
                href="/projects"
                variant="secondary"
                size="md"
              >
                Post Custom Requirement
              </Button>

              <Button
                href="/contact"
                variant="outline"
                size="md"
              >
                List Your Store 🚀
              </Button>
            </div>

            {/* Trust Metrics Pill */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#E4D3BD]/70 text-left">
              <div>
                <span className="block text-base sm:text-lg font-bold text-[#B5532F]">500+</span>
                <span className="text-[11px] text-[#7B5C4B]">Verified Businesses</span>
              </div>
              <div>
                <span className="block text-base sm:text-lg font-bold text-[#2E1A12]">3,500+</span>
                <span className="text-[11px] text-[#7B5C4B]">Quotations Matched</span>
              </div>
              <div>
                <span className="block text-base sm:text-lg font-bold text-[#5E7F6E]">₹0 Fee</span>
                <span className="text-[11px] text-[#7B5C4B]">To Explore &amp; Enquire</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Carousel (Spans 6 cols on lg) */}
          <div
            className="lg:col-span-6 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-parchment-card border border-[#E4D3BD] bg-[#2E1A12]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A12]/90 via-[#2E1A12]/30 to-transparent" />

                  {/* Caption & Pill */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#FBF6EE]/95 backdrop-blur-md border border-[#E4D3BD] shadow-lg text-[#2E1A12]">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#B5532F] bg-[#F3E9DC] px-2 py-0.5 rounded">
                        {slide.category}
                      </span>
                      <span className="text-[10px] text-[#7B5C4B] font-medium flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#B5532F]" /> Mansarovar, Jaipur
                      </span>
                    </div>

                    <h3 className="font-serif text-sm sm:text-base font-semibold text-[#2E1A12] leading-snug">
                      {slide.title}
                    </h3>
                    <p className="text-[11px] text-[#7B5C4B] line-clamp-1 mt-0.5">
                      {slide.subtitle}
                    </p>

                    <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-[#E4D3BD]">
                      <Link
                        href={slide.link}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#B5532F] hover:text-[#D9743F] transition-colors"
                      >
                        <span>View Listings &amp; Get Quotes</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-[10px] font-mono text-[#7B5C4B]">
                        0{index + 1} / 0{slides.length}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Prev / Next Controls */}
              <button
                type="button"
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#FBF6EE]/80 hover:bg-[#FBF6EE] text-[#2E1A12] flex items-center justify-center border border-[#E4D3BD] shadow-sm transition-all focus:outline-none"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#FBF6EE]/80 hover:bg-[#FBF6EE] text-[#2E1A12] flex items-center justify-center border border-[#E4D3BD] shadow-sm transition-all focus:outline-none"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-1.5 mt-3">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === current ? "w-6 bg-[#B5532F]" : "w-1.5 bg-[#E4D3BD]"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
