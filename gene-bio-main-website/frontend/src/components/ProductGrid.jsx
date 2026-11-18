
import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const CLASS_ORDER = ["A", "B", "C", "D"];

export default function ProductGrid({
  products = [],
  elisaProducts = [],
  biochemistryProducts = [],
  selected,
  setSelected,
}) {
  const [showAll, setShowAll] = useState(false);

  const getProductTitle = (product) =>
    product.title || product.name || product.productName || "";

  const getProductImage = (product) =>
    product.image || product.img || product.productImage || null;

  const getProductDescription = (product) =>
    product.description || product.desc || "";

  const getProductClass = (product) =>
    String(product.class || product.category || product.productClass || "")
      .replace(/^class\s*/i, "")
      .trim()
      .toUpperCase();

  const handleSelect = (product) => {
    if (setSelected) {
      setSelected(product);
    }
  };

  const renderProductCard = (product, index, sectionIndex = 0) => {
    const title = getProductTitle(product);
    const isSelected =
      selected === product ||
      selected === title ||
      selected?.title === title ||
      selected?.name === title;

    // Prioritize only the first two images in the first section.
    const isPriorityImage = sectionIndex === 0 && index < 2;

    return (
      <motion.div
        key={product._id || product.id || `${title}-${index}`}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <ProductCard
          title={title}
          description={getProductDescription(product)}
          image={getProductImage(product)}
          active={isSelected}
          onClick={() => handleSelect(product)}
          loading={isPriorityImage ? "eager" : "lazy"}
          fetchPriority={isPriorityImage ? "high" : "auto"}
          decoding="async"
        />
      </motion.div>
    );
  };

  const groupedProducts = CLASS_ORDER.map((className) => ({
    className,
    items: products.filter(
      (product) => getProductClass(product) === className
    ),
  })).filter((group) => group.items.length > 0);

  const renderSection = (title, items, sectionIndex) => {
    if (!items.length) return null;

    const visibleItems =
      showAll || items.length <= 6 ? items : items.slice(0, 6);

    return (
      <section key={title} className="mb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#123B5D] md:text-3xl">
            {title}
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-[#0B95A5]" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((product, index) =>
            renderProductCard(product, index, sectionIndex)
          )}
        </div>

        {items.length > 6 && (
          <div className="mt-8 text-center md:hidden">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-full border border-[#0B95A5] px-8 py-3 text-sm font-semibold text-[#0B95A5] transition hover:bg-[#0B95A5] hover:text-white"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </section>
    );
  };

  return (
    <div className="w-full">
      {/* Class A, B, C and D Products */}
      {groupedProducts.map((group, index) =>
        renderSection(
          `Class ${group.className} Products`,
          group.items,
          index
        )
      )}

      {/* ELISA Products */}
      {elisaProducts.length > 0 && (
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#123B5D] md:text-3xl">
              ELISA Products
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-[#0B95A5]" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {elisaProducts.map((product, index) =>
              renderProductCard(product, index, 4)
            )}
          </div>
        </section>
      )}

      {/* Biochemistry Products */}
      {biochemistryProducts.length > 0 && (
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#123B5D] md:text-3xl">
              Biochemistry Products
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-[#0B95A5]" />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {biochemistryProducts.map((product, index) => {
              const title = getProductTitle(product);
              const isSelected =
                selected === product ||
                selected === title ||
                selected?.title === title ||
                selected?.name === title;

              return (
                <button
                  key={product._id || product.id || `${title}-${index}`}
                  type="button"
                  onClick={() => handleSelect(product)}
                  className={`rounded-xl border px-4 py-5 text-left font-semibold transition ${
                    isSelected
                      ? "border-[#178EF2] bg-[#EAF6FF] text-[#123B5D]"
                      : "border-[#9ED8E8] bg-white text-[#333] hover:border-[#0B95A5] hover:bg-[#F2FCFD]"
                  }`}
                >
                  {title}
                </button>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
