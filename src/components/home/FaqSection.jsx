"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const faqs = [
  {
    q: "What is Local Bharat and how is it different from Justdial or Google Maps?",
    a: "Unlike passive phone directories that merely list numbers and sell leads to dozens of bidders, Local Bharat provides complete digital storefronts, structured quotation comparisons, lead management, and custom requirement matching. Customers can review itemised material and labour quotes, while local businesses gain professional tools to track enquiries and follow-ups without paying commissions."
  },
  {
    q: "How does the Custom Project & Quotation process work?",
    a: "When you have custom work—such as building a compound wall, ordering 500 branded cartons, or installing rooftop solar—you submit your requirement once with approximate dimensions, photos, and budget. Local Bharat matches your request with 3 to 4 vetted local businesses with the right machinery. You receive structured proposals to compare price, materials, turnaround, and reviews."
  },
  {
    q: "Is it free for local shops and service providers to list their business?",
    a: "Yes! Local businesses can join Local Bharat for free. You get a verified business profile, catalogue display, and customer enquiry access. As your business expands, optional paid productivity features (such as advanced quotation builders, customer follow-up reminders, and marketing tools) are available through affordable monthly plans."
  },
  {
    q: "How does Local Bharat verify businesses and prevent fraud?",
    a: "Every listed business undergoes phone verification, business information validation, physical address review, and applicable GST/identity checks. We do not sell paid verification badges. Misleading pricing, duplicate accounts, and spam enquiries are actively monitored and moderated."
  },
  {
    q: "Can I request on-site visits or doorstep service in my locality?",
    a: "Yes. For categories such as electrical repair, plumbing, carpentry, and custom fabrication, you can schedule a doorstep appointment or request a technician to visit for on-site measurements before finalizing a quotation."
  },
  {
    q: "Which cities and localities are currently covered?",
    a: "We are currently focused on key Tier-2 and Tier-3 hubs starting with Jaipur (Mansarovar, Malviya Nagar, Vaishali Nagar, Sanganer), expanding to Pune and Nashik. We prioritize local density over empty national listings to ensure every enquiry receives real, prompt responses."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F3E9DC]/70 border-b border-[#E4D3BD]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Help &amp; Clarifications"
          title="Frequently Asked Questions"
          description="Everything you need to know about discovering verified local businesses, posting custom project requirements, and listing your store."
          align="center"
        />

        <div className="space-y-3 mt-6">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#E4D3BD] overflow-hidden bg-[#FBF6EE] shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 bg-[#FBF6EE] hover:bg-[#F3E9DC] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-sm sm:text-base font-semibold text-[#2E1A12]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full bg-[#F3E9DC] flex items-center justify-center flex-shrink-0 border border-[#E4D3BD] transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#B5532F]" : "text-[#7B5C4B]"
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 bg-[#FBF6EE] text-xs sm:text-sm text-[#7B5C4B] font-normal leading-relaxed border-t border-[#E4D3BD]/70">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
