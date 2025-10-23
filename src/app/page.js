import Image from "next/image";
import Header from "../components/Header";
import HeroCarousel from "../components/HeroCarousel";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <Header />
      <HeroCarousel />
      <AboutSection />
      <ProductsSection />
      <HowItWorksSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
