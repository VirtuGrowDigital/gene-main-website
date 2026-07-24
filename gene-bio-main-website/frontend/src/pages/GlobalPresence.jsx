import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import GlobalHero from "../components/GlobalHero";
import GlobalStats from "../components/GlobalStats";
import RegionalInfrastructure from "../components/RegionalInfrastructure";
import JoinNetwork from "../components/JoinNetwork";

export default function GlobalPresence() {
  return (
    <>
      <Navbar />

      <GlobalHero />

      <GlobalStats />

      <RegionalInfrastructure />

      <JoinNetwork />

      <Footer />
    </>
  );
}