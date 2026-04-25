import React from 'react';
import { ShoppingCart, Phone, Truck, ShieldCheck, Headphones } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-header">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">E</div>
            <span className="text-xl font-extrabold tracking-tight uppercase text-slate-800">
              ECOPLASTIQUE
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500 uppercase tracking-widest">
            <Link to="/" className="text-primary transition-colors">Accueil</Link>
            <a href="#products" className="hover:text-primary transition-colors">Produits</a>
            <a href="#benefits" className="hover:text-primary transition-colors">Avantages</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/212600000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-sm hover:scale-105 transition-transform"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Commander via WhatsApp</span>
            </a>
            <Link 
              to="/#products"
              className="md:hidden bg-primary text-white p-2 rounded-full hover:bg-primary-hover transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-12 lg:text-left xl:col-span-7"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-800 leading-[0.85] tracking-tighter mb-8">
              Des produits pratiques pour votre <span className="text-primary">confort</span> au quotidien
            </h1>
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-tight mb-10 max-w-xl sm:mx-auto lg:mx-0">
              Qualité premium certifiée et sur-mesure pour votre intérieur. Améliorez votre bien-être avec nos solutions durables.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <a
                href="#products"
                className="bg-primary text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg shadow-primary/30 hover:scale-105 transition-transform text-center inline-block"
              >
                Découvrir nos produits
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400 sm:justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-primary" /> Livraison Maroc
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" /> Paiement à réception
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 relative lg:mt-0 lg:col-span-12 xl:col-span-5 hidden xl:block"
          >
            <div className="relative h-[500px] w-full bg-primary/10 flex items-center justify-center rounded-3xl">
              <div className="w-80 h-64 bg-white rounded-2xl shadow-2xl rotate-3 border-[12px] border-white overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop"
                  alt="Intérieur maison confortable"
                />
              </div>
              <div className="absolute top-20 right-10 w-24 h-24 bg-white/50 backdrop-blur-sm rounded-full blur-2xl"></div>
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
