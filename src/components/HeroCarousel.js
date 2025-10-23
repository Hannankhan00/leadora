'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroCarousel() {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const intervalRef = useRef(null);

  // Fetch slides from API
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/slider-images');
        
        if (!response.ok) {
          throw new Error('Failed to fetch slider images');
        }
        
        const data = await response.json();
        
        if (data.success && data.data && Array.isArray(data.data)) {
          setSlides(data.data);
        } else {
          throw new Error('Invalid API response format');
        }
      } catch (err) {
        console.error('Error fetching slides:', err);
        setError(err.message);
        // Fallback slides if API fails
        setSlides([
          {
            id: 1,
            title: "Welcome to Leadora Global",
            description: "Empowering people through direct selling and quality products",
            imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop",
            linkUrl: "#about",
            sortOrder: 0
          },
          {
            id: 2,
            title: "Premium Beauty Products",
            description: "High-quality products that deliver real results",
            imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&h=1080&fit=crop",
            linkUrl: "#products",
            sortOrder: 1
          },
          {
            id: 3,
            title: "Join Our Community",
            description: "Start your journey to financial freedom today",
            imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop",
            linkUrl: "#join",
            sortOrder: 2
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (slides.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slides.length]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
    // Reset auto-advance timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  if (loading) {
    return (
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </section>
    );
  }

  if (error && slides.length === 0) {
    return (
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="text-red-400 text-6xl mb-4">⚠️</div>
          <p className="text-white text-lg mb-2">Failed to load content</p>
          <p className="text-gray-400 text-sm">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="relative h-[80vh] overflow-hidden bg-gray-900">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.imageUrl}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="max-w-4xl">
            <div className="animate-fadeInUp">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-pink-500 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                  LEADORA GLOBAL
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
                Leadora - Your Gateway To Online Success
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="http://leadoraglobal.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25 text-center"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800/80 backdrop-blur-sm border border-pink-500/30 hover:bg-pink-500/20 text-pink-400 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800/80 backdrop-blur-sm border border-pink-500/30 hover:bg-pink-500/20 text-pink-400 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-pink-500 scale-125'
                  : 'bg-pink-300 hover:bg-pink-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
    </section>
  );
}
