import Image from "next/image";
import SectionHeading from "@/components/common/SectionHeading";

const pillars = [
  {
    step: "01",
    title: "Local Discovery Marketplace",
    description: "Browse verified local shops, workshops, artisans, and service providers in your city, district, and locality without misleading ads or middleman markups.",
    image: "/images/about/material-selection.webp",
  },
  {
    step: "02",
    title: "Local Business Growth Centre",
    description: "Empowering local vendors with digital storefronts, lead management, professional quotation generators, and customer follow-up tools.",
    image: "/images/about/about-hero.webp",
  },
  {
    step: "03",
    title: "Custom Requirements & Quotes",
    description: "Submit specific project dimensions, budgets, and photos. Receive itemised material and labour quotes from 3-4 vetted local specialists.",
    image: "/images/about/craftsmanship-process.webp",
  },
  {
    step: "04",
    title: "Direct Commerce & Trust",
    description: "Coordinate doorstep visits, local deliveries, milestone-based reviews, and build repeat direct relationships with verified Indian businesses.",
    image: "/images/about/finishing.webp",
  },
];

export default function Craftsmanship() {
  return (
    <section className="py-12 sm:py-16 bg-[#2E1A12] text-[#F3E9DC] relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="The Platform Foundation"
          title="The Four Operating Pillars of Local Bharat"
          description="Designed from the ground up for India's Tier 2 and Tier 3 cities—making local businesses easier to discover and easier to do business with."
          align="center"
          dark={true}
        />

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-8">
          {pillars.map((item) => (
            <div
              key={item.step}
              className="flex flex-col bg-[#3A2218] border border-[#533427] rounded-2xl overflow-hidden group hover:border-[#B5532F] transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A12] via-transparent to-transparent opacity-85" />
                
                {/* Step badge */}
                <span className="absolute top-3 left-3 text-[10px] font-mono font-bold text-white bg-[#B5532F] px-2.5 py-0.5 rounded shadow-sm">
                  Pillar {item.step}
                </span>
              </div>

              {/* Text */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-start">
                <h3 className="font-serif text-sm sm:text-base text-white font-semibold mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#E4D3BD] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
