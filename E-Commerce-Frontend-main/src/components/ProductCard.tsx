import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import type { Product } from "../types";
import { useCartStore } from "../store/useCartStore";
import { useWishlistStore } from "../store/useWishlistStore";
import { Button } from "./ui/Button";
import { toast } from "sonner";
import { useState } from "react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItemToCart = useCartStore((state) => state.addItem);
  const { addItem: addWishlist, removeItem: removeWishlist, isInWishlist } = useWishlistStore();
  const [isHovered, setIsHovered] = useState(false);

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItemToCart(product);
    toast.success(`${product.title} added to cart`);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inWishlist) {
      removeWishlist(product.id);
      toast.info(`${product.title} removed from wishlist`);
    } else {
      addWishlist(product);
      toast.success(`${product.title} added to wishlist`);
    }
  };

  const currentPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);
  const hoverImage = product.images?.length > 1 ? product.images[1] : product.thumbnail;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col rounded-2xl bg-card p-4 transition-all hover:shadow-xl dark:hover:shadow-primary/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden rounded-xl bg-muted/30">
        <Link to={`/product/${product.id}`}>
          <img
            src={isHovered ? hoverImage : product.thumbnail}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        {product.discountPercentage > 0 && (
          <div className="absolute left-3 top-3 rounded-full bg-error px-2 py-1 text-xs font-bold text-white shadow-sm">
            -{Math.round(product.discountPercentage)}%
          </div>
        )}
        <button
          onClick={handleToggleWishlist}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-transform hover:scale-110 active:scale-95 shadow-sm"
          aria-label="Toggle wishlist"
        >
          <Heart className={`h-4 w-4 ${inWishlist ? "fill-error text-error" : ""}`} />
        </button>

        <div className="absolute bottom-3 left-0 w-full px-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:block">
          <Button className="w-full shadow-md" onClick={handleAddToCart}>
            <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <span className="text-xs font-medium text-muted-foreground">{product.category}</span>
        <Link to={`/product/${product.id}`} className="hover:underline">
          <h3 className="line-clamp-1 font-semibold text-foreground">{product.title}</h3>
        </Link>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-bold">${currentPrice}</span>
          {product.discountPercentage > 0 && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
        <div className="mt-2 md:hidden">
          <Button variant="outline" size="sm" className="w-full" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
