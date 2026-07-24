import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AboutHero from "../components/AboutHero";
import CompanyIntro from "../components/CompanyIntro";
import MissionVision from "../components/MissionVision";
import InnovationTimeline from "../components/InnovationTimeline";
import GlobalNetworkCTA from "../components/GlobalNetworkCTA";

export default function About() {
  return (
    <>
      <Navbar />

      <AboutHero />

      <CompanyIntro />

      <MissionVision />

      <InnovationTimeline />

      <GlobalNetworkCTA />

      <Footer />
    </>
  );
}