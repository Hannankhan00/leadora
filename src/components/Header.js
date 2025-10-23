export default function Header() {
  return (
    <header className="backdrop-blur-md border-b border-pink-500/20 sticky top-0 z-50 bg-gray-900/95">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-white font-bold text-2xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Leadora Global
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-300 hover:text-pink-400 transition-all duration-300 hover:scale-105 relative group scroll-smooth">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="text-gray-300 hover:text-pink-400 transition-all duration-300 hover:scale-105 relative group scroll-smooth">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#products" className="text-gray-300 hover:text-pink-400 transition-all duration-300 hover:scale-105 relative group scroll-smooth">
            Products
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#why-choose" className="text-gray-300 hover:text-pink-400 transition-all duration-300 hover:scale-105 relative group scroll-smooth">
            Why Choose Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#how-it-works" className="text-gray-300 hover:text-pink-400 transition-all duration-300 hover:scale-105 relative group scroll-smooth">
            How it Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-pink-400 transition-all duration-300 hover:scale-105 relative group scroll-smooth">
            Testimonials
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#faq" className="text-gray-300 hover:text-pink-400 transition-all duration-300 hover:scale-105 relative group scroll-smooth">
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Get Started Button */}
        <div className="flex-shrink-0">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25">
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-pink-400 transition-colors duration-200">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
