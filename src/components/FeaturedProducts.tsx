import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';

export default function FeaturedProducts() {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const displayedProducts = showAll ? products : products.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center text-gray-900 mb-12">
          Peças em Destaque
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onClick={() => navigate(`/produto/${product.id}`)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/catalogo')}
            className="border-2 border-amber-800 text-amber-800 px-8 py-3 rounded-full hover:bg-amber-800 hover:text-white transition-colors"
          >
            Ver Catálogo Completo
          </button>
        </div>
      </div>
    </section>
  );
}