import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle, Mail, Ruler, Layers, Sparkles, CheckCircle2, MapPin, Store, ShieldCheck } from "lucide-react";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductGallery from "@/components/products/ProductGallery";
import ProductCard from "@/components/products/ProductCard";
import Button from "@/components/common/Button";
import { getProductBySlug, getAllProducts, getRelatedProducts } from "@/lib/products";
import { getCategoryBySlug } from "@/lib/categories";
import { constructMetadata, getProductSchema } from "@/lib/seo";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/config/siteConfig";

export async function generateStaticParams() {
  const all = getAllProducts();
  return all.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  return constructMetadata({
    title: product.seoTitle || `${product.name} | Local Bharat`,
    description: product.seoDescription || product.shortDescription,
    image: product.images?.[0] || "/images/hero/hero-main.webp",
    canonicalUrl: `/products/${product.slug}`,
  });
}

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.category);
  const relatedProducts = getRelatedProducts(product, 3);
  const productPageUrl = `${siteConfig.websiteUrl}/products/${product.slug}`;
  const whatsappUrl = getProductWhatsAppUrl(product, productPageUrl);
  const productSchema = getProductSchema(product);

  return (
    <>
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}

      <div className="pt-6 pb-16 bg-[#F3E9DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <Breadcrumb
            items={[
              { name: "Categories", item: "/collections" },
              {
                name: category?.name || "Category",
                item: `/collections/${product.category}`,
              },
              { name: product.name, item: `/products/${product.slug}` },
            ]}
          />

          {/* Product Header & Main Detail Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 my-4 items-start">
            
            {/* Left Column: Interactive Product Gallery (Spans 7 cols on lg) */}
            <div className="lg:col-span-7">
              <ProductGallery
                images={product.images}
                productName={product.name}
              />
            </div>

            {/* Right Column: Specifications & Direct Actions (Spans 5 cols on lg) */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Link
                    href={`/collections/${product.category}`}
                    className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-[#FBF6EE] text-[#B5532F] border border-[#E4D3BD] text-[10px] font-semibold"
                  >
                    <span>✦</span>
                    <span>{category?.name || "Local Offering"}</span>
                  </Link>

                  {product.vendorLocation && (
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#7B5C4B] bg-[#FBF6EE] px-2.5 py-0.5 rounded-full border border-[#E4D3BD]">
                      <MapPin className="w-3 h-3 text-[#B5532F]" />
                      {product.vendorLocation}
                    </span>
                  )}
                </div>

                <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#2E1A12] font-semibold leading-snug">
                  {product.name}
                </h1>

                <p className="mt-2 text-xs sm:text-sm text-[#7B5C4B] font-normal leading-relaxed">
                  {product.shortDescription}
                </p>

                {/* Price & Vendor Strip */}
                <div className="mt-3 p-3.5 bg-[#FBF6EE] rounded-xl border border-[#E4D3BD] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#7B5C4B] block">Price Estimate</span>
                    <span className="text-base sm:text-lg font-bold text-[#2E1A12]">{product.priceEstimate || "Quotation on Request"}</span>
                  </div>
                  {product.moq && (
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-semibold text-[#7B5C4B] block">Minimum Order</span>
                      <span className="text-xs font-semibold text-[#B5532F] bg-[#F3E9DC] px-2 py-0.5 rounded">{product.moq}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Vendor Information Box */}
              {product.vendor && (
                <div className="p-4 bg-[#FBF6EE] rounded-xl border border-[#E4D3BD] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#F3E9DC] text-[#B5532F] flex items-center justify-center font-bold text-sm">
                      <Store className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-[#7B5C4B] font-semibold block">Listed by Verified Vendor</span>
                      <span className="text-xs font-bold text-[#2E1A12]">{product.vendor}</span>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-[#5E7F6E] bg-[#5E7F6E]/10 border border-[#5E7F6E]/30 px-2 py-0.5 rounded font-semibold">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Store
                  </span>
                </div>
              )}

              {/* Core Material Attributes Box */}
              <div className="p-4 sm:p-5 bg-[#FBF6EE] rounded-xl border border-[#E4D3BD] shadow-parchment-soft space-y-3">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#2E1A12] border-b border-[#E4D3BD] pb-2">
                  Offering Specifications
                </h3>

                <div className="space-y-2 text-xs">
                  {product.material && (
                    <div className="flex items-center justify-between">
                      <span className="text-[#7B5C4B] flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#B5532F]" /> Material / Grade:
                      </span>
                      <span className="font-semibold text-[#2E1A12]">{product.material}</span>
                    </div>
                  )}

                  {product.dimensions && (
                    <div className="flex items-center justify-between">
                      <span className="text-[#7B5C4B] flex items-center gap-1.5">
                        <Ruler className="w-3.5 h-3.5 text-[#B5532F]" /> Standard Dimensions:
                      </span>
                      <span className="font-semibold text-[#2E1A12]">{product.dimensions}</span>
                    </div>
                  )}

                  {product.finish && (
                    <div className="flex items-center justify-between">
                      <span className="text-[#7B5C4B] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#B5532F]" /> Finish / Treatment:
                      </span>
                      <span className="font-semibold text-[#2E1A12]">{product.finish}</span>
                    </div>
                  )}

                  {product.customisationAvailable && (
                    <div className="pt-1.5 border-t border-[#E4D3BD] flex items-center gap-1.5 text-[#B5532F]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B5532F] flex-shrink-0" />
                      <span className="text-[11px] font-medium">Bespoke sizing, custom branding &amp; alterations available</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <Button
                  href={`/contact?interest=${encodeURIComponent(product.name)}`}
                  variant="primary"
                  size="md"
                  className="w-full text-center py-3 font-semibold shadow-sm"
                  icon={Mail}
                >
                  Request Official Quotation
                </Button>

                <Button
                  href={whatsappUrl}
                  variant="whatsapp"
                  size="md"
                  className="w-full text-center py-3"
                  icon={MessageCircle}
                >
                  Discuss Details via WhatsApp
                </Button>

                <div className="pt-1.5 flex items-center justify-center gap-3 text-[11px] text-[#7B5C4B] font-light">
                  <span>✓ Direct Vendor Pricing</span>
                  <span>&bull;</span>
                  <span>✓ Zero Intermediary Cut</span>
                  <span>&bull;</span>
                  <span>✓ Local Inspection</span>
                </div>
              </div>

            </div>

          </div>

          {/* Description & Technical Specifications */}
          <div className="mt-10 pt-8 border-t border-[#E4D3BD] grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            
            {/* Description Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-serif text-lg sm:text-xl font-semibold text-[#2E1A12]">
                About This Offering
              </h2>
              <div className="text-xs sm:text-sm text-[#7B5C4B] leading-relaxed space-y-3 font-normal">
                <p>{product.description}</p>
                <p>
                  Local Bharat connects you directly with the registered workshop. You can request customized dimensions, alternate materials, or on-site measurement visits across Mansarovar, Jaipur, and regional hubs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FBF6EE] border border-[#E4D3BD] text-xs text-[#2E1A12] space-y-1.5 shadow-2xs">
                <span className="font-semibold uppercase tracking-wider block text-[#B5532F]">
                  Delivery &amp; On-Site Support
                </span>
                <p className="text-[#7B5C4B] leading-relaxed font-light">
                  Local delivery, crane/vehicle loading, or doorstep technician installation is coordinated directly by the local workshop with transparent milestone tracking.
                </p>
              </div>
            </div>

            {/* Specifications Table (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-[#FBF6EE] p-5 rounded-2xl border border-[#E4D3BD] shadow-parchment-soft">
                <h3 className="font-serif text-base font-semibold text-[#2E1A12] mb-3">
                  Technical Specifications
                </h3>

                <dl className="divide-y divide-[#E4D3BD] text-xs">
                  <div className="py-2 flex justify-between gap-3">
                    <dt className="text-[#7B5C4B]">Listing ID</dt>
                    <dd className="font-mono text-[#2E1A12]">{product.id}</dd>
                  </div>
                  {product.material && (
                    <div className="py-2 flex justify-between gap-3">
                      <dt className="text-[#7B5C4B]">Material</dt>
                      <dd className="font-semibold text-[#2E1A12] text-right">{product.material}</dd>
                    </div>
                  )}
                  {product.dimensions && (
                    <div className="py-2 flex justify-between gap-3">
                      <dt className="text-[#7B5C4B]">Dimensions</dt>
                      <dd className="font-semibold text-[#2E1A12] text-right">{product.dimensions}</dd>
                    </div>
                  )}

                  {product.specifications &&
                    Object.entries(product.specifications).map(([key, val]) => (
                      <div key={key} className="py-2 flex justify-between gap-3">
                        <dt className="text-[#7B5C4B]">{key}</dt>
                        <dd className="font-semibold text-[#2E1A12] text-right">{val}</dd>
                      </div>
                    ))}
                </dl>
              </div>
            </div>

          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-14 pt-8 border-t border-[#E4D3BD]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[11px] font-semibold text-[#B5532F] block mb-0.5">
                    Related Offerings
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#2E1A12]">
                    More in {category?.name || "this Category"}
                  </h3>
                </div>
                <Link
                  href={`/collections/${product.category}`}
                  className="text-xs uppercase tracking-wider font-semibold text-[#2E1A12] hover:text-[#B5532F] transition-colors"
                >
                  View Category
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {relatedProducts.map((rel) => (
                  <ProductCard key={rel.id} product={rel} showCategory={false} />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
