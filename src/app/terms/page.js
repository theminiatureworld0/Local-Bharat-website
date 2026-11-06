import Breadcrumb from "@/components/common/Breadcrumb";
import { siteConfig } from "@/config/siteConfig";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Terms & Conditions | Local Bharat",
  description: "Platform terms and conditions governing discovery, structured quotations, vendor listings, and customer interactions on Local Bharat.",
  canonicalUrl: "/terms",
});

export default function TermsPage() {
  return (
    <div className="pt-6 pb-16 bg-[#F3E9DC]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ name: "Terms & Conditions", item: "/terms" }]} />

        <div className="py-6 sm:py-8">
          <span className="text-[11px] font-semibold text-[#B5532F] block mb-1">
            Platform Governance
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2E1A12]">
            Terms &amp; Conditions
          </h1>
          <p className="mt-1.5 text-xs text-[#7B5C4B] font-light">
            Version 3.0 &bull; Updated: November 2026 &bull; Local Bharat
          </p>
        </div>

        <div className="bg-[#FBF6EE] p-6 sm:p-8 rounded-3xl border border-[#E4D3BD] shadow-parchment-soft space-y-6 text-xs sm:text-sm text-[#7B5C4B] font-normal leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg text-[#2E1A12] font-semibold">
              1. Platform Nature &amp; Scope
            </h2>
            <p>
              Local Bharat is a digital business discovery, quotation matching, and commerce enablement platform. We connect consumers and business buyers with verified local workshops, independent retailers, manufacturers, and trade specialists in Tier 2 and Tier 3 cities across India.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg text-[#2E1A12] font-semibold">
              2. Custom Requirements &amp; Quotations
            </h2>
            <p>
              Quotations provided through Local Bharat represent estimates issued by individual registered vendors based on customer-submitted specifications, sketches, dimensions, and quantities.
            </p>
            <p>
              Final prices, scopes of work, and delivery timelines become binding upon direct agreement between the customer and the awarded local business.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg text-[#2E1A12] font-semibold">
              3. Vendor Verification &amp; Standards
            </h2>
            <p>
              Every vendor profile undergoes identity checks, telephone verification, and physical locality validation. However, vendors operate as independent legal entities. Customers are advised to review itemised scopes, material specifications, and warranties prior to authorizing milestone payments.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg text-[#2E1A12] font-semibold">
              4. Fair Reviews &amp; Anti-Spam Policy
            </h2>
            <p>
              We maintain zero tolerance for fake reviews, purchased ratings, duplicate vendor listings, or automated lead spam. We reserve the right to suspend any account violating fair local commerce principles.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg text-[#2E1A12] font-semibold">
              5. Contact &amp; Grievance
            </h2>
            <p>
              For questions regarding these terms, contact the Local Bharat grievance desk at <strong>{siteConfig.email}</strong> or visit our office in Mansarovar, Jaipur.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
