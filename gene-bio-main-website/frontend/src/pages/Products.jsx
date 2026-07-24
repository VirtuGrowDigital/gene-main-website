import { useMemo, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ProductHero from "../components/ProductHero";
import ProductFilters from "../components/ProductFilters";
import ProductGrid from "../components/ProductGrid";
import PartnerCTA from "../components/PartnerCTA";

import vtm from "../assets/products/malariakit.png";
import typhoid from "../assets/products/typhoid.png";
import pregagene from "../assets/products/pregagene.png";
import ManufacturingSection from "../components/ManufacturingSection";

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const products = [
    {
      id: 1,
      title: "Viral Transport Medium (VTM)",
      category: "VTM",
      description:
        "For collection, transport and recovery of virus, chlamydia and mycoplasma. Includes 2 sterile swabs.",
      image: vtm,
    },
    {
      id: 2,
      title: "Typhoid IgM / IgG",
      category: "Typhoid",
      description:
        "Rapid Test Device for Qualitative Detection of Typhoid IgM Antibody in Human Serum.",
      image: typhoid,
    },
    {
      id: 3,
      title: "Prega Gene",
      category: "Pregnancy",
      description:
        "One Step hCG Urine Pregnancy Kit for qualitative pregnancy detection.",
      image: pregagene,
    },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "All" || product.category === category;

      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <>
      <Navbar />

      <ProductHero />

      <ProductFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <ProductGrid
        products={filteredProducts}
        selected={selected}
        setSelected={setSelected}
      />

      <PartnerCTA />
      <ManufacturingSection />

      <Footer />
    </>
  );
}