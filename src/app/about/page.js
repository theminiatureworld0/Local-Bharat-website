import Image from "next/image";
import Link from "next/link";
import { Check, ShieldCheck, Store, Layers, Users, TrendingUp, Sparkles, MessageCircle } from "lucide-react";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/siteConfig";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = constructMetadata({
  title: "About Local Bharat | Discover Local. Grow Local.",
  description: "Learn about Local Bharat's mission to build a trusted digital business and commerce network for local businesses across Tier 2 and Tier 3 India.",
  canonicalUrl: "/about",
});

export default function AboutPage() {
  const whatsappUrl = getWhatsAppUrl(
    `Hello Local Bharat, I would like to learn more about the platform and vendor onboarding.`
  );

  return (
    <div className="pt-6 pb-16 bg-[#F3E9DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ name: "About Us", item: "/about" }]} />

        {/* Section 1: Hero Banner */}
        <div className="relative my-4 rounded-3xl overflow-hidden shadow-parchment-card border border-[#E4D3BD] bg-[#2E1A12] text-white">
          <div className="relative aspect-[21/9] sm:aspect-[24/8] min-h-[220px] w-full">
            <Image
              src="/images/about/about-hero.webp"
              alt="Local Indian business workshop and craftsmanship"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A12] via-[#2E1A12]/50 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B5532F] text-white text-[10px] font-semibold w-fit mb-2">
                <span>✦</span>
                <span>The Local Bharat Vision</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                Empowering India’s Local Businesses &amp; Communities
              </h1>
              <p className="mt-1.5 text-xs sm:text-sm text-[#E4D3BD] font-light leading-relaxed max-w-xl">
                A dedicated digital operating and commerce platform designed specifically for Tier-2 and Tier-3 cities in India.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: The Core Problem & Our Solution */}
        <div className="py-10 sm:py-12 border-b border-[#E4D3BD]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF6EE] text-[#B5532F] border border-[#E4D3BD] text-[11px] font-semibold">
                <span>✦</span>
                <span>Why Local Bharat Exists</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2E1A12] leading-snug">
                Moving Beyond Generic Directories to Measurable Business Growth
              </h2>
              <div className="text-xs sm:text-sm text-[#7B5C4B] leading-relaxed space-y-3 font-normal">
                <p>
                  Local businesses in India are skilled, resourceful, and deeply trusted within their immediate neighbourhoods. However, they depend almost entirely on walk-in traffic and word-of-mouth. They lack affordable digital storefronts, struggle to receive customer enquiries from outside their locality, and cannot easily manage quotations and follow-ups.
                </p>
                <p>
                  Meanwhile, customers looking for reliable contractors, custom fabricators, printers, or artisans must call multiple random shops, face scattered pricing, and often abandon custom projects out of frustration.
                </p>
                <p>
                  Local Bharat solves both sides. We give businesses professional digital growth tools and give customers structured quotation comparison, doorstep bookings, and genuine local discovery.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-[#E4D3BD] shadow-parchment-soft bg-[#2E1A12]">
                <Image
                  src="/images/about/craftsmanship-process.webp"
                  alt="Verified local workshop technician in India"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: The Five Business Pillars */}
        <div className="py-10 sm:py-12 border-b border-[#E4D3BD]">
          <SectionHeading
            eyebrow="Architectural Blueprint"
            title="The Five Pillars of Local Bharat"
            description="Our platform is engineered as a unified ecosystem where discovery, lead management, structured quotations, and local commerce reinforce one another."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
            <div className="bg-[#FBF6EE] p-5 rounded-2xl border border-[#E4D3BD] shadow-parchment-soft">
              <div className="w-10 h-10 mb-3.5 rounded-xl bg-[#F3E9DC] border border-[#E4D3BD] flex items-center justify-center text-[#B5532F]">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-semibold text-[#2E1A12] mb-1.5">1. Local Discovery</h3>
              <p className="text-xs text-[#7B5C4B] leading-relaxed font-light">
                Discover nearby verified shops, service specialists, manufacturers, and artisans by locality, PIN code, and real category offerings.
              </p>
            </div>

            <div className="bg-[#FBF6EE] p-5 rounded-2xl border border-[#E4D3BD] shadow-parchment-soft">
              <div className="w-10 h-10 mb-3.5 rounded-xl bg-[#F3E9DC] border border-[#E4D3BD] flex items-center justify-center text-[#B5532F]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-semibold text-[#2E1A12] mb-1.5">2. Vendor Growth Centre</h3>
              <p className="text-xs text-[#7B5C4B] leading-relaxed font-light">
                Free storefronts plus affordable productivity tools: lead tracking, customer follow-up reminders, promotional templates, and PDF quotation builders.
              </p>
            </div>

            <div className="bg-[#FBF6EE] p-5 rounded-2xl border border-[#E4D3BD] shadow-parchment-soft">
              <div className="w-10 h-10 mb-3.5 rounded-xl bg-[#F3E9DC] border border-[#E4D3BD] flex items-center justify-center text-[#B5532F]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-semibold text-[#2E1A12] mb-1.5">3. Custom Quotations</h3>
              <p className="text-xs text-[#7B5C4B] leading-relaxed font-light">
                Submit specific project dimensions or sketches. Receive and compare structured proposals from 3-4 vetted local businesses with matching machinery.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Contact CTA */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#2E1A12] text-[#F3E9DC] text-center border border-[#42281E] shadow-lg">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] font-semibold text-[#D8A97C] mb-2.5">
            <span>✦</span>
            <span>Join the Movement</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-white font-semibold max-w-xl mx-auto">
            Ready to Discover or Grow with Local Bharat?
          </h3>
          <p className="mt-2 text-xs text-[#E4D3BD] max-w-lg mx-auto leading-relaxed font-light">
            Whether you are a customer with a home project or a local business wanting to list your store, our team is right here in Mansarovar, Jaipur to support you.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="primary" size="md">
              List Your Store 🚀
            </Button>
            <Button
              href={whatsappUrl}
              variant="whatsapp"
              size="md"
              icon={MessageCircle}
            >
              Consult via WhatsApp
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
