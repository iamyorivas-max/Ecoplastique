import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Hero, Benefits, Footer } from './components/Common';
import { ProductCard } from './components/ProductCard';
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
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* Product Grid Section */}
      <section id="products" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] mb-4">Notre Boutique</h2>
              <h3 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight leading-[0.9]">
                Solutions Bien-être & <br className="hidden md:block" />Protection Maison
              </h3>
            </div>
            <p className="text-sm font-bold text-primary border-b-2 border-primary uppercase tracking-widest cursor-pointer hover:opacity-80 transition-opacity pb-1 inline-block md:inline">
              Voir toute la collection
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Benefits />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 border border-white/10">
                <ShoppingBag className="w-3 h-3 text-primary" />
                Vente Exclusive au Maroc
              </div>
              <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">
                Prêt à transformer votre <span className="text-primary">intérieur</span> ?
              </h2>
              <p className="text-lg md:text-xl text-slate-400 mb-12 font-medium leading-relaxed">
                Profitez de nos produits certifiés avec livraison rapide et paiement à la livraison partout au Maroc.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto">
                <a 
                  href="#products" 
                  className="bg-primary text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
                >
                  Commander maintenant
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/212600000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 bg-white text-gray-900 px-3 py-1 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Besoin d'aide ?
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
