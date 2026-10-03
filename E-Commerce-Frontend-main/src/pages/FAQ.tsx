import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our support team to initiate a return."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business day delivery. International shipping times vary by location."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times are calculated at checkout based on your location."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you will receive a confirmation email with a tracking number. You can also view your order status in your Account profile."
  },
  {
    question: "Are my payment details secure?",
    answer: "Absolutely. We use industry-standard encryption protocols to ensure that your personal and payment information is kept 100% secure."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-3xl min-h-[70vh]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground">Find answers to common questions about our products and services.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-xl bg-card overflow-hidden transition-all hover:border-primary/50">
            <button
              onClick={() => toggleFaq(index)}
              className="flex w-full items-center justify-between p-5 text-left font-semibold focus:outline-none"
            >
              <span className="text-lg">{faq.question}</span>
              <ChevronDown 
                className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${openIndex === index ? "rotate-180 text-primary" : ""}`} 
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-5 pb-5 text-muted-foreground border-t pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
