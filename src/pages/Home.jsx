import React from 'react';
import { ArrowRight, Globe, TrendingUp, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Section = ({ children, className = "" }) => (
  <section className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-primary text-white h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412574643-35d324698420?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
              Strategic Levers for the <span className="text-secondary italic">Global Economy</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              Supply chains are no longer just back-office functions. We build deeply connected logistics and economic systems that link production capacity, real demand, and trade flows across continents.
            </p>
            <Link to="/showcase" className="inline-flex items-center px-8 py-4 bg-secondary text-white font-medium hover:bg-opacity-90 transition-all duration-300 group">
              Explore Capabilities
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Intro Section */}
      <Section className="text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">
            Experience Across Continents
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            With over 30 years of industrial development experience across Canada, the United States, China, Vietnam, Laos, India, Brazil, Argentina, Chile, and many other markets, BW has built a deeply connected logistics and economic system.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-12" />
        </div>
      </Section>

      {/* Services Preview */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Globe size={40} className="text-secondary" />,
                title: "Product Sourcing & Contract Manufacturing",
                desc: "From single components to integrated box-build assemblies, linking Asian manufacturing with American engineering.",
                link: "/showcase#sourcing"
              },
              {
                icon: <TrendingUp size={40} className="text-secondary" />,
                title: "Commodity Sourcing & Market Access",
                desc: "Structured, transparent paths to market. Connecting producers in the Americas to verified demand in Asia.",
                link: "/showcase#commodities"
              },
              {
                icon: <Truck size={40} className="text-secondary" />,
                title: "China-Origin Logistics",
                desc: "End-to-end logistics programs connecting production sites, warehouses, and ports into a single coordinated system.",
                link: "/showcase#logistics"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-10 shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-transparent hover:border-secondary">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4 h-14">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed h-24">{service.desc}</p>
                <Link to={service.link} className="text-primary font-medium flex items-center hover:text-secondary transition-colors">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy/Approach */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="bg-gray-200 h-[500px] w-full relative overflow-hidden">
             {/* Placeholder for image */}
             <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
                Image: Global Connected System
             </div>
          </div>
          <div>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
               A Connected Economic System
             </h2>
             <p className="text-gray-600 mb-6 leading-relaxed">
               Across product sourcing, commodity market access, and China-origin logistics, BW’s capabilities are rooted in decades of practical experience.
             </p>
             <p className="text-gray-600 mb-6 leading-relaxed">
               We don't just move goods. We align sourcing structures with commercial strategy, use origin-based inventory to lower costs, and translate complex supply chains into manageable programs.
             </p>
             <div className="grid grid-cols-2 gap-6 mt-8">
               <div className="border-l-4 border-secondary pl-4">
                 <h4 className="font-bold text-gray-900 mb-2">Demand-Driven</h4>
                 <p className="text-sm text-gray-600">Inventory moves based on actual demand, not rigid patterns.</p>
               </div>
               <div className="border-l-4 border-secondary pl-4">
                 <h4 className="font-bold text-gray-900 mb-2">Risk Managed</h4>
                 <p className="text-sm text-gray-600">Verification and transparency at every step of the transaction.</p>
               </div>
             </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
