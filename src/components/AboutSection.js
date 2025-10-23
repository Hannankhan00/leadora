export default function AboutSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{backgroundColor: '#1D293D'}}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            About Leadora Global
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering people through direct selling and quality products.
          </p>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Mission and Features */}
          <div className="space-y-8">
            {/* Our Mission */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                We believe in empowering people through direct selling – a simple and trusted way to connect quality products directly with customers. Our mission is to provide not just products, but also opportunities for individuals to grow, earn, and succeed.
              </p>
            </div>

            {/* Features */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold text-blue-400 mb-8">Features of Leadora Global</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Personalized Customer Service",
                    description: "Get products with one-to-one guidance."
                  },
                  {
                    title: "High-Quality & Affordable Products",
                    description: "Direct from us to you."
                  },
                  {
                    title: "Business with Flexibility",
                    description: "Start part-time or full-time, your choice."
                  },
                  {
                    title: "Low Investment, High Earning Potential",
                    description: "Easy entry, big opportunities."
                  },
                  {
                    title: "Community Support",
                    description: "Training, mentorship, and teamwork to help you grow."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-lg">
                        <span className="font-semibold text-blue-300">{feature.title}</span> – <span className="text-gray-300">{feature.description}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - CEO Profile */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 max-w-sm w-full border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              {/* Profile Image */}
              <div className="flex justify-center mb-8">
                <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-400 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full p-1">
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
              <h4 className="text-3xl font-bold text-white text-center mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Touseef</h4>

              {/* Title */}
              <p className="text-blue-400 font-semibold text-center mb-6 text-lg">CEO & Founder</p>

              {/* Description */}
              <p className="text-gray-300 text-center leading-relaxed text-lg">
                Leading Leadora Global with a vision to empower individuals through direct selling opportunities and quality products.
              </p>
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
