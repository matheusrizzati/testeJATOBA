export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  details: {
    material: string;
    dimensions: string;
    weight: string;
    finish: string;
  };
  gallery: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Mesa de Jantar Rústica',
    price: 'R$ 4.890',
    image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80',
    description: 'Mesa de jantar rústica feita em madeira maciça de demolição, ideal para reunir a família e amigos. Acabamento artesanal que ressalta a beleza natural da madeira.',
    details: {
      material: 'Madeira de Demolição',
      dimensions: '200cm x 100cm x 78cm',
      weight: '45kg',
      finish: 'Verniz fosco natural'
    },
    gallery: [
      'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616486701797-0f33f61038ec?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 2,
    name: 'Aparador Vintage',
    price: 'R$ 2.990',
    image: 'https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&q=80',
    description: 'Aparador vintage com design atemporal, perfeito para sala de jantar ou hall de entrada. Gavetas espaçosas e acabamento premium.',
    details: {
      material: 'Madeira Maciça de Jatobá',
      dimensions: '160cm x 45cm x 85cm',
      weight: '35kg',
      finish: 'Verniz acetinado'
    },
    gallery: [
      'https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 3,
    name: 'Cadeira Artesanal',
    price: 'R$ 1.290',
    image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&q=80',
    description: 'Cadeira artesanal com design ergonômico e acabamento premium. Peça única feita à mão por nossos mestres artesãos.',
    details: {
      material: 'Madeira Maciça de Cedro',
      dimensions: '45cm x 50cm x 85cm',
      weight: '8kg',
      finish: 'Óleo natural'
    },
    gallery: [
      'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 4,
    name: 'Mesa de Centro',
    price: 'R$ 1.890',
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80',
    description: 'Mesa de centro moderna com design minimalista. Perfeita para salas contemporâneas.',
    details: {
      material: 'Madeira Maciça de Freijó',
      dimensions: '120cm x 60cm x 45cm',
      weight: '25kg',
      finish: 'Verniz fosco'
    },
    gallery: [
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 5,
    name: 'Banco Rústico',
    price: 'R$ 990',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80',
    description: 'Banco rústico versátil, ideal para área gourmet ou jardim. Feito com madeira de demolição.',
    details: {
      material: 'Madeira de Demolição',
      dimensions: '120cm x 35cm x 45cm',
      weight: '15kg',
      finish: 'Óleo natural'
    },
    gallery: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 6,
    name: 'Estante Modular',
    price: 'R$ 3.490',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80',
    description: 'Estante modular contemporânea com design versátil. Perfeita para organizar livros e objetos decorativos.',
    details: {
      material: 'Madeira Maciça de Tauari',
      dimensions: '180cm x 40cm x 200cm',
      weight: '55kg',
      finish: 'Verniz acetinado'
    },
    gallery: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1588200618450-3a18f1eb7cd2?auto=format&fit=crop&q=80'
    ]
  }
];