'use client';

import Image from 'next/image';
import { Button } from '../ui/button';

const services = [
  {
    title: 'Haircut & Styling',
    description: 'Professional haircuts and styling services tailored to your preferences.',
    image: '/images/services.webp',
    price: 'From $45',
  },
  {
    title: 'Hair Coloring',
    description: 'Expert hair coloring services including highlights, balayage, and full color.',
    image: '/images/services.webp',
    price: 'From $85',
  },
  {
    title: 'Hair Treatment',
    description: 'Deep conditioning and specialized treatments for healthy, beautiful hair.',
    image: '/images/services.webp',
    price: 'From $65',
  },
  {
    title: 'Bridal Services',
    description: 'Complete bridal hair and makeup services for your special day.',
    image: '/images/services.webp',
    price: 'From $150',
  },
];

const RamanSinghServices = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our range of premium hair services designed to enhance your natural beauty
            and give you the look you've always wanted.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 border border-gray-700"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-semibold">{service.price}</span>
                  <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white border-2 border-primary hover:border-primary/90">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RamanSinghServices; 