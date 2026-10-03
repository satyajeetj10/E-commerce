import { Truck, ShieldCheck, CreditCard, Clock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    name: "Free Express Delivery",
    description: "Enjoy free express shipping on all orders over $150.",
    icon: Truck,
  },
  {
    name: "Secure Payments",
    description: "Your transactions are encrypted and 100% secure.",
    icon: ShieldCheck,
  },
  {
    name: "Flexible Financing",
    description: "Buy now, pay later with 0% interest for 6 months.",
    icon: CreditCard,
  },
  {
    name: "24/7 Premium Support",
    description: "Our dedicated concierges are always here to help you.",
    icon: Clock,
  },
];

export function Features() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted text-primary">
                <feature.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold leading-8 text-foreground">
                {feature.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
