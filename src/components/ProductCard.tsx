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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col"
    >
      <Link to={`/product/${product.id}`} className="block relative mb-8 overflow-hidden aspect-[3/4] rounded-sm bg-stone-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500"></div>
        <div className="absolute bottom-6 left-6 right-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex justify-center">
            <span className="bg-white text-stone-900 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                Détails
            </span>
        </div>
      </Link>
      
      <div className="flex flex-col gap-2">
        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 group-hover:text-primary transition-colors">
          {product.title}
        </h2>
        <h3 className="text-2xl font-serif italic text-stone-900">
          {product.name}
        </h3>
        <div className="flex items-center justify-between pt-4 border-t border-stone-200 mt-2">
            <span className="text-lg font-serif italic text-stone-900">{product.price}</span>
            <Link 
                to={`/product/${product.id}`}
                className="text-[10px] font-bold uppercase tracking-widest border-b border-stone-900 pb-0.5 hover:text-primary hover:border-primary transition-all"
            >
                Acheter
            </Link>
        </div>
      </div>
    </motion.div>
  );
}
