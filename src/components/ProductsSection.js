'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        
        if (data.products && Array.isArray(data.products)) {
          // Show ALL products from the API
          setProducts(data.products);
        } else {
          throw new Error('Invalid API response format');
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <section className="py-24 relative overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-pink-500 mx-auto mb-4"></div>
            <p className="text-white text-lg">Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 relative overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center">
            <div className="text-red-400 text-6xl mb-4">⚠️</div>
            <p className="text-white text-lg mb-2">Failed to load products</p>
            <p className="text-gray-400 text-sm">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-24 relative overflow-hidden bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Our Premium Products
          </h2>
          <p className="text-center text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
            Discover our high-quality beauty and wellness products designed to deliver exceptional results
          </p>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group h-full">
                <div className="bg-gray-800 rounded-3xl overflow-hidden border border-pink-500/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] h-full flex flex-col group-hover:border-pink-400">
                  {/* Product Image */}
                  <div className="relative h-56 overflow-hidden">
                    {product.image && product.image.startsWith('http') ? (
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-pink-900/50 to-purple-900/50 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-3">📦</div>
                          <p className="text-gray-400 text-sm font-medium">No Image Available</p>
                        </div>
                      </div>
                    )}
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                    
                    {/* Discount Badge */}
                    {product.discount && product.discount !== null && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                          {product.discount}% OFF
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-white text-lg font-bold mb-2 group-hover:text-pink-400 transition-colors duration-300 leading-tight line-clamp-2">
                      {product.title}
                    </h3>
                    
                    {product.description && (
                      <p className="text-gray-300 text-xs leading-relaxed mb-4 flex-1 line-clamp-2">
                        {product.description}
                      </p>
                    )}

                    {/* Price Section */}
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex flex-col">
                          {product.sale_price && product.sale_price !== product.price && product.sale_price !== null ? (
                            <>
                              <span className="text-2xl font-bold text-pink-400 mb-1">
                                {formatPrice(product.sale_price)}
                              </span>
                              <span className="text-xs text-gray-400 line-through">
                                {formatPrice(product.price)}
                              </span>
                            </>
                          ) : (
                            <span className="text-2xl font-bold text-pink-400">
                              {formatPrice(product.price)}
                            </span>
                          )}
                        </div>
                        
                        {/* Rating Stars */}
                        <div className="flex items-center space-x-0.5">
                          {[...Array(5)].map((_, index) => (
                            <svg
                              key={index}
                              className="w-3 h-3 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <a 
                        href="http://leadoraglobal.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 flex items-center justify-center space-x-2 group/btn text-sm"
                      >
                        <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                        </svg>
                        <span>Add to Cart</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <div className="text-gray-400 text-6xl mb-4">📦</div>
            <p className="text-white text-lg mb-2">No products available</p>
            <p className="text-gray-400 text-sm">Check back later for our latest products</p>
          </div>
        )}

      </div>
    </section>
  );
}

