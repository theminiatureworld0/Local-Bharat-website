import Image from "next/image";
import Link from "next/link";
import { MapPin, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, FileCheck2 } from "lucide-react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Button from "@/components/common/Button";
import { getAllProjects } from "@/lib/projects";
import { constructMetadata } from "@/lib/seo";
import { getProjectWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = constructMetadata({
  title: "Custom Project Case Studies & Quotations | Local Bharat",
  description: "Explore real custom project requirements fulfilled through Local Bharat: compound wall fabrications, D2C packaging runs, handcrafted pooja mandirs, and solar installations.",
  canonicalUrl: "/projects",
});

export default function ProjectsPage() {
  const projectsList = getAllProjects();

  return (
    <div className="pt-8 pb-20 bg-[#F3E9DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ name: "Custom Projects", item: "/projects" }]} />

        {/* Page Heading */}
        <div className="py-8 sm:py-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E4D3BD] bg-[#FBF6EE] px-3.5 py-1.5 text-xs font-semibold text-[#B5532F] mb-3 shadow-2xs">
            <span>✦</span>
            <span>Pillar 3: Quotation Engine in Action</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2E1A12] tracking-tight">
            Custom Projects &amp; Quotation Case Studies
          </h1>
          <p className="mt-3.5 text-sm sm:text-base text-[#7B5C4B] leading-relaxed">
            Witness how customers across Jaipur, Mansarovar, Pune, and regional hubs submit unique requirements, compare structured proposals from 3-4 local workshops, and complete projects with verified trust.
          </p>
        </div>

        {/* Projects Showcase */}
        <div className="space-y-12 sm:space-y-16 mt-6">
          {projectsList.map((project, index) => {
            const isReversed = index % 2 !== 0;
            const projectWhatsApp = getProjectWhatsAppUrl(`Hello Local Bharat! I would like to enquire about a project similar to "${project.title}".`);

            return (
              <article
                key={project.id}
                className="bg-[#FBF6EE] rounded-3xl border border-[#E4D3BD] overflow-hidden p-6 sm:p-8 lg:p-10 shadow-parchment-soft hover:shadow-parchment-card hover:border-[#B5532F]/50 transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Imagery (Spans 7 cols on lg) */}
                  <div className={`lg:col-span-7 space-y-4 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#2E1A12] shadow-sm group">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A12]/70 via-transparent to-transparent opacity-60" />
                      
                      {project.budget && (
                        <span className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-[#5E7F6E] text-white text-xs font-bold shadow-xs">
                          Budget: {project.budget}
                        </span>
                      )}
                    </div>

                    {project.images[1] && (
                      <div className="relative aspect-[21/9] w-full rounded-xl overflow-hidden bg-[#2E1A12]">
                        <Image
                          src={project.images[1]}
                          alt={`${project.title} Detail`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className="object-cover object-center"
                        />
                      </div>
                    )}
                  </div>

                  {/* Project Info & Case Narrative (Spans 5 cols on lg) */}
                  <div className={`lg:col-span-5 space-y-4 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs mb-2">
                        <span className="font-bold text-[#B5532F]">
                          {project.category}
                        </span>
                        {project.quotesReceived && (
                          <>
                            <span className="text-[#E4D3BD]">&bull;</span>
                            <span className="text-[#7B5C4B] font-semibold bg-[#F3E9DC] px-2 py-0.5 rounded">
                              {project.quotesReceived} Quotes Compared
                            </span>
                          </>
                        )}
                      </div>

                      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2E1A12] leading-snug">
                        {project.title}
                      </h2>

                      {project.location && (
                        <p className="mt-2 text-xs text-[#7B5C4B] flex items-center gap-1.5 font-medium">
                          <MapPin className="w-4 h-4 text-[#B5532F]" />
                          <span>{project.location}</span>
                          {project.clientType && (
                            <>
                              <span className="text-[#E4D3BD]">&bull;</span>
                              <span>{project.clientType}</span>
                            </>
                          )}
                        </p>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[#7B5C4B] leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Outcome Box */}
                    <div className="p-3.5 rounded-xl bg-[#F3E9DC] border border-[#E4D3BD] space-y-1.5 text-xs">
                      <div className="flex justify-between items-center text-[#2E1A12] font-semibold">
                        <span>Awarded Vendor:</span>
                        <span className="text-[#B5532F]">{project.awardedVendor}</span>
                      </div>
                      <div className="flex justify-between items-center text-[#7B5C4B] text-[11px]">
                        <span>Turnaround Time:</span>
                        <span>{project.turnaround || "10 Days"}</span>
                      </div>
                    </div>

                    {project.scope && (
                      <div className="p-4 rounded-xl bg-[#FBF6EE] border border-[#E4D3BD] space-y-2">
                        <h4 className="text-xs font-bold text-[#2E1A12]">
                          Scope of Work Executed:
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[#7B5C4B]">
                          {project.scope.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#5E7F6E] flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <Button
                        href={projectWhatsApp}
                        variant="whatsapp"
                        size="sm"
                        icon={MessageCircle}
                      >
                        Enquire Similar Project
                      </Button>

                      <Button
                        href={`/contact?interest=${encodeURIComponent(`Project Requirement: ${project.title}`)}`}
                        variant="primary"
                        size="sm"
                      >
                        Post Similar Requirement
                      </Button>
                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#2E1A12] text-[#F3E9DC] text-center shadow-xl border border-[#42281E]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-[#D8A97C] mb-3">
            <span>✦</span>
            <span>Post A Custom Requirement</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-white max-w-xl mx-auto">
            Have a Specific Project in Mind?
          </h3>
          <p className="mt-3.5 text-sm text-[#E4D3BD] max-w-lg mx-auto leading-relaxed font-light">
            Whether for your home, commercial office, or retail packaging. Post your requirement once on Local Bharat and receive structured proposals from vetted local businesses.
          </p>
          <div className="mt-7 flex justify-center gap-4">
            <Button href="/contact" variant="primary" size="md">
              Submit Custom Requirement Free
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
