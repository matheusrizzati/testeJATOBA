import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex-shrink-0 font-serif text-2xl text-amber-900">
            Jatobá Móveis Rústicos
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/catalogo"
              className={`text-gray-700 hover:text-amber-800 ${
                location.pathname === '/catalogo' ? 'text-amber-800' : ''
              }`}
            >
              Catálogo
            </Link>
            <Link
              to="#"
              className="text-gray-700 hover:text-amber-800"
            >
              Sobre
            </Link>
            <Link
              to="#"
              className="text-gray-700 hover:text-amber-800"
            >
              Artesanato
            </Link>
            <Link
              to="#"
              className="text-gray-700 hover:text-amber-800"
            >
              Contato
            </Link>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <Link
              to="/catalogo"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Catálogo
            </Link>
            <Link
              to="#"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Sobre
            </Link>
            <Link
              to="#"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Artesanato
            </Link>
            <Link
              to="#"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}