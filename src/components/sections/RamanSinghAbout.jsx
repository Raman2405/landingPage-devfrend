'use client';

import Image from 'next/image';
import { Button } from '../ui/button';

const features = [
  {
    title: 'Expert Stylists',
    description: 'Our team consists of highly trained and experienced hair professionals.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Premium Products',
    description: 'We use only the highest quality hair care products and tools.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Modern Techniques',
    description: 'Stay up-to-date with the latest trends and techniques in hair styling.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const RamanSinghAbout = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Our Salon"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/30" />
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">About Our Salon</h2>
            <p className="text-gray-300 mb-8">
              Welcome to our premium hair salon, where we combine expertise, passion, and
              creativity to deliver exceptional hair care services. With over 10 years of
              experience, we've built a reputation for excellence in hair styling and
              customer satisfaction.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-primary flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-300">Expert Stylists</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white border-2 border-primary hover:border-primary/90">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RamanSinghAbout; 