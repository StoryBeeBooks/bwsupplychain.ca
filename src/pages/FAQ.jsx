import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What markets does BW Supply Chain operate in?",
      answer: "We have over 30 years of experience across Canada, the United States, China, Vietnam, Laos, India, Brazil, Argentina, and Chile, connecting these markets through integrated logistics and sourcing strategies."
    },
    {
      question: "How do you handle quality control for Asian manufacturing?",
      answer: "We treat Asian manufacturing as an extension of your operations. Our team handles supplier identification, qualification, and provides in-process oversight with clear standards and feedback loops to ensure quality aligns with North American engineering requirements."
    },
    {
      question: "What is 'China-Origin Logistics' and how does it help?",
      answer: "China-Origin Logistics involves managing warehousing, consolidation, and value-added services (like kitting or labeling) at the source rather than at the destination. This reduces destination warehousing costs, allows for demand-driven shipping, and improves inventory turns."
    },
    {
      question: "Can you help with commodity export from the Americas?",
      answer: "Yes. We support producers by connecting them with verified, non-speculative demand in Asian markets. We structure commercial frameworks that balance risk, quality, and logistics to build repeatable positions in these markets."
    },
    {
      question: "Do you offer cold chain solutions?",
      answer: "Yes, our logistics platform includes full cold chain management capabilities, including temperature control and monitoring for specialized cargo requirements."
    }
  ];

  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600">Common questions about our sourcing and logistics capabilities.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-lg text-gray-900">{question}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div 
        className={`bg-gray-50 px-6 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'}`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
