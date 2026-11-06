import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import EnquiryForm from "@/components/common/EnquiryForm";
import { siteConfig } from "@/config/siteConfig";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function ContactSection() {
  const whatsappUrl = getWhatsAppUrl(
    "Hello Local Bharat! I would like to enquire about listing my business or submitting a custom quotation requirement."
  );

  return (
    <section id="contact-enquiry" className="py-12 sm:py-16 bg-[#F3E9DC] border-t border-[#E4D3BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Connect with Local Bharat"
          title="Submit a Requirement or List Your Store"
          description="Whether you are a customer looking for verified local specialists or a business owner wanting to expand your reach in Tier 2 and Tier 3 India."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Direct Support Details & Benefits (Spans 4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4 order-2 lg:order-1">
            <div className="bg-[#FBF6EE] p-5 sm:p-6 rounded-2xl border border-[#E4D3BD] shadow-parchment-soft space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#B5532F] text-white flex items-center justify-center font-bold text-sm">
                  LB
                </span>
                <div>
                  <h3 className="font-serif text-base font-semibold text-[#2E1A12]">
                    Local Bharat Support Hub
                  </h3>
                  <span className="text-[10px] text-[#7B5C4B]">Fast response within 2 hours</span>
                </div>
              </div>

              <p className="text-xs text-[#7B5C4B] leading-relaxed font-light">
                Our local team assists both businesses with storefront setup and customers with requirement scoping and quotation comparisons.
              </p>

              <div className="space-y-3 pt-2 border-t border-[#E4D3BD]">
                <a
                  href={`tel:${siteConfig.phoneNumberRaw}`}
                  className="flex items-start gap-3 group text-xs text-[#2E1A12] hover:text-[#B5532F] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F3E9DC] border border-[#E4D3BD] flex items-center justify-center text-[#B5532F] flex-shrink-0 group-hover:bg-[#B5532F] group-hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-semibold text-[#7B5C4B]">Direct Helpline</span>
                    <span className="font-semibold text-xs sm:text-sm text-[#2E1A12]">{siteConfig.phoneNumber}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 group text-xs text-[#2E1A12] hover:text-[#B5532F] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F3E9DC] border border-[#E4D3BD] flex items-center justify-center text-[#B5532F] flex-shrink-0 group-hover:bg-[#B5532F] group-hover:text-white transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-semibold text-[#7B5C4B]">Direct Email</span>
                    <span className="font-semibold text-xs text-[#2E1A12] break-all">{siteConfig.email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-xs text-[#2E1A12]">
                  <div className="w-8 h-8 rounded-lg bg-[#F3E9DC] border border-[#E4D3BD] flex items-center justify-center text-[#B5532F] flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-[#B5532F]" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-semibold text-[#7B5C4B]">Operating Hub</span>
                    <span className="font-semibold text-xs text-[#2E1A12]">{siteConfig.locality}, {siteConfig.city} ({siteConfig.state})</span>
                    <p className="text-[11px] text-[#7B5C4B] mt-0.5 font-light">Supporting Rajasthan, Maharashtra &amp; Tier 2/3 India</p>
                  </div>
                </div>
              </div>

              {/* Fast WhatsApp Box */}
              <div className="p-3.5 rounded-xl bg-[#F3E9DC] border border-[#E4D3BD] space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2E1A12]">
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Instant WhatsApp Helpdesk</span>
                </div>
                <p className="text-[11px] text-[#7B5C4B] leading-relaxed">
                  Send sketches, blueprints, photos, or shop details directly via WhatsApp for quick assistance.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-3 py-2 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  Chat with Local Bharat Concierge
                </a>
              </div>

              {/* Trust Badges */}
              <div className="p-3 rounded-xl bg-[#FBF6EE] border border-[#E4D3BD] space-y-1.5 text-[11px] text-[#7B5C4B]">
                <div className="flex items-center gap-1.5 text-[#5E7F6E] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Zero Spam • Privacy Protected</span>
                </div>
                <p>We respect customer consent and do not sell phone numbers to cold callers.</p>
              </div>

            </div>
          </div>

          {/* Form (Spans 8 cols on lg) */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <EnquiryForm />
          </div>

        </div>

      </div>
    </section>
  );
}
