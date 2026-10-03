import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/api";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Categories() {
  const { data: categories, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 min-h-[60vh]">
      <h1 className="text-4xl font-bold tracking-tight mb-8">All Categories</h1>
      
      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-32 rounded-xl bg-muted animate-pulse" />
          ))}
        </div>
      ) : isError ? (
        <div className="rounded-xl border border-error/20 bg-error/5 p-6 text-center text-error">
          Failed to load categories. Please try again later.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories?.map((category, index) => (
            <Link key={category} to={`/shop`}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="flex h-32 items-center justify-center rounded-xl bg-card border shadow-sm transition-all hover:border-primary hover:shadow-md"
              >
                <span className="text-lg font-medium capitalize text-center px-4">
                  {category.replace("-", " ")}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
