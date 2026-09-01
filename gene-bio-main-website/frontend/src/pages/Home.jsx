import ContactSection from "../components/ContactSection";
import DistributorCTA from "../components/DistributorCTA";
import Footer from "../components/Footer";
import GeneBioAdvantage from "../components/GeneBioAdvantage";
import GlobalDiagnostics from "../components/GlobalDiagnostics";
import GlobalPartners from "../components/GlobalPartners";
import HeroSection from "../components/HeroSection";
import InnovationSpotlight from "../components/InnovationSpotlight";
import ManufacturingExcellence from "../components/ManufacturingExcellence";
import ResearchDevelopment from "../components/ResearchDevelopment";
import TrustBar from "../components/TrustBar";
import TrustCompliance from "../components/TrustCompliance";


const Home = () => {
  return (
    <main>
      <HeroSection />
      <TrustBar/>
      <GeneBioAdvantage/>
      {/* <InnovationSpotlight/> */}
      <ManufacturingExcellence/>
      <ResearchDevelopment/>
      <GlobalDiagnostics/>
      <TrustCompliance/>
      <GlobalPartners/>
      <DistributorCTA/>
      <ContactSection/>
      <Footer/>
    </main>
  );
};

export default Home;