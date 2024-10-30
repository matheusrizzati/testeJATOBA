import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Craftsmanship from '../components/Craftsmanship';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Craftsmanship />
    </>
  );
}