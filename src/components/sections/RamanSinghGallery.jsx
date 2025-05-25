'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

const galleryItems = [
  {
    image: '/images/gallery.jpg',
    category: 'Haircuts',
    title: 'Modern Bob Cut',
  },
  {
    image: '/images/gallery.jpg',
    category: 'Coloring',
    title: 'Balayage Highlights',
  },
  {
    image: '/images/gallery.jpg',
    category: 'Styling',
    title: 'Elegant Updo',
  },
  {
    image: '/images/gallery.jpg',
    category: 'Haircuts',
    title: 'Layered Pixie',
  },
  {
    image: '/images/gallery.jpg',
    category: 'Coloring',
    title: 'Ombre Effect',
  },
  {
    image: '/images/gallery.jpg',
    category: 'Styling',
    title: 'Beach Waves',
  },
  {
    image: '/images/gallery.jpg',
    category: 'Haircuts',
    title: 'Textured Lob',
  },
  {
    image: '/images/gallery.jpg',
    category: 'Coloring',
    title: 'Vibrant Red',
  },
];

const categories = ['All', 'Haircuts', 'Coloring', 'Styling'];

const RamanSinghGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Our Gallery</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Browse through our collection of stunning hair transformations and styles
            created by our expert team.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                className={`${
                  activeCategory === category
                    ? 'bg-primary text-white border-2 border-primary'
                    : 'border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-80 overflow-hidden rounded-lg border border-gray-700">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110 opacity-75"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <span className="block text-sm mb-2 text-primary">{item.category}</span>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white border-2 border-primary hover:border-primary/90">
            View More Styles
          </Button>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full h-[80vh]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white hover:text-primary"
                onClick={() => setSelectedImage(null)}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RamanSinghGallery; 