import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ShowcaseSection = ({ id, title, subtitle, children, reversed = false }) => (
  <div id={id} className={`py-24 ${reversed ? 'bg-gray-50' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">{title}</h2>
        {subtitle && <p className="text-xl text-secondary mb-12 italic">{subtitle}</p>}
        <div className="prose prose-lg max-w-none text-gray-600">
            {children}
        </div>
      </div>
    </div>
  </div>
);

const CapabilityList = ({ items }) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mt-8 mb-12">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start">
        <span className="flex-shrink-0 w-2 h-2 mt-2.5 bg-secondary rounded-full mr-4" />
        <span className="leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

const Showcase = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

  return (
    <div className="pt-8">
      <div className="bg-primary py-24 px-4">
         <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our Capabilities</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Decades of cross-border industrial execution, allowing customers to treat Asia-based sourcing as an extension of their own operations.
            </p>
         </div>
      </div>

      <ShowcaseSection 
        id="sourcing"
        title="Product Sourcing & Contract Manufacturing"
        subtitle="Integration from Pilot to Mass Volume"
      >
        <p className="mb-6">
            BW supports customers across the Americas with product sourcing and contract manufacturing in Asia, from single components to fully integrated box-build assemblies. In markets defined by fast product cycles, our programs integrate directly with your local manufacturing.
        </p>

        <h3 className="text-2xl font-serif font-bold text-gray-900 mt-12 mb-6">Core Capabilities</h3>
        <CapabilityList items={[
            "Designing sourcing programs aligning Asian manufacturing with American engineering",
            "Structuring durable cost models and supplier agreements",
            "Coordinating production planning to track real demand",
            "Integrating material flows into local manufacturing schedules",
            "Supplier identification, qualification, and ongoing development",
            "Quality management and in-process oversight"
        ]} />
      </ShowcaseSection>

      <ShowcaseSection 
        id="commodities" 
        title="Commodity Sourcing & Market Access" 
        subtitle="Verified Demand, Executable Paths"
        reversed={true}
      >
        <p className="mb-6">
            Commodity flows are increasingly shaped by policy changes and risk management. We support producers by facilitating opportunities aligned with <strong>verified</strong> demand in Asian markets, not speculative trading.
        </p>
        
        <h3 className="text-2xl font-serif font-bold text-gray-900 mt-12 mb-6">Our Approach</h3>
        <CapabilityList items={[
            "Representing producers to qualified buyers with clear volume requirements",
            "Matching supply with confirmed, rather than speculative, demand",
            "Structuring commercial frameworks balancing risk and pricing",
            "Navigating regulatory and documentation requirements",
            "Improving visibility on volume commitments and logistics",
            "Building repeatable positions in key Asian markets"
        ]} />
      </ShowcaseSection>

      <ShowcaseSection 
        id="logistics" 
        title="China-Origin Logistics" 
        subtitle="Integrated Supply Services"
      >
        <p className="mb-6">
            China remains a critical node in global trade. BW provides comprehensive China-origin logistics that support both import and export flows, giving clients operational flexibility and cost control.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-8 border-l-4 border-secondary">
                <h4 className="font-bold text-lg mb-4 text-primary">Warehousing & Consolidation</h4>
                <p className="text-sm">Large-scale origin warehousing network, ambient/cold chain options, and multi-supplier consolidation to optimize container utilization.</p>
            </div>
            <div className="bg-gray-50 p-8 border-l-4 border-secondary">
                <h4 className="font-bold text-lg mb-4 text-primary">Value-Added Services</h4>
                <p className="text-sm">Labeling, repacking, kitting, and sorting based on downstream requirements before the goods even leave the origin.</p>
            </div>
             <div className="bg-gray-50 p-8 border-l-4 border-secondary">
                <h4 className="font-bold text-lg mb-4 text-primary">International Execution</h4>
                <p className="text-sm">Ocean freight coordination, customs clearance, and exception management for end-to-end visibility.</p>
            </div>
             <div className="bg-gray-50 p-8 border-l-4 border-secondary">
                <h4 className="font-bold text-lg mb-4 text-primary">Demand-Driven Delivery</h4>
                <p className="text-sm">Origin warehousing allows clients to release inventory as sales materialize, reducing destination-side holding costs.</p>
            </div>
        </div>
      </ShowcaseSection>
    </div>
  );
};

export default Showcase;
