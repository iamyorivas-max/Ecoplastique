import React from 'react';
import { motion } from 'motion/react';

const brands = [
  "L'HÔTEL ROYAL", "CLINIQUE SUD", "VILLA CONFORT", "ECO-STAY", "MODERN HOME", 
  "L'HÔTEL ROYAL", "CLINIQUE SUD", "VILLA CONFORT", "ECO-STAY", "MODERN HOME"
];

export function LogoMarquee() {
  return (
    <section className="py-12 bg-white border-y border-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-8">
        <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] text-center">
          Ils ont fait confiance à Ecoplastique
        </h4>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-12 md:gap-24 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 25, 
            repeat: Infinity 
          }}
        >
          {/* First set of logos */}
          {brands.map((brand, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-4xl font-black text-slate-200 uppercase tracking-tighter hover:text-primary transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, i) => (
            <span 
              key={`dup-${i}`} 
              className="text-2xl md:text-4xl font-black text-slate-200 uppercase tracking-tighter hover:text-primary transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </motion.div>
        
        {/* Gradient overlays for smooth fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
}
