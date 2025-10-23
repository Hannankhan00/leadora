export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            About Leadora Global
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the story behind Leadora Global - where innovation meets opportunity, and every individual has the power to transform their future through direct selling excellence.
          </p>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Mission and Features */}
          <div className="space-y-8">
            {/* Our Mission */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                We believe in empowering people through direct selling – a simple and trusted way to connect quality products directly with customers. Our mission is to provide not just products, but also opportunities for individuals to grow, earn, and succeed in their entrepreneurial journey.
              </p>
            </div>

            {/* Features */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Why Choose Leadora Global</h3>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "Personalized Customer Service",
                    description: "Experience one-to-one guidance and support throughout your journey with our dedicated team.",
                    icon: "👥"
                  },
                  {
                    title: "Premium Quality Products",
                    description: "Access to high-quality, affordable products delivered directly from our trusted suppliers.",
                    icon: "⭐"
                  },
                  {
                    title: "Flexible Business Model",
                    description: "Build your business on your own terms - part-time or full-time, the choice is yours.",
                    icon: "⚡"
                  },
                  {
                    title: "Low Investment, High Returns",
                    description: "Start with minimal investment and unlock unlimited earning potential through our proven system.",
                    icon: "💰"
                  },
                  {
                    title: "Comprehensive Support System",
                    description: "Benefit from training, mentorship, and a supportive community that helps you grow and succeed.",
                    icon: "🤝"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 group p-4 rounded-xl hover:bg-pink-500/10 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl">{feature.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white text-lg mb-2 group-hover:text-pink-400 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - CEO Profile */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-3xl p-10 max-w-sm w-full border border-pink-500/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-600/5"></div>
              
              {/* Profile Image */}
              <div className="flex justify-center mb-8 relative z-10">
                <div className="w-48 h-48 rounded-full overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                        alt="Touseef - CEO & Founder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Name */}
              <h4 className="text-3xl font-bold text-white text-center mb-3 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent relative z-10">Touseef</h4>

              {/* Title */}
              <p className="text-pink-400 font-semibold text-center mb-6 text-lg relative z-10">CEO & Founder</p>

              {/* Description */}
              <p className="text-gray-300 text-center leading-relaxed text-lg relative z-10">
                Leading Leadora Global with a vision to empower individuals through direct selling opportunities and quality products. Committed to creating a platform where success is accessible to everyone.
              </p>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-20"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Chat Button */}
      <button className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/25 transition-all duration-300 z-50 hover:scale-110 group">
        <svg className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    </section>
  );
}
