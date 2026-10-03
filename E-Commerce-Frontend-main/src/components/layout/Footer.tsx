import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 py-12">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-lg font-bold">LUXE</h3>
          <p className="text-sm text-muted-foreground">
            Premium e-commerce experience offering the finest products curated just for you.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Shop</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-foreground">All Products</Link></li>
            <li><Link to="/categories" className="hover:text-foreground">Categories</Link></li>
            <li><Link to="/shop?sort=newest" className="hover:text-foreground">New Arrivals</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact Us</Link></li>
            <li><Link to="/shipping" className="hover:text-foreground">Shipping Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-foreground">Careers</Link></li>
            <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-12 flex flex-col items-center justify-between border-t px-4 pt-8 md:flex-row md:px-6">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} LUXE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
