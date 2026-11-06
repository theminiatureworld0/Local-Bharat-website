"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone, MessageCircle, MapPin, User, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/common/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "/collections" },
  { name: "Custom Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Mansarovar, Jaipur (10 km)");
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const pathname = usePathname();
  const whatsappUrl = getWhatsAppUrl("Hello Local Bharat, I would like to enquire about local businesses and custom quotations.");

  const locations = [
    "Mansarovar, Jaipur (10 km)",
    "Malviya Nagar, Jaipur",
    "Vaishali Nagar, Jaipur",
    "Sanganer, Jaipur",
    "Pune, Maharashtra",
    "Nashik, Maharashtra",
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Bar with Deep Warm Espresso & Terracotta Accents */}
      <div className="bg-[#2E1A12] text-[#F3E9DC] text-[11px] py-1.5 px-4 border-b border-[#42281E] relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#D8A97C]">✦</span>
            <span className="font-light text-[#E4D3BD]">
              Discover Local. Grow Local. &bull; Connecting Tier 2 &amp; Tier 3 India
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[#E4D3BD]">
            <a
              href={`tel:${siteConfig.phoneNumberRaw}`}
              className="flex items-center gap-1 hover:text-[#D8A97C] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#B5532F]" />
              <span>{siteConfig.phoneNumber}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#25D366] hover:text-white transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              <span>Direct Support</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-[#FBF6EE]/95 backdrop-blur-md border-b border-[#E4D3BD] py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo & Location Badge */}
            <div className="flex items-center gap-3 sm:gap-6">
              <Link
                href="/"
                className="flex items-center gap-2.5 group focus:outline-none"
                aria-label={`${siteConfig.businessName} Home`}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#B5532F] text-white flex items-center justify-center font-serif font-bold text-base shadow-sm">
                  LB
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-[#2E1A12] leading-none">
                    {siteConfig.shortBusinessName}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-[#7B5C4B] font-medium mt-0.5">
                    Discover Local &bull; Grow Local
                  </span>
                </div>
              </Link>

              {/* Location Selector Pill (As in the Customer App screenshot) */}
              <div className="relative hidden md:block">
                <button
                  type="button"
                  onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F3E9DC] hover:bg-[#EBDDCB] border border-[#E4D3BD] text-xs text-[#2E1A12] font-medium transition-colors cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#B5532F]" />
                  <span>{selectedLocation}</span>
                  <ChevronDown className="w-3 h-3 text-[#7B5C4B] ml-0.5" />
                </button>

                {locationDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1.5 w-60 bg-[#FBF6EE] rounded-xl border border-[#E4D3BD] shadow-parchment-card py-1.5 z-50">
                    <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold text-[#7B5C4B] border-b border-[#E4D3BD]/60">
                      Select Your Location
                    </div>
                    {locations.map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => {
                          setSelectedLocation(loc);
                          setLocationDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs hover:bg-[#F3E9DC] transition-colors flex items-center justify-between ${
                          selectedLocation === loc ? "text-[#B5532F] font-semibold bg-[#F3E9DC]/60" : "text-[#2E1A12]"
                        }`}
                      >
                        <span>{loc}</span>
                        {selectedLocation === loc && <span className="text-xs text-[#B5532F]">✓</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-xs uppercase tracking-wider transition-colors relative py-1 ${
                      isActive
                        ? "text-[#B5532F] font-semibold"
                        : "text-[#42281E] hover:text-[#B5532F]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B5532F]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Customer Account Button */}
              <Link
                href="/account"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F3E9DC] hover:bg-[#EBDDCB] border border-[#E4D3BD] text-xs font-medium text-[#2E1A12] transition-colors"
                title="Customer Account"
              >
                <div className="w-5 h-5 rounded-full bg-[#B5532F] text-white flex items-center justify-center text-[10px] font-bold">
                  AK
                </div>
                <span>Account</span>
              </Link>

              {/* List Your Store (Join 🚀 Button) */}
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="font-medium"
              >
                List Your Store 🚀
              </Button>
            </div>

            {/* Mobile Actions & Hamburger */}
            <div className="flex sm:hidden items-center gap-2">
              <Link
                href="/account"
                className="p-1.5 rounded-lg bg-[#F3E9DC] border border-[#E4D3BD] text-[#2E1A12]"
                aria-label="Account"
              >
                <div className="w-6 h-6 rounded-full bg-[#B5532F] text-white flex items-center justify-center text-[10px] font-bold">
                  AK
                </div>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#2E1A12] hover:bg-[#F3E9DC] focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden bg-black/40 backdrop-blur-xs transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-[#FBF6EE] p-5 shadow-xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden border-l border-[#E4D3BD] ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#E4D3BD]">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-[#B5532F] text-white flex items-center justify-center font-serif font-bold text-sm">
                LB
              </div>
              <span className="font-serif text-base font-semibold text-[#2E1A12]">
                {siteConfig.shortBusinessName}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 text-[#7B5C4B] hover:text-[#2E1A12]"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Location in Drawer */}
          <div className="py-3 border-b border-[#E4D3BD]">
            <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#F3E9DC] border border-[#E4D3BD] text-xs text-[#2E1A12] font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#B5532F]" />
              <span>{selectedLocation}</span>
            </div>
          </div>

          <nav className="py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-colors ${
                    isActive
                      ? "bg-[#F3E9DC] text-[#B5532F] font-semibold"
                      : "text-[#42281E] hover:bg-[#F3E9DC]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/account"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs uppercase tracking-wider text-[#B5532F] font-semibold hover:bg-[#F3E9DC]"
            >
              <User className="w-4 h-4" />
              <span>Customer Account (AK)</span>
            </Link>
          </nav>
        </div>

        <div className="space-y-2.5 pt-4 border-t border-[#E4D3BD]">
          <Button
            href="/contact"
            variant="primary"
            size="md"
            className="w-full font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            List Your Store 🚀
          </Button>

          <Button
            href={whatsappUrl}
            variant="whatsapp"
            size="md"
            className="w-full"
            icon={MessageCircle}
          >
            WhatsApp Support
          </Button>

          <p className="text-center text-[10px] text-[#7B5C4B] pt-1">
            Mansarovar, Jaipur &bull; Discover Local. Grow Local.
          </p>
        </div>
      </div>
    </>
  );
}
