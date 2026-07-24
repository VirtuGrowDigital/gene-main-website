import Navbar from "../components/Navbar";
import DistributorHero from "../components/DistributorHero";
import WhyPartner from "../components/WhyPartner";
import DistributorApplicationForm from "../components/DistributorApplicationForm";
import Footer from "../components/Footer";

export default function BecomeDistributor() {
  return (
    <>
    <Navbar/>
      <DistributorHero />
      <WhyPartner />
      <DistributorApplicationForm />
      <Footer />
    </>
  );
}