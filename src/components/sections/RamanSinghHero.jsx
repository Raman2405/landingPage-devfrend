'use client';

import Image from 'next/image';
import { Button } from '../ui/button';

const RamanSinghHero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hair Salon Background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Professional Hair Styling & Beauty Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Experience luxury hair care and styling services by our expert team of professionals.
            Transform your look with our premium services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white border-2 border-primary hover:border-primary/90">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default RamanSinghHero; 