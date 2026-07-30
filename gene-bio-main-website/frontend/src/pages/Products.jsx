import { useMemo, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ProductHero from "../components/ProductHero";
import ProductFilters from "../components/ProductFilters";
import ProductGrid from "../components/ProductGrid";
import PartnerCTA from "../components/PartnerCTA";

import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";
import p6 from "../assets/images/p6.png";
import p7 from "../assets/images/p7.png";
import p8 from "../assets/images/p8.png";
import p9 from "../assets/images/p9.png";
import p10 from "../assets/images/p10.png";
import p11 from "../assets/images/p11.png";
import p12 from "../assets/images/p12.png";
import p13 from "../assets/images/p13.png";
import p14 from "../assets/images/p14.png";
import p15 from "../assets/images/p15.png";
import p16 from "../assets/images/p16.png";
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
      image: p1,
    },
    {
      id: 2,
      title: "Typhoid IgM / IgG",
      category: "Typhoid",
      description:
        "Rapid Test Device for Qualitative Detection of Typhoid IgM Antibody in Human Serum.",
      image: p2,
    },
    {
      id: 3,
      title: "Prega Gene",
      category: "Pregnancy",
      description:
        "One Step hCG Urine Pregnancy Kit for qualitative pregnancy detection.",
      image: p3,
    },
    {
      id: 4,
      title: "HBsAg Antigen (3rd Gen)",
      category: "Infectious Diseases",
      description:
        "Rapid test for qualitative detection of Hepatitis B Surface Antigen.",
      image: p4,
    },
    {
      id: 5,
      title: "SARS-CoV-2 Antigen Rapid Test Kit",
      category: "COVID-19",
      description:
        "Rapid antigen test for qualitative detection of SARS-CoV-2 infection.",
      image: p5,
    },
    {
      id: 6,
      title: "Syphilis Antibody (IgG/IgM/IgA)",
      category: "Infectious Diseases",
      description:
        "Rapid test for qualitative detection of Syphilis antibodies.",
      image: p6,
    },
    {
      id: 7,
      title: "Malaria Pf/Pv Antigen",
      category: "Malaria",
      description:
        "Rapid diagnostic test for Plasmodium falciparum and Plasmodium vivax.",
      image: p7,
    },
    {
      id: 8,
      title: "Urogene Urine Reagent Strip",
      category: "Urinalysis",
      description:
        "Semi-quantitative urine reagent strips for routine urine analysis.",
      image: p8,
    },
    {
      id: 9,
      title: "HCV Antibody (3rd Gen)",
      category: "Hepatitis",
      description:
        "Rapid test for qualitative detection of Hepatitis C Virus antibodies.",
      image: p9,
    },
    {
      id: 10,
      title: "Dengue Combo NS1 Ag / IgM / IgG",
      category: "Dengue",
      description:
        "Rapid test for simultaneous detection of Dengue NS1 antigen and antibodies.",
      image: p10,
    },
    {
      id: 11,
      title: "Scrub Typhus IgG / IgM",
      category: "Infectious Diseases",
      description:
        "Rapid immunochromatographic assay for Scrub Typhus antibody detection.",
      image: p11,
    },
    {
      id: 12,
      title: "Leishmania IgG / IgM",
      category: "Parasitology",
      description:
        "Rapid test for qualitative detection of Leishmania antibodies.",
      image: p12,
    },
    {
      id: 13,
      title: "Sickle Cell Anemia (HbA/HbS/HbC)",
      category: "Haematology",
      description:
        "Rapid diagnostic kit for detection of abnormal haemoglobin variants.",
      image: p13,
    },
    {
      id: 14,
      title: "Leptospira IgG / IgM",
      category: "Infectious Diseases",
      description:
        "Rapid test for qualitative detection of Leptospira antibodies.",
      image: p14,
    },
    {
      id: 15,
      title: "Chikungunya IgM / IgG",
      category: "Chikungunya",
      description:
        "Rapid test for qualitative detection of Chikungunya antibodies.",
      image: p15,
    },
    {
      id: 16,
      title: "Filariasis IgG / IgM",
      category: "Parasitology",
      description:
        "Rapid diagnostic test for qualitative detection of Filariasis antibodies.",
      image: p16,
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