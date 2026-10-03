import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import { Button } from "../components/ui/Button";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Cart() {
  const { items, removeItem, updateQuantity, getCartTotal } = useCartStore();
  const total = getCartTotal();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <div className="bg-muted w-24 h-24 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="h-10 w-10 text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Looks like you haven't added anything to your cart yet. Discover our premium collection and find something you love.
        </p>
        <Link to="/shop">
          <Button size="lg">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 min-h-[70vh]">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
            <div className="hidden sm:grid sm:grid-cols-12 gap-4 p-4 border-b bg-muted/30 text-sm font-medium text-muted-foreground">
              <div className="sm:col-span-6">Product</div>
              <div className="sm:col-span-3 text-center">Quantity</div>
              <div className="sm:col-span-2 text-right">Price</div>
              <div className="sm:col-span-1"></div>
            </div>

            <ul className="divide-y">
              <AnimatePresence>
                {items.map((item) => {
                  const currentPrice = item.price * (1 - item.discountPercentage / 100);
                  return (
                    <motion.li
                      key={item.id}
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center"
                    >
                      <div className="sm:col-span-6 flex gap-4 items-center">
                        <Link to={`/product/${item.id}`} className="shrink-0 bg-muted/30 rounded-lg overflow-hidden w-20 h-20 sm:w-24 sm:h-24">
                          <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                        </Link>
                        <div className="flex flex-col">
                          <Link to={`/product/${item.id}`} className="font-semibold text-foreground hover:underline line-clamp-2">
                            {item.title}
                          </Link>
                          <span className="text-sm text-muted-foreground mt-1 capitalize">{item.category}</span>
                          <span className="sm:hidden text-sm font-bold mt-2">${currentPrice.toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="sm:col-span-3 flex justify-start sm:justify-center">
                        <div className="flex items-center border rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, Math.min(item.stock, item.quantity + 1))}
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div className="hidden sm:block sm:col-span-2 text-right font-bold">
                        ${(currentPrice * item.quantity).toFixed(2)}
                      </div>

                      <div className="sm:col-span-1 flex justify-end">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-muted-foreground hover:text-error hover:bg-error/10 rounded-full transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </motion.li>
                  );
                })}
              </AnimatePresence>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-card rounded-2xl border shadow-sm p-6 sticky top-24">
            <h3 className="text-lg font-bold mb-6">Order Summary</h3>
            
            <div className="space-y-4 text-sm mb-6 pb-6 border-b">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-success font-medium">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Taxes</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-8">
              <span className="text-base font-bold">Total</span>
              <span className="text-2xl font-bold">${total.toFixed(2)}</span>
            </div>
            
            <Link to="/checkout">
              <Button size="lg" className="w-full">
                Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            
            <div className="mt-6 flex justify-center items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4" /> Secure Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
