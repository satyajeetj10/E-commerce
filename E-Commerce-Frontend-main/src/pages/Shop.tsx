import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts, getCategories, getProductsByCategory } from "../services/api";
import { ProductCard } from "../components/ProductCard";
import { ProductCardSkeleton } from "../components/ProductCardSkeleton";
import { Button } from "../components/ui/Button";

export function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [skip, setSkip] = useState(0);
  const limit = 12;

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const { data: productsData, isLoading, isError } = useQuery({
    queryKey: ["products", selectedCategory, skip],
    queryFn: () =>
      selectedCategory === "all"
        ? getProducts(limit, skip)
        : getProductsByCategory(selectedCategory, limit, skip),
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSkip(0);
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-24">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <div className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto pr-2">
              <button
                onClick={() => handleCategoryChange("all")}
                className={`text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  selectedCategory === "all"
                    ? "bg-primary text-primary-foreground font-medium"
                    : "hover:bg-muted text-muted-foreground"
                }`}
              >
                All Products
              </button>
              {categories?.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`text-left px-3 py-2 rounded-md text-sm transition-colors capitalize ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground font-medium"
                      : "hover:bg-muted text-muted-foreground"
                  }`}
                >
                  {cat.replace("-", " ")}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold capitalize">
              {selectedCategory === "all" ? "All Products" : selectedCategory.replace("-", " ")}
            </h1>
            <p className="text-sm text-muted-foreground">
              Showing {productsData?.products.length || 0} of {productsData?.total || 0} products
            </p>
          </div>

          {isError ? (
            <div className="rounded-xl border border-error/20 bg-error/5 p-6 text-center text-error">
              Failed to load products. Please try again later.
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {isLoading
                  ? Array.from({ length: 12 }).map((_, i) => <ProductCardSkeleton key={i} />)
                  : productsData?.products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
              </div>

              {productsData && productsData.total > limit && (
                <div className="mt-12 flex justify-center gap-2">
                  <Button
                    variant="outline"
                    disabled={skip === 0}
                    onClick={() => setSkip(Math.max(0, skip - limit))}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    disabled={skip + limit >= productsData.total}
                    onClick={() => setSkip(skip + limit)}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
