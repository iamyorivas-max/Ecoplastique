import React from 'react';
import { motion } from 'motion/react';

const brands = [
  "SAMSUNG HEALTH", "DYSON HOME", "OMRON MEDICAL", "PHILLIPS CARE", "BEURER", "CASIO MEDIC",
  "SAMSUNG HEALTH", "DYSON HOME", "OMRON MEDICAL", "PHILLIPS CARE", "BEURER", "CASIO MEDIC"
];

export function LogoMarquee() {
  return (
    <section className="py-24 bg-zinc-950 border-b border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
        <h4 className="text-[10px] font-black uppercase text-zinc-600 tracking-[0.6em] text-center">
          SYSTEM_PARTNERS // CERTIFIED
        </h4>
      </div>
      
      <div className="relative flex overflow-x-hidden border-y border-zinc-900 bg-zinc-900/50 py-10">
        <motion.div 
          className="flex whitespace-nowrap gap-20 md:gap-40 items-center"
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
              className="text-4xl md:text-7xl font-display font-bold text-zinc-800 uppercase tracking-tighter hover:text-primary transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
          {brands.map((brand, i) => (
            <span 
              key={`dup-${i}`} 
              className="text-4xl md:text-7xl font-display font-bold text-zinc-800 uppercase tracking-tighter hover:text-primary transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
