import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  elisaProducts,
  biochemistryProducts,
  selected,
  setSelected,
}) {
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
                    {classProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        active={selected === product.id}
                        onClick={() => setSelected(product.id)}
                      />
                    ))}
                  </div>
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
                  {elisaProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      title={product.title}
                      description={product.description}
                      image={product.image}
                      active={selected === product.id}
                      onClick={() => setSelected(product.id)}
                    />
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
                    <div
                      key={product.id}
                      className="flex items-center gap-3 border-b border-[#E5EEF1] pb-4"
                    >
                      <span className="text-sm font-semibold text-[#22B8F4]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="text-[16px] font-semibold text-[#303030] transition-colors hover:text-[#0C95A5]">
                        {product.title}
                      </h3>
                    </div>
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