import React, { useRef } from 'react';
import { Star, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: "Omar B.",
    location: "Casablanca",
    text: "La nappe PVC est exactement ce qu'il me fallait. Découpe parfaite et transparence impeccable. Livraison en 24h !",
    rating: 5
  },
  {
    name: "Sara M.",
    location: "Marrakech",
    text: "L'oreiller cervical m'a sauvé ! Plus de douleurs au cou au réveil. Je recommande vivement pour ceux qui travaillent sur bureau.",
    rating: 5
  },
  {
    name: "Karim L.",
    location: "Rabat",
    text: "Paiement à la livraison sans problème. Le protège-matelas est de très bonne qualité et ne fait aucun bruit.",
    rating: 4
  }
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-zinc-950 overflow-hidden border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="max-w-4xl">
            <h2 className="text-[10px] font-black uppercase text-zinc-600 tracking-[0.5em] mb-6">// USER_FEEDBACK</h2>
            <h3 className="text-6xl md:text-9xl font-display font-bold text-white uppercase leading-[0.85] tracking-tighter">
              BATTLE <br/> <span className="text-primary italic">TESTED</span>
            </h3>
          </div>

          <div className="flex justify-center md:justify-end gap-3">
            <button 
              onClick={() => scroll('left')}
              className="p-5 border-2 border-zinc-800 text-white hover:border-primary hover:text-primary transition-all active:translate-x-1 active:translate-y-1"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-5 border-2 border-zinc-800 text-white hover:border-primary hover:text-primary transition-all active:translate-x-1 active:translate-y-1"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-0 border-l border-t border-zinc-800 overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="min-w-[90vw] md:min-w-0 snap-center bg-zinc-900/50 p-12 md:p-14 border-r border-b border-zinc-800 relative flex flex-col group hover:bg-zinc-900 transition-colors"
            >
              <div className="flex gap-1 mb-10">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="w-3 h-3 fill-primary text-primary" />)}
              </div>
              <p className="text-lg font-bold uppercase text-zinc-300 mb-12 leading-relaxed tracking-tight group-hover:text-white transition-colors">"{testimonial.text}"</p>
              <div className="mt-auto flex items-center gap-5">
                <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-[10px] font-black text-zinc-500 group-hover:border-primary group-hover:text-primary transition-colors">
                  {testimonial.name[0]}
                </div>
                <div className="text-left">
                  <h4 className="text-[10px] font-black text-white uppercase tracking-widest leading-none mb-1">{testimonial.name}</h4>
                  <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <a 
            href="https://wa.me/212600000000"
            className="inline-flex items-center gap-5 border border-zinc-800 px-10 py-5 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 hover:text-primary hover:border-primary transition-all shadow-brutalist"
          >
            READ_ALL_REVIEWS [WA]
          </a>
        </div>
      </div>
    </section>
  );
}
