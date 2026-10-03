import { useState } from "react";
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, CheckCircle, Truck, RefreshCw, Headphones, CreditCard } from "lucide-react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30; 
    const y = (clientY / innerHeight - 0.5) * 30; 
    setMousePosition({ x, y });
  };

  return (
    <section 
      className="relative w-full min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-[#D4AF37] selection:text-black flex flex-col font-sans"
      onMouseMove={handleMouseMove}
    >
      {/* Fonts Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@300;400;500;700;900&display=swap');
          .font-playfair { font-family: 'Playfair Display', serif; }
          .font-inter { font-family: 'Inter', sans-serif; }
        `}
      </style>

      {/* 1. Cinematic Background & Luxury Lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Soft vignette overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_100%)] opacity-90 z-10" />
        
        {/* Luxury spotlight coming from top right */}
        <div className="absolute -top-[20%] right-[10%] w-[60vw] h-[60vw] bg-white/[0.03] rounded-full blur-[130px] mix-blend-screen" />
        
        {/* Ambient gold glow around product area */}
        <div className="absolute top-[30%] right-[20%] w-[40vw] h-[40vw] bg-[#D4AF37]/[0.05] rounded-full blur-[100px] mix-blend-screen" />
        
        {/* Deep noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay z-10"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
      </div>

      {/* Main Grid Container */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-12 flex-1 flex flex-col justify-center min-h-[90vh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center flex-1 py-20 lg:py-0">
          
          {/* LEFT SIDE: Editorial Typography & Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="h-[1px] w-6 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.3em] uppercase font-inter">
                New Collection 2026
              </span>
            </motion.div>

            {/* Huge Mixed Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-2 mb-8"
            >
              <span className="text-6xl sm:text-7xl lg:text-[5.5rem] font-inter font-black tracking-tighter text-white uppercase leading-[0.9]">
                Timeless
              </span>
              <span className="text-6xl sm:text-7xl lg:text-[6rem] font-playfair italic text-[#D4AF37] leading-[0.9] ml-8 lg:ml-12 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                Luxury
              </span>
              <span className="text-6xl sm:text-7xl lg:text-[5.5rem] font-inter font-black tracking-tighter text-white uppercase leading-[0.9]">
                Made
              </span>
              <span className="text-6xl sm:text-7xl lg:text-[6rem] font-playfair italic text-[#D4AF37] leading-[0.9] ml-8 lg:ml-12 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                Modern
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-gray-400 text-lg font-light tracking-wide max-w-sm mb-12 border-l border-white/10 pl-6"
            >
              Redefining elegance for the modern era. Discover our most exclusive pieces crafted with unparalleled precision.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <Link to="/shop">
                <button className="group relative flex h-14 w-full sm:w-auto items-center justify-center gap-3 rounded-sm bg-white px-10 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.4)] overflow-hidden">
                  <span className="relative z-10 tracking-widest uppercase">Explore</span>
                  <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
              <Link to="/categories">
                <button className="group relative flex h-14 w-full sm:w-auto items-center justify-center rounded-sm bg-transparent border border-white/20 px-10 text-sm font-bold text-white transition-all duration-300 hover:bg-white/5 hover:-translate-y-1 hover:border-[#D4AF37]/50">
                  <span className="tracking-widest uppercase">Collections</span>
                </button>
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Customer" className="h-10 w-10 rounded-full border border-black/50 grayscale hover:grayscale-0 transition-all object-cover shadow-lg" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Customer" className="h-10 w-10 rounded-full border border-black/50 grayscale hover:grayscale-0 transition-all object-cover shadow-lg" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Customer" className="h-10 w-10 rounded-full border border-black/50 grayscale hover:grayscale-0 transition-all object-cover shadow-lg" />
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-3 w-3 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                  <span className="text-white text-xs font-bold ml-1 font-inter">4.9/5</span>
                </div>
                <div className="text-[10px] text-gray-500 tracking-widest uppercase font-inter">
                  50K+ Customers
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Product Showcase with Pedestal */}
          <div className="lg:col-span-7 relative h-[60vh] lg:h-[80vh] w-full hidden md:flex items-center justify-center z-10 perspective-1000">
            
            <motion.div 
              className="relative w-full h-full flex flex-col items-center justify-center"
              style={{
                x: mousePosition.x * -1,
                y: mousePosition.y * -1,
              }}
            >
              {/* Product */}
              <motion.img
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop"
                alt="Luxury Product"
                className="relative z-20 w-[80%] max-w-[500px] h-auto object-contain mix-blend-screen drop-shadow-[0_40px_60px_rgba(0,0,0,1)] scale-110"
                style={{ filter: "brightness(1.1) contrast(1.1) grayscale(0.2)" }}
              />

              {/* The Pedestal / Stage (Below the product) */}
              <div className="absolute bottom-[10%] w-[60%] h-[40px] bg-gradient-to-t from-white/10 to-transparent rounded-[100%] blur-sm z-0 transform rotate-x-[60deg]" />
              <div className="absolute bottom-[12%] w-[70%] h-[30px] border border-[#D4AF37]/20 rounded-[100%] z-10 opacity-50 transform rotate-x-[60deg]" />
              <div className="absolute bottom-[14%] w-[50%] h-[80px] bg-[#D4AF37]/[0.15] rounded-[100%] blur-[40px] z-0" />
              
              {/* Reflection on Pedestal */}
              <motion.img
                animate={{ y: [0, 15, 0], opacity: [0.2, 0.3, 0.2] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop"
                alt="Reflection"
                className="absolute bottom-[-10%] z-0 w-[80%] max-w-[500px] h-auto object-contain mix-blend-screen blur-[6px] rotate-180 scale-110"
                style={{ transform: "scaleY(-1)", maskImage: "linear-gradient(to top, transparent 60%, black 100%)" }}
              />

              {/* Floating Badges */}
              
              {/* Badge 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                transition={{ opacity: { duration: 0.8, delay: 0.8 }, y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0 } }}
                className="absolute top-[20%] left-[-5%] z-30"
                style={{ x: mousePosition.x * 2, y: mousePosition.y * 3 }}
              >
                <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-sm p-3 flex items-center gap-3 shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
                  <div className="h-8 w-8 bg-[#D4AF37]/10 flex items-center justify-center">
                    <Shield className="h-4 w-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-widest font-inter">100% Authentic</div>
                  </div>
                </div>
              </motion.div>

              {/* Badge 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
                transition={{ opacity: { duration: 0.8, delay: 1 }, y: { repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 } }}
                className="absolute bottom-[25%] right-[-5%] z-30"
                style={{ x: mousePosition.x * -3, y: mousePosition.y * -2 }}
              >
                <div className="bg-black/60 backdrop-blur-xl border border-[#D4AF37]/30 rounded-sm p-3 flex items-center gap-3 shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
                  <div className="h-8 w-8 bg-[#D4AF37]/10 flex items-center justify-center">
                    <Star className="h-4 w-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-widest font-inter">Limited Edition</div>
                  </div>
                </div>
              </motion.div>

              {/* Review Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                transition={{ opacity: { duration: 0.8, delay: 1.2 }, y: { repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 } }}
                className="absolute top-[40%] right-[-10%] z-30"
                style={{ x: mousePosition.x * 1.5, y: mousePosition.y * 4 }}
              >
                <div className="bg-white/5 backdrop-blur-lg border border-white/5 rounded-sm p-4 flex items-center gap-3 shadow-2xl">
                  <div className="text-[#D4AF37] font-playfair text-3xl italic font-bold">"</div>
                  <div>
                    <div className="flex mb-1">
                      {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-2 w-2 fill-[#D4AF37] text-[#D4AF37]" />)}
                    </div>
                    <div className="text-[10px] font-light text-gray-300 w-28 italic">Absolutely stunning craftsmanship.</div>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust Strip (Bottom of Hero) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="relative z-20 w-full border-t border-white/5 bg-[#030303]/80 backdrop-blur-md mt-auto py-5"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-wrap justify-between items-center gap-4 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-400 font-inter">
          <div className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors cursor-pointer">
            <CheckCircle className="h-4 w-4" /> Premium Quality
          </div>
          <div className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors cursor-pointer">
            <CreditCard className="h-4 w-4" /> Secure Payment
          </div>
          <div className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors cursor-pointer">
            <Truck className="h-4 w-4" /> Free Shipping
          </div>
          <div className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors cursor-pointer hidden md:flex">
            <RefreshCw className="h-4 w-4" /> Easy Returns
          </div>
          <div className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors cursor-pointer hidden lg:flex">
            <Headphones className="h-4 w-4" /> 24/7 Support
          </div>
        </div>
      </motion.div>
    </section>
  );
}
