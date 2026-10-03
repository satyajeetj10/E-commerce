import { Link } from "react-router-dom";
import { useWishlistStore } from "../store/useWishlistStore";
import { useCartStore } from "../store/useCartStore";
import { Button } from "../components/ui/Button";
import { ProductCard } from "../components/ProductCard";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Wishlist() {
  const { items, clearWishlist } = useWishlistStore();
  const addItemToCart = useCartStore((state) => state.addItem);

  const handleMoveAllToCart = () => {
    items.forEach((item) => addItemToCart(item, 1));
    clearWishlist();
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <div className="bg-muted w-24 h-24 rounded-full flex items-center justify-center mb-6">
          <Heart className="h-10 w-10 text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Save items you love to your wishlist and they will show up here.
        </p>
        <Link to="/shop">
          <Button size="lg">Explore Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 min-h-[70vh]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">My Wishlist</h1>
          <p className="text-muted-foreground mt-2">{items.length} items saved</p>
        </div>
        <div className="flex gap-4 w-full sm:w-auto">
          <Button variant="outline" className="flex-1 sm:flex-none" onClick={clearWishlist}>
            Clear All
          </Button>
          <Button className="flex-1 sm:flex-none" onClick={handleMoveAllToCart}>
            Move All to Cart
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {items.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
