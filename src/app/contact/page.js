import { Phone, Mail, MapPin, MessageCircle, Store, ShieldCheck } from "lucide-react";
import Breadcrumb from "@/components/common/Breadcrumb";
import EnquiryForm from "@/components/common/EnquiryForm";
import Button from "@/components/common/Button";
import { siteConfig } from "@/config/siteConfig";
import { constructMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = constructMetadata({
  title: "Contact & Store Registration | Local Bharat",
  description: "Connect with Local Bharat. Submit a customer project requirement or list your local shop, workshop, or service business across Jaipur, Mansarovar, and Tier 2/3 India.",
  canonicalUrl: "/contact",
});

export default function ContactPage({ searchParams }) {
  const initialInterest = searchParams?.interest || "Customer Requirement & Quote";
  const whatsappUrl = getWhatsAppUrl(
    initialInterest
      ? `Hello Local Bharat, I would like to enquire regarding: ${initialInterest}.`
      : undefined
  );

  return (
    <div className="pt-6 pb-16 bg-[#F3E9DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ name: "Contact & Store Registration", item: "/contact" }]} />

        {/* Page Heading */}
        <div className="py-6 sm:py-8 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF6EE] text-[#B5532F] border border-[#E4D3BD] text-[11px] font-semibold mb-2.5">
            <span>✦</span>
            <span>Direct Support &amp; Onboarding Hub</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2E1A12] tracking-tight">
            Connect With Local Bharat
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-[#7B5C4B] font-normal leading-relaxed">
            Whether you want to list your local store, compare custom project quotations, or speak with our Jaipur concierge team.
          </p>
        </div>

        {/* Main Grid: Details on Left, Enquiry Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mt-4">
          
          {/* Contact Details & Fast Channels (Spans 4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#FBF6EE] p-5 sm:p-6 rounded-2xl border border-[#E4D3BD] shadow-parchment-soft space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#B5532F] text-white flex items-center justify-center font-bold text-sm">
                  LB
                </div>
                <div>
                  <h2 className="font-serif text-base font-semibold text-[#2E1A12]">
                    Local Bharat Helpdesk
                  </h2>
                  <span className="text-[10px] text-[#7B5C4B]">Tier 2 &amp; Tier 3 Operations</span>
                </div>
              </div>

              <p className="text-xs text-[#7B5C4B] leading-relaxed font-light">
                We support local store onboarding, catalogue photo uploads, custom requirement verification, and quotation coordination.
              </p>

              <div className="space-y-3 pt-2 border-t border-[#E4D3BD]">
                {/* Phone */}
                <a
                  href={`tel:${siteConfig.phoneNumberRaw}`}
                  className="flex items-start gap-3 text-xs text-[#2E1A12] group hover:text-[#B5532F] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F3E9DC] border border-[#E4D3BD] flex items-center justify-center text-[#B5532F] flex-shrink-0 group-hover:bg-[#B5532F] group-hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-semibold text-[#7B5C4B]">Helpline</span>
                    <span className="font-semibold text-xs sm:text-sm text-[#2E1A12]">{siteConfig.phoneNumber}</span>
                    <span className="block text-[11px] text-[#7B5C4B] font-light">Mon to Sat &bull; 9 AM – 7 PM</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-xs text-[#2E1A12] group hover:text-[#25D366] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] flex-shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-semibold text-[#7B5C4B]">Instant WhatsApp</span>
                    <span className="font-semibold text-xs text-[#25D366]">Chat with Concierge</span>
                    <span className="block text-[11px] text-[#7B5C4B] font-light">Share photos &amp; dimensions directly</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-xs text-[#2E1A12] group hover:text-[#B5532F] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F3E9DC] border border-[#E4D3BD] flex items-center justify-center text-[#B5532F] flex-shrink-0 group-hover:bg-[#B5532F] group-hover:text-white transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-semibold text-[#7B5C4B]">Direct Email</span>
                    <span className="font-semibold text-xs text-[#2E1A12] break-all">{siteConfig.email}</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3 text-xs text-[#2E1A12]">
                  <div className="w-8 h-8 rounded-lg bg-[#F3E9DC] border border-[#E4D3BD] flex items-center justify-center text-[#B5532F] flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-[#B5532F]" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-semibold text-[#7B5C4B]">Operating Location</span>
                    <span className="font-semibold text-xs text-[#2E1A12]">{siteConfig.locality}, {siteConfig.city}</span>
                    <span className="block text-[11px] text-[#7B5C4B] font-light">{siteConfig.state}, {siteConfig.country}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FBF6EE] border border-[#E4D3BD] text-xs text-[#2E1A12] space-y-1">
              <span className="font-semibold text-[#B5532F] block text-[11px]">
                Vendor Onboarding Guarantee:
              </span>
              <p className="text-[11px] text-[#7B5C4B] leading-relaxed font-light">
                Joining Local Bharat as a vendor is 100% free with zero upfront charges. We help you create your digital catalogue and connect with real local customers.
              </p>
            </div>
          </div>

          {/* Enquiry / Store Registration Form (Spans 8 cols on lg) */}
          <div className="lg:col-span-8">
            <EnquiryForm defaultInterest={initialInterest} />
          </div>

        </div>

      </div>
    </div>
  );
}
