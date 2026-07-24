import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ManufacturingHero from "../components/ManufacturingHero";
import PrecisionScale from "../components/PrecisionScale";
import ManufacturingFeatures from "../components/ManufacturingFeatures";
import ComplianceSection from "../components/ComplianceSection";
import ManufacturingCTA from "../components/ManufacturingCTA";

export default function Manufacturing() {
  return (
    <>
      <Navbar />

      <ManufacturingHero />

      <PrecisionScale />

      <ManufacturingFeatures />

      <ComplianceSection />

      <ManufacturingCTA />

      <Footer />
    </>
  );
}