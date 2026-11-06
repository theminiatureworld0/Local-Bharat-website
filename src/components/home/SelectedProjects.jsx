import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import { getFeaturedProjects } from "@/lib/projects";

export default function SelectedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="py-12 sm:py-16 bg-[#F3E9DC] border-b border-[#E4D3BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <SectionHeading
            eyebrow="Real Local Matches"
            title="Custom Project Case Studies"
            description="Witness real requirements fulfilled on Local Bharat—from boundary wall fabrications and D2C packaging runs to handcrafted stone temples."
            align="left"
            className="mb-0"
          />

          <div className="hidden md:block flex-shrink-0">
            <Button href="/projects" variant="secondary" size="md" icon={ArrowRight}>
              Explore All Case Studies
            </Button>
          </div>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((proj) => (
            <article
              key={proj.id}
              className="group flex flex-col bg-[#FBF6EE] rounded-2xl border border-[#E4D3BD] overflow-hidden shadow-parchment-soft hover:shadow-parchment-card hover:border-[#B5532F]/60 transition-all duration-300"
            >
              {/* Project Image */}
              <Link
                href="/projects"
                className="relative aspect-[16/10] w-full overflow-hidden bg-[#2E1A12] block"
                tabIndex={-1}
                aria-hidden="true"
              >
                <Image
                  src={proj.images[0]}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A12]/80 via-transparent to-transparent opacity-65 group-hover:opacity-40 transition-opacity" />

                {proj.location && (
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#2E1A12]/85 text-[#F3E9DC] text-[11px] font-medium shadow-2xs backdrop-blur-md">
                    <MapPin className="w-3 h-3 text-[#B5532F]" />
                    {proj.location}
                  </span>
                )}

                {proj.budget && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#5E7F6E] text-white text-[10px] font-bold shadow-xs">
                    Budget: {proj.budget}
                  </span>
                )}
              </Link>

              {/* Project Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] uppercase tracking-wider text-[#B5532F] font-semibold">
                      {proj.category}
                    </span>
                    {proj.quotesReceived && (
                      <span className="text-[10px] font-medium text-[#7B5C4B] bg-[#F3E9DC] px-2 py-0.5 rounded">
                        {proj.quotesReceived} Quotes Compared
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-semibold text-[#2E1A12] group-hover:text-[#B5532F] transition-colors leading-snug">
                    <Link href="/projects">
                      {proj.title}
                    </Link>
                  </h3>

                  <p className="mt-1.5 text-xs text-[#7B5C4B] line-clamp-2 leading-relaxed font-light">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E4D3BD] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-[11px] text-[#7B5C4B]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#5E7F6E]" />
                    <span>Vendor: <strong className="text-[#2E1A12]">{proj.awardedVendor}</strong></span>
                  </div>

                  <Link
                    href="/projects"
                    className="inline-flex items-center text-[11px] uppercase tracking-wider font-semibold text-[#B5532F] hover:text-[#D9743F] transition-colors gap-1"
                  >
                    <span>Read Case</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-8 text-center md:hidden">
          <Button href="/projects" variant="secondary" size="md" className="w-full sm:w-auto" icon={ArrowRight}>
            Explore All Case Studies
          </Button>
        </div>

      </div>
    </section>
  );
}
