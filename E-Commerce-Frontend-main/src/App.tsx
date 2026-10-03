import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { ProductDetails } from "./pages/ProductDetails";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Wishlist } from "./pages/Wishlist";
import { Categories } from "./pages/Categories";
import { SearchResults } from "./pages/SearchResults";
import { UserProfile } from "./pages/UserProfile";
import { OrderSuccess } from "./pages/OrderSuccess";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { FAQ } from "./pages/FAQ";
import { NotFound } from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="categories" element={<Categories />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="order-success" element={<OrderSuccess />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
