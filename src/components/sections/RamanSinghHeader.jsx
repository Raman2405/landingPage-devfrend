'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const RamanSinghHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80; // Height of the header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-black/30 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Brand Name */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.jpg"
              alt="Raman Singh Hair Salon"
              width={120}
              height={36}
              className="object-contain h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium uppercase tracking-wider transition-colors cursor-pointer ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-primary' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              className={`uppercase tracking-wider font-medium ${
                isScrolled
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-white text-primary hover:bg-gray-100'
              }`}
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-800 hover:text-primary px-4 py-2 uppercase tracking-wider font-medium cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4">
                <Button className="w-full bg-primary text-white hover:bg-primary/90 uppercase tracking-wider font-medium">
                  Book Now
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default RamanSinghHeader; 