import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingCart, CheckCircle2, ArrowLeft, Phone } from 'lucide-react';
import { products } from '../data/products';
import { Header, Footer } from './Common';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-stone-50">
        <Header />
        <main className="flex-grow flex items-center justify-center p-8 text-center">
          <div>
            <h1 className="text-3xl font-serif italic mb-4 text-stone-900 text-center">Produit non trouvé</h1>
            <Link to="/" className="text-[10px] font-black uppercase tracking-widest text-primary">Retour à la collection</Link>
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
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24">
        <div className="mb-16">
          <Link to="/" className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 hover:text-primary transition-colors italic">
            <ArrowLeft className="w-4 h-4" /> Retour à la collection
          </Link>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-24 items-start">
          {/* Gallery Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 mb-16 lg:mb-0"
          >
            <div className="overflow-hidden aspect-[4/5] sticky top-32 bg-white rounded-sm shadow-editorial">
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
            className="lg:col-span-5 flex flex-col"
          >
            <div className="mb-12">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] block mb-6 italic">{product.title}</span>
              <h1 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[0.9] mb-10">{product.name}</h1>
              <div className="flex items-center gap-8 mb-12">
                <span className="text-4xl font-serif italic text-stone-900">{product.price}</span>
                <span className="bg-stone-100 text-stone-500 px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border border-stone-200 uppercase">En Stock</span>
              </div>
              <p className="text-stone-500 text-lg font-light italic leading-relaxed mb-12 border-l border-stone-200 pl-8">
                {product.description}
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 gap-y-8 mb-16 border-t border-stone-200 pt-12 text-left md:text-left">
              {product.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-6 justify-start text-left">
                  <div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center text-primary flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <span className="text-stone-800 font-bold text-[10px] uppercase tracking-[0.2em]">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-6 mb-20 text-center">
              <button 
                onClick={() => handleOrder('wa')}
                className="w-full bg-stone-900 text-white py-8 rounded-full font-bold text-xs uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-primary transition-all shadow-editorial active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 fill-current" />
                Commander par WhatsApp
              </button>
              
              <div className="flex items-center justify-center gap-3 text-[10px] font-medium text-stone-400 italic">
                <ShieldCheck className="w-4 h-4" /> Paiement à la réception • Livraison Gratuite
              </div>
            </div>

            {/* Technical Specs */}
            <div className="bg-white p-12 rounded-sm border border-stone-200 shadow-editorial mb-16">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-400 mb-10 pb-6 border-b border-stone-100 italic">Spécifications</h3>
              <dl className="grid grid-cols-1 gap-y-10">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex flex-col gap-2">
                    <dt className="text-[9px] font-black text-stone-300 uppercase tracking-[0.3em]">{key}</dt>
                    <dd className="text-stone-800 font-serif italic text-lg">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Sections */}
        {product.sections?.map((section, idx) => (
          <motion.section 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`py-32 border-t border-stone-200 ${section.type === 'image-text' ? 'lg:grid lg:grid-cols-2 lg:gap-32 items-center' : ''}`}
          >
            {section.type === 'image-text' && (
              <>
                <div className={`${section.reverse ? 'lg:order-2' : ''} mb-16 lg:mb-0`}>
                  <img src={section.image} alt={section.title} className="rounded-sm shadow-editorial w-full aspect-[4/3] object-cover" />
                </div>
                <div className={section.reverse ? 'lg:order-1' : ''}>
                  <h2 className="text-5xl md:text-8xl font-serif text-stone-900 leading-[0.9] mb-10 tracking-tight">{section.title}</h2>
                  <p className="text-stone-500 text-xl font-light italic leading-relaxed border-l-2 border-primary pl-10">{section.content}</p>
                </div>
              </>
            )}
            
            {section.type === 'info-block' && (
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl md:text-9xl font-serif font-light italic text-stone-900 mb-12 tracking-tight">{section.title}</h2>
                <p className="text-stone-500 text-2xl font-light italic leading-relaxed mb-16">{section.content}</p>
                <div className="w-20 h-[1px] bg-stone-300 mx-auto"></div>
              </div>
            )}
          </motion.section>
        ))}
      </main>

      <section className="bg-stone-900 py-40 mb-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-9xl font-serif font-light text-white mb-12 leading-[0.9]">Conseils <br/> <span className="italic font-medium text-primary">sur-mesure</span></h2>
          <p className="text-xl text-stone-400 mb-16 font-light italic leading-relaxed">Nos experts sont à votre disposition pour vous accompagner dans le choix du confort idéal pour votre foyer.</p>
          <a 
            href="https://wa.me/212600000000"
            className="inline-flex items-center gap-5 bg-white text-stone-900 px-16 py-7 rounded-full font-bold text-xs uppercase tracking-[0.4em] hover:bg-primary hover:text-white transition-all shadow-2xl"
          >
            <Phone className="w-4 h-4 fill-current" />
            Parler à un expert
          </a>
        </div>
        <div className="absolute top-0 right-0 p-20 opacity-5">
            <Phone className="w-80 h-80 text-white" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
