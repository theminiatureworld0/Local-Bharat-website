import Breadcrumb from "@/components/common/Breadcrumb";
import { siteConfig } from "@/config/siteConfig";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Privacy Policy | Local Bharat",
  description: "Privacy policy regarding customer enquiry data, vendor listings, and communications on Local Bharat.",
  canonicalUrl: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-6 pb-16 bg-[#F3E9DC]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ name: "Privacy Policy", item: "/privacy-policy" }]} />

        <div className="py-6 sm:py-8">
          <span className="text-[11px] font-semibold text-[#B5532F] block mb-1">
            Data Protection &amp; Trust
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2E1A12]">
            Privacy Policy
          </h1>
          <p className="mt-1.5 text-xs text-[#7B5C4B] font-light">
            Version 3.0 &bull; Updated: November 2026 &bull; Local Bharat
          </p>
        </div>

        <div className="bg-[#FBF6EE] p-6 sm:p-8 rounded-3xl border border-[#E4D3BD] shadow-parchment-soft space-y-6 text-xs sm:text-sm text-[#7B5C4B] font-normal leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg text-[#2E1A12] font-semibold">
              1. Information We Collect
            </h2>
            <p>
              Local Bharat collects user and business information when you register an account, submit a quotation requirement, or list a local store. This includes your name, phone number, email, locality/city, business details, and requirement attachments.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg text-[#2E1A12] font-semibold">
              2. How Customer Information Is Handled
            </h2>
            <p>
              When a customer submits a requirement, details are shared only with 3 to 4 vetted local vendors with matching capabilities to generate quotations.
            </p>
            <p className="text-[#2E1A12] font-semibold pt-1">
              We never sell customer phone numbers or personal data to bulk telemarketers, cold callers, or third-party lead brokers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg text-[#2E1A12] font-semibold">
              3. WhatsApp &amp; Direct Vendor Chat
            </h2>
            <p>
              When connecting directly with local businesses or our concierge team via WhatsApp, messages are subject to WhatsApp&apos;s standard end-to-end encryption protocols.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg text-[#2E1A12] font-semibold">
              4. Data Deletion Requests
            </h2>
            <p>
              Users and vendors may request profile deletion or removal of listings at any time by contacting support at <strong>{siteConfig.email}</strong>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
