import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrustBar from "../components/TrustBar";

import CertificationsHero from "../components/CertificationsHero";
import QualityCredentials from "../components/QualityCredentials";
import ValidationProtocols from "../components/ValidationProtocols";
import RegulatoryVault from "../components/RegulatoryVault";

export default function Certifications() {
  return (
    <>
      <Navbar />

      <CertificationsHero />

      <QualityCredentials />

      <ValidationProtocols />

      <RegulatoryVault />

      <TrustBar />

      <Footer />
    </>
  );
}