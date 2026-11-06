"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/config/siteConfig";

export default function FloatingWhatsApp() {
  const url = getWhatsAppUrl(
    `Hello Local Bharat, I would like assistance with discovering local businesses or requesting a custom quotation.`
  );

  return (
    <aside aria-label="Local Bharat quick support">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation with Local Bharat"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#1EBE5D] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 group"
      >
        <span className="sr-only">Direct WhatsApp Support</span>
        <MessageCircle className="w-7 h-7" />
        
        {/* Hover pill on desktop */}
        <span className="absolute right-16 px-3.5 py-1.5 bg-[#2E1A12] text-[#F3E9DC] text-xs font-semibold rounded-lg shadow-md opacity-0 pointer-events-none group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden sm:block border border-[#42281E]">
          Local Bharat Support
        </span>
      </a>
    </aside>
  );
}
