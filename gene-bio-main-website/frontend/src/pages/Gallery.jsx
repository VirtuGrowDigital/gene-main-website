import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import GalleryHero from "../components/GalleryHero";
import GalleryTabs from "../components/GalleryTabs";
import GalleryStats from "../components/GalleryStats";
import ManufacturingInfrastructure from "../components/ManufacturingInfrastructure";
import ResearchInnovation from "../components/ResearchInnovation";
import QualityControl from "../components/QualityControl";
import GlobalInnovations from "../components/GlobalInnovations";
import GlobalSupply from "../components/GlobalSupply";
import GalleryCTA from "../components/GalleryCTA";

export default function Gallery() {
  return (
    <>
      <Navbar />

      <GalleryHero />

      <GalleryTabs />

      <GalleryStats />

      <ManufacturingInfrastructure />

      <ResearchInnovation />

      <QualityControl />

      <GlobalInnovations />

      <GlobalSupply />

      <GalleryCTA />

      <Footer />
    </>
  );
}