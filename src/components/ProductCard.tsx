import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer flex flex-col"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square bg-slate-100 rounded-2xl md:rounded-3xl mb-4 md:mb-6 overflow-hidden relative border border-slate-100 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
          <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-[8px] md:text-[10px] font-black uppercase shadow-sm z-10 tracking-widest border border-slate-50">
            Premium
          </div>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        <div className="flex flex-col gap-1 mb-3 md:mb-4">
          <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-primary transition-colors">
            {product.title}
          </h2>
          <h3 className="text-base md:text-xl font-black text-slate-800 leading-tight line-clamp-1">
            {product.name}
          </h3>
          <p className="text-[11px] md:text-[13px] text-slate-500 font-medium line-clamp-1">
            {product.shortDescription}
          </p>
        </div>
      </Link>
      
      <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 md:gap-4 pt-3 md:pt-4 border-t border-slate-50">
        <span className="text-base md:text-xl font-black text-slate-900">{product.price}</span>
        <Link 
          to={`/product/${product.id}`}
          className="w-full sm:w-auto sm:flex-grow py-2.5 md:py-3 bg-slate-50 text-slate-700 text-[9px] md:text-[11px] font-black rounded-xl border border-slate-100 hover:bg-primary hover:text-white transition-all uppercase tracking-widest text-center"
        >
          Détails
        </Link>
      </div>
    </motion.div>
  );
}
