import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function OrderSuccess() {
  return (
    <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
      >
        <CheckCircle2 className="h-24 w-24 text-success mb-8 mx-auto" />
      </motion.div>
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-extrabold tracking-tight mb-4"
      >
        Order Confirmed!
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-muted-foreground mb-8 max-w-md"
      >
        Thank you for your purchase. We've received your order and will begin processing it right away. An email receipt has been sent to you.
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex gap-4"
      >
        <Link to="/shop">
          <Button size="lg">Continue Shopping</Button>
        </Link>
        <Link to="/profile">
          <Button size="lg" variant="outline">View Order Status</Button>
        </Link>
      </motion.div>
    </div>
  );
}
