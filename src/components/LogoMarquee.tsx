import React from 'react';
import { motion } from 'motion/react';

const brands = [
  "L'HÔTEL ROYAL", "CLINIQUE SUD", "VILLA CONFORT", "ECO-STAY", "MODERN HOME", 
  "L'HÔTEL ROYAL", "CLINIQUE SUD", "VILLA CONFORT", "ECO-STAY", "MODERN HOME"
];

export function LogoMarquee() {
  return (
    <section className="py-20 bg-white border-y border-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <h4 className="text-[10px] font-black uppercase text-stone-400 tracking-[0.5em] text-center italic">
          Partenaires & Projets
        </h4>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-16 md:gap-32 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 35, 
            repeat: Infinity 
          }}
        >
          {brands.map((brand, i) => (
            <span 
              key={i} 
              className="text-3xl md:text-5xl font-serif italic font-light text-stone-200 uppercase tracking-tighter hover:text-primary transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, i) => (
            <span 
              key={`dup-${i}`} 
              className="text-3xl md:text-5xl font-serif italic font-light text-stone-200 uppercase tracking-tighter hover:text-primary transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </motion.div>
        
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
}
