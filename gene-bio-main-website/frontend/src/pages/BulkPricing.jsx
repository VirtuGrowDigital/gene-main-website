import BulkPricingHero from "../components/BulkPricingHero";
import BenefitsGrid from "../components/BenefitsGrid";
import BulkInquirySection from "../components/BulkInquirySection";
import ManufacturingHighlight from "../components/ManufacturingHighlight";
import CertificationStrip from "../components/CertificationStrip";
import DistributionMap from "../components/DistributionMap";
import BulkFAQ from "../components/BulkFAQ";
import BulkCTA from "../components/BulkCTA";
import Footer from "../components/Footer";

export default function GetBulkPricing() {
  return (
    <>
      <BulkPricingHero />
      <BenefitsGrid />
      <BulkInquirySection />
      <ManufacturingHighlight />
      <CertificationStrip />
      <DistributionMap />
      <BulkFAQ />
      <BulkCTA />
      <Footer />
    </>
  );
}