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
    <div className="min-h-screen bg-stone-50">
      <Header />
      <Hero />
      
      {/* Product Grid Section */}
      <section id="products" className="py-32 bg-stone-50 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
            <div className="max-w-3xl">
              <h2 className="text-[10px] font-black uppercase text-stone-400 tracking-[0.5em] mb-6">Édition Limitée</h2>
              <h3 className="text-5xl md:text-8xl font-serif text-stone-900">
                La Collection <br/> <span className="italic font-light">Ecoplastique</span>
              </h3>
            </div>
            <div className="max-w-xs">
              <p className="text-stone-500 font-light italic text-lg leading-relaxed mb-6">
                Chaque pièce est une promesse de bien-être, alliant technologie et artisanat.
              </p>
              <div className="w-12 h-[1px] bg-stone-300"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <LogoMarquee />

      <Benefits />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-40 relative bg-stone-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-9xl font-serif font-light text-stone-200 mb-16 leading-[0.9]">
              Rejoignez l'univers du <span className="italic font-medium text-primary">confort</span> absolu.
            </h2>
            <p className="text-xl md:text-2xl text-stone-400 mb-16 font-light italic leading-relaxed">
              Expédition soignée à travers tout le Maroc. <br/> Votre satisfaction est notre signature.
            </p>
            <a 
                href="#products" 
                className="bg-primary text-white px-16 py-6 rounded-full font-bold text-xs uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-2xl shadow-primary/20"
            >
                Entrer dans la boutique
            </a>
          </div>
        </div>
        
        {/* Artistic background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 flex items-center justify-center pointer-events-none">
            <span className="text-[20vw] font-serif italic text-stone-100 whitespace-nowrap">Ecoplastique</span>
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
