import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/api";
import { useCartStore } from "../store/useCartStore";
import { useWishlistStore } from "../store/useWishlistStore";
import { Button } from "../components/ui/Button";
import { Heart, ShoppingBag, Star, ShieldCheck, Truck, ArrowLeft, Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id as string),
    enabled: !!id,
  });

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const addItemToCart = useCartStore((state) => state.addItem);
  const { addItem: addWishlist, removeItem: removeWishlist, isInWishlist } = useWishlistStore();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square bg-muted animate-pulse rounded-2xl" />
          <div className="space-y-6">
            <div className="h-10 bg-muted animate-pulse rounded w-3/4" />
            <div className="h-6 bg-muted animate-pulse rounded w-1/4" />
            <div className="h-32 bg-muted animate-pulse rounded w-full" />
            <div className="h-12 bg-muted animate-pulse rounded w-1/2" />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/shop">
          <Button>Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const currentPrice = product.price * (1 - product.discountPercentage / 100);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addItemToCart(product, quantity);
    toast.success(`${quantity} x ${product.title} added to cart`);
  };

  const handleToggleWishlist = () => {
    if (inWishlist) {
      removeWishlist(product.id);
      toast.info(`Removed from wishlist`);
    } else {
      addWishlist(product);
      toast.success(`Added to wishlist`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Link to="/shop" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Gallery */}
        <div className="flex flex-col-reverse lg:flex-row gap-4">
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:max-h-[600px] pb-2 lg:pb-0 scrollbar-hide shrink-0">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative w-20 h-20 rounded-xl overflow-hidden bg-muted/30 border-2 transition-colors shrink-0 ${
                  activeImage === idx ? "border-primary" : "border-transparent"
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <div className="flex-1 aspect-square md:aspect-[4/3] lg:aspect-square bg-muted/10 rounded-2xl overflow-hidden relative">
            <motion.img
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={product.images[activeImage]}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-2">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {product.brand}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            {product.title}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? "text-warning fill-warning"
                      : "text-muted fill-muted"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                ({product.reviews?.length || 0} reviews)
              </span>
            </div>
            <span className="text-sm px-2 py-1 bg-muted rounded-md text-muted-foreground font-medium">
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <div className="flex items-end gap-3 mb-8">
            <span className="text-4xl font-bold">${currentPrice.toFixed(2)}</span>
            {product.discountPercentage > 0 && (
              <>
                <span className="text-lg text-muted-foreground line-through mb-1">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm font-bold text-error mb-1">
                  {Math.round(product.discountPercentage)}% OFF
                </span>
              </>
            )}
          </div>

          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="p-3 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            
            <Button size="lg" className="flex-1 h-12 text-base" onClick={handleAddToCart}>
              <ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className={`h-12 w-12 px-0 shrink-0 ${inWishlist ? "border-error text-error hover:bg-error/10" : ""}`}
              onClick={handleToggleWishlist}
            >
              <Heart className={`h-5 w-5 ${inWishlist ? "fill-error text-error" : ""}`} />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t pt-8">
            <div className="flex items-start gap-3">
              <Truck className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium">Free Shipping</h4>
                <p className="text-sm text-muted-foreground mt-1">On orders over $150</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium">2 Year Warranty</h4>
                <p className="text-sm text-muted-foreground mt-1">Full coverage guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reviews Section */}
      {product.reviews && product.reviews.length > 0 && (
        <div className="mt-24 border-t pt-16">
          <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.reviews.map((review, idx) => (
              <div key={idx} className="bg-card border rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "text-warning fill-warning"
                          : "text-muted fill-muted"
                      }`}
                    />
                  ))}
                </div>
                <h4 className="font-semibold mb-2">{review.reviewerName}</h4>
                <p className="text-sm text-muted-foreground">{review.comment}</p>
                <p className="text-xs text-muted-foreground mt-4 opacity-50">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
