"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

export default function ProductGallery({ images = [], productName = "Product" }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const safeImages = images.length > 0 ? images : ["/images/products/lotus-panel-01.webp"];
  const currentImage = safeImages[selectedIndex] || safeImages[0];

  const handlePrev = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? safeImages.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === safeImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FBF6EE] rounded-2xl border border-[#E4D3BD] shadow-parchment-soft group">
        <Image
          src={currentImage}
          alt={`${productName} - View ${selectedIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center cursor-zoom-in group-hover:scale-105 transition-transform duration-700 ease-out"
          onClick={() => setLightboxOpen(true)}
        />

        {/* Controls */}
        {safeImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#FBF6EE]/90 hover:bg-[#FBF6EE] text-[#2E1A12] border border-[#E4D3BD] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:text-[#B5532F] hover:scale-105 shadow-sm focus:opacity-100 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#FBF6EE]/90 hover:bg-[#FBF6EE] text-[#2E1A12] border border-[#E4D3BD] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:text-[#B5532F] hover:scale-105 shadow-sm focus:opacity-100 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Lightbox Trigger Button */}
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="absolute bottom-3 right-3 p-2 rounded-xl bg-[#FBF6EE]/90 hover:bg-[#FBF6EE] text-[#2E1A12] hover:text-[#B5532F] border border-[#E4D3BD] transition-all shadow-xs cursor-pointer"
          aria-label="Enlarge photograph"
          title="Click to enlarge"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Counter */}
        <span className="absolute top-3 left-3 text-[11px] font-mono font-medium text-[#2E1A12] bg-[#FBF6EE]/90 border border-[#E4D3BD] px-2.5 py-0.5 rounded-md shadow-2xs">
          0{selectedIndex + 1} / 0{safeImages.length}
        </span>
      </div>

      {/* Thumbnail Bar */}
      {safeImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {safeImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all flex-shrink-0 border-2 cursor-pointer ${
                selectedIndex === idx
                  ? "border-[#B5532F] shadow-sm ring-2 ring-[#B5532F]/25 scale-[1.02]"
                  : "border-[#E4D3BD] opacity-75 hover:opacity-100 hover:border-[#B5532F]/60"
              }`}
              aria-label={`Select view ${idx + 1}`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#2E1A12]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#B5532F] p-2 focus:outline-none transition-colors cursor-pointer"
            aria-label="Close enlarged view"
          >
            <X className="w-7 h-7" />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={currentImage}
                alt={`${productName} Full Enlargement`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {safeImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-[#B5532F] text-white border border-white/20 flex items-center justify-center transition-all shadow-md cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-[#B5532F] text-white border border-white/20 flex items-center justify-center transition-all shadow-md cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
