import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Hero, Benefits, CategoryLinks, BottomNav, Footer } from './components/Common';
import { ProductCard } from './components/ProductCard';
import { LogoMarquee } from './components/LogoMarquee';
import { Testimonials } from './components/Testimonials';
import ProductPage from './components/ProductPage';
import { products } from './data/products';
import { MessageCircle } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  const [activeTab, setActiveTab] = useState('New Products');
  const tabs = ['New Products', 'Featured Products', 'Top Rating'];

  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0">
      <Header />
      <Hero />
      <CategoryLinks />
      
      {/* Product Grid Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-primary opacity-50"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Our Products</span>
              <div className="h-[1px] w-12 bg-primary opacity-50"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8">Shop By Category</h2>
            
            <div className="flex justify-center gap-8 border-b border-slate-100 mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-[10px] font-black uppercase tracking-widest transition-all relative ${
                    activeTab === tab ? "text-slate-900" : "text-slate-400"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-slate-900"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
 
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
 
      <LogoMarquee />
 
      <Benefits />
      <Testimonials />
      <BottomNav />
 
      <Footer />
 
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/212600000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
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
