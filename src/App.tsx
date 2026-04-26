import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Hero, Benefits, Footer } from './components/Common';
import { ProductCard } from './components/ProductCard';
import { LogoMarquee } from './components/LogoMarquee';
import { Testimonials } from './components/Testimonials';
import ProductPage from './components/ProductPage';
import { products } from './data/products';
import { ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <Hero />
      
      {/* Product Grid Section */}
      <section id="products" className="py-32 bg-zinc-950 relative border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
            <div className="max-w-4xl">
              <h2 className="text-[10px] font-black uppercase text-zinc-600 tracking-[0.5em] mb-6">// COLLECTION v2.0</h2>
              <h3 className="text-6xl md:text-9xl font-display font-bold text-white uppercase leading-[0.85] tracking-tighter">
                ACTIVE <br/> <span className="text-primary italic">INVENTORY</span>
              </h3>
            </div>
            <div className="max-w-xs">
              <p className="text-zinc-500 font-bold uppercase text-[11px] leading-relaxed mb-6 tracking-tight">
                High-performance comfort systems. Industrial grade materials. Field tested standards.
              </p>
              <div className="w-20 h-2 bg-primary"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-zinc-800">
            {products.map((product) => (
              <div key={product.id} className="border-r border-b border-zinc-800">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogoMarquee />

      <Benefits />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-40 relative bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-9xl font-display font-bold text-black mb-16 leading-[0.85] uppercase tracking-tighter">
              UPGRADE <br/> YOUR <span className="italic">LIFESTYLE</span>
            </h2>
            <p className="text-xl md:text-2xl text-black/60 mb-16 font-black uppercase tracking-tight leading-relaxed">
              OPERATING NATIONWIDE: FREE LOGISTICS ENABLED. <br/> SYSTEM STATUS: READY.
            </p>
            <a 
                href="#products" 
                className="bg-black text-white px-20 py-8 font-black text-xs uppercase tracking-[0.4em] hover:bg-zinc-900 transition-all shadow-brutalist active:translate-x-1 active:translate-y-1"
            >
                ACCESS_WAREHOUSE
            </a>
          </div>
        </div>
        
        {/* Artistic background element */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none select-none">
            <span className="text-[25vw] font-display font-bold text-black whitespace-nowrap tracking-tighter">ECOPLASTIQUE</span>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/212600000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-primary text-black p-5 border-2 border-black shadow-brutalist hover:scale-110 transition-transform active:translate-x-1 active:translate-y-1 group"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute right-full mr-5 bg-black text-primary px-4 py-2 font-black text-[10px] uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-primary">
          LINE OPR: ONLINE
        </span>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}
