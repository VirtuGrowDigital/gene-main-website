import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import ProductHero from "../components/products/ProductHero";
import ProductFilters from "../components/products/ProductFilters";
import ProductGrid from "../components/products/ProductGrid";
import PartnerCTA from "../components/products/PartnerCTA";

export default function Products() {
  return (
    <>
      <Navbar />

      <ProductHero />

      <ProductFilters />

      <ProductGrid />

      <PartnerCTA />

      <Footer />
    </>
  );
}