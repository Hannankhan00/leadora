'use client';

import { useState, useEffect, useRef } from 'react';

export default function WhyChooseUs() {
  const [counts, setCounts] = useState({
    customers: 0,
    products: 0,
    support: '24/7'
  });
  
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Animate counting when section becomes visible
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      // Animate customers count (0 to 500)
      let customerStep = 0;
      const customerInterval = setInterval(() => {
        customerStep++;
        const progress = customerStep / steps;
        const currentCount = Math.floor(500 * progress);
        setCounts(prev => ({ ...prev, customers: currentCount }));
        
        if (customerStep >= steps) {
          clearInterval(customerInterval);
        }
      }, stepDuration);

      // Animate products count (0 to 50)
      let productStep = 0;
      const productInterval = setInterval(() => {
        productStep++;
        const progress = productStep / steps;
        const currentCount = Math.floor(50 * progress);
        setCounts(prev => ({ ...prev, products: currentCount }));
        
        if (productStep >= steps) {
          clearInterval(productInterval);
        }
      }, stepDuration);

      return () => {
        clearInterval(customerInterval);
        clearInterval(productInterval);
      };
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="text-white py-24 relative overflow-hidden" style={{backgroundColor: '#0F172B'}}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Why Choose Us?
          </h2>
          <p className="text-center text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
            Discover what makes Leadora Global the perfect choice for your success.
          </p>
        </div>
  
        {/* Advantages Cards - 3 per row */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Beauty Products",
                description: "that deliver real results",
                icon: "✨"
              },
              {
                title: "Direct Selling Model",
                description: "with low investment and high potential",
                icon: "💼"
              },
              {
                title: "E-Commerce Platform",
                description: "for easy business growth",
                icon: "🛒"
              },
              {
                title: "Digital Marketing Tools",
                description: "to expand your reach",
                icon: "📈"
              },
              {
                title: "Training & Mentorship",
                description: "for long-term success",
                icon: "🎓"
              },
              {
                title: "Community Support",
                description: "24/7 assistance and guidance",
                icon: "🤝"
              }
            ].map((advantage, index) => (
              <div key={index} className="group h-full">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 h-full min-h-[180px] flex flex-col">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                      {advantage.icon}
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <h4 className="text-white text-lg font-semibold mb-3 group-hover:text-blue-300 transition-colors duration-300">
                        {advantage.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Cards - Single line */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center flex-1">
              <div className="text-3xl font-bold text-blue-400 mb-2 transition-all duration-300">
                {counts.customers}+
              </div>
              <div className="text-gray-300 text-sm">Happy Customers</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center flex-1">
              <div className="text-3xl font-bold text-purple-400 mb-2 transition-all duration-300">
                {counts.products}+
              </div>
              <div className="text-gray-300 text-sm">Premium Products</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center flex-1">
              <div className="text-3xl font-bold text-green-400 mb-2 transition-all duration-300">
                {counts.support}
              </div>
              <div className="text-gray-300 text-sm">Support Available</div>
            </div>
          </div>
        </div>

        {/* Call to Action - Centered below stats */}
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 w-full md:w-auto min-w-[200px]">
            Join Us Today
          </button>
        </div>
      </div>
    </section>
  );
}
  