import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  elisaProducts,
  biochemistryProducts,
  selected,
  setSelected,
}) {
  const [showAll, setShowAll] = useState({});

  const classOrder = [
    "Class A",
    "Class B",
    "Class C",
    "Class D",
  ];

  const hasProducts =
    products.length > 0 ||
    elisaProducts.length > 0 ||
    biochemistryProducts.length > 0;

  const toggleShowAll = (productClass) => {
    setShowAll((prev) => ({
      ...prev,
      [productClass]: !prev[productClass],
    }));
  };

  return (
    <section className="bg-white pb-24 pt-6">
      <div className="mx-auto max-w-[1180px] px-6">
        {!hasProducts ? (
          <div className="py-20 text-center">
            <h2 className="text-3xl font-bold text-[#0C95A5]">
              No Products Found
            </h2>

            <p className="mt-4 text-gray-500">
              Try searching with another keyword.
            </p>
          </div>
        ) : (
          <div>
            {/* CLASS A, B, C, D PRODUCTS */}

            {classOrder.map((productClass, index) => {
              const classProducts = products.filter(
                (product) => product.class === productClass
              );

              if (classProducts.length === 0) return null;

              const isExpanded = showAll[productClass];

              return (
                <div
                  key={productClass}
                  className={
                    index !== 0
                      ? "mt-20 border-t border-[#DDECEF] pt-20"
                      : ""
                  }
                >
                  <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
                    {classProducts.map((product, productIndex) => (
                      <motion.div
                        key={product.id}
                        initial={{
                          opacity: 0,
                          x: productIndex % 2 === 0 ? -50 : 50,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                          duration: 0.6,
                          delay: (productIndex % 3) * 0.08,
                          ease: "easeOut",
                        }}
                        className={
                          productIndex >= 3 && !isExpanded
                            ? "hidden md:block"
                            : ""
                        }
                      >
                        <ProductCard
                          title={product.title}
                          description={product.description}
                          image={product.image}
                          active={selected === product.id}
                          onClick={() => setSelected(product.id)}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* MOBILE VIEW MORE */}

                  {classProducts.length > 3 && (
                    <div className="mt-8 flex justify-center md:hidden">
                      <button
                        type="button"
                        onClick={() => toggleShowAll(productClass)}
                        className="rounded-full bg-[#0C95A5] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#087985]"
                      >
                        {isExpanded ? "View Less" : "View More"}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}

            {/* ELISA KIT */}

            {elisaProducts.length > 0 && (
              <div className="mt-24 border-t border-[#DDECEF] pt-20">
                <div className="mb-12 flex items-center gap-5">
                  <h2 className="whitespace-nowrap text-[32px] font-bold tracking-[-0.02em] text-[#202020] md:text-[42px]">
                    ELISA Kit
                  </h2>

                  <div className="h-px flex-1 bg-[#E5EEF1]" />
                </div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
                  {elisaProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{
                        opacity: 0,
                        x: index % 2 === 0 ? -50 : 50,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.6,
                        delay: (index % 3) * 0.08,
                        ease: "easeOut",
                      }}
                    >
                      <ProductCard
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        active={selected === product.id}
                        onClick={() => setSelected(product.id)}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* BIOCHEMISTRY */}

            {biochemistryProducts.length > 0 && (
              <div className="mt-24 border-t border-[#DDECEF] pt-20">
                <div className="mb-12 flex items-center gap-5">
                  <h2 className="whitespace-nowrap text-[32px] font-bold tracking-[-0.02em] text-[#202020] md:text-[42px]">
                    Biochemistry
                  </h2>

                  <div className="h-px flex-1 bg-[#E5EEF1]" />
                </div>

                {/* ONLY PRODUCT NAMES - NO IMAGE */}

                <div className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
                  {biochemistryProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{
                        opacity: 0,
                        x: index % 2 === 0 ? -40 : 40,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.5,
                        delay: (index % 3) * 0.06,
                        ease: "easeOut",
                      }}
                    >
                      <div className="flex items-center gap-3 border-b border-[#E5EEF1] pb-4">
                        <span className="text-sm font-semibold text-[#22B8F4]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="text-[16px] font-semibold text-[#303030] transition-colors hover:text-[#0C95A5]">
                          {product.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}