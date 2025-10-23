export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Leadora transformed our vision into a stunning reality. Their attention to detail and technical expertise is unmatched.",
      name: "John Smith",
      title: "CEO, TechCorp",
      initials: "JS",
      avatarColor: "bg-blue-500"
    },
    {
      id: 2,
      quote: "The team at Leadora delivered beyond our expectations. Professional, creative, and incredibly responsive.",
      name: "Maria Johnson",
      title: "Founder, StartupXYZ",
      initials: "MJ",
      avatarColor: "bg-green-500"
    },
    {
      id: 3,
      quote: "Working with Leadora was a game-changer for our business. They understood our needs and delivered excellence.",
      name: "David Brown",
      title: "CTO, InnovateLab",
      initials: "DB",
      avatarColor: "bg-purple-500"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group">
              <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full flex flex-col">
                {/* Star Rating */}
                <div className="flex justify-center mb-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 flex-1 text-center">
                  "{testimonial.quote}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  {/* Avatar */}
                  <div className={`w-12 h-12 ${testimonial.avatarColor} rounded-full flex items-center justify-center text-white font-semibold text-lg`}>
                    {testimonial.initials}
                  </div>
                  
                  {/* Client Details */}
                  <div className="text-center">
                    <h4 className="text-white font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
