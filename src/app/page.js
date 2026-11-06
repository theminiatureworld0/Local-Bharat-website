import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import Collections from "@/components/home/Collections";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Craftsmanship from "@/components/home/Craftsmanship";
import CustomCreations from "@/components/home/CustomCreations";
import SelectedProjects from "@/components/home/SelectedProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutPreview from "@/components/home/AboutPreview";
import FaqSection from "@/components/home/FaqSection";
import ContactSection from "@/components/home/ContactSection";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Discover Local Businesses, Compare Quotes & Grow Local | Local Bharat",
  description: "India's premier digital operating and commerce network for Tier-2 & Tier-3 cities. Discover verified local workshops, artisans, and contractors or list your store for direct leads.",
  canonicalUrl: "/",
});

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Brand Introduction */}
      <Introduction />

      {/* Section 3: Collections / Business Categories */}
      <Collections />

      {/* Section 4: Featured Products & Services */}
      <FeaturedProducts />

      {/* Section 5: Four Platform Pillars */}
      <Craftsmanship />

      {/* Section 6: Custom Requirements & Quotations */}
      <CustomCreations />

      {/* Section 7: Selected Projects & Quotation Case Studies */}
      <SelectedProjects />

      {/* Section 8: Why Choose Local Bharat */}
      <WhyChooseUs />

      {/* Section 9: About Us Preview */}
      <AboutPreview />

      {/* FAQ Section */}
      <FaqSection />

      {/* Section 10: Contact / Enquiry / Store Registration */}
      <ContactSection />
    </>
  );
}
