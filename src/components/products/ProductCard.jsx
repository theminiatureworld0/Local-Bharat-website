import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Tag, ShieldCheck, Ruler } from "lucide-react";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import { categories } from "@/data/categories";

export default function ProductCard({ product, showCategory = true }) {
  if (!product) return null;

  const categoryObj = categories.find((c) => c.slug === product.category);
  const categoryName = categoryObj ? categoryObj.name : product.category;
  const whatsappUrl = getProductWhatsAppUrl(product);
  const mainImage = product.images?.[0] || "/images/products/lotus-panel-01.webp";

  return (
    <article className="group flex flex-col bg-[#FBF6EE] rounded-2xl border border-[#E4D3BD] overflow-hidden shadow-parchment-soft hover:shadow-parchment-card hover:border-[#B5532F]/60 transition-all duration-300">
      {/* Product Image */}
      <Link
        href={`/products/${product.slug}`}
        className="relative aspect-[4/3] w-full overflow-hidden bg-[#2E1A12] block"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={mainImage}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-[#2E1A12]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Vendor Location Pill */}
        {product.vendorLocation && (
          <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 bg-[#2E1A12]/85 text-[#F3E9DC] text-[10px] font-medium rounded-md backdrop-blur-md flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#B5532F]" />
            {product.vendorLocation}
          </span>
        )}

        {/* Verified Badge */}
        <span className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-[#5E7F6E] text-white text-[9px] font-bold uppercase rounded shadow-xs flex items-center gap-1">
          <ShieldCheck className="w-3 h-3" />
          Verified
        </span>
      </Link>

      {/* Product Information */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {showCategory && (
            <Link
              href={`/collections/${product.category}`}
              className="text-[10px] uppercase tracking-wider text-[#B5532F] hover:text-[#7A2E17] transition-colors block mb-1 font-semibold"
            >
              {categoryName}
            </Link>
          )}

          <h3 className="font-serif text-base font-semibold text-[#2E1A12] group-hover:text-[#B5532F] transition-colors leading-snug">
            <Link href={`/products/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          <p className="mt-1.5 text-xs text-[#7B5C4B] line-clamp-2 leading-relaxed font-light">
            {product.shortDescription}
          </p>

          {/* Pricing & MOQ bar */}
          <div className="mt-3 pt-2.5 border-t border-[#E4D3BD] flex items-center justify-between text-xs">
            {product.priceEstimate ? (
              <span className="font-semibold text-[#2E1A12] text-xs">
                {product.priceEstimate}
              </span>
            ) : (
              <span className="text-xs text-[#7B5C4B]">Custom Quote on Request</span>
            )}

            {product.moq && (
              <span className="text-[10px] font-medium bg-[#F3E9DC] text-[#7B5C4B] px-2 py-0.5 rounded">
                MOQ: {product.moq}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-[#E4D3BD] flex items-center justify-between gap-3 text-xs">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center text-xs font-semibold text-[#B5532F] hover:text-[#D9743F] transition-colors gap-1.5 group/link py-1"
          >
            <span>View Details &amp; Quote</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-[#25D366] hover:underline font-medium"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
