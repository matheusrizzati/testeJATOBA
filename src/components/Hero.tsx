import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80',
    title: 'Móveis que Contam Histórias'
  },
  {
    url: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80',
    title: 'Artesanato em Cada Detalhe'
  },
  {
    url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80',
    title: 'Qualidade que Atravessa Gerações'
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url('${images[currentIndex].url}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <button 
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="h-8 w-8 text-white" />
        </button>

        <button 
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
        >
          <ChevronRight className="h-8 w-8 text-white" />
        </button>

        <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6">
            {images[currentIndex].title}
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Cada peça é única, feita à mão com madeira maciça selecionada
          </p>
          <button className="bg-amber-800 text-white px-8 py-3 rounded-full hover:bg-amber-900 transition-colors">
            Explorar Coleção
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0">
        <div className="flex justify-center gap-2 mb-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <ChevronDown className="h-8 w-8 text-white animate-bounce" />
        </div>
      </div>
    </div>
  );
}