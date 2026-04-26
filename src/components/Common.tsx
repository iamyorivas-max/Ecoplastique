import React from 'react';
import { ShoppingCart, Phone, Truck, ShieldCheck, Headphones } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <>
      <div className="bg-stone-900 text-stone-100 py-2.5 px-4 text-center border-b border-stone-800">
        <p className="text-[10px] font-medium uppercase tracking-[0.4em]">
          L'excellence du confort • Livraison Gratuite partout au Maroc
        </p>
      </div>
      <header className="sticky top-0 z-50 bg-stone-50/80 backdrop-blur-xl border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20 md:h-24">
          <Link to="/" className="flex items-center gap-3">
            <span className="text-2xl font-serif italic font-bold tracking-tighter text-stone-900">
              Ecoplastique<span className="text-primary italic">.</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">
            <Link to="/" className="text-stone-900 border-b border-stone-900 pb-1">Collection</Link>
            <a href="#products" className="hover:text-primary transition-colors">Boutique</a>
            <a href="#benefits" className="hover:text-primary transition-colors">Engagement</a>
          </nav>

          <div className="flex items-center gap-6">
            <a 
              href="https://wa.me/212600000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-3 border border-stone-300 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-primary hover:text-primary transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Assistance</span>
            </a>
            <Link 
              to="/#products"
              className="md:hidden text-stone-900"
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
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-32 lg:pb-40 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="sm:text-center md:max-w-3xl md:mx-auto lg:col-span-7 lg:text-left"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-light text-stone-900 leading-[0.9] mb-10">
              Votre foyer deserve <br/> l'<span className="italic font-medium">exceptionnel</span>
            </h1>
            <p className="text-stone-500 text-lg md:text-xl font-light italic leading-relaxed mb-12 max-w-xl sm:mx-auto lg:mx-0">
              Une sélection curatée de produits de confort médical et protection sur-mesure pour sublimer votre quotidien.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-6">
              <a
                href="#products"
                className="bg-stone-900 text-white px-12 py-5 rounded-full font-bold text-xs uppercase tracking-[0.3em] hover:bg-primary transition-all text-center inline-block shadow-2xl"
              >
                Explorer la boutique
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mt-20 relative lg:mt-0 lg:col-span-5 hidden lg:block"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[4rem] border-[16px] border-white shadow- editorial">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop"
                alt="Confort Premium"
              />
              <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply"></div>
            </div>
            {/* Decal element */}
            <div className="absolute -bottom-10 -left-10 bg-primary text-white p-10 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center rotate-12 shadow-xl border-4 border-white">
              <span className="text-[10px] font-black uppercase tracking-widest">Qualité</span>
              <span className="text-2xl font-serif italic">Certifiée</span>
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
      title: "Logistique D'Excellence",
      description: "Livraison offerte à domicile",
      icon: <Truck className="w-5 h-5" />
    },
    {
      title: "Sérénité Totale",
      description: "Paiement à la livraison",
      icon: <ShoppingCart className="w-5 h-5" />
    },
    {
      title: "Qualité Certifiée",
      description: "Standards premium",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: "Service Dédié",
      description: "Assistance personnalisée",
      icon: <Headphones className="w-5 h-5" />
    }
  ];

  return (
    <section id="benefits" className="py-32 bg-stone-900 text-stone-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col gap-6">
              <div className="text-primary w-12 h-12 flex items-center justify-center border border-stone-800 rounded-full">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-2">{feature.title}</h3>
                <p className="text-stone-400 font-light italic text-sm leading-relaxed">{feature.description}</p>
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
    <footer className="bg-stone-900 text-stone-100 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div className="flex flex-col gap-10">
            <h4 className="text-[10px] font-black uppercase text-stone-500 tracking-[0.4em]">La Maison</h4>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-serif italic font-bold tracking-tighter">
                Ecoplastique<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-stone-400 text-sm font-light italic leading-relaxed max-w-xs">
              Spécialiste marocain du confort médical et de la protection sur-mesure. L'excellence au service de votre foyer.
            </p>
          </div>
          
          <div className="flex flex-col gap-10 border-stone-800 md:border-l md:pl-20">
            <h4 className="text-[10px] font-black uppercase text-stone-500 tracking-[0.4em]">Explorer</h4>
            <ul className="flex flex-col gap-6 text-[11px] font-bold uppercase tracking-[0.2em]">
              <li><Link to="/" className="text-stone-100 border-b border-stone-100 pb-0.5">Collection 2026</Link></li>
              <li><a href="#products" className="text-stone-400 hover:text-white transition-colors">Boutique en ligne</a></li>
              <li><a href="#benefits" className="text-stone-400 hover:text-white transition-colors">Notre Engagement</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-10">
            <h4 className="text-[10px] font-black uppercase text-stone-500 tracking-[0.4em]">Contact</h4>
            <div className="flex flex-col gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-300">
              <span className="hover:text-primary transition-colors cursor-pointer border-b border-stone-800 pb-4">contact@ecoplastique.ma</span>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] text-stone-500 lowercase italic tracking-normal">Direct WhatsApp</span>
                <span className="text-lg font-serif italic text-white tracking-tighter">+212 600 000 000</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-32 pt-10 border-t border-stone-800 text-center">
            <p className="text-[10px] font-medium text-stone-600 uppercase tracking-[0.3em]">
                © {new Date().getFullYear()} Ecoplastique Maroc • Tous droits réservés
            </p>
        </div>
      </div>
    </footer>
  );
}
