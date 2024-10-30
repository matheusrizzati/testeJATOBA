import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));
  const [currentImage, setCurrentImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-4">Produto não encontrado</h2>
          <button
            onClick={() => navigate('/catalogo')}
            className="text-amber-800 hover:text-amber-900"
          >
            Voltar para o catálogo
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.gallery.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.gallery.length) % product.gallery.length);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('/catalogo')}
          className="flex items-center text-amber-800 hover:text-amber-900 mb-8"
        >
          <ChevronLeft className="h-5 w-5" />
          Voltar para o catálogo
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.gallery[currentImage]}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`flex-shrink-0 ${currentImage === index ? 'ring-2 ring-amber-500' : ''}`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - imagem ${index + 1}`}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-serif text-gray-900 mb-4">{product.name}</h1>
            <p className="text-2xl text-amber-800 mb-6">{product.price}</p>
            <p className="text-gray-600 mb-8">{product.description}</p>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Especificações</h2>
              <dl className="grid grid-cols-1 gap-4">
                <div>
                  <dt className="font-medium text-gray-500">Material</dt>
                  <dd className="mt-1">{product.details.material}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-500">Dimensões</dt>
                  <dd className="mt-1">{product.details.dimensions}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-500">Peso</dt>
                  <dd className="mt-1">{product.details.weight}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-500">Acabamento</dt>
                  <dd className="mt-1">{product.details.finish}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-8">
              <button className="w-full bg-amber-800 text-white px-8 py-3 rounded-full hover:bg-amber-900 transition-colors">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}