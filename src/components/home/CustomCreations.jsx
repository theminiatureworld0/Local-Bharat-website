import { MessageCircle, FileText, CheckCircle2, ShieldCheck, Layers } from "lucide-react";
import Button from "@/components/common/Button";
import { getProjectWhatsAppUrl } from "@/lib/whatsapp";

export default function CustomCreations() {
  const whatsappUrl = getProjectWhatsAppUrl(
    "Hello Local Bharat! I have a custom project requirement (e.g. compound wall, packaging, custom furniture, solar) and would like quotation assistance."
  );

  return (
    <section className="relative py-12 sm:py-16 bg-[#F3E9DC] text-[#2E1A12] border-b border-[#E4D3BD] overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF6EE] text-[#B5532F] border border-[#E4D3BD] text-[11px] font-semibold mb-3 shadow-2xs">
          <span>✦</span>
          <span>Pillar 3: Custom Requirement Marketplace</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2E1A12] tracking-tight leading-snug">
          Need Custom Work Done? <br className="hidden sm:block" />
          <span className="text-[#B5532F]">Compare Quotes from 3–4 Verified Local Specialists.</span>
        </h2>

        <p className="mt-3 max-w-2xl mx-auto text-xs sm:text-sm text-[#7B5C4B] font-normal leading-relaxed">
          From boundary wall construction and 500 custom shipping boxes to handcrafted teak dining tables and rooftop solar installations. Explain what you need once, and receive structured, competitive quotes from top-rated local workshops.
        </p>

        {/* 3 Process Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="bg-[#FBF6EE] p-5 rounded-2xl border border-[#E4D3BD] shadow-parchment-soft">
            <div className="w-8 h-8 rounded-lg bg-[#F3E9DC] text-[#B5532F] flex items-center justify-center mb-3">
              <FileText className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-semibold text-[#2E1A12]">1. Structured Requirement</h4>
            <p className="text-[11px] text-[#7B5C4B] mt-1 leading-relaxed font-light">
              Add your room dimensions, target quantities, reference sketches, photos, and preferred budget.
            </p>
          </div>

          <div className="bg-[#FBF6EE] p-5 rounded-2xl border border-[#E4D3BD] shadow-parchment-soft">
            <div className="w-8 h-8 rounded-lg bg-[#F3E9DC] text-[#B5532F] flex items-center justify-center mb-3">
              <Layers className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-semibold text-[#2E1A12]">2. Verified Local Matching</h4>
            <p className="text-[11px] text-[#7B5C4B] mt-1 leading-relaxed font-light">
              We send your requirement to 3-4 vetted local businesses with matching machinery and capacity.
            </p>
          </div>

          <div className="bg-[#FBF6EE] p-5 rounded-2xl border border-[#E4D3BD] shadow-parchment-soft">
            <div className="w-8 h-8 rounded-lg bg-[#F3E9DC] text-[#B5532F] flex items-center justify-center mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-semibold text-[#2E1A12]">3. Compare &amp; Hire Directly</h4>
            <p className="text-[11px] text-[#7B5C4B] mt-1 leading-relaxed font-light">
              Review itemised proposals for materials, labour, warranty, and lead time before making any decision.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <Button
            href="/contact"
            variant="primary"
            size="md"
            icon={FileText}
          >
            Submit Custom Requirement
          </Button>

          <Button
            href={whatsappUrl}
            variant="whatsapp"
            size="md"
            icon={MessageCircle}
          >
            WhatsApp Requirement Concierge
          </Button>
        </div>

      </div>
    </section>
  );
}
