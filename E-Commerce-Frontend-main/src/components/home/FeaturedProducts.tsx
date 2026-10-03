import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/api";
import { ProductCard } from "../ProductCard";
import { ProductCardSkeleton } from "../ProductCardSkeleton";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export function FeaturedProducts() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["featured-products"],
    queryFn: () => getProducts(8, 0),
  });

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Trending Now</h2>
            <p className="mt-2 text-muted-foreground">The most sought-after products this week.</p>
          </div>
          <Link to="/shop">
            <Button variant="outline" className="hidden md:inline-flex">View All</Button>
          </Link>
        </div>

        {isError ? (
          <div className="rounded-xl border border-error/20 bg-error/5 p-6 text-center text-error">
            Failed to load products. Please try again later.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoading
              ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
              : data?.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>
        )}
        
        <div className="mt-8 md:hidden">
          <Link to="/shop">
            <Button variant="outline" className="w-full">View All</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
