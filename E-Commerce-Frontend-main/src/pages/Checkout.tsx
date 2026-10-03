import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm as useRHForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCartStore } from "../store/useCartStore";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { ArrowLeft, ShieldCheck } from "lucide-react";

const checkoutSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  zipCode: z.string().min(5, "Zip code is required"),
  cardNumber: z.string().min(16, "Invalid card number"),
  expiryDate: z.string().min(5, "Invalid expiry date (MM/YY)"),
  cvv: z.string().min(3, "Invalid CVV"),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export function Checkout() {
  const { items, getCartTotal, clearCart } = useCartStore();
  const total = getCartTotal();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useRHForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      navigate("/order-success");
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/shop">
          <Button>Back to Shop</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Link to="/cart" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Cart
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <form id="checkout-form" onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            {/* Shipping Information */}
            <section>
              <h2 className="text-xl font-bold mb-6 pb-2 border-b">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">First Name</label>
                  <Input {...register("firstName")} placeholder="John" className={errors.firstName ? "border-error" : ""} />
                  {errors.firstName && <p className="mt-1 text-xs text-error">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Last Name</label>
                  <Input {...register("lastName")} placeholder="Doe" className={errors.lastName ? "border-error" : ""} />
                  {errors.lastName && <p className="mt-1 text-xs text-error">{errors.lastName.message}</p>}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1.5">Email Address</label>
                  <Input {...register("email")} type="email" placeholder="john@example.com" className={errors.email ? "border-error" : ""} />
                  {errors.email && <p className="mt-1 text-xs text-error">{errors.email.message}</p>}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1.5">Address</label>
                  <Input {...register("address")} placeholder="123 Main St" className={errors.address ? "border-error" : ""} />
                  {errors.address && <p className="mt-1 text-xs text-error">{errors.address.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">City</label>
                  <Input {...register("city")} placeholder="New York" className={errors.city ? "border-error" : ""} />
                  {errors.city && <p className="mt-1 text-xs text-error">{errors.city.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">ZIP Code</label>
                  <Input {...register("zipCode")} placeholder="10001" className={errors.zipCode ? "border-error" : ""} />
                  {errors.zipCode && <p className="mt-1 text-xs text-error">{errors.zipCode.message}</p>}
                </div>
              </div>
            </section>

            {/* Payment Information */}
            <section>
              <h2 className="text-xl font-bold mb-6 pb-2 border-b flex items-center justify-between">
                Payment Method
                <ShieldCheck className="h-5 w-5 text-success" />
              </h2>
              <div className="bg-card border rounded-xl p-4 sm:p-6 space-y-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1.5">Card Number</label>
                  <Input {...register("cardNumber")} placeholder="0000 0000 0000 0000" className={errors.cardNumber ? "border-error" : ""} />
                  {errors.cardNumber && <p className="mt-1 text-xs text-error">{errors.cardNumber.message}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Expiry Date</label>
                    <Input {...register("expiryDate")} placeholder="MM/YY" className={errors.expiryDate ? "border-error" : ""} />
                    {errors.expiryDate && <p className="mt-1 text-xs text-error">{errors.expiryDate.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">CVV</label>
                    <Input {...register("cvv")} placeholder="123" className={errors.cvv ? "border-error" : ""} />
                    {errors.cvv && <p className="mt-1 text-xs text-error">{errors.cvv.message}</p>}
                  </div>
                </div>
              </div>
            </section>
          </form>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-card rounded-2xl border shadow-sm p-6 sticky top-24">
            <h3 className="text-lg font-bold mb-6">Order Summary</h3>
            
            <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-md bg-muted/50 overflow-hidden shrink-0">
                    <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h4 className="text-sm font-medium truncate">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-sm font-medium shrink-0">
                    ${((item.price * (1 - item.discountPercentage / 100)) * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-sm mb-6 pb-6 border-b border-t pt-6">
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
                <span className="font-medium">$0.00</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-8">
              <span className="text-base font-bold">Total</span>
              <span className="text-2xl font-bold">${total.toFixed(2)}</span>
            </div>
            
            <Button
              form="checkout-form"
              type="submit"
              size="lg"
              className="w-full relative overflow-hidden"
              isLoading={isProcessing}
            >
              {isProcessing ? "Processing..." : `Pay $${total.toFixed(2)}`}
            </Button>
            
            <div className="mt-4 flex flex-col gap-2 items-center text-xs text-muted-foreground text-center">
              <div className="flex items-center gap-1"><ShieldCheck className="h-4 w-4" /> Payments are secure and encrypted</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
