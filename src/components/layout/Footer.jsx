import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { categories } from "@/data/categories";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = getWhatsAppUrl();

  const socialLinks = [
    { name: "Instagram", url: siteConfig.instagramUrl },
    { name: "Facebook", url: siteConfig.facebookUrl },
    { name: "Google Maps", url: siteConfig.googleMapsUrl },
  ].filter((item) => Boolean(item.url && item.url.trim()));

  return (
    <footer className="bg-[#2E1A12] text-[#F3E9DC] pt-12 sm:pt-16 pb-10 border-t border-[#42281E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 pb-10 border-b border-[#42281E]">
          
          {/* Column 1: Brand (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-[#B5532F] text-white flex items-center justify-center font-serif font-bold text-base shadow-sm">
                LB
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-wide uppercase text-white font-semibold">
                  {siteConfig.businessName}
                </span>
                <span className="text-[10px] tracking-wider uppercase text-[#D8A97C] font-medium">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#E4D3BD] font-light leading-relaxed max-w-sm">
              India’s trusted local business discovery, growth, and commerce platform for Tier-2 and Tier-3 cities. Empowering local stores, manufacturers, service specialists, and artisans with digital storefronts, structured quotations, and verified leads.
            </p>

            <div className="pt-1 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#42281E] border border-[#5A382B] text-[11px] text-[#D8A97C]">
                <MapPin className="w-3 h-3 text-[#B5532F]" />
                HQ: {siteConfig.locality}, {siteConfig.city} ({siteConfig.state})
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#42281E] border border-[#5A382B] text-[11px] text-[#5E7F6E]">
                <ShieldCheck className="w-3 h-3 text-[#5E7F6E]" />
                100% Verified Local Sellers
              </span>
            </div>

            {socialLinks.length > 0 && (
              <div className="pt-1 flex items-center gap-3 text-xs">
                <span className="text-[#9A7E6F]">Connect:</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E4D3BD] hover:text-[#D8A97C] transition-colors flex items-center gap-1 text-[11px]"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Column 2: Categories */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-[#D8A97C] font-semibold mb-4">
              Local Categories
            </h3>
            <ul className="space-y-2.5 text-xs text-[#E4D3BD] font-light">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/collections/${cat.slug}`} className="hover:text-white transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/collections" className="text-[#D8A97C] hover:underline transition-colors font-normal">
                  View All Categories &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform & Pillars */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-[#D8A97C] font-semibold mb-4">
              Platform Features
            </h3>
            <ul className="space-y-2.5 text-xs text-[#E4D3BD] font-light">
              <li>
                <Link href="/collections" className="hover:text-white transition-colors">
                  Local Store Discovery
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Custom Quotations Engine
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  List Your Store (Join 🚀)
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-white transition-colors">
                  Customer Account Dashboard
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Local Bharat
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Helpdesk */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-[#D8A97C] font-semibold mb-4">
              Direct Helpdesk
            </h3>
            <div className="space-y-2.5 text-xs text-[#E4D3BD] font-light">
              <a
                href={`tel:${siteConfig.phoneNumberRaw}`}
                className="flex items-center gap-2 hover:text-[#D8A97C] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B5532F]" />
                <span>{siteConfig.phoneNumber}</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-[#D8A97C] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#B5532F]" />
                <span className="break-all">{siteConfig.email}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 transition-colors mt-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="font-medium text-[11px]">Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9A7E6F] font-light">
          <p>
            &copy; {currentYear} {siteConfig.businessName}. All rights reserved. Made for Local Bharat.
          </p>

          <div className="flex items-center gap-5 text-[11px]">
            <Link href="/privacy-policy" className="hover:text-[#E4D3BD] transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/terms" className="hover:text-[#E4D3BD] transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-[#E4D3BD] transition-colors">
              Vendor Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
