import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingCart, CheckCircle2, ArrowLeft, Phone } from 'lucide-react';
import { products } from '../data/products';
import { Header, Footer } from './Common';

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center p-8 text-center">
          <div>
            <h1 className="text-3xl font-bold mb-4">Produit non trouvé</h1>
            <Link to="/" className="text-primary font-bold hover:underline">Retour à l'accueil</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleOrder = (type: 'wa' | 'cod') => {
    const message = `Bonjour Ecoplastique, je souhaite commander le produit : ${product.name} (${product.price})`;
    if (type === 'wa') {
      window.open(`https://wa.me/212600000000?text=${encodeURIComponent(message)}`, '_blank');
    } else {
      alert("Redirection vers le formulaire de commande simplifiée (COD)...");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-12 md:py-20 animate-in fade-in duration-700">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour au catalogue
          </Link>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-16 xl:gap-24 items-start">
          {/* Gallery Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-6 mb-12 lg:mb-0"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square sticky top-24 border border-slate-100">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="mb-10">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] block mb-4">{product.title}</span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">{product.name}</h1>
              <div className="flex items-center gap-6 mb-10">
                <span className="text-4xl font-black text-slate-900 tracking-tighter">{product.price}</span>
                <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">En Stock</span>
              </div>
              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl">
                {product.description}
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-12 border-t border-slate-100 pt-10">
              {product.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-slate-700 font-bold text-sm uppercase tracking-tight">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-5 mb-14">
              <button 
                onClick={() => handleOrder('cod')}
                className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-primary transition-all shadow-2xl shadow-slate-200 active:scale-[0.98]"
              >
                <ShoppingCart className="w-5 h-5" />
                COMMANDER MAINTENANT
              </button>
              
              <button 
                onClick={() => handleOrder('wa')}
                className="w-full bg-white border-2 border-slate-100 text-slate-800 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:border-primary hover:text-primary transition-all active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 text-[#25D366]" />
                WhatsApp
              </button>
            </div>

            {/* Technical Specs */}
            <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 pb-4 border-b border-slate-200">Spécifications</h3>
              <dl className="grid grid-cols-1 gap-y-8">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex flex-col gap-1 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{key}</dt>
                    <dd className="text-slate-800 sm:col-span-2 font-black text-sm uppercase tracking-tight">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </main>

      <section className="bg-slate-900 py-24 mb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-10 leading-[0.9] tracking-tighter">Conseils sur-mesure</h2>
          <p className="text-lg text-slate-400 mb-12 font-medium leading-relaxed">Nos experts sont disponibles pour vous conseiller et vous aider à trouver le produit parfait pour votre confort quotidien.</p>
          <a 
            href="https://wa.me/212600000000"
            className="inline-flex items-center gap-4 bg-primary text-white px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl shadow-primary/20"
          >
            <Phone className="w-5 h-5 fill-current" />
            Parler à un conseiller
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
