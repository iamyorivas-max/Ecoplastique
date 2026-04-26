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
      <div className="min-h-screen flex flex-col bg-zinc-950">
        <Header />
        <main className="flex-grow flex items-center justify-center p-8 text-center">
          <div>
            <h1 className="text-3xl font-display font-medium mb-4 text-white uppercase tracking-tighter">ERROR: PRODUCT_NOT_FOUND</h1>
            <Link to="/" className="text-[10px] font-black uppercase tracking-widest text-primary border-b border-primary pb-1">Return to base</Link>
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
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24">
        <div className="mb-16">
          <Link to="/" className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> [ ESC ] BACK TO CATALOG
          </Link>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-24 items-start">
          {/* Gallery Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 mb-16 lg:mb-0"
          >
            <div className="aspect-[4/5] sticky top-32 bg-zinc-900 border-4 border-zinc-800 shadow-brutalist overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover grayscale brightness-90"
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
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] block mb-6">// {product.title}</span>
              <h1 className="text-5xl md:text-7xl font-display font-medium text-white leading-[0.85] mb-10 tracking-tighter uppercase">{product.name}</h1>
              <div className="flex items-center gap-8 mb-12">
                <span className="text-4xl font-display font-bold text-primary italic leading-none">{product.price}</span>
                <span className="bg-zinc-900 text-zinc-400 px-5 py-2 text-[9px] font-black uppercase tracking-widest border border-zinc-800">AVAILABILITY: OK</span>
              </div>
              <p className="text-zinc-500 text-lg font-medium leading-relaxed mb-12 border-l border-primary pl-8 uppercase tracking-tight">
                {product.description}
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 gap-y-6 mb-16 border-t border-zinc-800 pt-12">
              {product.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="w-4 h-4 border border-primary flex items-center justify-center text-primary flex-shrink-0">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-zinc-300 font-bold text-[10px] uppercase tracking-[0.2em]">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-6 mb-20 text-center">
              <button 
                onClick={() => handleOrder('wa')}
                className="w-full bg-primary text-black py-8 font-bold text-xs uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-white transition-all shadow-brutalist active:translate-x-1 active:translate-y-1"
              >
                <Phone className="w-4 h-4 fill-current" />
                INITIATE_ORDER_WHATSAPP
              </button>
              
              <div className="flex items-center justify-center gap-3 text-[9px] font-black uppercase text-zinc-600 tracking-widest">
                <ShieldCheck className="w-3 h-3 text-primary" /> SYSTEM: SECURE • DELIVERY: FREE
              </div>
            </div>

            {/* Technical Specs */}
            <div className="bg-zinc-900 p-12 border border-zinc-800 shadow-brutalist mb-16">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 mb-10 pb-6 border-b border-zinc-800">TECHNICAL_SPECS</h3>
              <dl className="grid grid-cols-1 gap-y-10">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex flex-col gap-2">
                    <dt className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">{key}</dt>
                    <dd className="text-white font-display font-medium text-lg uppercase tracking-tighter">{value}</dd>
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
            className={`py-32 border-t border-zinc-800 ${section.type === 'image-text' ? 'lg:grid lg:grid-cols-2 lg:gap-32 items-center' : ''}`}
          >
            {section.type === 'image-text' && (
              <>
                <div className={`${section.reverse ? 'lg:order-2' : ''} mb-16 lg:mb-0`}>
                  <img src={section.image} alt={section.title} className="border-4 border-zinc-800 shadow-brutalist w-full aspect-[4/3] object-cover grayscale" />
                </div>
                <div className={section.reverse ? 'lg:order-1' : ''}>
                  <h2 className="text-5xl md:text-8xl font-display font-medium text-white leading-[0.85] mb-10 tracking-tighter uppercase">{section.title}</h2>
                  <p className="text-zinc-500 text-xl font-medium uppercase leading-relaxed border-l-2 border-primary pl-10 tracking-tight">{section.content}</p>
                </div>
              </>
            )}
            
            {section.type === 'info-block' && (
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl md:text-9xl font-display font-bold text-white mb-12 tracking-tighter uppercase leading-[0.85]">{section.title}</h2>
                <p className="text-zinc-500 text-2xl font-medium uppercase tracking-tight leading-relaxed mb-16">{section.content}</p>
                <div className="w-20 h-2 bg-primary mx-auto"></div>
              </div>
            )}
          </motion.section>
        ))}
      </main>

      <section className="bg-primary py-40 mb-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-9xl font-display font-bold text-black mb-12 leading-[0.85] tracking-tighter uppercase">DIRECT <br/> <span className="italic">COMMS</span></h2>
          <p className="text-xl text-black/60 mb-16 font-black uppercase tracking-tight leading-relaxed">Our technicians are standing by to assist with your custom configuration.</p>
          <a 
            href="https://wa.me/212600000000"
            className="inline-flex items-center gap-5 bg-black text-white px-16 py-7 font-bold text-xs uppercase tracking-[0.4em] hover:bg-zinc-900 transition-all shadow-2xl"
          >
            <Phone className="w-4 h-4 fill-current" />
            OPEN_CHANNEL_WA
          </a>
        </div>
        <div className="absolute top-0 right-0 p-20 opacity-10">
            <Phone className="w-80 h-80 text-black" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
