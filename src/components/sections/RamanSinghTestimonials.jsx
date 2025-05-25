'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

const testimonials = [
  {
    name: 'Jessica Parker',
    role: 'Regular Client',
    image: '/images/testimonials.jpg',
    text: "I've been coming to this salon for years, and I'm always impressed with the quality of service. The stylists are incredibly talented and always know exactly what I want!",
    rating: 5,
  },
  {
    name: 'Robert Chen',
    role: 'New Client',
    image: '/images/testimonials.jpg',
    text: "My first visit was amazing! The team was professional, the atmosphere was relaxing, and I left with the best haircut I've ever had. Will definitely be coming back!",
    rating: 5,
  },
  {
    name: 'Maria Garcia',
    role: 'Regular Client',
    image: '/images/testimonials.jpg',
    text: "The color treatment I received was exactly what I wanted. The stylist took the time to understand my needs and delivered beyond my expectations. Highly recommend!",
    rating: 5,
  },
];

const RamanSinghTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about
            their experience at our salon.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                {/* Client Image */}
                <div className="relative w-24 h-24 mb-6">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl text-gray-600 mb-6">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Client Info */}
                <div>
                  <h4 className="text-lg font-semibold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Leave Review Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Leave a Review
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RamanSinghTestimonials; 