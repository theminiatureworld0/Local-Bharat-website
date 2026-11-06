import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductCard from "@/components/products/ProductCard";
import Button from "@/components/common/Button";
import { getCategoryBySlug, getAllCategories } from "@/lib/categories";
import { getProductsByCategory } from "@/lib/products";
import { constructMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const all = getAllCategories();
  return all.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) return {};

  return constructMetadata({
    title: category.seoTitle || `${category.name} | Local Bharat`,
    description: category.seoDescription || category.shortDescription,
    image: category.bannerImage || category.image,
    canonicalUrl: `/collections/${category.slug}`,
  });
}

export default function CategoryDetailPage({ params }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category.slug);
  const otherCategories = getAllCategories().filter((c) => c.slug !== category.slug).slice(0, 3);

  return (
    <div className="pt-6 pb-16 bg-[#F3E9DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={[
            { name: "Categories", item: "/collections" },
            { name: category.name, item: `/collections/${category.slug}` },
          ]}
        />

        {/* Category Banner */}
        <div className="relative my-4 rounded-2xl overflow-hidden shadow-parchment-card border border-[#E4D3BD] bg-[#2E1A12] text-white">
          <div className="relative aspect-[21/9] sm:aspect-[24/8] min-h-[220px] w-full">
            <Image
              src={category.bannerImage || category.image}
              alt={category.name}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A12] via-[#2E1A12]/40 to-transparent" />

            {/* Banner Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B5532F]/80 border border-[#B5532F] text-[10px] font-semibold text-white w-fit mb-2 backdrop-blur-2xs">
                <span>✦</span>
                <span>Verified Business Category</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-white leading-tight">
                {category.name}
              </h1>
              <p className="mt-1.5 text-xs sm:text-sm text-[#E4D3BD] font-light leading-relaxed max-w-xl">
                {category.description}
              </p>
            </div>
          </div>
        </div>

        {/* Features / Highlights Bar */}
        {category.features && category.features.length > 0 && (
          <div className="mb-8 p-4 rounded-2xl bg-[#FBF6EE] border border-[#E4D3BD] shadow-parchment-soft grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {category.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#2E1A12]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B5532F] flex-shrink-0 mt-0.5" />
                <span className="font-normal">{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Product Count Header */}
        <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#E4D3BD]">
          <div>
            <h2 className="font-serif text-lg sm:text-xl font-semibold text-[#2E1A12]">
              Verified Listings &amp; Custom Offerings
            </h2>
            <p className="text-xs text-[#7B5C4B] font-light">
              Select any listing to review pricing, vendor workshop location, or submit a custom quote request
            </p>
          </div>
          <span className="text-[11px] font-semibold text-[#2E1A12] bg-[#FBF6EE] border border-[#E4D3BD] px-3 py-1 rounded-lg shadow-2xs font-mono">
            {categoryProducts.length} {categoryProducts.length === 1 ? "Listing" : "Listings"}
          </span>
        </div>

        {/* Product Grid or Empty State */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showCategory={false}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-[#FBF6EE] rounded-2xl border border-[#E4D3BD] p-6 shadow-parchment-soft">
            <h3 className="font-serif text-base font-semibold text-[#2E1A12] mb-1.5">
              Custom Listings Updating for this Category
            </h3>
            <p className="text-xs text-[#7B5C4B] max-w-sm mx-auto mb-4 font-light">
              Local workshops are actively being onboarded. You can submit your requirement right now to receive verified direct quotations.
            </p>
            <Button href="/contact" variant="primary" size="sm">
              Post Requirement for this Category
            </Button>
          </div>
        )}

        {/* Related Categories */}
        <div className="mt-16 pt-10 border-t border-[#E4D3BD]">
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="text-[11px] font-semibold text-[#B5532F] block mb-0.5">
                Explore More
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#2E1A12]">
                Other Local Categories
              </h3>
            </div>
            <Link
              href="/collections"
              className="text-xs uppercase tracking-wider font-semibold text-[#2E1A12] hover:text-[#B5532F] inline-flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {otherCategories.map((other) => (
              <Link
                key={other.slug}
                href={`/collections/${other.slug}`}
                className="group p-4 bg-[#FBF6EE] rounded-2xl border border-[#E4D3BD] shadow-parchment-soft hover:shadow-parchment-card hover:border-[#B5532F]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-serif text-sm sm:text-base font-semibold text-[#2E1A12] group-hover:text-[#B5532F] transition-colors">
                    {other.name}
                  </h4>
                  <p className="text-xs text-[#7B5C4B] mt-1 line-clamp-2 leading-relaxed font-light">
                    {other.shortDescription}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[#E4D3BD] flex items-center justify-between text-[11px] font-semibold text-[#2E1A12] group-hover:text-[#B5532F]">
                  <span>Explore Listings</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
