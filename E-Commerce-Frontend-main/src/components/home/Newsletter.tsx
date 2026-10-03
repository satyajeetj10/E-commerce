import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { toast } from "sonner";
import { motion } from "framer-motion";

export function Newsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Successfully subscribed to our newsletter!");
  };

  return (
    <section className="bg-primary py-16 text-primary-foreground sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join the VIP list</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-primary-foreground/80">
            Sign up for our newsletter to receive exclusive offers, early access to new collections, and styling tips.
          </p>
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md gap-x-4">
            <Input
              type="email"
              required
              placeholder="Enter your email address"
              className="min-w-0 flex-auto bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-white/20"
            />
            <Button type="submit" variant="secondary" className="flex-none">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
