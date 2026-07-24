import CareerHero from "../components/CareerHero";
import CareerValues from "../components/CareerValues";
import CultureSection from "../components/CultureSection";
import BenefitsSection from "../components/BenefitsSection";
import OpenRoles from "../components/OpenRoles";
import HiringJourney from "../components/HiringJourney";
import CareerGallery from "../components/CareerGallery";
import CareerCTA from "../components/CareerCTA";

import Footer from "../components/Footer";

export default function Career() {
  return (
    <>
      <CareerHero />

      <CareerValues />

      <CultureSection />

      <BenefitsSection />

      <OpenRoles />

      <HiringJourney />

      <CareerGallery />

      <CareerCTA />

      <Footer />
    </>
  );
}