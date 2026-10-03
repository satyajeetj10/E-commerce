import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-5xl min-h-[70vh]">
      <h1 className="text-4xl font-extrabold tracking-tight mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="text-lg text-muted-foreground mb-8">
            Have a question, feedback, or need assistance? Our team is here to help. 
            Fill out the form and we'll be in touch as soon as possible.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-muted-foreground">support@luxe.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-muted-foreground">+1 (800) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold">Office</h4>
                <p className="text-muted-foreground">123 Commerce Avenue<br/>New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card border rounded-2xl p-6 sm:p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Name</label>
              <Input required placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Email</label>
              <Input required type="email" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Subject</label>
              <Input required placeholder="How can we help?" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Message</label>
              <textarea 
                required
                rows={4}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <Button type="submit" size="lg" className="w-full mt-2">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
