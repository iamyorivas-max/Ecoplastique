import React from 'react';
import { ShoppingCart, Phone, Truck, ShieldCheck, Headphones, Home, Search, User } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <>
      <div className="bg-[#1e293b] text-white py-2 px-4 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em]">
          Livraison gratuite partout au Maroc sur tous les produits
        </p>
      </div>
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          <button className="p-2 -ml-2 text-slate-800" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h10M4 18h16" />
            </svg>
          </button>
          
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-primary rotate-45 flex items-center justify-center">
                <div className="w-3 h-3 bg-primary"></div>
              </div>
            </div>
            <span className="text-3xl font-black tracking-tighter text-slate-900">
              Ecoplastique
            </span>
          </Link>
          
          <div className="relative p-2 text-slate-800">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute top-1 right-1 bg-primary text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full pointer-events-none">
              0
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

const slides = [
  {
    title: "TOP TRENDS",
    subtitle: "NEW ARRIVALS",
    suffix: "Collection",
    desc: "International Delivery From Just $99.00 !",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    color: "bg-[#FFDA79]",
    textColor: "text-slate-900"
  },
  {
    title: "SUMMER SALE",
    subtitle: "EXCLUSIVE DEALS",
    suffix: "Up to 50% Off",
    desc: "Update your wardrobe with the latest styles.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
    color: "bg-[#81ecec]",
    textColor: "text-slate-900"
  },
  {
    title: "HOME COMFORT",
    subtitle: "PREMIUM LITERIE",
    suffix: "New Design",
    desc: "Discover the secret of a perfect night sleep.",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop",
    color: "bg-[#fab1a0]",
    textColor: "text-white"
  },
  {
    title: "TECH SAVVY",
    subtitle: "MODERN LIVING",
    suffix: "Smart Solutions",
    desc: "Innovative products for your daily comfort.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    color: "bg-[#dfe6e9]",
    textColor: "text-slate-900"
  }
];

export function Hero() {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden h-[550px] md:h-[650px]">
      <div className="flex h-full transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide, i) => (
          <div key={i} className={`min-w-full h-full relative ${slide.color}`}>
            {/* Background Image - Full Cover */}
            <div className="absolute inset-0">
              <img src={slide.image} className="w-full h-full object-cover" alt={slide.subtitle} />
              {/* Overlay for contrast */}
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-transparent to-black/30"></div>
            </div>

            <div className="max-w-7xl mx-auto h-full flex items-center justify-center md:justify-end relative z-10 px-8">
              <div className="flex flex-col items-center md:items-end text-center md:text-right max-w-xl">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${slide.textColor} opacity-90 mb-4 drop-shadow-sm`}>{slide.title}</span>
                <h2 className={`text-5xl md:text-8xl font-black ${slide.textColor} leading-[0.8] tracking-tighter mb-2 drop-shadow-md`}>{slide.subtitle}</h2>
                <h3 className={`text-2xl md:text-4xl font-black ${slide.textColor} opacity-90 mb-6 drop-shadow-sm`}>{slide.suffix}</h3>
                <p className={`text-xs md:text-sm italic font-medium ${slide.textColor} opacity-80 mb-10 max-w-xs md:max-w-none`}>{slide.desc}</p>
                <a href="#products" className="inline-block bg-primary text-white px-12 py-5 rounded-md font-bold text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 hover:scale-105 transition-all active:scale-95">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination dots precisely as requested */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full border-2 border-white transition-all ${current === i ? "bg-white scale-125" : "bg-transparent opacity-50"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export function Benefits() {
  const features = [
    {
      title: "Livraison Rapide",
      description: "Expédition sous 24/48h",
      icon: <Truck className="w-5 h-5" />
    },
    {
      title: "Paiement Simple",
      description: "Cash à la livraison",
      icon: <ShoppingCart className="w-5 h-5" />
    },
    {
      title: "Qualité Premium",
      description: "Produits certifiés",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: "Support 7j/7",
      description: "Conseils via WhatsApp",
      icon: <Headphones className="w-5 h-5" />
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-sm font-black uppercase text-slate-800 tracking-tight">{feature.title}</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CategoryLinks() {
  const categories = [
    { 
      name: "Accessories", 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      name: "Bags", 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-row">
        {categories.map((cat, i) => (
          <div key={i} className="flex-1 flex flex-col items-center justify-center py-12 border-r border-slate-100 last:border-r-0 hover:bg-slate-50 transition-colors cursor-pointer group">
            <div className="text-slate-900 mb-4 group-hover:scale-110 transition-transform">
              {cat.icon}
            </div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 border-b-2 border-transparent group-hover:border-slate-900 transition-all pb-1">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100 md:hidden flex justify-around items-center h-20 px-4 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
      <Link to="/" className="flex flex-col items-center gap-1.5 text-primary">
        <Home className="w-6 h-6" strokeWidth={1.5} />
        <span className="text-[9px] font-bold uppercase tracking-widest">Home</span>
      </Link>
      <button className="flex flex-col items-center gap-1.5 text-slate-400">
        <Search className="w-6 h-6" strokeWidth={1.5} />
        <span className="text-[9px] font-bold uppercase tracking-widest">Search</span>
      </button>
      <button className="flex flex-col items-center gap-1.5 text-slate-400 relative">
        <ShoppingCart className="w-6 h-6" strokeWidth={1.5} />
        <span className="absolute -top-1 -right-1 bg-primary text-white text-[8px] font-black w-4 h-4 flex items-center justify-center rounded-full">0</span>
        <span className="text-[9px] font-bold uppercase tracking-widest">Cart</span>
      </button>
      <button className="flex flex-col items-center gap-1.5 text-slate-400">
        <User className="w-6 h-6" strokeWidth={1.5} />
        <span className="text-[9px] font-bold uppercase tracking-widest">My Account</span>
      </button>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]">À Propos</h4>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-[10px] font-bold">E</div>
              <span className="text-lg font-black uppercase tracking-tighter">ECOPLASTIQUE</span>
            </div>
            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs">
              Votre partenaire pour un foyer plus confortable et mieux protégé. Spécialiste du sur-mesure au Maroc.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 border-slate-800 md:border-l md:pl-12 lg:pl-20">
            <h4 className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]">Navigation</h4>
            <ul className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest">
              <li><Link to="/" className="text-primary hover:text-white transition-colors">Accueil</Link></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Produits</a></li>
              <li><a href="#benefits" className="hover:text-primary transition-colors">Avantages</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]">Contact</h4>
            <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-slate-300">
              <span className="hover:text-primary transition-colors cursor-pointer">Contact@ecoplastique.ma</span>
              <span className="hover:text-primary transition-colors cursor-pointer">+212 600 000 000</span>
              <div className="pt-4">
                <div className="bg-slate-800 p-4 rounded-2xl inline-flex items-center gap-6">
                   <span className="text-[10px] font-medium leading-none text-slate-400">Des questions ?</span>
                   <a 
                    href="https://wa.me/212600000000"
                    className="bg-white text-slate-900 px-4 py-2 rounded-full text-[10px] font-black uppercase hover:scale-105 transition-transform"
                   >
                     Chatter
                   </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
