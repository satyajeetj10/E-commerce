import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  { name: "Smartphones", slug: "smartphones", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60" },
  { name: "Laptops", slug: "laptops", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60" },
  { name: "Fragrances", slug: "fragrances", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&auto=format&fit=crop&q=60" },
  { name: "Skincare", slug: "skincare", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&auto=format&fit=crop&q=60" },
  { name: "Groceries", slug: "groceries", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=60" },
  { name: "Home Decoration", slug: "home-decoration", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=60" },
];

export function FeaturedCategories() {
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Shop by Category</h2>
          <p className="mt-2 text-muted-foreground">Find exactly what you're looking for.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link key={category.slug} to={`/categories`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative flex h-40 flex-col items-center justify-center overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-md"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                </div>
                <div className="relative z-10 p-4 text-center">
                  <span className="font-semibold text-white drop-shadow-md">
                    {category.name}
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
