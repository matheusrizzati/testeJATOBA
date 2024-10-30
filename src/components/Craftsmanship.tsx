import React from 'react';

export default function Craftsmanship() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-6">
              Artesanato em Cada Detalhe
            </h2>
            <p className="text-gray-600 mb-6">
              Nossa paixão pela marcenaria tradicional se reflete em cada peça que criamos. 
              Utilizamos técnicas ancestrais combinadas com design contemporâneo para criar 
              móveis que são verdadeiras obras de arte.
            </p>
            <p className="text-gray-600 mb-8">
              Cada móvel é cuidadosamente fabricado por nossos mestres artesãos, 
              usando madeiras nobres selecionadas e técnicas de marcenaria tradicional 
              que garantem durabilidade e beleza atemporal.
            </p>
            <button className="border-2 border-amber-800 text-amber-800 px-8 py-3 rounded-full hover:bg-amber-800 hover:text-white transition-colors">
              Conheça Nosso Processo
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?auto=format&fit=crop&q=80"
              alt="Craftsmanship"
              className="rounded-lg w-full h-64 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1612404730960-5c71577fca11?auto=format&fit=crop&q=80"
              alt="Woodworking"
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}