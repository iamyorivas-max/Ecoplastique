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
      className="group flex flex-col bg-zinc-900 border border-zinc-800 hover:border-primary transition-all duration-500 overflow-hidden"
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-black text-[9px] font-black uppercase px-3 py-1 tracking-widest shadow-brutalist">
            {product.category || 'Premium'}
          </span>
        </div>
      </Link>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors leading-tight mb-2 uppercase tracking-tighter">
              {product.name}
            </h3>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">{product.title}</p>
          </div>
          <span className="text-xl font-display font-black text-primary italic leading-none">{product.price}</span>
        </div>
        
        <Link 
          to={`/product/${product.id}`}
          className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white group-hover:text-primary border-b-2 border-transparent group-hover:border-primary pb-1 transition-all"
        >
          View Specs
        </Link>
      </div>
    </motion.div>
  );
}
