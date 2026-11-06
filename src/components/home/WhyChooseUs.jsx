import { ShieldCheck, Coins, FileSpreadsheet, Zap } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const highlights = [
  {
    icon: ShieldCheck,
    title: "100% Verified Local Businesses",
    description: "Every listed shop, workshop, and technician undergoes contact validation, address check, and business verification. No ghost listings or fake brokers.",
  },
  {
    icon: Coins,
    title: "Zero Commission on Leads",
    description: "Unlike predatory aggregators who charge 20–30% cuts on transactions, Local Bharat lets businesses quote directly and keep 100% of their earnings.",
  },
  {
    icon: FileSpreadsheet,
    title: "Structured Quotations Engine",
    description: "Say goodbye to scattered WhatsApp scribbles. Receive itemised proposals detailing material specifications, labour, delivery timeline, and warranty.",
  },
  {
    icon: Zap,
    title: "Hyperlocal Fast Response",
    description: "Engage specialists who actually operate in your locality (e.g. Mansarovar, Malviya Nagar). Easy on-site measurements and same-day visits.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 bg-[#F3E9DC]/70 border-b border-[#E4D3BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="The Local Bharat Advantage"
          title="Why Customers &amp; Businesses Choose Local Bharat"
          description="Built to make local commerce transparent, accessible, and productive for India's Tier 2 and Tier 3 cities."
          align="center"
        />

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FBF6EE] p-5 rounded-2xl border border-[#E4D3BD] shadow-parchment-soft hover:shadow-parchment-card hover:border-[#B5532F]/50 transition-all duration-300 flex flex-col justify-start"
              >
                <div className="w-10 h-10 mb-3.5 rounded-xl bg-[#F3E9DC] border border-[#E4D3BD] flex items-center justify-center text-[#B5532F]">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>

                <h3 className="font-serif text-sm sm:text-base font-semibold text-[#2E1A12] mb-1.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#7B5C4B] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
