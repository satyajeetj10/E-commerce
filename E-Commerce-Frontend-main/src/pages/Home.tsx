import { Hero } from "../components/home/Hero";
import { FeaturedProducts } from "../components/home/FeaturedProducts";
import { FeaturedCategories } from "../components/home/Categories";
import { Features } from "../components/home/Features";
import { Newsletter } from "../components/home/Newsletter";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <FeaturedCategories />
      <FeaturedProducts />
      <Newsletter />
    </div>
  );
}
