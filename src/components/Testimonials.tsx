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
    <section className="py-32 bg-stone-100 overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div className="max-w-3xl">
            <h2 className="text-[10px] font-black uppercase text-stone-400 tracking-[0.5em] mb-6 italic">Témoignages</h2>
            <h3 className="text-5xl md:text-8xl font-serif text-stone-900 leading-[0.9]">
              Votre <span className="italic font-light">satisfaction</span>, <br className="hidden md:block"/> notre plus belle récompense.
            </h3>
          </div>

          <div className="flex justify-center md:justify-end gap-3">
            <button 
              onClick={() => scroll('left')}
              className="p-4 bg-white rounded-full shadow-editorial hover:text-primary transition-colors hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 bg-white rounded-full shadow-editorial hover:text-primary transition-colors hover:scale-105"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="min-w-[90vw] md:min-w-0 snap-center bg-white p-12 md:p-14 rounded-sm shadow-editorial relative flex flex-col"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="w-3 h-3 fill-primary text-primary" />)}
              </div>
              <p className="text-xl font-serif italic text-stone-600 mb-12 leading-relaxed">"{testimonial.text}"</p>
              <div className="mt-auto flex items-center gap-5">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-[10px] font-black text-stone-400 border border-stone-200">
                  {testimonial.name[0]}
                </div>
                <div className="text-left">
                  <h4 className="text-[10px] font-black text-stone-900 uppercase tracking-widest">{testimonial.name}</h4>
                  <p className="text-[10px] font-medium text-stone-400 uppercase tracking-widest">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a 
            href="https://wa.me/212600000000"
            className="inline-flex items-center gap-4 border-b border-stone-900 pb-1 text-[10px] font-black uppercase tracking-[0.3em] hover:text-primary hover:border-primary transition-all"
          >
            Découvrir plus d'avis clients
          </a>
        </div>
      </div>
    </section>
  );
}
