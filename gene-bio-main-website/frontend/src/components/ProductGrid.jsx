import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  selected,
  setSelected,
}) {
  return (
    <section className="bg-white pb-24 pt-6">
      <div className="mx-auto max-w-[1180px] px-6">

        {products.length === 0 ? (
          <div className="py-20 text-center">

            <h2 className="text-3xl font-bold text-[#0C95A5]">
              No Products Found
            </h2>

            <p className="mt-4 text-gray-500">
              Try searching with another keyword.
            </p>

          </div>
        ) : (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">

            {products.map((product) => (
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
        )}

      </div>
    </section>
  );
}