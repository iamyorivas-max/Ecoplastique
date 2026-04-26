import React from 'react';
import { ShoppingCart, Phone, Truck, ShieldCheck, Headphones } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <>
      <div className="bg-primary text-black py-2 px-4 text-center border-b border-black">
        <p className="text-[9px] font-black uppercase tracking-[0.4em]">
          SYSTEM STATUS: FREE SHIPPING ENABLED // MOROCCO WIDE
        </p>
      </div>
      <header className="sticky top-0 z-50 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <span className="text-xl font-display font-bold tracking-tighter text-white">
              ECO<span className="text-primary tracking-normal">PLASTIQUE</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            <Link to="/" className="hover:text-primary transition-colors">Index</Link>
            <a href="#products" className="hover:text-primary transition-colors">Catalog</a>
            <a href="#benefits" className="hover:text-primary transition-colors">Specs</a>
          </nav>

          <div className="flex items-center gap-6">
            <a 
              href="https://wa.me/212600000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-3 border border-zinc-800 px-6 py-2.5 text-[10px] font-black uppercase tracking-widest hover:border-primary hover:text-primary transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Support</span>
            </a>
            <Link 
              to="/#products"
              className="md:hidden text-primary"
            >
              <ShoppingCart className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-32 lg:pb-40 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="sm:text-center md:max-w-4xl md:mx-auto lg:col-span-8 lg:text-left"
          >
            <div className="inline-block border border-primary text-primary px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Premium Medical & Home OS
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold text-white leading-[0.85] mb-10 tracking-tighter">
              HARDWARE <br/> FOR <span className="text-primary italic">LIVING</span>
            </h1>
            <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-xl sm:mx-auto lg:mx-0 uppercase tracking-tight">
              High-performance orthopedic equipment and custom protection systems. engineered in Morocco.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-6">
              <a
                href="#products"
                className="bg-primary text-black px-12 py-5 font-black text-xs uppercase tracking-[0.3em] hover:bg-white transition-all text-center inline-block shadow-brutalist active:translate-x-1 active:translate-y-1"
              >
                Access Catalog
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mt-20 relative lg:mt-0 lg:col-span-4 hidden lg:block"
          >
            <div className="relative aspect-[4/5] bg-zinc-900 border-4 border-zinc-800 overflow-hidden shadow-brutalist">
              <img
                className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity"
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop"
                alt="Product High Tech"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  const features = [
    {
      title: "Logistics [01]",
      description: "Priority delivery across 12 zones.",
      icon: <Truck className="w-5 h-5" />
    },
    {
      title: "Security [02]",
      description: "Payment verified on reception.",
      icon: <ShoppingCart className="w-5 h-5" />
    },
    {
      title: "Quality [03]",
      description: "Industrial grade certifications.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: "Support [04]",
      description: "24/7 technical assistance line.",
      icon: <Headphones className="w-5 h-5" />
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-zinc-950 text-zinc-100 border-y border-zinc-800 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-zinc-800">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col gap-8 p-10 border-r border-b border-zinc-800 hover:bg-zinc-900 transition-colors group">
              <div className="text-primary w-12 h-12 flex items-center justify-center border border-zinc-800 group-hover:border-primary transition-colors">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-primary">{feature.title}</h3>
                <p className="text-zinc-500 font-bold uppercase text-[11px] leading-tight">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-24 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-display font-bold tracking-tighter">
                ECO<span className="text-primary">PLASTIQUE</span>
              </span>
            </div>
            <p className="text-zinc-500 text-xs font-medium uppercase leading-relaxed max-w-xs tracking-tight">
              Industrial grade home comfort systems. Engineered for durability. Delivered nationwide.
            </p>
          </div>
          
          <div className="flex flex-col gap-10 border-zinc-900 md:border-l md:pl-20">
            <h4 className="text-[10px] font-black uppercase text-zinc-600 tracking-[0.4em]">Directory</h4>
            <ul className="flex flex-col gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              <li><Link to="/" className="text-white hover:text-primary transition-colors">Core Collection</Link></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Warehouse</a></li>
              <li><a href="#benefits" className="hover:text-primary transition-colors">Protocol</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-10">
            <h4 className="text-[10px] font-black uppercase text-zinc-600 tracking-[0.4em]">Comms</h4>
            <div className="flex flex-col gap-6 text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-400">
              <span className="hover:text-primary transition-colors cursor-pointer">ADMIN@ECOPLASTIQUE.MA</span>
              <div className="flex flex-col gap-2">
                <span className="text-[9px] text-zinc-600 uppercase tracking-widest font-black">Hotline / WhatsApp</span>
                <span className="text-2xl font-display font-bold text-white tracking-tighter">+212 600 000 000</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-32 pt-10 border-t border-zinc-900 text-center">
            <p className="text-[9px] font-black text-zinc-700 uppercase tracking-[0.5em]">
                MOD-2026 // ALL RIGHTS RESERVED // ECOPLASTIQUE.
            </p>
        </div>
      </div>
    </footer>
  );
}
