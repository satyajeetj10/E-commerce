import { Link } from "react-router-dom";
import { Search, ShoppingBag, Heart, User, Menu } from "lucide-react";
import { useCartStore } from "../../store/useCartStore";

export function Navbar() {
  const items = useCartStore((state) => state.items);
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <button className="md:hidden" aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">LUXE</span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link to="/shop" className="transition-colors hover:text-primary/80">Shop</Link>
            <Link to="/categories" className="transition-colors hover:text-primary/80">Categories</Link>
            <Link to="/about" className="transition-colors hover:text-primary/80">About</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/search" aria-label="Search" className="p-2 transition-colors hover:bg-muted rounded-full">
            <Search className="h-5 w-5" />
          </Link>
          <Link to="/wishlist" className="p-2 transition-colors hover:bg-muted rounded-full hidden sm:block">
            <Heart className="h-5 w-5" />
          </Link>
          <Link to="/profile" className="p-2 transition-colors hover:bg-muted rounded-full hidden sm:block">
            <User className="h-5 w-5" />
          </Link>
          <Link to="/cart" className="p-2 transition-colors hover:bg-muted rounded-full relative">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
