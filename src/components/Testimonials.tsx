import React from 'react';
import { Star, MessageCircle } from 'lucide-react';
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
  return (
    <section className="py-24 bg-slate-50 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] mb-4 text-center md:text-left">La Voix de nos Clients</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight text-center md:text-left">
              Ils nous font <span className="text-primary">confiance</span> au quotidien
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-soft border border-slate-100 relative flex flex-col justify-center"
            >
              <p className="text-sm italic text-slate-600 mb-8 leading-relaxed font-medium">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-black text-xs">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">{testimonial.name}</h4>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/212600000000"
            className="inline-flex items-center gap-3 bg-white border border-slate-200 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:border-primary transition-all shadow-sm"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366] fill-none" />
            Voir plus d'avis sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
