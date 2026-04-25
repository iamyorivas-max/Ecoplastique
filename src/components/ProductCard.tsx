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
        <div className="aspect-square bg-slate-100 rounded-3xl mb-6 overflow-hidden relative border border-slate-100 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
          <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase shadow-sm z-10 tracking-widest border border-slate-50">
            Premium
          </div>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        <div className="flex flex-col gap-1 mb-4">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-primary transition-colors">
            {product.title}
          </h2>
          <h3 className="text-xl font-black text-slate-800 leading-tight">
            {product.name}
          </h3>
          <p className="text-[13px] text-slate-500 font-medium line-clamp-1">
            {product.shortDescription}
          </p>
        </div>
      </Link>
      
      <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-slate-50">
        <span className="text-xl font-black text-slate-900">{product.price}</span>
        <Link 
          to={`/product/${product.id}`}
          className="flex-grow py-3 bg-slate-50 text-slate-700 text-[11px] font-black rounded-xl border border-slate-100 hover:bg-primary hover:text-white transition-all uppercase tracking-widest text-center"
        >
          Voir le produit
        </Link>
      </div>
    </motion.div>
  );
}
