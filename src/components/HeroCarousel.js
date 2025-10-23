'use client';

import { useState, useEffect } from 'react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    // Only run the interval if there are images to slide through
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [images.length]);

  const nextSlide = () => {
    if (images.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    if (images.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Function to get fallback images (unchanged)
  const getFallbackImages = () => {
    return [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop',
        alt: 'Business Success',
        title: 'Business Success',
        description: 'Professional business environment',
        sortOrder: 0,
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
        alt: 'Global Network',
        title: 'Global Network',
        description: 'Worldwide business connections',
        sortOrder: 1,
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop',
        alt: 'Team Collaboration',
        title: 'Team Collaboration',
        description: 'Working together for success',
        sortOrder: 2,
      },
    ];
  };

  // --- START OF UPDATED FUNCTION ---
  // Function to fetch images from API
  const fetchImagesFromAPI = async () => {
    setLoading(true);
    try {
      console.log('Attempting to fetch slider images from API...');
      
      // Use the relative path to your API route.
      // This avoids CORS issues when running on localhost.
      const response = await fetch('/api/slider-images');

      if (!response.ok) {
        throw new Error(`API fetch failed with status: ${response.status}`);
      }

      const apiData = await response.json();

      // Check if API returned data and it's an array
      if (!apiData || !Array.isArray(apiData) || apiData.length === 0) {
        throw new Error('No images received from API');
      }

      // Create formatted images array with the *actual* API data
      const formattedImages = apiData.map((item, index) => ({
        id: item.id,
        url: item.imageUrl, // This matches the structure you had
        alt: item.title || item.description || `Slider Image ${index + 1}`,
        title: item.title,
        description: item.description,
        linkUrl: item.linkUrl,
        sortOrder: item.sortOrder || index,
      }));

      // Sort by sortOrder
      formattedImages.sort((a, b) => a.sortOrder - b.sortOrder);

      setImages(formattedImages);
      console.log('Successfully loaded images from API:', formattedImages);
      console.log('Total images:', formattedImages.length);

    } catch (error) {
      console.error('Error fetching images from API:', error);
      console.log('Using fallback images instead.');
      
      // Use fallback images on any error
      setImages(getFallbackImages());
    } finally {
      setLoading(false);
    }
  };
  // --- END OF UPDATED FUNCTION ---


  // Fetch images on component mount
  useEffect(() => {
    fetchImagesFromAPI();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <section className="relative h-[80vh] overflow-hidden bg-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading images...</div>
      </section>
    );
  }

  // Don't render if no images
  if (images.length === 0) {
    console.log('No images to display, rendering null.');
    return null;
  }

  // Debug: Show current slide info
  // console.log('Current slide:', currentSlide, 'Total slides:', images.length);
  // console.log('Current image:', images[currentSlide]);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={image.id || index} // Use index as fallback key
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#1a1a1a', // Fallback background
              zIndex: index === currentSlide ? 1 : 0,
            }}
          >
            {/* Very light overlay for text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-white">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  LEADORA GLOBAL
                </span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-200">
                Leadora - Your Gateway To Online Success
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 flex items-center gap-3 text-lg hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 group">
                Get Started
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right Side - Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* 3D Globe Logo */}
                <div className="w-64 h-64 lg:w-80 lg:h-80 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full shadow-2xl transform rotate-12">
                    <div className="absolute inset-4 bg-gradient-to-br from-teal-300 to-blue-400 rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-teal-200 to-blue-300 rounded-full flex items-center justify-center">
                        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Curved Arrow */}
                  <div className="absolute -bottom-4 -left-4 w-32 h-32">
                    <svg className="w-full h-full text-teal-400 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
                
                {/* Logo Text */}
                <div className="text-center mt-8">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                    LEADORA
                  </h2>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                    GLOBAL
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Enhanced Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white shadow-lg shadow-white/50' 
                : 'bg-white/50 hover:bg-white/75 hover:scale-110'
            }`}
          />
        ))}
      </div>
    </section>
  );
}