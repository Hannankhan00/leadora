'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is direct selling and how does it work on your platform?",
      answer: "Direct selling means promoting and selling products directly to customers without a retail store. On our platform, independent sellers can share products with customers, earn commissions, and build their own network of buyers and sellers."
    },
    {
      id: 2,
      question: "How do I join your e-commerce and network marketing system?",
      answer: "You can join by signing up on our website. After registration, you'll get access to our product catalog, marketing tools, and training resources to start your journey in e-commerce and direct selling."
    },
    {
      id: 3,
      question: "Do I need prior experience in sales or marketing?",
      answer: "No experience is required. We provide complete training, digital tools, and mentorship to help you learn step by step. Anyone with dedication and willingness to grow can succeed."
    },
    {
      id: 4,
      question: "How do I earn income through your platform?",
      answer: "You can earn in two ways: By selling products directly to customers, and by building your network team and earning commissions from their sales."
    },
    {
      id: 5,
      question: "Is my personal data safe when I join your website?",
      answer: "Yes. We take your privacy seriously. Your personal and financial information is protected through advanced security systems and will never be shared without your consent."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{backgroundColor: '#0F172B'}}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column - Header */}
          <div className="lg:col-span-4">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Got questions? We've got answers. Here are some of the most common questions we receive.
            </p>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={faq.id} className="group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                    {/* Question */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                    >
                      <h3 className="text-white text-lg font-semibold pr-4 group-hover:text-blue-300 transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <svg
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                            openIndex === index ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
