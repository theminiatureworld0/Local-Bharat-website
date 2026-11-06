import Link from "next/link";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Page Not Found | Local Bharat",
  description: "The business listing, category, or page you are seeking could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-24 bg-[#F3E9DC]">
      <div className="max-w-xl mx-auto px-4 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-[#B5532F] font-semibold block mb-3">
          404 &bull; Page Not Found
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#2E1A12] font-semibold tracking-tight">
          Listing or Page Not Found
        </h1>
        <p className="mt-4 text-xs sm:text-sm text-[#7B5C4B] font-light leading-relaxed">
          The local business, category, or requirement page you requested could not be located. Explore our verified categories or return to the Local Bharat home.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md">
            Return to Local Bharat Home
          </Button>
          <Button href="/collections" variant="secondary" size="md">
            Browse All Categories
          </Button>
        </div>
      </div>
    </div>
  );
}
