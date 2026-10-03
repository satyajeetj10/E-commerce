import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { searchProducts } from "../services/api";
import { ProductCard } from "../components/ProductCard";
import { ProductCardSkeleton } from "../components/ProductCardSkeleton";
import { Search } from "lucide-react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchResults() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [localQuery, setLocalQuery] = useState(initialQuery);
  const navigate = useNavigate();

  const { data: productsData, isLoading, isError } = useQuery({
    queryKey: ["search", initialQuery],
    queryFn: () => searchProducts(initialQuery),
    enabled: !!initialQuery,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (localQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(localQuery)}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 min-h-[60vh]">
      <div className="max-w-2xl mx-auto mb-12">
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            type="search"
            placeholder="Search for products..."
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            className="flex-1"
            autoFocus
          />
          <Button type="submit">
            <Search className="h-4 w-4 mr-2" /> Search
          </Button>
        </form>
      </div>

      {initialQuery ? (
        <>
          <h1 className="text-2xl font-bold mb-6">
            Search results for "{initialQuery}"
          </h1>

          {isError ? (
            <div className="rounded-xl border border-error/20 bg-error/5 p-6 text-center text-error">
              Failed to load search results. Please try again later.
            </div>
          ) : isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)}
            </div>
          ) : productsData?.products.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-20" />
              <p className="text-xl font-semibold text-foreground">No products found</p>
              <p>Try adjusting your search or browse our categories.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {productsData?.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-20 text-muted-foreground">
          <Search className="h-12 w-12 mx-auto mb-4 opacity-20" />
          <p className="text-xl font-semibold text-foreground">Start Searching</p>
          <p>Type a keyword above to find products.</p>
        </div>
      )}
    </div>
  );
}
